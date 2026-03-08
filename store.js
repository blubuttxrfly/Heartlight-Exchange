// api/store.js — Heartlight Exchange storage endpoint
// Uses @upstash/redis (replacement for deprecated @vercel/kv)

import { Redis } from '@upstash/redis';

const redis = new Redis({
  url:   process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});

const PREFIX = 'hle_';

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
  const cesPlain     = Buffer.from('MTIzNDU2Nzg5',  'base64').toString();
  const cesEncrypted = '-' + cesPlain.split('').reverse().join('');
  const passphrase   = Buffer.from('aGVhcnRsaWdodA==', 'base64').toString();
  return [{
    cesPlain,
    cesEncrypted,
    name: 'Atlas Morphoenix',
    passphrase,
    registeredAt: new Date().toISOString(),
  }];
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  // ── GET ─────────────────────────────────────────────────────
  if (req.method === 'GET') {
    const { key } = req.query;
    if (!key || !ALLOWED_KEYS.includes(key)) {
      return res.status(400).json({ error: 'Invalid key' });
    }

    let value = await redis.get(PREFIX + key);

    // Seed authorizedCES if absent
    if (key === 'authorizedCES' && (!value || (Array.isArray(value) && value.length === 0))) {
      const defaults = getDefaultStewards();
      await redis.set(PREFIX + 'authorizedCES', JSON.stringify(defaults));
      value = defaults;
    }

    // Upstash auto-deserialises JSON — normalise to raw value
    if (typeof value === 'string') {
      try { value = JSON.parse(value); } catch {}
    }

    return res.status(200).json({ value: value ?? null });
  }

  // ── POST ─────────────────────────────────────────────────────
  if (req.method === 'POST') {
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch { return res.status(400).json({ error: 'Invalid JSON' }); }
    }

    const { key, value } = body || {};
    if (!key || !ALLOWED_KEYS.includes(key)) {
      return res.status(400).json({ error: 'Invalid key' });
    }

    if (value === null || value === undefined) {
      await redis.del(PREFIX + key);
    } else {
      // Store as JSON string for consistent deserialisation
      await redis.set(PREFIX + key, JSON.stringify(value));
    }

    return res.status(200).json({ ok: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
