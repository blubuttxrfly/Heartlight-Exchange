const http = require('http');
const fs = require('fs');
const path = require('path');
const formidableModule = require('formidable');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = Number(process.env.PORT || 3000);
const ROOT = __dirname;
const STORE_FILE = path.join(ROOT, '.local-dev-store.json');
const MEDIA_DIR = path.join(ROOT, '.local-media');
const formidable = formidableModule.default || formidableModule;
const MAX_UPLOAD_BYTES = Math.floor(4.5 * 1024 * 1024);
const ALLOWED_IMAGE_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);
const ALLOWED_VIDEO_TYPES = new Set(['video/mp4', 'video/webm', 'video/ogg', 'video/quicktime']);
const ALLOWED_MEDIA_TYPES = new Set([...ALLOWED_IMAGE_TYPES, ...ALLOWED_VIDEO_TYPES]);

const ALLOWED_KEYS = [
  'pending',
  'approved',
  'returned',
  'connections',
  'authorizedCES',
  'securityLog',
  'gateLockout',
  'stewardPass',
];

function getDefaultStewards() {
  const cesPlain = Buffer.from('MTIzNDU2Nzg5', 'base64').toString();
  const cesEncrypted = '-' + cesPlain.split('').reverse().join('');
  const passphrase = Buffer.from('YXRsYXNnYXRl', 'base64').toString();
  return [{
    cesPlain,
    cesEncrypted,
    name: 'Atlas Morphoenix',
    passphrase,
    registeredAt: new Date().toISOString(),
  }];
}

function readStore() {
  try {
    return JSON.parse(fs.readFileSync(STORE_FILE, 'utf8'));
  } catch (error) {
    return {};
  }
}

function writeStore(store) {
  fs.writeFileSync(STORE_FILE, JSON.stringify(store, null, 2) + '\n', 'utf8');
}

function ensureAuthorizedCES(store) {
  if (!Array.isArray(store.authorizedCES) || store.authorizedCES.length === 0) {
    store.authorizedCES = getDefaultStewards();
    writeStore(store);
  }
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  res.end(JSON.stringify(payload));
}

function handleStore(req, res, pathnameWithQuery) {
  if (req.method === 'OPTIONS') {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    res.end();
    return;
  }

  const url = new URL(pathnameWithQuery, `http://${req.headers.host || `${HOST}:${PORT}`}`);
  const store = readStore();
  ensureAuthorizedCES(store);

  if (req.method === 'GET') {
    const key = url.searchParams.get('key');
    if (!ALLOWED_KEYS.includes(key)) {
      sendJson(res, 400, { error: 'Invalid key' });
      return;
    }
    sendJson(res, 200, { value: store[key] ?? null });
    return;
  }

  if (req.method === 'POST') {
    let raw = '';
    req.on('data', chunk => {
      raw += chunk;
    });
    req.on('end', () => {
      let body;
      try {
        body = raw ? JSON.parse(raw) : {};
      } catch (error) {
        sendJson(res, 400, { error: 'Invalid JSON' });
        return;
      }

      const { key, value } = body || {};
      if (!ALLOWED_KEYS.includes(key)) {
        sendJson(res, 400, { error: 'Invalid key' });
        return;
      }

      if (value === null || value === undefined) {
        delete store[key];
      } else {
        store[key] = value;
      }
      writeStore(store);
      sendJson(res, 200, { ok: true });
    });
    return;
  }

  sendJson(res, 405, { error: 'Method not allowed' });
}

function slugifyFileName(value) {
  return String(value || 'upload')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '') || 'upload';
}

function getSingleFile(files) {
  const file = files?.file;
  return Array.isArray(file) ? file[0] : file;
}

function inferMediaType(mimeType) {
  return String(mimeType || '').startsWith('video/') ? 'video' : 'image';
}

function parseUpload(req) {
  return new Promise((resolve, reject) => {
    const form = formidable({
      multiples: false,
      maxFiles: 1,
      maxFileSize: MAX_UPLOAD_BYTES,
      allowEmptyFiles: false,
    });
    form.parse(req, (error, fields, files) => {
      if (error) {
        reject(error);
        return;
      }
      resolve({ fields, file: getSingleFile(files) });
    });
  });
}

