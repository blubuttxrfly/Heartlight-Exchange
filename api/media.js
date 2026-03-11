const fs = require('fs');
const path = require('path');
const { put, del } = require('@vercel/blob');
const formidableModule = require('formidable');

const formidable = formidableModule.default || formidableModule;
const MAX_UPLOAD_BYTES = Math.floor(4.5 * 1024 * 1024);
const ALLOWED_IMAGE_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);
const ALLOWED_VIDEO_TYPES = new Set(['video/mp4', 'video/webm', 'video/ogg', 'video/quicktime']);
const ALLOWED_MEDIA_TYPES = new Set([...ALLOWED_IMAGE_TYPES, ...ALLOWED_VIDEO_TYPES]);

function sendJson(res, status, payload) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.status(status).json(payload);
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

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    let upload;
    try {
      upload = await parseUpload(req);
    } catch (error) {
      const message = error?.code === 1009
        ? 'Media must be 4.5 MB or smaller for direct upload.'
        : 'Unable to read that media file.';
      sendJson(res, 400, { error: message });
      return;
    }

    const file = upload?.file;
    if (!file || !file.filepath) {
      sendJson(res, 400, { error: 'Select a photo or video to upload.' });
      return;
    }

    const contentType = String(file.mimetype || '').toLowerCase();
    if (!ALLOWED_MEDIA_TYPES.has(contentType)) {
      sendJson(res, 400, { error: 'Only JPG, PNG, WEBP, GIF, MP4, WEBM, OGG, and MOV files are supported.' });
      return;
    }

    const mediaType = inferMediaType(contentType);
    const originalName = slugifyFileName(file.originalFilename || `${mediaType}-${Date.now()}`);
    const extension = path.extname(originalName);
    const pathname = `ces-portfolio/${mediaType}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}${extension || ''}`;

    try {
      const stream = fs.createReadStream(file.filepath);
      const blob = await put(pathname, stream, {
        access: 'public',
        addRandomSuffix: false,
        contentType,
      });
      sendJson(res, 200, {
        ok: true,
        item: {
          type: mediaType,
          url: blob.url,
          storagePath: blob.pathname || pathname,
          fileName: file.originalFilename || originalName,
          contentType,
          fileSize: Number(file.size || 0),
          uploadedAt: new Date().toISOString(),
        },
      });
    } catch (error) {
      sendJson(res, 500, { error: 'Vercel Blob upload failed. Check BLOB_READ_WRITE_TOKEN.' });
    } finally {
      fs.promises.unlink(file.filepath).catch(() => {});
    }
    return;
  }

  if (req.method === 'DELETE') {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (_error) {
        sendJson(res, 400, { error: 'Invalid JSON.' });
        return;
      }
    }
    const urlOrPathname = String(body?.storagePath || body?.url || '').trim();
    if (!urlOrPathname) {
      sendJson(res, 400, { error: 'Missing blob reference.' });
      return;
    }
    try {
      await del(urlOrPathname);
      sendJson(res, 200, { ok: true });
    } catch (_error) {
      sendJson(res, 500, { error: 'Unable to delete uploaded media from Vercel Blob.' });
    }
    return;
  }

  sendJson(res, 405, { error: 'Method not allowed.' });
};
