const http = require('http');
const fs = require('fs');
const path = require('path');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = Number(process.env.PORT || 3000);
const ROOT = __dirname;
const STORE_FILE = path.join(ROOT, '.local-dev-store.json');

const ALLOWED_KEYS = [
  'pending',
  'approved',
  'returned',
  'authorizedCES',
  'securityLog',
  'gateLockout',
  'stewardPass',
];

function getDefaultStewards() {
  const cesPlain = Buffer.from('MTIzNDU2Nzg5', 'base64').toString();
  const cesEncrypted = '-' + cesPlain.split('').reverse().join('');
  const passphrase = Buffer.from('aGVhcnRsaWdodA==', 'base64').toString();
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
  serveStatic(req, res, pathname);
});

server.listen(PORT, HOST, () => {
  console.log(`Heartlight Exchange local dev server: http://${HOST}:${PORT}`);
});