function ensureMediaDir() {
  fs.mkdirSync(MEDIA_DIR, { recursive: true });
}

function handleMedia(req, res) {
  if (req.method === 'OPTIONS') {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    res.end();
    return;
  }

  if (req.method === 'POST') {
    parseUpload(req)
      .then(async ({ file }) => {
        if (!file || !file.filepath) {
          sendJson(res, 400, { error: 'Select a photo or video to upload.' });
          return;
        }

        const contentType = String(file.mimetype || '').toLowerCase();
        if (!ALLOWED_MEDIA_TYPES.has(contentType)) {
          sendJson(res, 400, { error: 'Only JPG, PNG, WEBP, GIF, MP4, WEBM, OGG, and MOV files are supported.' });
          return;
        }

        ensureMediaDir();
        const mediaType = inferMediaType(contentType);
        const originalName = slugifyFileName(file.originalFilename || `${mediaType}-${Date.now()}`);
        const extension = path.extname(originalName);
        const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${extension || ''}`;
        const targetPath = path.join(MEDIA_DIR, filename);
        await fs.promises.copyFile(file.filepath, targetPath);
        await fs.promises.unlink(file.filepath).catch(() => {});
        sendJson(res, 200, {
          ok: true,
          item: {
            type: mediaType,
            url: `/.local-media/${filename}`,
            storagePath: `/.local-media/${filename}`,
            fileName: file.originalFilename || originalName,
            contentType,
            fileSize: Number(file.size || 0),
            uploadedAt: new Date().toISOString(),
          },
        });
      })
      .catch(error => {
        const message = error?.code === 1009
          ? 'Media must be 4.5 MB or smaller for direct upload.'
          : 'Unable to read that media file.';
        sendJson(res, 400, { error: message });
      });
    return;
  }

  if (req.method === 'DELETE') {
    let raw = '';
    req.on('data', chunk => {
      raw += chunk;
    });
    req.on('end', async () => {
      let body;
      try {
        body = raw ? JSON.parse(raw) : {};
      } catch (_error) {
        sendJson(res, 400, { error: 'Invalid JSON' });
        return;
      }
      const storagePath = String(body?.storagePath || body?.url || '').trim();
      if (!storagePath.startsWith('/.local-media/')) {
        sendJson(res, 400, { error: 'Missing local media reference.' });
        return;
      }
      const filePath = path.normalize(path.join(ROOT, storagePath));
      if (!filePath.startsWith(MEDIA_DIR)) {
        sendJson(res, 403, { error: 'Forbidden' });
        return;
      }
      await fs.promises.unlink(filePath).catch(() => {});
      sendJson(res, 200, { ok: true });
    });
    return;
  }

  sendJson(res, 405, { error: 'Method not allowed' });
}

function contentTypeFor(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.html') return 'text/html; charset=utf-8';
  if (ext === '.js') return 'application/javascript; charset=utf-8';
  if (ext === '.json') return 'application/json; charset=utf-8';
  if (ext === '.css') return 'text/css; charset=utf-8';
  if (ext === '.svg') return 'image/svg+xml';
  if (ext === '.png') return 'image/png';
  if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg';
  if (ext === '.webp') return 'image/webp';
  if (ext === '.gif') return 'image/gif';
  if (ext === '.mp4') return 'video/mp4';
  if (ext === '.webm') return 'video/webm';
  if (ext === '.ogg') return 'video/ogg';
  if (ext === '.mov') return 'video/quicktime';
  return 'application/octet-stream';
}

function serveStatic(req, res, pathname) {
  const cleanPath = pathname === '/' ? '/index.html' : pathname;
  const filePath = path.normalize(path.join(ROOT, decodeURIComponent(cleanPath)));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not Found');
      return;
    }
    res.writeHead(200, {
      'Content-Type': contentTypeFor(filePath),
      'Cache-Control': 'no-store',
    });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const pathname = (req.url || '/').split('?')[0];
  if (pathname === '/api/store') {
    handleStore(req, res, req.url || '/api/store');
    return;
  }
  if (pathname === '/api/media') {
    handleMedia(req, res);
    return;
  }
  serveStatic(req, res, pathname);
});

server.listen(PORT, HOST, () => {
  console.log(`Heartlight Exchange local dev server: http://${HOST}:${PORT}`);
});
