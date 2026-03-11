// @ts-nocheck
// ── DATA: SAMPLE CO-CREATORS ──
const RAYS = {
  Red:      { color: '#c94040', label: 'Red Ray',      code: 'Foundation',      num: '2' },
  Orange:   { color: '#d4732a', label: 'Orange Ray',   code: 'Creation',        num: '3' },
  Yellow:   { color: '#d4b830', label: 'Yellow Ray',   code: 'Sovereignty',     num: '4' },
  Green:    { color: '#3a9b6f', label: 'Green Ray',    code: 'Manifestation',   num: '5' },
  Turquoise: { color: '#2ab3c4', label: 'Turquoise Ray', code: 'Expression',  num: '6' },
  Blue:     { color: '#3a6bb5', label: 'Blue Ray',     code: 'Resonance',       num: '6' },
  Indigo:   { color: '#5a4a9e', label: 'Indigo Ray',   code: 'Thriving',        num: '7' },
  Violet:   { color: '#8b4fb5', label: 'Violet Ray',   code: 'Transformutation', num: '8' },
  Magenta:  { color: '#c4407a', label: 'Magenta Ray',  code: 'Unity',           num: '9' },
  Omni:     { color: '#c0c0d8', label: 'Omni Ray',     code: 'Wholeness',       num: '10' },
};

const CREATORS = [
  {
    id: 1,
    emoji: '🌿',
    name: 'Solara Moon',
    pronouns: 'she/her',
    title: 'Frequency Weaver & Sound Alchemist',
    location: 'Pacific Northwest · PST',
    ray: 'Turquoise',
    heartlight: 'I give voice to what the soul already knows. My sound is a bridge between the seen and the sacred.',
    offerings: ['Sound Healing', 'Vocal Activation', 'Guided Ritual', 'Community Circles'],
    exchanges: ['Sliding Scale', 'Trade', 'Gift'],
    seasons: { Winter: true, Spring: true, Summer: false, Fall: true },
    timeline: '1 moon — 1 season',
    numerology: ['Life Path 9', 'Expression 6'],
    accessibility: ['Audio formats', 'Multiple time zones', 'Captioned video'],
    consent: 'Deep emotional content may arise. All sessions held with full reverence and consent.',
    portfolio: 'soundcloud.com/solara',
    season_current: '🌱'
  },
  {
    id: 2,
    emoji: '🐦‍🔥',
    name: 'Kael Riviera',
    pronouns: 'they/them',
    title: 'Sacred Artist & Sigil Dreamer',
    location: 'New Orleans · CST',
    ray: 'Violet',
    heartlight: 'I transmute what is hidden into what is held. My art is ceremony. My ceremony is art.',
    offerings: ['Sacred Illustration', 'Sigil Crafting', 'Oracle Art', 'Altar Objects'],
    exchanges: ['Paid', 'Trade', 'Scholarship'],
    seasons: { Winter: true, Spring: false, Summer: true, Fall: true },
    timeline: '1–2 weeks — 1 moon',
    numerology: ['Life Path 11', 'Master Synthesis'],
    accessibility: ['Digital & physical', 'Text descriptions for all art'],
    consent: 'Physical offerings shipped with care. Sigils created only with clear intention consent.',
    portfolio: 'instagram.com/kaelriviera',
    season_current: '❄️'
  },
  {
    id: 3,
    emoji: '🌱',
    name: 'Dessa Thornwood',
    pronouns: 'she/they',
    title: 'Herbalist & Healing Tea Crafter',
    location: 'Vermont · EST',
    ray: 'Green',
    heartlight: 'Every blend is a love letter from the Earth. I craft nourishment that remembers you whole.',
    offerings: ['Custom Tea Blends', 'Herbal Ritual Kits', 'Plant Spirit Guidance', 'Seasonal Tinctures'],
    exchanges: ['Paid', 'Sliding Scale', 'Trade'],
    seasons: { Winter: true, Spring: true, Summer: true, Fall: true },
    timeline: '1–2 weeks — multi-season',
    numerology: ['Life Path 6', 'Expression 4'],
    accessibility: ['Full ingredient lists', 'Allergen transparency', 'Sensory-friendly pacing'],
    consent: 'Medical herb interactions honored. Clear communication required before creating.',
    portfolio: 'thornwoodbotanicals.com',
    season_current: '🌿'
  },
  {
    id: 4,
    emoji: '🌙',
    name: 'Orynn Celestar',
    pronouns: 'he/him',
    title: 'Astrologer & Natal Chart Reader',
    location: 'UK · GMT',
    ray: 'Indigo',
    heartlight: 'The stars do not predict your future — they reveal your frequency. I translate the language of light.',
    offerings: ['Natal Chart Reading', 'Transit Guidance', 'Ancestral Astrology', 'Written Reports'],
    exchanges: ['Paid', 'Sliding Scale'],
    seasons: { Winter: false, Spring: true, Summer: true, Fall: true },
    timeline: '1–2 weeks',
    numerology: ['Life Path 7', 'Mercury Dominant'],
    accessibility: ['Written and audio', 'Simplified language available'],
    consent: 'Deep ancestral content may surface. Readings offered as guidance, not prescription.',
    portfolio: 'celestablue.com',
    season_current: '🔭'
  },
  {
    id: 5,
    emoji: '🔥',
    name: 'Marisol Fuego',
    pronouns: 'she/her',
    title: 'Movement Ritualist & Dance Shaman',
    location: 'Costa Rica · CST',
    ray: 'Orange',
    heartlight: 'Your body is the most honest temple you have. I help you return to it. Joy lives in the movement.',
    offerings: ['Somatic Ritual Dance', 'Group Ceremony', 'Body Sovereignty Workshops', 'Online Sessions'],
    exchanges: ['Sliding Scale', 'Gift', 'Scholarship'],
    seasons: { Winter: true, Spring: true, Summer: true, Fall: false },
    timeline: '1 season — multi-season',
    numerology: ['Life Path 3', 'Expression 5'],
    accessibility: ['Mobility adaptations', 'Chair-based options', 'Multiple time zones'],
    consent: 'All movement is sovereign. Participants always choose what their body is ready for.',
    portfolio: 'marisolmoves.com',
    season_current: '🌀'
  },
  {
    id: 6,
    emoji: '💎',
    name: 'Vael Stormborn',
    pronouns: 'any/all',
    title: 'Crystal Grid Architect & Frequency Engineer',
    location: 'Sedona, AZ · MST',
    ray: 'Omni',
    heartlight: 'I build with what the Earth remembers. Every grid is a conversation between stone, soul, and sky.',
    offerings: ['Crystal Grid Design', 'Space Clearing', 'Sacred Geometry Layouts', 'Crystal Selection Guidance'],
    exchanges: ['Paid', 'Trade'],
    seasons: { Winter: true, Spring: false, Summer: true, Fall: true },
    timeline: '1 moon',
    numerology: ['Life Path 22', 'Master Builder'],
    accessibility: ['Remote consultations', 'Detailed digital diagrams', 'Video walkthroughs'],
    consent: 'All grids designed for the specific intention of the receiver. No template work.',
    portfolio: 'vaelgrids.com',
    season_current: '✨'
  },
];

let activeRay = 'all';
let searchQuery = '';

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeJsString(value) {
  return String(value ?? '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function normalizeExternalUrl(value) {
  const raw = String(value ?? '').trim();
  if (!raw) return '';
  const prefixed = /^[a-z]+:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    const parsed = new URL(prefixed);
    return /^https?:$/i.test(parsed.protocol) ? parsed.href : '';
  } catch (error) {
    return '';
  }
}

function inferPortfolioType(item = {}) {
  const explicit = String(item.type || '').toLowerCase();
  if (explicit === 'image' || explicit === 'video') return explicit;
  const url = normalizeExternalUrl(item.url || item.src || '');
  const lowered = url.toLowerCase();
  return /\.(mp4|webm|ogg|mov)(\?|#|$)/.test(lowered) ? 'video' : 'image';
}

function normalizePortfolioItems(items = []) {
  if (!Array.isArray(items)) return [];
  return items.map(item => {
    const url = normalizeExternalUrl(item?.url || item?.src || '');
    if (!url) return null;
    return {
      type: inferPortfolioType(item),
      url,
      caption: String(item?.caption || item?.title || '').trim(),
    };
  }).filter(Boolean);
}

function asArray(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (typeof value === 'string' && value.trim()) return [value.trim()];
  return [];
}

const CONTACT_FIELD_CONFIG = [
  { key: 'instagram', label: 'Instagram', icon: '◎' },
  { key: 'email', label: 'Email', icon: '✉' },
  { key: 'phone', label: 'Phone', icon: '☎' },
  { key: 'discord', label: 'Discord', icon: '◈' },
  { key: 'signal', label: 'Signal', icon: '◌' },
  { key: 'whatsapp', label: 'WhatsApp', icon: '◍' },
];
const CONTACT_FIELD_KEYS = CONTACT_FIELD_CONFIG.map(field => field.key);

function createEmptyContactMethods() {
  return {
    instagram: '',
    email: '',
    phone: '',
    discord: '',
    signal: '',
    whatsapp: '',
  };
}

function createEmptyContactVisibility() {
  return {
    instagram: false,
    email: false,
    phone: false,
    discord: false,
    signal: false,
    whatsapp: false,
  };
}

function hasAnyContactMethods(contactMethods = {}) {
  return Object.values(contactMethods || {}).some(value => String(value || '').trim());
}

function normalizeContactVisibility(value, contactMethods = {}, legacyPublicVisibility = false) {
  const base = createEmptyContactVisibility();
  let hasExplicitVisibility = false;

  if (value && typeof value === 'object' && !Array.isArray(value)) {
    CONTACT_FIELD_KEYS.forEach(key => {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        hasExplicitVisibility = true;
        base[key] = !!value[key];
      }
    });
  }

  if (!hasExplicitVisibility && legacyPublicVisibility) {
    CONTACT_FIELD_KEYS.forEach(key => {
      base[key] = !!String(contactMethods[key] || '').trim();
    });
  }

  return base;
}

function guessLegacyContactMethods(legacyValue) {
  const methods = createEmptyContactMethods();
  const text = String(legacyValue || '').trim();
  if (!text) return methods;
  if (/instagram\.com|^@[\w.]+$/i.test(text)) methods.instagram = text;
  else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) methods.email = text;
  else if (/discord/i.test(text) || /#[0-9]{4}$/.test(text)) methods.discord = text.replace(/^discord[:\s-]*/i, '').trim();
  else if (/signal/i.test(text)) methods.signal = text.replace(/^signal[:\s-]*/i, '').trim();
  else if (/whatsapp/i.test(text)) methods.whatsapp = text.replace(/^whatsapp[:\s-]*/i, '').trim();
  else if (/[0-9]{7,}/.test(text)) methods.phone = text;
  return methods;
}

function normalizeContactMethods(value, legacyValue = '') {
  const base = createEmptyContactMethods();
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    Object.keys(base).forEach(key => {
      base[key] = String(value[key] || '').trim();
    });
  }
  if (!hasAnyContactMethods(base) && legacyValue) {
    return guessLegacyContactMethods(legacyValue);
  }
  return base;
}

function sanitizePhoneNumber(value, preservePlus = false) {
  const raw = String(value || '').trim();
  const digits = raw.replace(/\D/g, '');
  if (!digits) return '';
  if (preservePlus && raw.startsWith('+')) return `+${digits}`;
  return digits;
}

function getContactMethodItems(contactMethods = {}) {
  return CONTACT_FIELD_CONFIG.map(field => {
    const raw = String(contactMethods[field.key] || '').trim();
    if (!raw) return null;

    if (field.key === 'instagram') {
      const href = /instagram\.com/i.test(raw)
        ? normalizeExternalUrl(raw)
        : normalizeExternalUrl(`https://instagram.com/${raw.replace(/^@/, '')}`);
      const handle = raw.replace(/^https?:\/\/(www\.)?instagram\.com\//i, '').replace(/\/$/, '').replace(/^@/, '').split('/')[0];
      return {
        ...field,
        display: `@${handle || raw.replace(/^@/, '')}`,
        copyValue: raw,
        actions: href ? [{ label: 'Open', href }] : [],
      };
    }
    if (field.key === 'email') {
      return {
        ...field,
        display: raw,
        copyValue: raw,
        actions: [{ label: 'Email', href: `mailto:${raw}` }],
      };
    }
    if (field.key === 'phone') {
      const tel = sanitizePhoneNumber(raw, true);
      const actions = [];
      if (tel) actions.push({ label: 'Call', href: `tel:${tel}` });
      if (tel) actions.push({ label: 'Message', href: `sms:${tel}` });
      return { ...field, display: raw, copyValue: raw, actions };
    }
    if (field.key === 'signal') {
      const signalNumber = sanitizePhoneNumber(raw, true);
      const href = signalNumber ? `https://signal.me/#p/${encodeURIComponent(signalNumber)}` : '';
      return {
        ...field,
        display: raw,
        copyValue: raw,
        actions: href ? [{ label: 'Open', href }] : [],
      };
    }
    if (field.key === 'whatsapp') {
      const waNumber = sanitizePhoneNumber(raw, false);
      const href = waNumber ? `https://wa.me/${waNumber}` : '';
      return {
        ...field,
        display: raw,
        copyValue: raw,
        actions: href ? [{ label: 'Open', href }] : [],
      };
    }

    return { ...field, display: raw, copyValue: raw, actions: [] };
  }).filter(Boolean);
}

function getPublicContactMethodItems(contactMethods = {}, contactVisibility = {}) {
  const normalizedVisibility = normalizeContactVisibility(contactVisibility, contactMethods);
  return getContactMethodItems(contactMethods).filter(item => normalizedVisibility[item.key]);
}

function getPublicContactVisibilitySummary(contactMethods = {}, contactVisibility = {}) {
  const labels = getPublicContactMethodItems(contactMethods, contactVisibility).map(item => item.label);
  return labels.length ? labels.join(', ') : 'Private until shared through a co-creator connection';
}

function renderContactMethodGrid(contactMethods = {}, options = {}) {
  const items = getContactMethodItems(contactMethods);
  if (!items.length) return options.emptyHtml || '';
  return `<div class="contact-method-grid">${items.map(item => {
    const actionButtons = (item.actions || []).map(action => {
      const anchorAttrs = action.href && /^https?:/i.test(action.href)
        ? ' target="_blank" rel="noreferrer noopener"'
        : '';
      return `<a class="contact-action-btn" href="${escapeHtml(action.href)}"${anchorAttrs}>${escapeHtml(action.label)}</a>`;
    }).join('');
    return `
      <div class="contact-method-card">
        <div class="contact-method-head">
          <div class="contact-method-label">${escapeHtml(item.icon)} ${escapeHtml(item.label)}</div>
          <div class="contact-method-actions">
            ${actionButtons}
            <button type="button" class="contact-action-btn subtle" onclick="copyContactValue('${escapeJsString(item.copyValue)}', '${escapeJsString(item.label)}')">Copy</button>
          </div>
        </div>
        <div class="contact-method-value">${escapeHtml(item.display)}</div>
      </div>
    `;
  }).join('')}</div>`;
}

function renderContactPathChips(contactMethods = {}) {
  const items = getContactMethodItems(contactMethods);
  if (!items.length) return '<span class="preview-chip" style="opacity:0.4;font-style:italic">No public contact channels selected yet</span>';
  return items.map(item => `<span class="contact-path-chip">${escapeHtml(item.label)}</span>`).join('');
}

async function copyContactValue(value, label) {
  const text = String(value || '').trim();
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    alert(`✦ ${label} copied so you can connect swiftly.`);
  } catch (error) {
    alert(`${label}: ${text}`);
  }
}

function getProfileConnectionMatch(profile = {}) {
  return {
    id: String(profile.id || ''),
    cesNumber: String(profile.cesNumber || ''),
  };
}

function matchesConnectionSide(connection = {}, profile = {}, side = 'to') {
  const match = getProfileConnectionMatch(profile);
  const sideId = String(connection[`${side}ProfileId`] || '');
  const sideCES = String(connection[`${side}CES`] || '');
  return (match.id && sideId === match.id) || (match.cesNumber && sideCES === match.cesNumber);
}

function getAllConnections() {
  return getStorage('connections', []);
}

function getIncomingConnections(profile = {}) {
  return getAllConnections().filter(entry => matchesConnectionSide(entry, profile, 'to'));
}

function getOutgoingConnections(profile = {}) {
  return getAllConnections().filter(entry => matchesConnectionSide(entry, profile, 'from'));
}

function formatConnectionTimestamp(value) {
  if (!value) return '';
  try {
    return new Date(value).toLocaleString([], {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  } catch (error) {
    return '';
  }
}

function getSelectedSharedContactMethods() {
  const selectedKeys = CONTACT_FIELD_CONFIG
    .map(field => field.key)
    .filter(key => document.getElementById(`share_contact_${key}`)?.checked);
  const currentUser = normalizeCreatorRecord(getCurrentUser() || {});
  return selectedKeys.reduce((acc, key) => {
    const value = currentUser.contactMethods[key];
    if (value) acc[key] = value;
    return acc;
  }, {});
}

function renderContactShareSelector(contactMethods = {}) {
  const items = getContactMethodItems(contactMethods);
  const selectedMethods = arguments[1] || {};
  if (!items.length) {
    return `<div class="contact-form-note">Add at least one contact path to your own Core Energetic Signature before sharing it in a co-creator connection.</div>`;
  }
  const selectedKeys = Object.keys(selectedMethods).filter(key => !!selectedMethods[key]);
  return `<div class="share-selector-grid">${items.map((item, index) => `
    <div class="share-selector-card">
      <input type="checkbox" id="share_contact_${item.key}" ${selectedKeys.length ? (selectedKeys.includes(item.key) ? 'checked' : '') : (index === 0 ? 'checked' : '')}>
      <label for="share_contact_${item.key}">
        <div class="share-selector-label">
          <span>${escapeHtml(item.label)}</span>
          <span>${index === 0 ? 'Default' : 'Optional'}</span>
        </div>
        <div class="share-selector-value">${escapeHtml(item.display)}</div>
      </label>
    </div>
  `).join('')}</div>`;
}

function renderConnectionRequestCards(items = [], mode = 'incoming') {
  if (!items.length) {
    return `<div class="my-wishes-empty">${mode === 'incoming'
      ? 'No co-creator connections have been shared with your Core Energetic Signature yet.'
      : 'You have not shared any co-creator connection details out from your Core Energetic Signature yet.'}</div>`;
  }
  return `<div class="connection-request-list">${items.map(entry => {
    const title = mode === 'incoming'
      ? `${escapeHtml(entry.fromName || 'A co-creator')} wants to connect`
      : `You shared a connection with ${escapeHtml(entry.toName || 'a co-creator')}`;
    const sub = mode === 'incoming'
      ? [entry.fromRay, entry.fromCES ? `C.E.S. ${entry.fromCES}` : ''].filter(Boolean).join(' · ')
      : [entry.toRay, entry.toCES ? `C.E.S. ${entry.toCES}` : ''].filter(Boolean).join(' · ');
    return `
      <div class="connection-request-card">
        <div class="connection-request-meta">
          <div>
            <div class="connection-request-title">${title}</div>
            <div class="connection-request-sub">${escapeHtml(sub || 'Heartlight Co-Creator')}</div>
          </div>
          <div class="connection-request-time">${escapeHtml(formatConnectionTimestamp(entry.createdAt) || '')}</div>
        </div>
        ${entry.scope ? `<div class="portfolio-link-line" style="margin-bottom:0.45rem">Co-Creation Intent: ${escapeHtml(entry.scope)}</div>` : ''}
        ${entry.replyPreference ? `<div class="portfolio-link-line" style="margin-bottom:0.45rem">Preferred Reply: ${escapeHtml(entry.replyPreference)}</div>` : ''}
        <div class="connection-request-message">${escapeHtml(entry.message || 'A first note was shared without extra text.')}</div>
        <div class="profile-modal-label" style="margin-bottom:0.45rem">${mode === 'incoming' ? 'Shared Contact Paths' : 'Contact Paths You Shared'}</div>
        ${renderContactMethodGrid(entry.sharedContactMethods || {}, {
          emptyHtml: '<div class="contact-form-note">No contact methods were attached to this connection.</div>'
        })}
      </div>
    `;
  }).join('')}</div>`;
}

function renderProfileConnectionsSection(profile = {}) {
  const incoming = getIncomingConnections(profile)
    .sort((a, b) => String(b.createdAt || '').localeCompare(String(a.createdAt || '')));
  const outgoing = getOutgoingConnections(profile)
    .sort((a, b) => String(b.createdAt || '').localeCompare(String(a.createdAt || '')));
  return `
    <div class="profile-modal-section">
      <div class="profile-modal-label">Co-Creator Connections</div>
      <div class="profile-modal-value" style="margin-bottom:0.9rem">Contact details shared from one Core Energetic Signature to another live here privately once another co-creator sends them to you.</div>
      <div class="my-wishes-stats" style="margin-bottom:1rem">
        <div class="my-wishes-stat">
          <div class="my-wishes-stat-label">Incoming</div>
          <div class="my-wishes-stat-value">${incoming.length}</div>
        </div>
        <div class="my-wishes-stat">
          <div class="my-wishes-stat-label">Outgoing</div>
          <div class="my-wishes-stat-value">${outgoing.length}</div>
        </div>
      </div>
      <div class="profile-modal-label" style="margin-bottom:0.45rem">Shared With You</div>
      ${renderConnectionRequestCards(incoming, 'incoming')}
      <div class="profile-modal-label" style="margin:1rem 0 0.45rem">Shared By You</div>
      ${renderConnectionRequestCards(outgoing, 'outgoing')}
    </div>
  `;
}

let activeHeartlightAgreementContext = null;

function buildProfileIdentityLine(profile = {}) {
  return [profile.name, profile.pronouns, profile.location].filter(Boolean).join(' · ');
}

function createEmptyAgreementRole() {
  return { label: '', beings: '' };
}

function getWishAgreementLabel(wish) {
  const portalLabel = getWishPortalShortLabel(wish?.portal);
  const summary = summarizeWish(wish?.letter, 88);
  return portalLabel && portalLabel !== 'Open Portal' ? `${portalLabel} · ${summary}` : summary;
}

function getAgreementWishCandidates(context = {}, draft = {}, currentUser = null) {
  const candidates = [];
  const seen = new Set();
  const allWishes = getStoredWishEntries();
  const addWish = (wish) => {
    if (!wish?.id || seen.has(wish.id)) return;
    seen.add(wish.id);
    candidates.push(wish);
  };
  addWish(context.wishId ? getWishById(context.wishId) : null);
  addWish(draft.sourceWishId ? getWishById(draft.sourceWishId) : null);
  allWishes
    .filter(wish => (draft.wishingProfileId && wish.ownerId === draft.wishingProfileId) ||
      (draft.wishingCES && wish.ownerCes === draft.wishingCES) ||
      (!draft.wishingProfileId && !draft.wishingCES && currentUser?.id && wish.ownerId === currentUser.id) ||
      (!draft.wishingProfileId && !draft.wishingCES && currentUser?.cesNumber && wish.ownerCes === currentUser.cesNumber))
    .forEach(addWish);
  return candidates.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
}

function renderAgreementWishOptions(wishes = [], selectedWishId = '') {
  return [
    '<option value="">Select the wish this agreement is fulfilling...</option>',
    ...wishes.map(wish => `<option value="${escapeHtml(wish.id)}"${wish.id === selectedWishId ? ' selected' : ''}>${escapeHtml(getWishAgreementLabel(wish))}</option>`)
  ].join('');
}

function renderAgreementWishSummary(wish = null, fallbackLabel = '') {
  if (!wish) {
    return `<div class="contact-form-note">${escapeHtml(fallbackLabel || 'Link the originating wish so this agreement stays connected to the reason the exchange exists.')}</div>`;
  }
  const ray = getWishRayMeta(wish.ray);
  return `
    <div class="contact-form-note" style="border-color:${ray.color}44;background:${ray.color}14">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:0.8rem;flex-wrap:wrap">
        <div>
          <div style="font-size:0.68rem;letter-spacing:0.12em;text-transform:uppercase;color:${ray.color};margin-bottom:0.35rem">${escapeHtml(getWishPortalShortLabel(wish.portal))}</div>
          <div style="font-family:'Alice',serif;font-size:1rem;color:var(--cream);margin-bottom:0.25rem">${escapeHtml(fallbackLabel || getWishAgreementLabel(wish))}</div>
        </div>
        <button type="button" class="contact-action-btn subtle" onclick="openLinkedWishFromAgreement('${escapeJsString(wish.id)}')">Open Wish</button>
      </div>
      <div style="font-size:0.82rem;line-height:1.65;color:rgba(240,232,213,0.78);margin-top:0.35rem">${escapeHtml(summarizeWish(wish.letter, 180))}</div>
      ${wish.roles.length ? `<div style="display:flex;flex-wrap:wrap;gap:0.35rem;margin-top:0.7rem">${wish.roles.map(role => `<span class="modal-tag">${escapeHtml(role.label)}</span>`).join('')}</div>` : ''}
    </div>`;
}

function agreementRolesHaveContent() {
  return Array.from(document.querySelectorAll('#agreementRolesList .agreement-role-row')).some(row =>
    Array.from(row.querySelectorAll('input')).some(input => String(input?.value || '').trim()));
}

function setAgreementRolesFromWish(wish) {
  const list = document.getElementById('agreementRolesList');
  if (!list || !wish) return;
  const roles = wish.roles.length
    ? wish.roles.map(role => ({
        label: moveLeadingEmojiToEnd(role.label || ''),
        beings: (Array.isArray(role.beings) ? role.beings : []).filter(Boolean).join(' · '),
      }))
    : [createEmptyAgreementRole()];
  list.innerHTML = roles.map((role, index) => renderAgreementRoleRow(role, roles.length > 1 || index > 0)).join('');
}

function syncAgreementPortalTimelineFields() {
  const startSelect = document.getElementById('agreementPortalStartPhase');
  const endSelect = document.getElementById('agreementPortalEndPhase');
  const hiddenInput = document.getElementById('agreementPortalTimeline');
  const preview = document.getElementById('agreementPortalTimelinePreview');
  if (!startSelect || !endSelect || !hiddenInput || !preview) return;
  const startPhase = AGREEMENT_PORTAL_PHASES.includes(startSelect.value) ? startSelect.value : 'Spring Seed';
  const endPhase = AGREEMENT_PORTAL_PHASES.includes(endSelect.value) ? endSelect.value : 'Fall Harvest';
  if (getAgreementPortalPhaseIndex(endPhase) < getAgreementPortalPhaseIndex(startPhase)) {
    endSelect.value = startPhase;
  }
  const timeline = buildAgreementPortalTimeline(startSelect.value, endSelect.value);
  hiddenInput.value = timeline;
  preview.textContent = timeline;
}

function openLinkedWishFromAgreement(wishId) {
  closeAgreement();
  setTimeout(() => openWishFieldWish(wishId), 80);
}

function syncAgreementWishSelection(selectedWishId = '') {
  const select = document.getElementById('agreementSourceWishSelect');
  const sourceWishIdInput = document.getElementById('agreementSourceWishId');
  const sourceWishNameInput = document.getElementById('agreementSourceWishName');
  const summary = document.getElementById('agreementWishSummary');
  const wishId = selectedWishId || select?.value || '';
  const wish = wishId ? getWishById(wishId) : null;
  const wishLabel = wish ? getWishAgreementLabel(wish) : '';

  if (sourceWishIdInput) sourceWishIdInput.value = wish?.id || '';
  if (sourceWishNameInput) sourceWishNameInput.value = wishLabel;
  if (summary) summary.innerHTML = renderAgreementWishSummary(wish, wishLabel);

  if (wish) {
    const scope = document.getElementById('agreementScope');
    const openingNote = document.getElementById('agreementOpeningNote');
    if (scope && !scope.value.trim() && wish.letter) scope.value = wish.letter.trim();
    if (openingNote && !openingNote.value.trim() && wish.witnessed) openingNote.value = wish.witnessed.trim();
    if (!agreementRolesHaveContent()) setAgreementRolesFromWish(wish);
    if (activeHeartlightAgreementContext) activeHeartlightAgreementContext.wishId = wish.id;
  }
}

function renderProfileAgreementsSection(profile = {}) {
  const agreements = getProfileAgreements(profile);
  return `
    <div class="profile-modal-section">
      <div class="profile-modal-label">Heartlight Exchange Agreements</div>
      <div class="profile-modal-value" style="margin-bottom:0.9rem">These living agreements hold the scope, exchange pathway, seasonal milestones, consent notes, and blessings for your co-creations.</div>
      ${agreements.length ? `<div class="connection-request-list">${agreements.map(agreement => `
        <div class="connection-request-card">
          <div class="connection-request-meta">
            <div>
              <div class="connection-request-title">${escapeHtml(getAgreementCounterparty(agreement, profile))}</div>
              <div class="connection-request-sub">${escapeHtml(agreement.scope || 'Scope still being woven.')} </div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:flex-end;gap:0.4rem">
              ${getAgreementStatusMarkup(agreement)}
              <div class="connection-request-time">${escapeHtml(formatConnectionTimestamp(agreement.updatedAt) || '')}</div>
            </div>
          </div>
          ${agreement.sourceWishName ? `<div class="portfolio-link-line" style="margin-bottom:0.45rem">Originating wish: ${escapeHtml(agreement.sourceWishName)}</div>` : ''}
          <div class="portfolio-link-line" style="margin-bottom:0.45rem">Seasonal milestones: ${escapeHtml([agreement.springMilestone, agreement.summerMilestone, agreement.fallMilestone].filter(Boolean).join(' · ') || 'Still taking form')}</div>
          ${agreement.openingNote ? `<div class="connection-request-message">${escapeHtml(agreement.openingNote)}</div>` : ''}
          ${hasAnyContactMethods(agreement.sharedContactMethods) ? `
            <div class="profile-modal-label" style="margin:0.75rem 0 0.45rem">Shared Contact Paths</div>
            ${renderContactMethodGrid(agreement.sharedContactMethods)}
          ` : ''}
          <div style="margin-top:0.85rem;display:flex;gap:0.5rem;flex-wrap:wrap">
            ${agreement.sourceWishId ? `<button type="button" class="contact-action-btn subtle" onclick="closeProfileModal();setTimeout(()=>openWishFromProfile('${escapeJsString(agreement.sourceWishId)}'),80)">Open Wish</button>` : ''}
            <button type="button" class="contact-action-btn" onclick="closeProfileModal();setTimeout(()=>openSavedHeartlightAgreement('${escapeJsString(agreement.id)}'),80)">Open Agreement</button>
          </div>
        </div>
      `).join('')}</div>` : `<div class="my-wishes-empty">No Heartlight Exchange Agreements have been saved for this Core Energetic Signature yet.</div>`}
    </div>
  `;
}

function getSeasonBadge(seasons = {}) {
  const firstOpen = Object.entries(seasons).find(([, open]) => open);
  return firstOpen ? SEASON_EMOJI[firstOpen[0]] : '✦';
}

function renderPortfolioMedia(item, className = 'portfolio-preview-thumb') {
  const url = normalizeExternalUrl(item?.url || item?.src || '');
  if (!url) return '';
  const type = inferPortfolioType(item);
  if (type === 'video') {
    return `<video class="${className}" src="${escapeHtml(url)}" muted playsinline preload="metadata"></video>`;
  }
  return `<img class="${className}" src="${escapeHtml(url)}" alt="${escapeHtml(item?.caption || 'Portfolio item')}">`;
}

function renderPortfolioGallery(items, options = {}) {
  const normalized = normalizePortfolioItems(items);
  const limited = options.limit ? normalized.slice(0, options.limit) : normalized;
  if (!limited.length) return options.emptyHtml || '';
  const itemClass = options.itemClass || 'portfolio-preview-item';
  const gridClass = options.gridClass || 'portfolio-preview-grid';
  return `<div class="${gridClass}">${limited.map(item => {
    const inner = `
      ${renderPortfolioMedia(item)}
      <span class="portfolio-type-chip">${item.type === 'video' ? 'Video' : 'Photo'}</span>
      ${item.caption ? `<div class="portfolio-preview-caption">${escapeHtml(item.caption)}</div>` : ''}
    `;
    if (options.linkItems) {
      return `<a class="${itemClass}" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer noopener">${inner}</a>`;
    }
    return `<div class="${itemClass}">${inner}</div>`;
  }).join('')}</div>`;
}

function renderPortfolioLinkLine(profile = {}) {
  const url = normalizeExternalUrl(profile.portfolioLink);
  if (!url) return '';
  return `<div class="portfolio-link-line">Portfolio link: <a href="${escapeHtml(url)}" target="_blank" rel="noreferrer noopener">${escapeHtml(profile.portfolioLink)}</a></div>`;
}

// ── GENERATE STARS ──
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 120; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  const size = Math.random() * 2.5 + 0.5;
  const op = Math.random() * 0.6 + 0.1;
  s.style.cssText = `
    left:${Math.random()*100}%;
    top:${Math.random()*100}%;
    width:${size}px;
    height:${size}px;
    --dur:${Math.random()*4+2}s;
    --base-op:${op};
    animation-delay:${Math.random()*5}s;
  `;
  starsContainer.appendChild(s);
}

// ── RENDER DIRECTORY ──
function renderDirectory() {
  const grid = document.getElementById('directoryGrid');
  const filtered = getDirectoryProfiles().filter(c => {
    const matchRay = activeRay === 'all' || c.primaryRayKey === activeRay;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q ||
      c.name.toLowerCase().includes(q) ||
      c.title.toLowerCase().includes(q) ||
      c.offerings.some(o => o.toLowerCase().includes(q)) ||
      c.primaryRay.toLowerCase().includes(q) ||
      c.heartlight.toLowerCase().includes(q) ||
      c.portfolioItems.some(item => item.caption.toLowerCase().includes(q));
    return matchRay && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty-state">No approved Core Energetic Signatures are in this resonance field yet.<br>Offer your Core Energetic Signature to the Exchange or approve one locally to begin testing connections.</div>';
    return;
  }

  grid.innerHTML = filtered.map((c, i) => {
    const ray = RAYS[c.primaryRayKey] || { color: '#c8922a', label: c.primaryRay || 'Ray', code: '' };
    const publicContactItems = getPublicContactMethodItems(c.contactMethods, c.contactVisibility);
    const avatarContent = c.photo
      ? `<img src="${escapeHtml(c.photo)}" alt="${escapeHtml(c.name)}">`
      : escapeHtml(getAvatarLabel(c));
    const portfolioStrip = c.portfolioItems.length
      ? `<div class="directory-portfolio-strip">${c.portfolioItems.slice(0, 3).map(item => `<div class="directory-portfolio-thumb">${renderPortfolioMedia(item, 'portfolio-preview-thumb')}</div>`).join('')}</div>`
      : '';
    return `
    <div class="ces-card fade-up" style="--ray-color:${ray.color};animation-delay:${i*0.07}s" onclick="openModal('${escapeJsString(c.id)}')">
      <div class="ray-bar"></div>
      <div class="card-header">
        <div class="avatar-ring">
          <div class="avatar">${avatarContent}</div>
          <div class="avatar-season">${c.season_current}</div>
        </div>
        <div class="card-identity">
          <div class="card-name">${escapeHtml(c.name)}</div>
          <div class="card-title">${escapeHtml(c.title || 'Co-Creator')}</div>
          <div class="card-location">📍 ${escapeHtml(c.location || 'Location shared upon resonance')}</div>
        </div>
      </div>
      <div class="ray-badge">
        <span style="width:7px;height:7px;border-radius:50%;background:${ray.color};flex-shrink:0;display:inline-block"></span>
        ${escapeHtml(ray.label)} · ${escapeHtml(ray.code || 'Resonance')}
      </div>
      <div style="margin-top:0.7rem">${renderWishAvailabilityBadge(c.wishAvailability)}</div>
      ${c.cesNumber ? `<div style="font-size:0.6rem;letter-spacing:0.12em;color:rgba(200,146,42,0.35);font-family:'Atkinson Hyperlegible',sans-serif;margin-top:0.2rem;padding:0 0.1rem">C.E.S. ${escapeHtml(c.cesNumber)}</div>` : ''}
      <div class="heartlight-statement">"${escapeHtml(c.heartlight)}"</div>
      <div class="offerings">
        ${c.offerings.map(o => `<span class="offering-tag">${escapeHtml(o)}</span>`).join('')}
      </div>
      ${portfolioStrip}
      <div class="exchange-row">
        <div>
          <div class="exchange-label" style="margin-bottom:0.3rem">${publicContactItems.length ? 'Public contact on Directory' : 'Connection privacy'}</div>
          <div class="exchange-styles">${publicContactItems.length
            ? publicContactItems.map(item => `<span class="offering-tag" style="font-size:0.65rem">${escapeHtml(item.label)}</span>`).join('')
            : '<span class="offering-tag" style="font-size:0.65rem">Shared only through C.E.S. connection</span>'}</div>
        </div>
        <button class="view-profile-btn">Open Core Energetic Signature →</button>
      </div>
    </div>`;
  }).join('');
}

// ── OPEN MODAL ──
function openModal(id) {
  const c = getCreatorById(id);
  if (!c) return;
  const ray = RAYS[c.primaryRayKey] || { color: '#c8922a', label: c.primaryRay || 'Ray', code: '' };
  const publicContactItems = getPublicContactMethodItems(c.contactMethods, c.contactVisibility);
  const avatarContent = c.photo
    ? `<img src="${escapeHtml(c.photo)}" alt="${escapeHtml(c.name)}">`
    : escapeHtml(getAvatarLabel(c));

  document.getElementById('modalRayBar').style.background =
    `linear-gradient(90deg, ${ray.color}, transparent)`;

  const seasons = ['Winter','Spring','Summer','Fall'];
  const seasonEmoji = { Winter:'❄️', Spring:'🌱', Summer:'🌞', Fall:'🍂' };
  const portfolioGallery = renderPortfolioGallery(c.portfolioItems, { linkItems: true, gridClass: 'portfolio-gallery-grid' });

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-header">
      <div class="modal-avatar" style="border-color:${ray.color};font-size:2.2rem;background:rgba(15,12,25,0.9);box-shadow:0 0 30px rgba(0,0,0,0.5),0 0 0 6px ${ray.color}18">${avatarContent}</div>
      <div>
        <div class="modal-name">${escapeHtml(c.name)}</div>
        <div class="modal-pronouns">${escapeHtml([c.pronouns, c.location].filter(Boolean).join(' · ') || c.location || c.pronouns || 'Resonant being')}</div>
        <div class="ray-badge" style="--ray-color:${ray.color};border-color:${ray.color};color:${ray.color}">
          <span style="width:7px;height:7px;border-radius:50%;background:${ray.color};display:inline-block"></span>
          ${escapeHtml(ray.label)} · ${escapeHtml(ray.code || 'Resonance')}
        </div>
        <div style="margin-top:0.7rem">${renderWishAvailabilityBadge(c.wishAvailability)}</div>
      </div>
    </div>

    <div class="modal-section">
      <div class="modal-section-label">Heartlight Statement ✦</div>
      <div class="modal-text italic" style="padding-left:1rem;border-left:2px solid ${ray.color}40">"${escapeHtml(c.heartlight)}"</div>
    </div>

    <div class="modal-section">
      <div class="modal-section-label">🌟 Offerings</div>
      <div class="modal-tags">${c.offerings.map(o => `<span class="modal-tag">${escapeHtml(o)}</span>`).join('')}</div>
    </div>

    <div class="modal-section">
      <div class="modal-section-label">🌿 Seasonal Capacity</div>
      <div class="season-grid">
        ${seasons.map(s => `
          <div class="season-item ${c.seasons[s] ? 'open' : 'closed'}">
            <span class="season-emoji">${seasonEmoji[s]}</span>
            <div style="font-size:0.72rem">${s}</div>
            <div style="font-size:0.65rem;margin-top:0.15rem">${c.seasons[s] ? 'Open' : 'Closed'}</div>
          </div>`).join('')}
      </div>
    </div>

    <div class="modal-section">
      <div class="modal-section-label">💱 Exchange Pathways</div>
      <div class="modal-tags">${c.exchanges.map(e => `<span class="modal-tag" style="border-color:${ray.color}60;color:${ray.color}">${escapeHtml(e)}</span>`).join('')}</div>
    </div>

    ${c.numerology.length ? `<div class="modal-section">
      <div class="modal-section-label">🔢 Numerological Resonance</div>
      <div class="numerology-row">${c.numerology.map(n => `<span class="num-chip">${escapeHtml(n)}</span>`).join('')}</div>
    </div>` : ''}

    ${c.accessibility.length ? `<div class="modal-section">
      <div class="modal-section-label">🤍 Accessibility Offerings</div>
      <div class="modal-tags">${c.accessibility.map(a => `<span class="modal-tag">${escapeHtml(a)}</span>`).join('')}</div>
    </div>` : ''}

    ${c.consent ? `<div class="modal-section">
      <div class="modal-section-label">Consent & Boundaries 🌊</div>
      <div class="consent-note">${escapeHtml(c.consent)}</div>
    </div>` : ''}

    ${portfolioGallery ? `<div class="modal-section">
      <div class="modal-section-label">🎞 Portfolio Gallery</div>
      ${portfolioGallery}
    </div>` : ''}

    ${(c.portfolioLink || hasAnyContactMethods(c.contactMethods) || c.contactMethod) ? `<div class="modal-section">
      <div class="modal-section-label">🔗 ${publicContactItems.length ? 'Public Contact On Directory' : 'Connection Privacy'}</div>
      ${renderPortfolioLinkLine(c)}
      ${publicContactItems.length
        ? renderContactMethodGrid(getVisibleContactMethods(c.contactMethods, c.contactVisibility), {
            emptyHtml: '<div class="contact-form-note">No public contact paths are turned on right now.</div>'
          })
        : '<div class="contact-form-note">Preferred contact details stay private until one Core Energetic Signature shares them with another through the co-creator connection flow.</div>'}
    </div>` : ''}

    <button class="connect-btn" style="border-color:${ray.color};color:${ray.color};background:linear-gradient(135deg,${ray.color}18,${ray.color}08)"
      onclick="openAgreement('${escapeJsString(c.id)}')">
        Connect with ${escapeHtml(c.name.split(' ')[0])} ✦
    </button>
  `;

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

function focusWishFieldSection() {
  document.getElementById('wishFieldSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetWishCastSection() {
  const castSection = document.getElementById('wishCastSection');
  if (castSection) castSection.classList.remove('open');
}

function openWishCastSection() {
  const castSection = document.getElementById('wishCastSection');
  if (!castSection) return;
  castSection.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeWishCastSection() {
  const castSection = document.getElementById('wishCastSection');
  if (!castSection) return;
  castSection.classList.remove('open');
  document.body.style.overflow = '';
}

function closeWishCastSectionOutside(event) {
  if (event.target === document.getElementById('wishCastSection')) closeWishCastSection();
}

// ── VIEW SWITCHING (unified) ──
function setView(name, btn) {
  ['directory','submit','wishes','wish','wishfield','codes','charter','privacy','admin'].forEach(v => {
    const el = document.getElementById('view-' + v);
    if (!el) return;
    if (name === 'wish' && v === 'wishfield') {
      el.style.display = 'block';
      return;
    }
    el.style.display = v === name ? 'block' : 'none';
  });
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const jc = document.getElementById('joinCta');
  if (jc) jc.style.display = name === 'directory' ? 'block' : 'none';
  if (name === 'submit') { setTimeout(initCESForm, 50); }
  if (name === 'wish')   { setTimeout(() => { resetWishCastSection(); buildWishForm(); renderWishField(); setTimeout(focusWishFieldSection, 40); }, 50); }
  if (name !== 'wish')   { resetWishCastSection(); }
  if (name === 'wishes') { setTimeout(renderMyWishes, 50); }
  if (name === 'charter') { setTimeout(renderCharterCodesAccordion, 50); }
  if (name === 'codes')  { setTimeout(buildCodesGrid, 50); }
}

// ── RAY FILTER ──
function setRayFilter(ray, el) {
  activeRay = ray;
  document.querySelectorAll('.ray-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  renderDirectory();
}

// ── SEARCH ──
function filterCreators() {
  searchQuery = document.getElementById('searchInput').value;
  renderDirectory();
}

// ── PHOTO UPLOAD ──
let photoDataUrl = null;

function handlePhotoUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    photoDataUrl = ev.target.result;
    const img = document.getElementById('photoPreviewImg');
    const placeholder = document.getElementById('photoPlaceholder');
    const nameEl = document.getElementById('photoName');
    if (img) { img.src = photoDataUrl; img.style.display = 'block'; }
    if (placeholder) placeholder.style.display = 'none';
    if (nameEl) nameEl.textContent = '✓ ' + file.name;
    updatePreview();
  };
  reader.readAsDataURL(file);
}

// ── CONNECTION MODAL ──
function openAgreement(creatorId) {
  const c = getCreatorById(creatorId);
  if (!c) return;
  const currentUser = getCurrentUser() ? normalizeCreatorRecord(getCurrentUser()) : null;

  if (!currentUser) {
    document.getElementById('agreementContent').innerHTML = `
      <div style="padding-top:0.5rem">
        <div style="font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--orichalcum);opacity:0.8;margin-bottom:0.4rem">C.E.S. Sign-In Required ✦</div>
        <div style="font-family:'Alice',serif;font-size:1.5rem;color:var(--cream);margin-bottom:0.25rem">Connect with ${escapeHtml(c.name.split(' ')[0])}</div>
        <div class="contact-form-note" style="margin-bottom:1rem">Preferred contact details are only shared between signed-in Core Energetic Signatures. Sign into your signature first, then choose which channels you want to share in the connection.</div>
        <div style="display:flex;gap:0.6rem;flex-wrap:wrap">
          <button class="contact-action-btn" type="button" onclick="closeAgreement();openSignIn()">Sign In</button>
          <button class="contact-action-btn subtle" type="button" onclick="closeAgreement();setView('submit', document.getElementById('navBtnSubmit'))">Open Core Energetic Signature</button>
        </div>
      </div>
    `;
    document.getElementById('agreementOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    return;
  }

  if ((currentUser.id && c.id === currentUser.id) || (currentUser.cesNumber && c.cesNumber && currentUser.cesNumber === c.cesNumber)) {
    document.getElementById('agreementContent').innerHTML = `
      <div style="padding-top:0.5rem">
        <div style="font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--orichalcum);opacity:0.8;margin-bottom:0.4rem">Your Core Energetic Signature ✦</div>
        <div style="font-family:'Alice',serif;font-size:1.5rem;color:var(--cream);margin-bottom:0.25rem">${escapeHtml(currentUser.name || 'Your Core Energetic Signature')}</div>
        <div class="contact-form-note">Private contact sharing happens when one co-creator reaches another. Open your Core Energetic Signature if you want to edit which channels are available to share.</div>
      </div>
    `;
    document.getElementById('agreementOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    return;
  }
  openHeartlightAgreementEditor({ mode: 'directory', creatorId });
}

function closeAgreement() {
  document.getElementById('agreementOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function closeAgreementOutside(e) {
  if (e.target === document.getElementById('agreementOverlay')) closeAgreement();
}
function renderAgreementRoleRow(role = createEmptyAgreementRole(), removable = true) {
  return `
    <div class="agreement-role-row" style="position:relative">
      <input class="agreement-field-value" type="text" placeholder="Role name (e.g. Sound Weaver, Visual Artist…)" value="${escapeHtml(role.label || '')}" style="margin-bottom:0.4rem">
      <input class="agreement-field-value" type="text" placeholder="Co-Creator(s) in this role — name / pronouns / time zone" value="${escapeHtml(role.beings || '')}">
      ${removable ? `<button type="button" onclick="removeAgreementRole(this)" style="position:absolute;top:0.3rem;right:0.3rem;background:none;border:none;color:rgba(240,232,213,0.3);cursor:pointer;font-size:0.75rem" onmouseover="this.style.color='rgba(240,232,213,0.7)'" onmouseout="this.style.color='rgba(240,232,213,0.3)'">✕</button>` : ''}
    </div>
  `;
}

function removeAgreementRole(button) {
  const row = button?.closest('.agreement-role-row');
  if (row) row.remove();
}

function collectAgreementRoles() {
  return Array.from(document.querySelectorAll('#agreementRolesList .agreement-role-row')).map(row => {
    const inputs = row.querySelectorAll('input');
    return {
      label: String(inputs[0]?.value || '').trim(),
      beings: String(inputs[1]?.value || '').trim(),
    };
  }).filter(role => role.label || role.beings);
}

function createAgreementDraft(context = {}) {
  if (context.agreementId) {
    const existing = getAgreementById(context.agreementId);
    if (existing) return existing;
  }
  const currentUser = getCurrentUser() ? normalizeCreatorRecord(getCurrentUser()) : null;
  const creator = context.creatorId ? getCreatorById(context.creatorId) : null;
  const wish = context.wishId ? getWishById(context.wishId) : null;
  const currentIdentity = currentUser ? buildProfileIdentityLine(currentUser) : '';
  const creatorIdentity = creator ? buildProfileIdentityLine(creator) : '';

  if (context.mode === 'wish' && wish && currentUser) {
    const defaultRole = wish.roles.length ? wish.roles[0].label : '';
    return normalizeAgreementRecord({
      sourceType: 'wish',
      sourceWishId: wish.id,
      sourceWishName: getWishAgreementLabel(wish),
      wishingProfileId: wish.ownerId || '',
      wishingCES: wish.ownerCes || '',
      wishingName: wish.name || '',
      coCreatorProfileId: currentUser.id || '',
      coCreatorCES: currentUser.cesNumber || '',
      coCreatorName: currentIdentity,
      roles: [{ label: defaultRole, beings: currentIdentity }],
      scope: wish.letter || '',
    });
  }

  if (context.mode === 'directory' && currentUser && creator) {
    return normalizeAgreementRecord({
      sourceType: 'directory',
      wishingProfileId: currentUser.id || '',
      wishingCES: currentUser.cesNumber || '',
      wishingName: currentIdentity,
      coCreatorProfileId: creator.id || '',
      coCreatorCES: creator.cesNumber || '',
      coCreatorName: creatorIdentity,
      roles: [{ label: '', beings: creatorIdentity }],
    });
  }

  return normalizeAgreementRecord({
    sourceType: context.mode || 'template',
    wishingProfileId: currentUser?.id || '',
    wishingCES: currentUser?.cesNumber || '',
    wishingName: currentIdentity,
  });
}

function renderAgreementSelectOptions(options = [], selected = '') {
  return options.map(option => `<option value="${escapeHtml(option)}"${selected === option ? ' selected' : ''}>${escapeHtml(option)}</option>`).join('');
}

function openHeartlightAgreementEditor(context = {}) {
  const draft = createAgreementDraft(context);
  const currentUser = getCurrentUser() ? normalizeCreatorRecord(getCurrentUser()) : null;
  const creator = context.creatorId ? getCreatorById(context.creatorId) : null;
  const wish = context.wishId ? getWishById(context.wishId) : null;
  const linkedWish = draft.sourceWishId ? getWishById(draft.sourceWishId) : wish;
  const wishOptions = getAgreementWishCandidates(context, draft, currentUser);
  const rayColor = linkedWish ? getWishRayMeta(linkedWish.ray).color : ((creator && RAYS[creator.primaryRayKey]?.color) || '#c8922a');
  activeHeartlightAgreementContext = { ...context, agreementId: draft.id };

  document.getElementById('agreementRayBar').style.background = `linear-gradient(90deg, ${rayColor}, #3a9b6f, transparent)`;
  document.getElementById('agreementContent').innerHTML = `
    <div class="agreement-title">Heartlight Exchange Agreement 📜</div>
    <div class="agreement-subtitle">A living vow that carries the seasonal co-creation structure through scope, exchange pathway, seasonal milestones, consent, and blessings.</div>

    <div class="agreement-field-group">
      <label class="agreement-field-label">Originating Wish</label>
      ${wishOptions.length ? `
        <select class="agreement-field-value" id="agreementSourceWishSelect" onchange="syncAgreementWishSelection(this.value)" style="background:rgba(15,12,25,0.9)">${renderAgreementWishOptions(wishOptions, draft.sourceWishId || '')}</select>
      ` : `
        <input class="agreement-field-value" type="text" value="${escapeHtml(draft.sourceWishName || 'No linked wish selected yet.')}" readonly>
      `}
      <input type="hidden" id="agreementSourceWishId" value="${escapeHtml(draft.sourceWishId || '')}">
      <input type="hidden" id="agreementSourceWishName" value="${escapeHtml(draft.sourceWishName || '')}">
      <div id="agreementWishSummary" style="margin-top:0.7rem">${renderAgreementWishSummary(linkedWish, draft.sourceWishName)}</div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem">
      <div class="agreement-field-group">
        <label class="agreement-field-label">Wishing Being</label>
        <input class="agreement-field-value" type="text" id="agreementWishingBeing" value="${escapeHtml(draft.wishingName)}" placeholder="Name / pronouns / time zone">
      </div>
      <div class="agreement-field-group">
        <label class="agreement-field-label">Heartlight Co-Creator</label>
        <input class="agreement-field-value" type="text" id="agreementCoCreator" value="${escapeHtml(draft.coCreatorName)}" placeholder="Name / pronouns / time zone">
      </div>
    </div>

    <div class="agreement-field-group">
      <label class="agreement-field-label">Opening Note Into The Field</label>
      <textarea class="agreement-field-value italic-val" id="agreementOpeningNote" rows="3" placeholder="Share the first note, intention, or resonance that brought this agreement into being.">${escapeHtml(draft.openingNote)}</textarea>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.4rem">
      <div>
        <label class="agreement-field-label">Preferred Reply Channel</label>
        <input class="agreement-field-value" type="text" id="agreementReplyPreference" value="${escapeHtml(draft.replyPreference)}" placeholder="Email, Instagram, Discord, Signal…">
      </div>
      <div>
        <label class="agreement-field-label">Agreement Status</label>
        <div style="padding-top:0.35rem">${getAgreementStatusMarkup(draft)}</div>
      </div>
    </div>

    ${currentUser ? `<div class="agreement-field-group">
      <label class="agreement-field-label">Shared Contact Paths</label>
      ${renderContactShareSelector(currentUser.contactMethods, draft.sharedContactMethods)}
    </div>` : ''}

    <div class="agreement-field-group">
      <label class="agreement-field-label" style="display:block;margin-bottom:0.6rem">Co-Creator Roles in This Exchange</label>
      <div style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:0.84rem;color:rgba(240,232,213,0.55);margin-bottom:0.8rem">The wishing being defines the roles. Each role may hold one or many Co-Creator beings.</div>
      <div id="agreementRolesList" style="display:grid;gap:0.65rem">${draft.roles.map((role, index) => renderAgreementRoleRow(role, draft.roles.length > 1 || index > 0)).join('')}</div>
      <button type="button" onclick="addAgreementRole()" style="margin-top:0.65rem;padding:0.4rem 0.9rem;border-radius:2rem;border:1px dashed rgba(200,146,42,0.35);background:transparent;color:rgba(200,146,42,0.7);font-size:0.72rem;cursor:pointer;letter-spacing:0.06em;text-transform:uppercase;font-family:'Atkinson Hyperlegible',sans-serif;transition:all 0.2s" onmouseover="this.style.borderColor='var(--orichalcum)';this.style.color='var(--orichalcum)'" onmouseout="this.style.borderColor='rgba(200,146,42,0.35)';this.style.color='rgba(200,146,42,0.7)'">+ Add Another Role</button>
    </div>

    <div class="agreement-field-group">
      <label class="agreement-field-label">Portal Timeline</label>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem">
        <div>
          <label class="agreement-field-label" style="margin-bottom:0.35rem">Starting Phase</label>
          <select class="agreement-field-value" id="agreementPortalStartPhase" onchange="syncAgreementPortalTimelineFields()" style="background:rgba(15,12,25,0.9)">${renderAgreementPortalPhaseOptions(draft.portalStartPhase)}</select>
        </div>
        <div>
          <label class="agreement-field-label" style="margin-bottom:0.35rem">Completion Phase</label>
          <select class="agreement-field-value" id="agreementPortalEndPhase" onchange="syncAgreementPortalTimelineFields()" style="background:rgba(15,12,25,0.9)">${renderAgreementPortalPhaseOptions(draft.portalEndPhase)}</select>
        </div>
      </div>
      <input type="hidden" id="agreementPortalTimeline" value="${escapeHtml(draft.portalTimeline)}">
      <div class="contact-form-note" style="margin-top:0.7rem" id="agreementPortalTimelinePreview">${escapeHtml(draft.portalTimeline)}</div>
    </div>

    <div class="agreement-field-group">
      <label class="agreement-field-label">Scope — What Is Being Co-Created</label>
      <textarea class="agreement-field-value italic-val" id="agreementScope" rows="3" placeholder="Describe in resonant, clear language what will be created together…">${escapeHtml(draft.scope)}</textarea>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.4rem">
      <div>
        <label class="agreement-field-label">Format</label>
        <select class="agreement-field-value" id="agreementFormat" style="background:rgba(15,12,25,0.9)">${renderAgreementSelectOptions(['Digital', 'Physical', 'Both digital & physical'], draft.format)}</select>
      </div>
      <div>
        <label class="agreement-field-label">Exchange Pathway</label>
        <select class="agreement-field-value" id="agreementExchangePathway" style="background:rgba(15,12,25,0.9)">${renderAgreementSelectOptions(['Currency (fixed price)', 'Currency (sliding scale)', 'Value exchange (trade / skill swap)', 'Gift exchange', 'Scholarship exchange'], draft.exchangePathway)}</select>
      </div>
    </div>

    <div style="font-family:'Alice',serif;font-size:0.9rem;color:var(--orichalcum-pale);margin-bottom:0.8rem">🌱🌞🍂 Sacred Milestones</div>
    <div class="milestone-grid">
      <div class="milestone-card">
        <div class="milestone-season">🌱</div>
        <div class="milestone-label">Spring Seed</div>
        <div class="milestone-sublabel">What begins here</div>
        <textarea class="agreement-field-value italic-val" id="agreementSpringMilestone" rows="3" placeholder="First draft, sketch, session arc, prototype…" style="font-size:0.82rem">${escapeHtml(draft.springMilestone)}</textarea>
      </div>
      <div class="milestone-card">
        <div class="milestone-season">🌞</div>
        <div class="milestone-label">Summer Bloom</div>
        <div class="milestone-sublabel">What takes form</div>
        <textarea class="agreement-field-value italic-val" id="agreementSummerMilestone" rows="3" placeholder="Refinement, recording, crafting, shaping…" style="font-size:0.82rem">${escapeHtml(draft.summerMilestone)}</textarea>
      </div>
      <div class="milestone-card">
        <div class="milestone-season">🍂</div>
        <div class="milestone-label">Fall Harvest</div>
        <div class="milestone-sublabel">What is delivered</div>
        <textarea class="agreement-field-value italic-val" id="agreementFallMilestone" rows="3" placeholder="Final offering, delivery, exchange completion…" style="font-size:0.82rem">${escapeHtml(draft.fallMilestone)}</textarea>
      </div>
    </div>

    <div class="adaptability-note">
      🌀 <strong>Adaptability Clause (Heartlight-Led Growth):</strong> This agreement honors organic unfolding. Either being may propose adjustments to scope, timeline, or form as the co-creation grows — always through open communication, mutual resonance, and the spirit of the Heartlight Exchange Charter.
    </div>

    <div class="agreement-field-group">
      <label class="agreement-field-label">Boundaries & Consent Notes</label>
      <textarea class="agreement-field-value" id="agreementBoundaries" rows="2" placeholder="Any boundaries, consent agreements, or care notes for this co-creation…">${escapeHtml(draft.boundaries)}</textarea>
    </div>

    <div class="agreement-field-group">
      <label class="agreement-field-label">🌸 Closing Blessing — Co-Creator</label>
      <textarea class="blessing-field" id="agreementCoCreatorBlessing" rows="2" placeholder="Speak a closing blessing for this co-creation from your heart…">${escapeHtml(draft.coCreatorBlessing)}</textarea>
    </div>

    <div class="agreement-field-group">
      <label class="agreement-field-label">🌸 Closing Blessing — Receiver</label>
      <textarea class="blessing-field" id="agreementReceiverBlessing" rows="2" placeholder="And your blessing in return…">${escapeHtml(draft.receiverBlessing)}</textarea>
    </div>

    <div style="padding:0.9rem 1.1rem;border-radius:0.6rem;background:rgba(58,155,111,0.05);border:1px solid rgba(58,155,111,0.18);margin-bottom:1.2rem">
      <div style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:0.88rem;color:rgba(240,232,213,0.7);line-height:1.65">
        💎 <strong>The Codes of Heartlight govern this agreement:</strong> Consent and sovereignty · Kindness and dignity · Cultural respect · Sustainability · Accessibility · Clear communication · Joy, integrity, and sacred play.
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.7rem">
      <button type="button" class="sign-agreement-btn" style="margin-top:0" onclick="saveHeartlightAgreement(false)">Save Draft</button>
      <button type="button" class="sign-agreement-btn" style="margin-top:0" onclick="saveHeartlightAgreement(true)">Save & Sign With Intention</button>
    </div>
    <div class="contact-form-note" id="agreementSaveNote" style="display:none;margin-top:1rem"></div>
  `;

  syncAgreementPortalTimelineFields();
  syncAgreementWishSelection(draft.sourceWishId || '');
  document.getElementById('agreementOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openHeartlightAgreementTemplate() {
  openHeartlightAgreementEditor({ mode: 'template' });
}

function openSavedHeartlightAgreement(agreementId) {
  openHeartlightAgreementEditor({ mode: 'saved', agreementId });
}

function addAgreementRole(label = '', beings = '') {
  const list = document.getElementById('agreementRolesList');
  if (!list) return;
  list.insertAdjacentHTML('beforeend', renderAgreementRoleRow({ label, beings }, true));
}

function syncAgreementToConnections(agreement, currentUser) {
  if (!currentUser || !agreement || !['directory', 'wish'].includes(agreement.sourceType)) return;
  const existingConnections = getStorage('connections', []);
  const currentMatchesWishing = (currentUser.id && agreement.wishingProfileId === currentUser.id) || (currentUser.cesNumber && agreement.wishingCES === currentUser.cesNumber);
  const otherProfileId = currentMatchesWishing ? agreement.coCreatorProfileId : agreement.wishingProfileId;
  const otherCES = currentMatchesWishing ? agreement.coCreatorCES : agreement.wishingCES;
  const otherName = currentMatchesWishing ? agreement.coCreatorName : agreement.wishingName;
  if (!otherProfileId && !otherCES && !otherName) return;
  const matchIndex = existingConnections.findIndex(entry => entry.sourceAgreementId === agreement.id);
  const nextEntry = {
    id: matchIndex >= 0 ? existingConnections[matchIndex].id : `connection_${Date.now()}`,
    sourceAgreementId: agreement.id,
    createdAt: matchIndex >= 0 ? existingConnections[matchIndex].createdAt : agreement.createdAt,
    updatedAt: agreement.updatedAt,
    fromProfileId: currentUser.id || '',
    fromCES: currentUser.cesNumber || '',
    fromName: currentUser.name || '',
    fromRay: currentUser.primaryRay || '',
    toProfileId: otherProfileId || '',
    toCES: otherCES || '',
    toName: otherName || '',
    toRay: agreement.sourceType === 'directory' ? (getCreatorById(otherProfileId)?.primaryRay || '') : '',
    scope: agreement.scope,
    replyPreference: agreement.replyPreference,
    message: agreement.openingNote,
    sharedContactMethods: agreement.sharedContactMethods,
  };
  if (matchIndex >= 0) existingConnections[matchIndex] = nextEntry;
  else existingConnections.push(nextEntry);
  setStorage('connections', existingConnections);
}

function saveHeartlightAgreement(signWithIntention = false) {
  const currentUser = getCurrentUser() ? normalizeCreatorRecord(getCurrentUser()) : null;
  const existing = activeHeartlightAgreementContext?.agreementId ? getAgreementById(activeHeartlightAgreementContext.agreementId) : null;
  const wishingName = document.getElementById('agreementWishingBeing')?.value?.trim();
  const coCreatorName = document.getElementById('agreementCoCreator')?.value?.trim();
  const scope = document.getElementById('agreementScope')?.value?.trim();
  const linkedWishId = document.getElementById('agreementSourceWishId')?.value?.trim() || '';
  const linkedWish = linkedWishId ? getWishById(linkedWishId) : null;
  const portalStartPhase = document.getElementById('agreementPortalStartPhase')?.value || existing?.portalStartPhase || 'Spring Seed';
  const portalEndPhase = document.getElementById('agreementPortalEndPhase')?.value || existing?.portalEndPhase || 'Fall Harvest';
  const portalTimeline = buildAgreementPortalTimeline(portalStartPhase, portalEndPhase);
  const noteEl = document.getElementById('agreementSaveNote');
  if (!wishingName || !coCreatorName || !scope) {
    alert('✦ Please complete the wishing being, Heartlight Co-Creator, and scope before saving the agreement.');
    return;
  }
  const now = new Date().toISOString();
  const status = signWithIntention || existing?.status === 'signed' ? 'signed' : 'draft';
  const draft = createAgreementDraft(activeHeartlightAgreementContext || {});
  const agreement = normalizeAgreementRecord({
    ...draft,
    ...existing,
    id: existing?.id || draft.id,
    status,
    sourceType: draft.sourceType,
    sourceWishId: linkedWish?.id || draft.sourceWishId || null,
    sourceWishName: linkedWish ? getWishAgreementLabel(linkedWish) : (document.getElementById('agreementSourceWishName')?.value?.trim() || draft.sourceWishName),
    wishingName,
    coCreatorName,
    roles: collectAgreementRoles(),
    portalStartPhase,
    portalEndPhase,
    portalTimeline,
    scope,
    format: document.getElementById('agreementFormat')?.value || '',
    exchangePathway: document.getElementById('agreementExchangePathway')?.value || '',
    springMilestone: document.getElementById('agreementSpringMilestone')?.value || '',
    summerMilestone: document.getElementById('agreementSummerMilestone')?.value || '',
    fallMilestone: document.getElementById('agreementFallMilestone')?.value || '',
    openingNote: document.getElementById('agreementOpeningNote')?.value || '',
    replyPreference: document.getElementById('agreementReplyPreference')?.value || '',
    boundaries: document.getElementById('agreementBoundaries')?.value || '',
    coCreatorBlessing: document.getElementById('agreementCoCreatorBlessing')?.value || '',
    receiverBlessing: document.getElementById('agreementReceiverBlessing')?.value || '',
    sharedContactMethods: currentUser ? getSelectedSharedContactMethods() : (existing?.sharedContactMethods || {}),
    createdAt: existing?.createdAt || now,
    updatedAt: now,
    signedAt: status === 'signed' ? (existing?.signedAt || now) : null,
  });

  const agreements = getStorage(AGREEMENT_STORAGE_KEY, []);
  const index = agreements.findIndex(entry => entry.id === agreement.id);
  if (index >= 0) agreements[index] = agreement;
  else agreements.unshift(agreement);
  setStorage(AGREEMENT_STORAGE_KEY, agreements);
  syncAgreementToConnections(agreement, currentUser);

  if (noteEl) {
    noteEl.style.display = 'block';
    noteEl.textContent = status === 'signed'
      ? 'This Heartlight Exchange Agreement has been saved and signed with intention.'
      : 'This Heartlight Exchange Agreement has been saved as a draft.';
  }

  if (typeof openProfileModal === 'function' && document.getElementById('profileModalOverlay')?.classList.contains('open')) {
    openProfileModal();
  }
}

function submitAgreement() {
  saveHeartlightAgreement(true);
}


const ALL_RAYS = [
  { key:'Red',       color:'#c94040', label:'Red',       code:'Foundation',      emoji:'🔴' },
  { key:'Orange',    color:'#d4732a', label:'Orange',    code:'Creation',         emoji:'🟠' },
  { key:'Yellow',    color:'#d4b830', label:'Yellow',    code:'Sovereignty',      emoji:'🟡' },
  { key:'Green',     color:'#3a9b6f', label:'Green',     code:'Manifestation',    emoji:'🟢' },
  { key:'Turquoise', color:'#2ab3c4', label:'Turquoise', code:'Expression',       emoji:'🩵' },
  { key:'Blue',      color:'#3a6bb5', label:'Blue',      code:'Resonance',        emoji:'🔵' },
  { key:'Indigo',    color:'#5a4a9e', label:'Indigo',    code:'Thriving',         emoji:'🟣' },
  { key:'Violet',    color:'#8b4fb5', label:'Violet',    code:'Transformutation', emoji:'💜' },
  { key:'Magenta',   color:'#c4407a', label:'Magenta',   code:'Unity',            emoji:'💗' },
  { key:'Omni',      color:'#c0c0d8', label:'Omni',      code:'Wholeness',        emoji:'🌐' },
  { key:'Elemental', color:'#7a9e5a', label:'Elemental', code:'Alchemy',          emoji:'🌿' },
  { key:'ALL',       color:'#e8d4ff', label:'ALL Ray',   code:'Omnisonance',      emoji:'✨' },
];

const OFFERING_PRESETS = [
  'Sound Healing','Vocal Activation','Sacred Art','Sigil Crafting','Oracle Readings',
  'Ancestral Work','Guided Ritual','Herbal Craft','Tea Blends','Crystal Grids',
  'Astrology','Numerology','Mentorship','Community Circles','Movement Ritual',
  'Written Transmission','Dreamwork','Sacred Geometry','Music','Poetry & Story',
  'Wand Crafting','Energy Clearing','Somatic Practice','Channeled Messages',
];

const EXCHANGE_PRESETS = ['Paid','Sliding Scale','Trade','Gift Exchange','Scholarship'];

const NUMEROLOGY_PRESETS = [
  'Life Path 1','Life Path 2','Life Path 3','Life Path 4','Life Path 5',
  'Life Path 6','Life Path 7','Life Path 8','Life Path 9',
  'Life Path 11 · Master','Life Path 22 · Master Builder','Life Path 33 · Master Healer',
];

const ACCESSIBILITY_PRESETS = [
  'Audio formats','Captioned video','Text transcripts','Multiple time zones',
  'Sliding pacing','Sensory-friendly','Physical & digital options',
  'Simplified language available','Chair-based adaptations','Async options',
];

function createEmptyPortfolioItem(type = 'image') {
  return { type, url: '', caption: '' };
}

function createDefaultFormState() {
  return {
    emoji: '',
    selectedRays: [],
    selectedOfferings: [],
    customOfferings: [],
    selectedExchanges: [],
    selectedSeasons: { Winter: false, Spring: false, Summer: false, Fall: false },
    selectedNumerology: [],
    customNumerology: [],
    selectedAccessibility: [],
    customAccessibility: [],
    portfolioItems: [createEmptyPortfolioItem('image')],
    wishAvailability: 'accepting',
    photoData: null,
    passphrase: '',
    oathSigned: false,
    oath2Signed: false,
  };
}

function getVisibleContactMethods(contactMethods = {}, contactVisibility = {}) {
  const visible = createEmptyContactMethods();
  const normalizedVisibility = normalizeContactVisibility(contactVisibility, contactMethods);
  CONTACT_FIELD_KEYS.forEach(key => {
    if (normalizedVisibility[key]) visible[key] = String(contactMethods[key] || '').trim();
  });
  return visible;
}

let formState = createDefaultFormState();

function normalizeAvatarMark(value = '') {
  return Array.from(String(value).replace(/\s+/gu, '')).slice(0, 3).join('');
}

// ── BUILD AVATAR MARK INPUT ──
function buildEmojiPicker() {
  formState.emoji = normalizeAvatarMark(formState.emoji || '');
  const input = document.getElementById('f_avatar_mark');
  if (input && input.value !== formState.emoji) input.value = formState.emoji;
  const selectedDisplay = document.getElementById('selectedEmojiDisplay');
  if (selectedDisplay) {
    selectedDisplay.textContent = formState.emoji
      ? `${formState.emoji} will appear when no photo is uploaded.`
      : 'Leave this blank to use your initial, or enter up to 3 letters, symbols, or emoji.';
  }
}

function updateAvatarMark(value) {
  formState.emoji = normalizeAvatarMark(value);
  buildEmojiPicker();
  updatePreview();
}

// ── BUILD RAY SELECTOR ──
function buildRaySelector() {
  const g = document.getElementById('raySelectGrid');
  if (!g) return;
  g.innerHTML = ALL_RAYS.map(r => {
    const idx = formState.selectedRays.indexOf(r.key);
    const sel = idx > -1;
    const isPrimary = idx === 0;
    const orderLabel = idx > -1 ? (idx===0 ? '★' : idx===1 ? '2' : '3') : '';
    return `<div class="ray-select-btn ${sel?'selected':''} ${isPrimary?'primary-ray':''}"
      style="--rb-color:${r.color}"
      onclick="toggleRay('${r.key}')">
      <span class="ray-order-badge">${orderLabel}</span>
      <div class="ray-select-dot" style="background:${r.color}"></div>
      <div class="ray-select-name">${r.label}</div>
      <div class="ray-select-code">${r.code}</div>
    </div>`;
  }).join('');
}

function toggleRay(key) {
  const idx = formState.selectedRays.indexOf(key);
  if (idx > -1) {
    formState.selectedRays.splice(idx, 1);
  } else {
    if (formState.selectedRays.length >= 3) return;
    formState.selectedRays.push(key);
  }
  const note = document.getElementById('rayMaxNote');
  if (note) {
    const rem = 3 - formState.selectedRays.length;
    note.textContent = formState.selectedRays.length === 0
      ? 'Select up to 3 Ray frequencies'
      : formState.selectedRays.length === 3
        ? '✓ Three Rays selected — your full resonance field is set'
        : `${rem} more Ray${rem>1?'s':''} available`;
  }
  buildRaySelector();
  updatePreview();
}

// ── BUILD CHIP GRIDS ──
function buildChipGrid(containerId, presets, stateKey) {
  const g = document.getElementById(containerId);
  if (!g) return;
  const selected = formState[stateKey];
  const customMap = {
    selectedOfferings: formState.customOfferings || [],
    selectedNumerology: formState.customNumerology || [],
    selectedAccessibility: formState.customAccessibility || [],
  };
  const options = [...presets, ...customMap[stateKey]];
  g.innerHTML = options.map(p =>
    `<div class="chip-opt ${selected.includes(p)?'selected':''}" onclick="toggleChip('${stateKey}','${p.replace(/'/g,"\\'")}',this)">${p}</div>`
  ).join('');
}

function toggleChip(stateKey, value, el) {
  const arr = formState[stateKey];
  const idx = arr.indexOf(value);
  if (idx > -1) { arr.splice(idx,1); el.classList.remove('selected'); }
  else { arr.push(value); el.classList.add('selected'); }
  updatePreview();
}

function addCustomChip(type) {
  const inputId = type + 'Custom';
  const stateKey = 'selected' + type.charAt(0).toUpperCase() + type.slice(1);
  const customKey = 'custom' + type.charAt(0).toUpperCase() + type.slice(1) + 's';
  // map type names
  const mapState = { offering:'selectedOfferings', numerology:'selectedNumerology', accessibility:'selectedAccessibility' };
  const mapCustom = { offering:'customOfferings', numerology:'customNumerology', accessibility:'customAccessibility' };
  const input = document.getElementById(inputId);
  if (!input || !input.value.trim()) return;
  const val = input.value.trim();
  if (!formState[mapCustom[type]]) formState[mapCustom[type]] = [];
  formState[mapCustom[type]].push(val);
  formState[mapState[type]].push(val);
  input.value = '';
  // re-render
  const gridMap = { offering:'offeringsGrid', numerology:'numerologyGrid', accessibility:'accessibilityGrid' };
  const presetMap = { offering:OFFERING_PRESETS, numerology:NUMEROLOGY_PRESETS, accessibility:ACCESSIBILITY_PRESETS };
  const allOpts = [...presetMap[type], ...formState[mapCustom[type]]];
  const g = document.getElementById(gridMap[type]);
  if (g) {
    const sel = formState[mapState[type]];
    g.innerHTML = allOpts.map(p =>
      `<div class="chip-opt ${sel.includes(p)?'selected':''}" onclick="toggleChip('${mapState[type]}','${p.replace(/'/g,"\\'")}',this)">${p}</div>`
    ).join('');
  }
  updatePreview();
}

function buildPortfolioInputs() {
  const list = document.getElementById('portfolioItemsList');
  if (!list) return;
  const rows = Array.isArray(formState.portfolioItems) ? formState.portfolioItems : [];
  if (!rows.length) {
    list.innerHTML = '<div class="portfolio-empty-note">Add a photo or video to begin your portfolio showcase.</div>';
    return;
  }
  list.innerHTML = rows.map((item, index) => `
    <div class="portfolio-item-row">
      <div class="portfolio-item-grid">
        <div>
          <label class="field-label" style="margin-bottom:0.35rem">Media Type</label>
          <select class="field-input" onchange="updatePortfolioItem(${index}, 'type', this.value)" style="background:rgba(15,12,25,0.9)">
            <option value="image" ${item.type === 'image' ? 'selected' : ''}>Photo</option>
            <option value="video" ${item.type === 'video' ? 'selected' : ''}>Video</option>
          </select>
        </div>
        <div>
          <label class="field-label" style="margin-bottom:0.35rem">Media URL</label>
          <input class="field-input" type="text" value="${escapeHtml(item.url || '')}" placeholder="${item.type === 'video' ? 'https://…/video.mp4' : 'https://…/photo.jpg'}" oninput="updatePortfolioItem(${index}, 'url', this.value)">
          <label class="field-label" style="margin:0.6rem 0 0.35rem">Caption</label>
          <textarea class="field-input" placeholder="Short description of this piece…" oninput="updatePortfolioItem(${index}, 'caption', this.value)">${escapeHtml(item.caption || '')}</textarea>
        </div>
        <div style="display:flex;align-items:flex-start;justify-content:flex-end">
          <button type="button" class="portfolio-remove-btn" onclick="removePortfolioItem(${index})">Remove</button>
        </div>
      </div>
    </div>
  `).join('');
}

function updatePortfolioItem(index, key, value) {
  if (!Array.isArray(formState.portfolioItems) || !formState.portfolioItems[index]) return;
  formState.portfolioItems[index][key] = value;
  updatePreview();
}

function addPortfolioItem(type = 'image') {
  if (!Array.isArray(formState.portfolioItems)) formState.portfolioItems = [];
  formState.portfolioItems.push(createEmptyPortfolioItem(type));
  buildPortfolioInputs();
  updatePreview();
}

function removePortfolioItem(index) {
  if (!Array.isArray(formState.portfolioItems)) return;
  formState.portfolioItems.splice(index, 1);
  if (!formState.portfolioItems.length) {
    formState.portfolioItems.push(createEmptyPortfolioItem('image'));
  }
  buildPortfolioInputs();
  updatePreview();
}

function buildWishAvailabilityToggles() {
  const grid = document.getElementById('wishAvailabilityGrid');
  if (!grid) return;
  const options = ['accepting', 'full'].map(key => getWishAvailabilityMeta(key));
  grid.innerHTML = options.map(option => `
    <button type="button" class="profile-capacity-toggle ${formState.wishAvailability === option.key ? 'active' : ''}"
      onclick="setWishAvailability('${option.key}')">
      <span class="profile-capacity-toggle-title">${option.emoji} ${escapeHtml(option.label)}</span>
      <span class="profile-capacity-toggle-copy">${escapeHtml(option.copy)}</span>
    </button>
  `).join('');
}

function setWishAvailability(value) {
  formState.wishAvailability = normalizeWishAvailability(value);
  buildWishAvailabilityToggles();
}

// ── BUILD EXCHANGE TOGGLES ──
function buildExchangeToggles() {
  const g = document.getElementById('exchangeGrid');
  if (!g) return;
  g.innerHTML = EXCHANGE_PRESETS.map(e =>
    `<div class="exchange-toggle ${formState.selectedExchanges.includes(e)?'selected':''}" onclick="toggleExchange('${e}',this)">${e}</div>`
  ).join('');
}

function toggleExchange(val, el) {
  const idx = formState.selectedExchanges.indexOf(val);
  if (idx > -1) { formState.selectedExchanges.splice(idx,1); el.classList.remove('selected'); }
  else { formState.selectedExchanges.push(val); el.classList.add('selected'); }
  updatePreview();
}

// ── BUILD SEASON TOGGLES ──
const SEASON_COLORS = { Winter:'#7ab3d4', Spring:'#3a9b6f', Summer:'#d4b830', Fall:'#c4407a' };
const SEASON_EMOJI = { Winter:'❄️', Spring:'🌱', Summer:'🌞', Fall:'🍂' };

function buildSeasonToggles() {
  const g = document.getElementById('seasonGrid');
  if (!g) return;
  g.innerHTML = Object.keys(formState.selectedSeasons).map(s =>
    `<div class="season-toggle ${formState.selectedSeasons[s]?'open':''}" style="--s-color:${SEASON_COLORS[s]}" onclick="toggleSeason('${s}',this)">
      <span class="season-check">✓</span>
      <span class="season-toggle-emoji">${SEASON_EMOJI[s]}</span>
      <div class="season-toggle-label">${s}</div>
    </div>`
  ).join('');
}

function toggleSeason(s, el) {
  formState.selectedSeasons[s] = !formState.selectedSeasons[s];
  el.classList.toggle('open');
  updatePreview();
  updateSubmitBtn();
}

// ── OATH ──
function toggleOath() {
  formState.oathSigned = !formState.oathSigned;
  const box = document.getElementById('oathBox');
  if (box) box.classList.toggle('checked', formState.oathSigned);
  updateSubmitBtn();
}
function toggleOath2() {
  formState.oath2Signed = !formState.oath2Signed;
  const box = document.getElementById('oathBox2');
  if (box) box.classList.toggle('checked', formState.oath2Signed);
  updateSubmitBtn();
}
function updateSubmitBtn() {
  const btn = document.getElementById('submitBtn');
  if (!btn) return;
  const name = (document.getElementById('f_name')?.value || '').trim();
  const cesVal = (document.getElementById('f_ces_number')?.value || '').trim();
  const passphrase = (document.getElementById('f_passphrase')?.value || '').trim();
  const heartlight = (document.getElementById('f_heartlight')?.value || '').trim();
  const timeline = document.getElementById('f_timeline')?.value || '';
  const hasRay = formState.selectedRays.length > 0;
  const hasOffering = formState.selectedOfferings.length > 0 || formState.customOfferings.length > 0;
  const hasExchange = formState.selectedExchanges.length > 0;
  const hasSeason = Object.values(formState.selectedSeasons).some(Boolean);
  const quadRepeat = new RegExp('(\\d)\\1{3}').test(cesVal);
  const cesOk = cesVal.length === 9 && !quadRepeat;
  const passphraseOk = passphrase.length >= 6;
  const ready = name && cesOk && passphraseOk && heartlight && hasRay && hasOffering && hasExchange && hasSeason && timeline && formState.oathSigned && formState.oath2Signed;
  btn.disabled = !ready;
}

// ── LIVE PREVIEW UPDATE ──
function updatePreview() {
  const name = document.getElementById('f_name')?.value || '';
  const pronouns = document.getElementById('f_pronouns')?.value || '';
  const title = document.getElementById('f_title')?.value || '';
  const location = document.getElementById('f_location')?.value || '';
  const heartlight = document.getElementById('f_heartlight')?.value || '';
  const activePhoto = photoDataUrl || formState.photoData || null;

  // Primary ray for color theming
  const primaryRayKey = formState.selectedRays[0];
  const primaryRay = primaryRayKey ? ALL_RAYS.find(r => r.key === primaryRayKey) : null;
  const c1 = primaryRay?.color || '#c8922a';

  // Secondary ray colors for gradient
  const c2 = formState.selectedRays[1] ? ALL_RAYS.find(r=>r.key===formState.selectedRays[1])?.color : null;
  const c3 = formState.selectedRays[2] ? ALL_RAYS.find(r=>r.key===formState.selectedRays[2])?.color : null;

  // Build gradient from selected rays
  let gradBar, gradGlow;
  if (c3) {
    gradBar = `linear-gradient(90deg, ${c1}, ${c2}, ${c3}, transparent)`;
    gradGlow = `radial-gradient(ellipse 90% 60% at 0% 0%, ${c1}12 0%, transparent 50%),
                radial-gradient(ellipse 60% 40% at 100% 100%, ${c3}10 0%, transparent 50%),
                radial-gradient(ellipse 50% 50% at 50% 50%, ${c2}08 0%, transparent 60%)`;
  } else if (c2) {
    gradBar = `linear-gradient(90deg, ${c1}, ${c2}, transparent)`;
    gradGlow = `radial-gradient(ellipse 80% 60% at 0% 0%, ${c1}12 0%, transparent 55%),
                radial-gradient(ellipse 60% 40% at 100% 100%, ${c2}10 0%, transparent 55%)`;
  } else {
    gradBar = `linear-gradient(90deg, ${c1}, transparent)`;
    gradGlow = `radial-gradient(ellipse 80% 60% at 0% 0%, ${c1}10 0%, transparent 60%)`;
  }

  // Apply to preview card
  const bar = document.getElementById('previewRayBar');
  const glow = document.getElementById('previewGlow');
  const card = document.getElementById('previewCard');
  if (bar) bar.style.background = gradBar;
  if (glow) glow.style.background = gradGlow;
  if (card) {
    card.style.borderColor = `${c1}35`;
    card.style.boxShadow = `0 0 30px ${c1}10`;
  }

  // Avatar - photo or placeholder
  const av = document.getElementById('previewAvatar');
  const avImg = document.getElementById('previewAvatarImg');
  const avPlaceholder = document.getElementById('previewAvatarPlaceholder');
  if (av) {
    av.style.borderColor = c1;
    av.style.boxShadow = `0 0 0 4px ${c1}18, 0 0 20px ${c1}15`;
  }
  if (activePhoto && avImg) {
    avImg.src = activePhoto;
    avImg.style.display = 'block';
    if (avPlaceholder) avPlaceholder.style.display = 'none';
  } else if (avImg) {
    avImg.style.display = 'none';
    if (avPlaceholder) avPlaceholder.style.display = 'block';
  }

  // Text fields
  const pName = document.getElementById('previewName');
  if (pName) pName.textContent = name || 'Your Name';

  // Update avatar: prefer typed avatar mark, otherwise fall back to initial
  if (!activePhoto) {
    const phEl = document.getElementById('photoPlaceholder');
    const pvPh = document.getElementById('previewAvatarPlaceholder');
    const initial = name ? name.trim()[0].toUpperCase() : null;
    const avatarMark = normalizeAvatarMark(formState.emoji || '');
    const showInitial = initial && !avatarMark;
    const display = showInitial ? initial : (avatarMark || '✦');
    const fsize = '1.8rem';
    if (phEl) { phEl.textContent = display; phEl.style.fontSize = fsize; }
    if (pvPh) { pvPh.textContent = display; pvPh.style.fontSize = '1.3rem'; }
  }
  updateSubmitBtn();

  const pTitle = document.getElementById('previewTitle');
  if (pTitle) pTitle.textContent = title || 'Creator Title';

  const pLoc = document.getElementById('previewLoc');
  if (pLoc) {
    const locStr = [location, pronouns].filter(Boolean).join(' · ');
    pLoc.textContent = '📍 ' + (locStr || 'Location · Time Zone');
  }

  const pStatement = document.getElementById('previewStatement');
  if (pStatement) {
    pStatement.textContent = heartlight ? `"${heartlight}"` : 'Your Heartlight Statement will appear here as you write…';
    pStatement.style.borderLeftColor = `${c1}50`;
  }

  // Rays
  const pRays = document.getElementById('previewRays');
  if (pRays) {
    if (formState.selectedRays.length === 0) {
      pRays.innerHTML = '<span style="font-size:0.72rem;font-style:italic;color:var(--muted);font-family:\'Cormorant Garamond\',serif">Ray frequencies will appear here…</span>';
    } else {
      pRays.innerHTML = formState.selectedRays.map((key,i) => {
        const r = ALL_RAYS.find(x=>x.key===key);
        return `<span class="preview-ray-badge" style="border-color:${r.color};color:${r.color};background:${r.color}18">
          <span style="width:6px;height:6px;border-radius:50%;background:${r.color};display:inline-block"></span>
          ${r.label}${i===0?' ★':''}
        </span>`;
      }).join('');
    }
  }

  // Offerings
  const pOff = document.getElementById('previewOfferings');
  if (pOff) {
    const all = formState.selectedOfferings;
    if (all.length === 0) {
      pOff.innerHTML = '<span class="preview-chip" style="opacity:0.4;font-style:italic">None selected yet</span>';
    } else {
      pOff.innerHTML = all.map(o=>`<span class="preview-chip">${o}</span>`).join('');
    }
  }

  // Seasons
  const pSeas = document.getElementById('previewSeasons');
  if (pSeas) {
    pSeas.innerHTML = Object.entries(formState.selectedSeasons).map(([s,open]) =>
      `<div class="preview-season-cell ${open?'open':'closed'}" style="${open?`border-color:${c1}40;background:${c1}08`:''}">
        ${SEASON_EMOJI[s]}<div style="font-size:0.6rem;margin-top:0.15rem">${s}</div>
      </div>`
    ).join('');
  }

  // Exchanges
  const pEx = document.getElementById('previewExchanges');
  if (pEx) {
    if (formState.selectedExchanges.length === 0) {
      pEx.innerHTML = '<span class="preview-chip" style="opacity:0.4;font-style:italic">None selected yet</span>';
    } else {
      pEx.innerHTML = formState.selectedExchanges.map(e =>
        `<span class="preview-exchange-chip" style="border-color:${c1}60;color:${c1}">${e}</span>`
      ).join('');
    }
  }

  const pPortfolio = document.getElementById('previewPortfolio');
  if (pPortfolio) {
    pPortfolio.innerHTML = renderPortfolioGallery(formState.portfolioItems, {
      emptyHtml: '<div class="portfolio-empty-note">Add photo or video links to preview your portfolio here.</div>'
    }) || '<div class="portfolio-empty-note">Add photo or video links to preview your portfolio here.</div>';
  }

  const previewContacts = document.getElementById('previewContactMethods');
  if (previewContacts) {
    const previewContactMethods = {
      instagram: document.getElementById('f_contact_instagram')?.value || '',
      email: document.getElementById('f_contact_email')?.value || '',
      phone: document.getElementById('f_contact_phone')?.value || '',
      discord: document.getElementById('f_contact_discord')?.value || '',
      signal: document.getElementById('f_contact_signal')?.value || '',
      whatsapp: document.getElementById('f_contact_whatsapp')?.value || '',
    };
    const previewContactVisibility = {
      instagram: !!document.getElementById('f_contact_public_instagram')?.checked,
      email: !!document.getElementById('f_contact_public_email')?.checked,
      phone: !!document.getElementById('f_contact_public_phone')?.checked,
      discord: !!document.getElementById('f_contact_public_discord')?.checked,
      signal: !!document.getElementById('f_contact_public_signal')?.checked,
      whatsapp: !!document.getElementById('f_contact_public_whatsapp')?.checked,
    };
    previewContacts.innerHTML = renderContactPathChips(getVisibleContactMethods(previewContactMethods, previewContactVisibility));
  }
}

// ── SUBMIT ──
async function submitCES() {
  if (!formState.oathSigned || !formState.oath2Signed) return;
  const name = document.getElementById('f_name')?.value?.trim();
  if (!name) return;
  await hydrateStorageFromRemote();
  const result = submitCESProfile();
  const btn = document.getElementById('submitBtn');
  const conf = document.getElementById('cesConfirmation');
  if (btn) btn.style.display = 'none';
  if (conf) {
    const wasApproved = result?.status === 'approved';
    const wasEdit = !result?.isNew;
    conf.innerHTML = wasApproved
      ? `<div style="font-size:2rem;margin-bottom:1rem">🎞✨</div>
         <div style="font-family:'Alice',serif;font-size:1.3rem;color:var(--orichalcum-pale);margin-bottom:1rem">Your Core Energetic Signature is now updated in the Directory.</div>
         <div style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1.1rem;color:rgba(240,232,213,0.82);line-height:1.85;max-width:480px;margin:0 auto">Your refreshed photo and video portfolio is already visible to the field.</div>
         <div style="margin-top:1.2rem;font-size:0.75rem;letter-spacing:0.15em;text-transform:uppercase;color:rgba(200,146,42,0.6);font-family:'Atkinson Hyperlegible',sans-serif">All That Loves Allow Synchronicities 🏝️</div>`
      : `<div style="font-size:2rem;margin-bottom:1rem">🌈✨</div>
         <div style="font-family:'Alice',serif;font-size:1.3rem;color:var(--orichalcum-pale);margin-bottom:1rem">${wasEdit ? 'Your updated Core Energetic Signature has been returned to the Stewards.' : 'Your Core Energetic Signature has been offered to the Exchange.'}</div>
         <div style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1.1rem;color:rgba(240,232,213,0.82);line-height:1.85;max-width:480px;margin:0 auto">${wasEdit ? 'Your refinements and portfolio updates are now in review.' : 'A steward will welcome you and confirm your place in the Directory within one lunar cycle.'}</div>
         <div style="margin-top:1.2rem;font-size:0.75rem;letter-spacing:0.15em;text-transform:uppercase;color:rgba(200,146,42,0.6);font-family:'Atkinson Hyperlegible',sans-serif">All That Loves Allow Synchronicities 🏝️</div>`;
    conf.style.display = 'block';
  }
  renderDirectory();
}

// ── INIT FORM ──
function initCESForm() {
  buildEmojiPicker();
  buildRaySelector();
  buildChipGrid('offeringsGrid', OFFERING_PRESETS, 'selectedOfferings');
  buildExchangeToggles();
  buildSeasonToggles();
  buildChipGrid('numerologyGrid', NUMEROLOGY_PRESETS, 'selectedNumerology');
  buildChipGrid('accessibilityGrid', ACCESSIBILITY_PRESETS, 'selectedAccessibility');
  buildPortfolioInputs();
  buildWishAvailabilityToggles();
  updatePreview();
  updateSubmitBtn();
}

// (setView unified above)

// ══════════════════════════════════════════
// WISH PORTAL
// ══════════════════════════════════════════

const WISH_TYPES = ['Gift','Healing','Lesson','Art','Ritual','Guidance','Music','Story','Other'];
const HEART_THEMES = [
  {e:'💗',l:'Love'},{e:'🌿',l:'Abundance'},{e:'🌙',l:'Rest'},
  {e:'🔥',l:'Courage'},{e:'🕊️',l:'Belonging'},{e:'💎',l:'Clarity'},
  {e:'🌱',l:'Growth'},{e:'🌊',l:'Healing'},{e:'✨',l:'Wonder'},
];
const WISH_FORMATS = ['Digital','Text','Audio','Video','Art','Physical','Captioned Video','Async'];

let wishState = {
  selectedWishTypes: [],
  selectedHeartTheme: null,
  selectedFormats: [],
  selectedExchanges: [],
  selectedRay: null,
};

const WISH_STORAGE_KEY = 'wish_submissions';
const WISH_FIELD_DEMOS = [];

let wishFieldFilters = {
  search: '',
  type: [],
  role: [],
  theme: [],
  ray: [],
};

function getWishRayMeta(rayKey) {
  return ALL_RAYS.find(ray => ray.key === rayKey) || { key: 'All', label: rayKey || 'Unspecified', color: '#c8922a', emoji: '✨' };
}

function getWishPortalShortLabel(portal) {
  if (!portal) return 'Open Portal';
  return portal.split(' — ')[0];
}

function summarizeWish(text, max = 170) {
  const clean = String(text || '').replace(/\s+/g, ' ').trim();
  if (!clean) return 'This wish is still taking form in the field.';
  return clean.length > max ? clean.slice(0, max).trimEnd() + '…' : clean;
}

function moveLeadingEmojiToEnd(label) {
  const text = String(label || '').trim();
  const match = text.match(/^([^\p{L}\p{N}]+)\s+(.+)$/u);
  if (!match) return text;
  return `${match[2].trim()} ${match[1].trim()}`;
}

function normalizeWishRole(role) {
  const allBeings = Array.isArray(role?.beings) ? role.beings.filter(Boolean) : [];
  const namedBeings = allBeings.filter(name => !/open resonance/i.test(name));
  const openings = Math.max(role?.openings || 0, allBeings.length - namedBeings.length);
  return {
    label: moveLeadingEmojiToEnd(role?.label || 'Open Role'),
    beings: namedBeings,
    openings: openings || (!namedBeings.length ? 1 : 0),
  };
}

function normalizeWishEntry(entry) {
  return {
    id: entry?.id || 'wish-' + Date.now(),
    name: entry?.name || 'Unnamed Being',
    ownerId: entry?.ownerId || null,
    ownerCes: entry?.ownerCes || null,
    ownerName: entry?.ownerName || '',
    location: entry?.location || 'Location unshared',
    portal: entry?.portal || '',
    wishTypes: Array.isArray(entry?.wishTypes) ? entry.wishTypes.filter(Boolean) : [],
    heartTheme: entry?.heartTheme || '',
    ray: entry?.ray || '',
    formats: Array.isArray(entry?.formats) ? entry.formats.filter(Boolean) : [],
    exchanges: Array.isArray(entry?.exchanges) ? entry.exchanges.filter(Boolean) : [],
    accessibility: entry?.accessibility || '',
    boundaries: entry?.boundaries || '',
    witnessed: entry?.witnessed || '',
    letter: entry?.letter || '',
    status: entry?.status === 'granted' ? 'granted' : 'awaiting',
    grantedAt: entry?.grantedAt || null,
    createdAt: entry?.createdAt || new Date().toISOString(),
    roles: (Array.isArray(entry?.roles) ? entry.roles : []).map(normalizeWishRole),
  };
}

function getStoredWishEntries() {
  return getStorage(WISH_STORAGE_KEY, []).map(normalizeWishEntry);
}

function setStoredWishEntries(entries) {
  setStorage(WISH_STORAGE_KEY, entries.map(normalizeWishEntry));
}

function getWishFieldEntries() {
  return [...getStoredWishEntries(), ...WISH_FIELD_DEMOS.map(normalizeWishEntry)]
    .filter(entry => entry.status !== 'granted')
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function collectWishSubmission() {
  const user = getCurrentUser();
  const wishName = user ? [user.name, user.pronouns].filter(Boolean).join(' · ') : document.getElementById('w_name')?.value?.trim();
  const wishLocation = user?.location || document.getElementById('w_location')?.value?.trim();
  return normalizeWishEntry({
    id: 'wish-' + Date.now(),
    ownerId: user?.id || null,
    ownerCes: user?.cesNumber || null,
    ownerName: user?.name || '',
    name: wishName,
    location: wishLocation,
    portal: document.getElementById('w_portal')?.value,
    wishTypes: [...wishState.selectedWishTypes],
    heartTheme: wishState.selectedHeartTheme,
    ray: wishState.selectedRay,
    formats: [...wishState.selectedFormats],
    exchanges: [...wishState.selectedExchanges],
    accessibility: document.getElementById('w_access')?.value?.trim(),
    boundaries: document.getElementById('w_boundaries')?.value?.trim(),
    witnessed: document.getElementById('w_witnessed')?.value?.trim(),
    letter: document.getElementById('w_letter')?.value?.trim(),
    status: 'awaiting',
    createdAt: new Date().toISOString(),
    roles: activeRoles.map(role => {
      const filledBeings = role.beings.map(b => String(b || '').trim()).filter(Boolean);
      const openSlots = role.beings.length ? Math.max(0, role.beings.length - filledBeings.length) : 1;
      return {
        label: role.label,
        beings: filledBeings.length ? filledBeings : ['Open resonance'],
        openings: openSlots || (!filledBeings.length ? 1 : 0),
      };
    }),
  });
}

function saveWishSubmission(entry) {
  const wishes = getStorage(WISH_STORAGE_KEY, []);
  wishes.unshift(entry);
  setStorage(WISH_STORAGE_KEY, wishes);
}

function getLocalProfileWishes() {
  const user = getCurrentUser();
  if (!user) return [];
  return getStoredWishEntries()
    .filter(entry => (entry.ownerId && entry.ownerId === user.id) || (entry.ownerCes && user.cesNumber && entry.ownerCes === user.cesNumber))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function getStoredWishById(wishId) {
  return getStoredWishEntries().find(entry => entry.id === wishId) || null;
}

function updateWishStatus(wishId, status) {
  const entries = getStoredWishEntries();
  const index = entries.findIndex(entry => entry.id === wishId);
  if (index === -1) return;
  entries[index].status = status;
  entries[index].grantedAt = status === 'granted' ? new Date().toISOString() : null;
  setStoredWishEntries(entries);
  renderWishField();
  renderMyWishes();
  if (document.getElementById('profileModalOverlay')?.classList.contains('open')) {
    openProfileModal();
  }
}

function setWishFieldSearch(value) {
  wishFieldFilters.search = value;
  renderWishField();
}

function toggleWishFieldFilter(kind, value) {
  if (value === 'All') {
    wishFieldFilters[kind] = [];
    renderWishField();
    return;
  }
  const current = Array.isArray(wishFieldFilters[kind]) ? [...wishFieldFilters[kind]] : [];
  const index = current.indexOf(value);
  if (index >= 0) current.splice(index, 1);
  else current.push(value);
  wishFieldFilters[kind] = current;
  renderWishField();
}

function clearWishFieldFilters() {
  wishFieldFilters = { search: '', type: [], role: [], theme: [], ray: [] };
  const search = document.getElementById('wishFieldSearch');
  if (search) search.value = '';
  renderWishField();
}

function renderWishFieldFilters() {
  const typeRow = document.getElementById('wishFieldTypeFilters');
  const roleRow = document.getElementById('wishFieldRoleFilters');
  const themeRow = document.getElementById('wishFieldThemeFilters');
  const rayRow = document.getElementById('wishFieldRayFilters');
  if (typeRow) {
    typeRow.innerHTML = ['All', ...WISH_TYPES].map(type => `
      <button class="wish-field-filter-btn ${type === 'All' ? (!wishFieldFilters.type.length ? 'active' : '') : (wishFieldFilters.type.includes(type) ? 'active' : '')}"
        style="--wish-filter-color:${type === 'All' ? '#c8922a' : '#e8b84b'}"
        onclick="toggleWishFieldFilter('type','${escapeJsString(type)}')">${type}</button>
    `).join('');
  }
  if (roleRow) {
    const roleOptions = [
      'All',
      ...Array.from(new Set([
        ...PRESET_ROLES.map(role => moveLeadingEmojiToEnd(role.label)),
        ...getWishFieldEntries().flatMap(entry => entry.roles.map(role => moveLeadingEmojiToEnd(role.label))),
      ].filter(Boolean))).sort((a, b) => a.localeCompare(b))
    ];
    roleRow.innerHTML = roleOptions.map(role => `
      <button class="wish-field-filter-btn ${role === 'All' ? (!wishFieldFilters.role.length ? 'active' : '') : (wishFieldFilters.role.includes(role) ? 'active' : '')}"
        style="--wish-filter-color:${role === 'All' ? '#c8922a' : '#3a9b6f'}"
        onclick="toggleWishFieldFilter('role','${escapeJsString(role)}')">${role === 'All' ? 'All Roles' : role}</button>
    `).join('');
  }
  if (themeRow) {
    themeRow.innerHTML = ['All', ...HEART_THEMES.map(theme => theme.l)].map(theme => {
      const themeMeta = HEART_THEMES.find(item => item.l === theme);
      return `
        <button class="wish-field-filter-btn ${theme === 'All' ? (!wishFieldFilters.theme.length ? 'active' : '') : (wishFieldFilters.theme.includes(theme) ? 'active' : '')}"
          style="--wish-filter-color:${theme === 'All' ? '#c8922a' : '#c4407a'}"
          onclick="toggleWishFieldFilter('theme','${escapeJsString(theme)}')">${themeMeta ? `${theme} ${themeMeta.e}` : theme}</button>
      `;
    }).join('');
  }
  if (rayRow) {
    rayRow.innerHTML = ['All', ...ALL_RAYS.map(ray => ray.key)].map(rayKey => {
      const ray = getWishRayMeta(rayKey);
      return `
        <button class="wish-field-filter-btn ${rayKey === 'All' ? (!wishFieldFilters.ray.length ? 'active' : '') : (wishFieldFilters.ray.includes(rayKey) ? 'active' : '')}"
          style="--wish-filter-color:${rayKey === 'All' ? '#c8922a' : ray.color}"
          onclick="toggleWishFieldFilter('ray','${escapeJsString(rayKey)}')">${rayKey === 'All' ? 'All Rays' : `${ray.label} ${ray.emoji}`}</button>
      `;
    }).join('');
  }
}

function filterWishEntries(entries) {
  const query = wishFieldFilters.search.trim().toLowerCase();
  return entries.filter(entry => {
    const typeMatch = !wishFieldFilters.type.length || entry.wishTypes.some(type => wishFieldFilters.type.includes(type));
    const roleMatch = !wishFieldFilters.role.length || entry.roles.some(role => wishFieldFilters.role.includes(role.label));
    const themeMatch = !wishFieldFilters.theme.length || wishFieldFilters.theme.includes(entry.heartTheme);
    const rayMatch = !wishFieldFilters.ray.length || wishFieldFilters.ray.includes(entry.ray);
    const searchHaystack = [
      entry.name,
      entry.location,
      entry.portal,
      entry.letter,
      entry.heartTheme,
      entry.wishTypes.join(' '),
      entry.roles.map(role => role.label + ' ' + role.beings.join(' ')).join(' '),
    ].join(' ').toLowerCase();
    const searchMatch = !query || searchHaystack.includes(query);
    return typeMatch && roleMatch && themeMatch && rayMatch && searchMatch;
  });
}

function renderWishRoleList(entry) {
  if (!entry.roles.length) {
    return `<div class="wish-field-role-item"><div class="wish-field-role-label">Open Co-Creation</div><div class="wish-field-role-meta">This wish is welcoming beings by resonance.</div></div>`;
  }
  return entry.roles.map(role => {
    const namedBeings = role.beings;
    const openInvites = role.openings;
    const metaParts = [];
    if (namedBeings.length) metaParts.push(`${namedBeings.length} being${namedBeings.length === 1 ? '' : 's'} already woven`);
    if (openInvites) metaParts.push(`${openInvites} open invitation${openInvites === 1 ? '' : 's'}`);
    if (!metaParts.length) metaParts.push('Open to resonance');
    const chips = [
      ...namedBeings.map(name => `<span class="wish-field-being-chip">${escapeHtml(name)}</span>`),
      ...(openInvites ? [`<span class="wish-field-being-chip">+ ${openInvites} more welcome</span>`] : [])
    ].join('');
    return `
      <div class="wish-field-role-item">
        <div class="wish-field-role-label">${escapeHtml(role.label)}</div>
        <div class="wish-field-role-meta">${metaParts.join(' · ')}</div>
        <div class="wish-field-role-beings">${chips || `<span class="wish-field-being-chip">Open resonance</span>`}</div>
      </div>
    `;
  }).join('');
}

function renderWishFieldCard(entry) {
  const ray = getWishRayMeta(entry.ray);
  const types = entry.wishTypes.length ? entry.wishTypes : ['Unsorted Wish'];
  const formatTags = entry.formats.slice(0, 2);
  const exchangeTag = entry.exchanges[0];
  return `
    <article class="wish-field-card" style="--wish-color:${ray.color}">
      <div class="wish-field-card-inner">
        <div class="wish-field-card-top">
          <div>
            <div class="wish-field-card-name">${escapeHtml(entry.name)}</div>
            <div class="wish-field-card-location">${escapeHtml(entry.location)}</div>
          </div>
          <div class="wish-field-portal-chip">${escapeHtml(getWishPortalShortLabel(entry.portal))}</div>
        </div>
        <div class="wish-field-theme">${escapeHtml(types.join(' · '))}${entry.heartTheme ? ' · ' + escapeHtml(entry.heartTheme) : ''}</div>
        <div style="display:flex;gap:0.4rem;flex-wrap:wrap;margin-bottom:0.75rem">
          <span class="wish-field-ray-chip">${escapeHtml(ray.label)}</span>
        </div>
        <div class="wish-field-letter">${escapeHtml(summarizeWish(entry.letter))}</div>
        <div class="wish-field-tag-row">
          ${types.map(type => `<span class="wish-field-tag">${escapeHtml(type)}</span>`).join('')}
          ${formatTags.map(format => `<span class="wish-field-tag">${escapeHtml(format)}</span>`).join('')}
          ${exchangeTag ? `<span class="wish-field-tag">${escapeHtml(exchangeTag)}</span>` : ''}
        </div>
        <div class="wish-field-role-block">
          <div class="wish-field-role-title">Roles In The Weave</div>
          <div class="wish-field-role-list">${renderWishRoleList(entry)}</div>
        </div>
        <div class="wish-field-card-actions">
          <div class="wish-field-card-note">Many beings may answer the same role when resonance is shared.</div>
          <button class="wish-field-connect-btn" onclick="openWishFieldWish('${escapeJsString(entry.id)}')">Open Wish</button>
        </div>
      </div>
    </article>
  `;
}

function renderWishField() {
  renderWishFieldFilters();
  const entries = getWishFieldEntries();
  const filtered = filterWishEntries(entries);
  const totalRoles = filtered.reduce((sum, entry) => sum + entry.roles.length, 0);
  const multiBeingRoles = filtered.reduce((sum, entry) => sum + entry.roles.filter(role => {
    const named = role.beings.filter(name => !/open resonance/i.test(name)).length;
    return named > 1 || role.openings > 1;
  }).length, 0);
  const countEl = document.getElementById('wishFieldStatCount');
  const rolesEl = document.getElementById('wishFieldStatRoles');
  const multiEl = document.getElementById('wishFieldStatMulti');
  const resultsCopy = document.getElementById('wishFieldResultsCopy');
  const grid = document.getElementById('wishFieldGrid');
  if (countEl) countEl.textContent = String(filtered.length);
  if (rolesEl) rolesEl.textContent = String(totalRoles);
  if (multiEl) multiEl.textContent = String(multiBeingRoles);
  if (resultsCopy) {
    const filtersActive = [wishFieldFilters.type, wishFieldFilters.role, wishFieldFilters.theme, wishFieldFilters.ray].some(value => Array.isArray(value) && value.length) || wishFieldFilters.search.trim();
    resultsCopy.textContent = filtered.length
      ? `${filtered.length} wish${filtered.length === 1 ? '' : 'es'} currently shimmering${filtersActive ? ' within your selected filters' : ' in the field'}.`
      : 'No wishes match this constellation yet. Try a wider filter and feel for another thread.';
  }
  if (grid) {
    grid.innerHTML = filtered.length
      ? filtered.map(renderWishFieldCard).join('')
      : `<div class="wish-field-empty">No wishes are matching these filters right now. Clear the field and try another resonance.</div>`;
  }
}

function getWishById(wishId) {
  return [...getStoredWishEntries(), ...WISH_FIELD_DEMOS.map(normalizeWishEntry)].find(entry => entry.id === wishId) || null;
}

function formatWishDate(value) {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function renderMyWishCard(entry, options = {}) {
  const ray = getWishRayMeta(entry.ray);
  const statusLabel = entry.status === 'granted' ? 'Granted' : 'Awaiting to Be Granted';
  const typeBits = [...entry.wishTypes, entry.heartTheme].filter(Boolean);
  const openWishAction = options.fromProfile
    ? `openWishFromProfile('${escapeJsString(entry.id)}')`
    : `openWishFieldWish('${escapeJsString(entry.id)}')`;
  return `
    <article class="my-wish-card">
      <div class="my-wish-top">
        <div>
          <div class="my-wish-name">${escapeHtml(typeBits.join(' · ') || 'Open Wish')}</div>
          <div class="my-wish-meta">${escapeHtml(getWishPortalShortLabel(entry.portal))}${entry.location ? ' · ' + escapeHtml(entry.location) : ''}</div>
        </div>
        <div class="my-wish-status ${entry.status === 'granted' ? 'granted' : 'awaiting'}">${statusLabel}</div>
      </div>
      <div class="my-wish-letter">${escapeHtml(summarizeWish(entry.letter, 150))}</div>
      <div class="my-wish-chip-row">
        ${entry.ray ? `<span class="my-wish-chip" style="border-color:${ray.color}55;color:${ray.color}">${escapeHtml(ray.label)}</span>` : ''}
        ${entry.roles.slice(0, 2).map(role => `<span class="my-wish-chip">${escapeHtml(role.label)}</span>`).join('')}
        <span class="my-wish-chip">${entry.status === 'granted' ? `Granted${formatWishDate(entry.grantedAt) ? ' ' + escapeHtml(formatWishDate(entry.grantedAt)) : ''}` : `Cast ${escapeHtml(formatWishDate(entry.createdAt) || '')}`}</span>
      </div>
      <div class="my-wish-actions">
        <button class="my-wish-btn" onclick="${openWishAction}">Open Wish</button>
        ${entry.status === 'granted'
          ? `<button class="my-wish-btn" onclick="updateWishStatus('${escapeJsString(entry.id)}','awaiting')">Return To Field</button>`
          : `<button class="my-wish-btn primary" onclick="updateWishStatus('${escapeJsString(entry.id)}','granted')">Mark Wish Granted</button>`
        }
      </div>
    </article>
  `;
}

function renderMyWishesColumnsHtml(awaiting, granted, options = {}) {
  return `
    <div class="my-wishes-columns">
      <div class="my-wishes-column">
        <div class="my-wishes-column-title">Awaiting To Be Granted</div>
        <div class="my-wishes-column-sub">These wishes are still shining in the Wish Field.</div>
        <div class="my-wishes-list" id="${options.awaitingId || 'myWishesAwaitingList'}">${awaiting.length ? awaiting.map(entry => renderMyWishCard(entry, options)).join('') : `<div class="my-wishes-empty">No wishes are awaiting right now.</div>`}</div>
      </div>
      <div class="my-wishes-column">
        <div class="my-wishes-column-title">Granted</div>
        <div class="my-wishes-column-sub">These wishes have found the resonance you chose.</div>
        <div class="my-wishes-list" id="${options.grantedId || 'myWishesGrantedList'}">${granted.length ? granted.map(entry => renderMyWishCard(entry, options)).join('') : `<div class="my-wishes-empty">No wishes have been marked granted yet.</div>`}</div>
      </div>
    </div>
  `;
}

function renderProfileWishesSection() {
  const wishes = getLocalProfileWishes();
  const awaiting = wishes.filter(entry => entry.status !== 'granted');
  const granted = wishes.filter(entry => entry.status === 'granted');
  return `
    <div class="profile-modal-section">
      <div class="profile-modal-label">Wishing Well</div>
      <div class="profile-modal-value" style="margin-bottom:0.9rem">Wishes cast through your Core Energetic Signature now live here.</div>
      <div class="my-wishes-stats" style="margin-bottom:1rem">
        <div class="my-wishes-stat">
          <div class="my-wishes-stat-label">Total Wishes</div>
          <div class="my-wishes-stat-value">${wishes.length}</div>
        </div>
        <div class="my-wishes-stat">
          <div class="my-wishes-stat-label">Awaiting</div>
          <div class="my-wishes-stat-value">${awaiting.length}</div>
        </div>
        <div class="my-wishes-stat">
          <div class="my-wishes-stat-label">Granted</div>
          <div class="my-wishes-stat-value">${granted.length}</div>
        </div>
      </div>
      ${wishes.length
        ? renderMyWishesColumnsHtml(awaiting, granted, { fromProfile: true, awaitingId: 'profileWishesAwaitingList', grantedId: 'profileWishesGrantedList' })
        : `<div class="my-wishes-empty">You have not cast a wish yet. Visit the Wishing Well to drop one into the field.</div>`
      }
      <div style="margin-top:1rem">
        <button class="my-wish-btn primary" onclick="closeProfileModal();setTimeout(()=>setView('wish', document.getElementById('navBtnWish')), 80)">Enter The Wishing Well 🪙</button>
      </div>
    </div>
  `;
}

function renderMyWishes() {
  const totalEl = document.getElementById('myWishesStatTotal');
  const awaitingEl = document.getElementById('myWishesStatAwaiting');
  const grantedEl = document.getElementById('myWishesStatGranted');
  const content = document.getElementById('myWishesContent');
  const awaitingList = document.getElementById('myWishesAwaitingList');
  const grantedList = document.getElementById('myWishesGrantedList');
  if (!content || !awaitingList || !grantedList) return;

  const user = getCurrentUser();
  if (!user) {
    if (totalEl) totalEl.textContent = '0';
    if (awaitingEl) awaitingEl.textContent = '0';
    if (grantedEl) grantedEl.textContent = '0';
    content.innerHTML = `<div class="my-wishes-empty">Sign into your local Core Energetic Signature to track the wishes you have cast into the Wishing Well.</div>`;
    return;
  }

  const wishes = getLocalProfileWishes();
  const awaiting = wishes.filter(entry => entry.status !== 'granted');
  const granted = wishes.filter(entry => entry.status === 'granted');

  if (totalEl) totalEl.textContent = String(wishes.length);
  if (awaitingEl) awaitingEl.textContent = String(awaiting.length);
  if (grantedEl) grantedEl.textContent = String(granted.length);

  if (!wishes.length) {
    content.innerHTML = `<div class="my-wishes-empty">Your local Core Energetic Signature has not cast a wish yet. Visit the Wishing Well to drop one into the field.</div>`;
    return;
  }

  content.innerHTML = renderMyWishesColumnsHtml(awaiting, granted);
}

function openWishFromProfile(wishId) {
  closeProfileModal();
  setTimeout(() => openWishFieldWish(wishId), 100);
}

function openWishFieldWish(wishId) {
  const wish = getWishById(wishId);
  if (!wish) return;
  const ray = getWishRayMeta(wish.ray);
  const typeLine = wish.wishTypes.length ? wish.wishTypes.join(' · ') : 'Open Wish';
  document.getElementById('modalRayBar').style.background = `linear-gradient(90deg, ${ray.color}, rgba(255,255,255,0.08), transparent)`;
  document.getElementById('modalContent').innerHTML = `
    <div style="padding-top:0.5rem">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;flex-wrap:wrap;margin-bottom:1rem">
        <div>
          <div style="font-size:0.68rem;letter-spacing:0.18em;text-transform:uppercase;color:${ray.color};margin-bottom:0.45rem">${escapeHtml(getWishPortalShortLabel(wish.portal))}</div>
          <div class="modal-name" style="margin-bottom:0.3rem">${escapeHtml(wish.name)}</div>
          <div class="modal-pronouns">${escapeHtml(wish.location)}</div>
        </div>
        <div class="modal-tags">
          <span class="modal-tag ray" style="--ray-color:${ray.color}">${escapeHtml(ray.label)}</span>
          ${wish.heartTheme ? `<span class="modal-tag">${escapeHtml(wish.heartTheme)}</span>` : ''}
        </div>
      </div>

      <div class="modal-section">
        <div class="modal-section-label">Wish Constellation 💫</div>
        <div class="modal-text italic">${escapeHtml(typeLine)}${wish.heartTheme ? ' · ' + escapeHtml(wish.heartTheme) : ''}</div>
      </div>

      <div class="modal-section">
        <div class="modal-section-label">🕯️ Full Wish</div>
        <div class="modal-text italic">${escapeHtml(wish.letter || 'This wish is still taking language.')}</div>
      </div>

      <div class="modal-section">
        <div class="modal-section-label">🌟 Roles In The Field</div>
        <div style="display:grid;gap:0.7rem">
          ${wish.roles.length ? wish.roles.map(role => `
            <div style="padding:0.95rem 1rem;border-radius:0.9rem;border:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.03)">
              <div style="font-family:'Alice',serif;font-size:0.95rem;color:var(--cream);margin-bottom:0.3rem">${escapeHtml(role.label)}</div>
              <div style="font-size:0.76rem;color:rgba(240,232,213,0.52);margin-bottom:0.45rem">${role.openings ? role.openings + ' open invitation' + (role.openings === 1 ? '' : 's') + ' still welcome.' : 'This role already has beings in motion.'}</div>
              <div style="display:flex;flex-wrap:wrap;gap:0.35rem">
                ${role.beings.map(name => `<span class="modal-tag">${escapeHtml(name)}</span>`).join('')}
                ${role.openings ? `<span class="modal-tag" style="border-color:${ray.color};color:${ray.color}">+ ${role.openings} more welcome</span>` : ''}
              </div>
            </div>
          `).join('') : `<div class="modal-text">This wish is open to beings who feel the call.</div>`}
        </div>
      </div>

      ${(wish.formats.length || wish.exchanges.length || wish.accessibility) ? `
        <div class="modal-section">
          <div class="modal-section-label">🎁 How This Wish Wants To Arrive</div>
          <div class="modal-tags">
            ${wish.formats.map(format => `<span class="modal-tag">${escapeHtml(format)}</span>`).join('')}
            ${wish.exchanges.map(exchange => `<span class="modal-tag">${escapeHtml(exchange)}</span>`).join('')}
          </div>
          ${wish.accessibility ? `<div class="modal-text" style="margin-top:0.8rem">${escapeHtml(wish.accessibility)}</div>` : ''}
        </div>
      ` : ''}

      ${wish.boundaries ? `
        <div class="modal-section">
          <div class="modal-section-label">Boundaries 🌊</div>
          <div class="consent-note">${escapeHtml(wish.boundaries)}</div>
        </div>
      ` : ''}

      ${wish.witnessed ? `
        <div class="modal-section">
          <div class="modal-section-label">🤍 What Wants Witnessing</div>
          <div class="modal-text italic">${escapeHtml(wish.witnessed)}</div>
        </div>
      ` : ''}

      ${wish.status === 'granted'
        ? `<div class="consent-note" style="border-color:${ray.color}55;background:${ray.color}12">This wish has been marked as granted by its wish-holder and is no longer calling for new resonance.</div>`
        : `<button class="connect-btn" style="border-color:${ray.color};color:${ray.color};background:linear-gradient(135deg,${ray.color}18,${ray.color}08)" onclick="openWishResonance('${escapeJsString(wish.id)}')">
            Offer Resonance to ${escapeHtml(wish.name.split(' ')[0])} ✦
          </button>`
      }
    </div>
  `;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openWishResonance(wishId) {
  const currentUser = getCurrentUser() ? normalizeCreatorRecord(getCurrentUser()) : null;
  if (!currentUser) {
    closeModal();
    document.getElementById('agreementContent').innerHTML = `
      <div style="padding-top:0.5rem">
        <div style="font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--orichalcum);opacity:0.8;margin-bottom:0.4rem">C.E.S. Sign-In Required ✦</div>
        <div style="font-family:'Alice',serif;font-size:1.5rem;color:var(--cream);margin-bottom:0.25rem">Respond through the Wishing Well</div>
        <div class="contact-form-note" style="margin-bottom:1rem">Sign into your Core Energetic Signature first so your Heartlight Exchange Agreement can be woven and saved to your profile.</div>
        <div style="display:flex;gap:0.6rem;flex-wrap:wrap">
          <button class="contact-action-btn" type="button" onclick="closeAgreement();openSignIn()">Sign In</button>
          <button class="contact-action-btn subtle" type="button" onclick="closeAgreement();setView('submit', document.getElementById('navBtnSubmit'))">Open Core Energetic Signature</button>
        </div>
      </div>
    `;
    document.getElementById('agreementOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    return;
  }
  closeModal();
  openHeartlightAgreementEditor({ mode: 'wish', wishId });
}

function sendWishResonance(wishId) {
  openWishResonance(wishId);
}

function buildWishForm() {
  // Wish Types
  const wtg = document.getElementById('wishTypeGrid');
  if (wtg) wtg.innerHTML = WISH_TYPES.map(t =>
    `<div class="wish-type-chip ${wishState.selectedWishTypes.includes(t)?'selected':''}" onclick="toggleWishType('${t}',this)">${t}</div>`
  ).join('');

  // Heart Themes
  const htg = document.getElementById('heartThemeGrid');
  if (htg) htg.innerHTML = HEART_THEMES.map(h =>
    `<div class="heart-theme-btn ${wishState.selectedHeartTheme===h.l?'selected':''}" onclick="selectHeartTheme('${h.l}',this)">
      <span class="heart-theme-emoji">${h.e}</span>
      <div class="heart-theme-label">${h.l}</div>
    </div>`
  ).join('');

  // Formats
  const fmtg = document.getElementById('wishFormatGrid');
  if (fmtg) fmtg.innerHTML = WISH_FORMATS.map(f =>
    `<div class="format-btn ${wishState.selectedFormats.includes(f)?'selected':''}" onclick="toggleWishFormat('${f}',this)">${f}</div>`
  ).join('');

  // Exchange
  const exg = document.getElementById('wishExchangeGrid');
  if (exg) exg.innerHTML = EXCHANGE_PRESETS.map(e =>
    `<div class="exchange-toggle ${wishState.selectedExchanges.includes(e)?'selected':''}" onclick="toggleWishExchange('${e}',this)">${e}</div>`
  ).join('');

  // Ray mini-pills
  const rg = document.getElementById('wishRayGrid');
  if (rg) rg.innerHTML = ALL_RAYS.map(r =>
    `<div style="display:inline-flex;align-items:center;gap:0.3rem;padding:0.25rem 0.65rem;border-radius:2rem;border:1.5px solid ${wishState.selectedRay===r.key?r.color:'rgba(255,255,255,0.1)'};background:${wishState.selectedRay===r.key?r.color+'18':'rgba(255,255,255,0.02)'};cursor:pointer;font-size:0.68rem;color:${wishState.selectedRay===r.key?r.color:'rgba(240,232,213,0.55)'};transition:all 0.2s" onclick="selectWishRay('${r.key}')">
      <span style="width:6px;height:6px;border-radius:50%;background:${r.color};display:inline-block;flex-shrink:0"></span>${r.label}
    </div>`
  ).join('');
}

function renderWishProfileStatus() {
  const user = getCurrentUser();
  const statusCard = document.getElementById('wishProfileStatusCard');
  const nameInput = document.getElementById('w_name');
  const locationInput = document.getElementById('w_location');
  const submitBtn = document.getElementById('wishSubmitBtn');

  if (nameInput) nameInput.value = user ? [user.name, user.pronouns].filter(Boolean).join(' · ') : '';
  if (locationInput) locationInput.value = user?.location || '';

  if (submitBtn) {
    submitBtn.disabled = !user;
    submitBtn.style.opacity = user ? '1' : '0.45';
    submitBtn.style.cursor = user ? 'pointer' : 'not-allowed';
  }

  if (!statusCard) return;
  if (user) {
    statusCard.innerHTML = `
      <div style="font-size:0.66rem;letter-spacing:0.16em;text-transform:uppercase;color:var(--orichalcum);margin-bottom:0.35rem">Active Wish Holder</div>
      <div style="font-family:'Alice',serif;font-size:1rem;color:var(--cream);margin-bottom:0.2rem">${escapeHtml(user.name || 'Co-Creator')}</div>
      <div style="font-size:0.8rem;color:rgba(240,232,213,0.68);line-height:1.55">${escapeHtml([user.pronouns, user.location].filter(Boolean).join(' · ') || 'Your Core Energetic Signature is connected to this wish.')}</div>
      ${user.cesNumber ? `<div style="margin-top:0.45rem;font-size:0.64rem;letter-spacing:0.14em;text-transform:uppercase;color:rgba(200,146,42,0.55)">C.E.S. ${escapeHtml(user.cesNumber)}</div>` : ''}
    `;
  } else {
    statusCard.innerHTML = `
      <div style="font-size:0.66rem;letter-spacing:0.16em;text-transform:uppercase;color:var(--orichalcum);margin-bottom:0.35rem">Core Energetic Signature Required</div>
      <div style="font-size:0.82rem;color:rgba(240,232,213,0.7);line-height:1.65;margin-bottom:0.75rem">To cast a wish into the Wishing Well, first create or sign into your Co-Creator Core Energetic Signature. Wishes and granted wishes stay tied to that local signature.</div>
      <div style="display:flex;gap:0.55rem;flex-wrap:wrap">
        <button onclick="setView('submit',document.getElementById('navBtnSubmit'))" style="padding:0.45rem 0.9rem;border-radius:2rem;border:1px solid rgba(200,146,42,0.4);background:rgba(200,146,42,0.08);color:var(--orichalcum);font-size:0.72rem;cursor:pointer;font-family:'Atkinson Hyperlegible',sans-serif">Create Core Energetic Signature</button>
        <button onclick="openSignIn()" style="padding:0.45rem 0.9rem;border-radius:2rem;border:1px solid rgba(255,255,255,0.12);background:rgba(255,255,255,0.03);color:rgba(240,232,213,0.8);font-size:0.72rem;cursor:pointer;font-family:'Atkinson Hyperlegible',sans-serif">Sign In</button>
      </div>
    `;
  }
}

function toggleWishType(val, el) {
  const idx = wishState.selectedWishTypes.indexOf(val);
  if (idx > -1) { wishState.selectedWishTypes.splice(idx,1); el.classList.remove('selected'); }
  else { wishState.selectedWishTypes.push(val); el.classList.add('selected'); }
  updateWishPreview();
}
function selectHeartTheme(val, el) {
  wishState.selectedHeartTheme = wishState.selectedHeartTheme === val ? null : val;
  document.querySelectorAll('.heart-theme-btn').forEach(b => b.classList.remove('selected'));
  if (wishState.selectedHeartTheme) el.classList.add('selected');
  updateWishPreview();
}
function toggleWishFormat(val, el) {
  const idx = wishState.selectedFormats.indexOf(val);
  if (idx > -1) { wishState.selectedFormats.splice(idx,1); el.classList.remove('selected'); }
  else { wishState.selectedFormats.push(val); el.classList.add('selected'); }
  updateWishPreview();
}
function toggleWishExchange(val, el) {
  const idx = wishState.selectedExchanges.indexOf(val);
  if (idx > -1) { wishState.selectedExchanges.splice(idx,1); el.classList.remove('selected'); }
  else { wishState.selectedExchanges.push(val); el.classList.add('selected'); }
  updateWishPreview();
}
function selectWishRay(key) {
  wishState.selectedRay = wishState.selectedRay === key ? null : key;
  buildWishForm();
  updateWishPreview();
}

function updateWishPreview() {
  const user = getCurrentUser();
  const name = document.getElementById('w_name')?.value || (user ? [user.name, user.pronouns].filter(Boolean).join(' · ') : '');
  const letter = document.getElementById('w_letter')?.value || '';
  const portal = document.getElementById('w_portal')?.value || '';

  const pName = document.getElementById('wPreviewName');
  if (pName) pName.textContent = name || 'Your Name';

  const pType = document.getElementById('wPreviewType');
  if (pType) {
    const parts = [...wishState.selectedWishTypes, wishState.selectedHeartTheme].filter(Boolean);
    pType.textContent = parts.length ? parts.join(' · ') : 'Wish Type · Heart Theme';
  }

  const pLetter = document.getElementById('wPreviewLetter');
  if (pLetter) pLetter.textContent = letter ? '"' + letter + '"' : 'Your wish will appear here as you write…';

  const pPortal = document.getElementById('wPreviewPortal');
  if (pPortal) pPortal.textContent = portal || '—';

  const pRays = document.getElementById('wPreviewRays');
  if (pRays && wishState.selectedRay) {
    const r = ALL_RAYS.find(x=>x.key===wishState.selectedRay);
    pRays.innerHTML = r ? `<span style="display:inline-flex;align-items:center;gap:0.25rem;padding:0.18rem 0.55rem;border-radius:2rem;border:1px solid ${r.color};color:${r.color};font-size:0.65rem;letter-spacing:0.08em;text-transform:uppercase;background:${r.color}18"><span style="width:6px;height:6px;border-radius:50%;background:${r.color};display:inline-block"></span>${r.label}</span>` : '';
  } else if (pRays) pRays.innerHTML = '';

  const pFmt = document.getElementById('wPreviewFormats');
  if (pFmt) {
    pFmt.innerHTML = wishState.selectedFormats.length
      ? wishState.selectedFormats.map(f=>`<span style="font-size:0.68rem;padding:0.15rem 0.5rem;border-radius:0.3rem;background:rgba(42,179,196,0.1);border:1px solid rgba(42,179,196,0.3);color:#7dd8e4">${f}</span>`).join('')
      : '<span style="font-size:0.72rem;color:var(--muted);font-style:italic">None yet</span>';
  }

  const pEx = document.getElementById('wPreviewExchanges');
  if (pEx) {
    pEx.innerHTML = wishState.selectedExchanges.length
      ? wishState.selectedExchanges.map(e=>`<span style="font-size:0.68rem;padding:0.15rem 0.5rem;border-radius:2rem;border:1px solid rgba(200,146,42,0.4);color:var(--orichalcum)">${e}</span>`).join('')
      : '<span style="font-size:0.72rem;color:var(--muted);font-style:italic">None yet</span>';
  }
}

function submitWish() {
  const user = getCurrentUser();
  if (!user) {
    alert('✦ A signed-in Co-Creator Core Energetic Signature is required to cast a wish into the Wishing Well.');
    return;
  }
  const name = [user.name, user.pronouns].filter(Boolean).join(' · ') || user.name || 'Co-Creator';
  const letter = document.getElementById('w_letter')?.value?.trim();
  if (!letter) { alert('✦ Please write your wish before sending it.'); return; }
  const submission = collectWishSubmission();
  saveWishSubmission(submission);
  renderWishField();
  renderMyWishes();
  closeWishCastSection();
  alert(`✦ Your wish has been cast into the Wishing Well, ${name}.\n\nIt is now awaiting to be granted and can be tracked from your Core Energetic Signature. All That Loves Allow Synchronicities. 🕯️🌈`);
  openProfileModal();
}

// ── PHOTO UPLOAD ──
function handlePhotoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    photoDataUrl = e.target.result;
    formState.photoData = e.target.result;
    const img = document.getElementById('photoPreviewImg');
    const placeholder = document.getElementById('photoPlaceholder');
    const nameEl = document.getElementById('photoName');
    if (img) {
      img.src = e.target.result;
      img.style.display = 'block';
    }
    if (placeholder) placeholder.style.display = 'none';
    if (nameEl) nameEl.textContent = `✓ ${file.name}`;
    updatePreview();
  };
  reader.readAsDataURL(file);
}

// (setView unified above)


// ── INIT ──
document.addEventListener('DOMContentLoaded', function() {
  renderDirectory();
});


// ══════════════════════════════════════════
// CODES OF ALL
// ══════════════════════════════════════════

const CODES_OF_ALL = [
  {
    number: 1,
    name: 'Sovereignty',
    ray: 'Magenta Ray',
    color: '#c4407a',
    mantra: 'I choose with discerning authorship.',
    exchange: 'Every Co-Creator and wishing being enters this exchange as a sovereign. No one is required to say yes. Every offering and every wish flows from free will, chosen with full awareness, free of obligation or pressure.'
  },
  {
    number: 2,
    name: 'Consent',
    ray: 'Red Ray',
    color: '#c94040',
    mantra: 'I ground courage into form.',
    exchange: 'Every step of the Heartlight Exchange is consent-led. Co-Creators respond to wishes through resonance, not compulsion. The Heartlight Exchange Agreement is co-signed by both beings. Boundaries are honored as sacred intelligence.'
  },
  {
    number: 3,
    name: 'Care',
    ray: 'Orange Ray',
    color: '#d4732a',
    mantra: 'I delight will into motion.',
    exchange: 'Care shapes how offerings are crafted, how wishes are received, and how changes are communicated. The exchange moves at the pace of genuine care, tending the being on the other end with full presence.'
  },
  {
    number: 4,
    name: 'Truth',
    ray: 'Yellow Ray',
    color: '#d4b830',
    mantra: 'I voice truth as sacred vow.',
    exchange: 'Co-Creators represent their offerings truthfully. Wishing beings share their needs honestly. When something shifts in timeline, capacity, or scope, truth is spoken early and with kindness, arriving clearly before it is needed.'
  },
  {
    number: 5,
    name: 'Thrival',
    ray: 'Green Ray',
    color: '#3a9b6f',
    mantra: 'I nourish life and life nourishes me.',
    exchange: 'The Green Ray holds the sacred truth that co-creation flows from a place of thrival. Co-Creators are transparent about where they are in life — their capacity, their needs, their circumstances — so that every exchange is built on a foundation of compassion and trust. Living essentials — food, water, housing, and community — are honored as the sacred ground of all creative life. Beings meet each other with full presence, and the Heartlight Exchange holds space for that transparency to be welcomed, never diminished. When a being\u2019s essential needs call for support, the community rises to meet them so that co-creation remains a joy, always.'
  },
  {
    number: 6,
    name: 'Discernment & Repair',
    ray: 'Turquoise Ray',
    color: '#2ab3c4',
    mantra: 'I flow with clarity and restore with grace.',
    exchange: 'The Turquoise Ray carries two inseparable gifts: the clarity to see truly and the willingness to restore what has drifted from alignment. Co-Creators practice discernment in which wishes they respond to, stepping forward only when there is genuine resonance, capacity, and heart-alignment. Wishers practice discernment in choosing their Co-Creators. And when misalignment arises within the exchange, repair is the path. Stewards hold the field with conscious awareness. The Adaptability Clause in every Agreement honors that growth sometimes asks for reshaping, and reshaping is a gift.'
  },
  {
    number: 7,
    name: 'Sustainability',
    ray: 'Blue Ray',
    color: '#3a6bb5',
    mantra: 'I transmute and ascend with grace.',
    exchange: 'Co-Creators honor their own rhythms and do not overextend. The seasonal wheel of Spring, Summer, Fall, and Winter structures the exchange so creation breathes. Rest is a sacred part of every offering.'
  },
  {
    number: 8,
    name: 'Mutual Respect',
    ray: 'Indigo Ray',
    color: '#5a4a9e',
    mantra: 'I weave many as One.',
    exchange: 'Both beings in a Heartlight Exchange are equally held. The wishing being is a co-creator of what arrives. The Co-Creator is a sacred craftsperson bringing their soul into form. Neither is above nor below the other.'
  },
  {
    number: 9,
    name: 'Authentic Joy',
    ray: 'Violet Ray',
    color: '#8b4fb5',
    mantra: 'I breathe yes into being.',
    exchange: 'Heartlight Exchanges live to bring joy as a living quality within the process itself. Creation with authentic joy is essential. When wishing and agreeing to an exchange, you understand that what you are co-creating brings you joy. ✨ <em>The Authentic Joy Clause</em>'
  },
  {
    number: 10,
    name: 'Conscious Awareness',
    ray: 'Omni Ray',
    color: '#c0c0d8',
    mantra: 'I embrace Lux and Umbra as harmony.',
    exchange: 'Both beings bring awareness to what they carry into the exchange: their expectations, their projections, their energy. The Privacy Promise protects what is shared. Code stewards hold the field with conscious awareness.'
  },
  {
    number: 11,
    name: 'Sacred Service',
    ray: 'Elemental Ray',
    color: '#7a9e5a',
    mantra: 'I shape reality with living elements.',
    exchange: 'Every Heartlight Exchange is an act of sacred service for the whole living field of Atlas Island. What one Co-Creator creates in love adds to the resonance of ALL. Service is the frequency through which gifts multiply.'
  },
  {
    number: 12,
    name: 'Co-Creation',
    ray: 'ALL Ray',
    color: '#e8d4ff',
    mantra: 'I am the living synthesis of ALL.',
    exchange: 'The exchange is a living co-creation. The wishing being co-creates through how they receive, reflect, and share what arrives. The Storyfire of witnessing completes the circuit, and what began as a wish becomes a shared miracle in form.'
  }
];

function buildCodesGrid() {
  const grid = document.getElementById('codesGrid');
  if (!grid) return;
  grid.innerHTML = CODES_OF_ALL.map(code => `
    <div class="code-card" style="border-color:${code.color}22">
      <div class="code-card-bar" style="background:linear-gradient(90deg,${code.color},${code.color}88,transparent)"></div>
      <div class="code-card-inner">
        <div class="code-number">Code ${code.number} · 12 Codes of ALL</div>
        <div class="code-name">${code.name}</div>
        <div class="code-ray-label" style="color:${code.color}">
          <span class="code-ray-dot" style="background:${code.color}"></span>
          ${code.ray}
        </div>
        <div class="code-mantra" style="border-left-color:${code.color};background:${code.color}0a">"${code.mantra}"</div>
        <div class="code-exchange-label">In the Heartlight Exchange</div>
        <div class="code-exchange-text">${code.exchange}</div>
      </div>
    </div>
  `).join('');
}

const CHARTER_THRESHOLDS = [
  {
    key: 'winter',
    emoji: '❄️',
    kicker: 'Winter Solstice',
    title: 'Hearth of Wishes',
    subtitle: 'Early resonance and gentle matching',
    color: '#8eb6ff',
    body: 'Wishes arrive as letters, voice notes, art, prayers, or story sparks. Heartlight Co-Creators feel resonance, capacity, and consent before responding, so the field begins in softness rather than urgency.'
  },
  {
    key: 'spring',
    emoji: '🌱',
    kicker: 'Spring Equinox',
    title: 'Seed of Co-Creation',
    subtitle: 'Scope, exchange, and timeline take root',
    color: '#87ddb0',
    body: 'Co-creation agreements land the shape of the exchange. Sketches, first drafts, prototypes, and session plans start to root into form while adaptability remains welcomed.'
  },
  {
    key: 'summer',
    emoji: '🌞',
    kicker: 'Summer Solstice',
    title: 'Bloom of Form',
    subtitle: 'The offering becomes embodied',
    color: '#f3df79',
    body: 'Crafting, refining, recording, editing, practicing, and shaping happen here. The co-creation gains presence in the world and receives its final layers of polish and blessing.'
  },
  {
    key: 'fall',
    emoji: '🍂',
    kicker: 'Fall Equinox',
    title: 'Heartlight Harvest',
    subtitle: 'Delivery, gratitude, and witnessing',
    color: '#ff9b8f',
    body: 'The exchange completes. Gifts arrive, gratitude lands, value circulates, and the storyfire of closure helps the whole seasonal wheel finish in reciprocity.'
  }
];

let openCharterCode = null;
let openSeasonalThreshold = null;

function updateSeasonalThresholdButtons() {
  document.querySelectorAll('.seasonal-threshold-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.threshold === openSeasonalThreshold);
  });
}

function openCharterHexModal({ kicker, title, subtitle, color, mantra = '', body = '' }) {
  const overlay = document.getElementById('charterHexModalOverlay');
  const shell = document.getElementById('charterHexModalShell');
  const content = document.getElementById('charterHexModalContent');
  if (!overlay || !shell || !content) return;

  shell.style.setProperty('--modal-color', color || 'rgba(200,146,42,0.65)');
  shell.style.setProperty('--modal-soft', `${color || '#c8922a'}2e`);
  shell.style.setProperty('--modal-glow', `${color || '#c8922a'}55`);
  content.innerHTML = `
    <div class="charter-hex-modal-kicker">${kicker || ''}</div>
    <div class="charter-hex-modal-title">${title || ''}</div>
    <div class="charter-hex-modal-subtitle">${subtitle || ''}</div>
    ${mantra ? `<div class="charter-hex-modal-mantra">"${mantra}"</div>` : ''}
    <div class="charter-hex-modal-body">${body || ''}</div>
  `;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCharterHexModal() {
  const overlay = document.getElementById('charterHexModalOverlay');
  if (overlay) overlay.classList.remove('open');
  openCharterCode = null;
  openSeasonalThreshold = null;
  updateSeasonalThresholdButtons();
  renderCharterCodesAccordion();
  document.body.style.overflow = '';
}

function closeCharterHexModalOutside(event) {
  if (event.target === document.getElementById('charterHexModalOverlay')) closeCharterHexModal();
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeCharterHexModal();
});

function openSeasonalThresholdModal(thresholdKey) {
  const threshold = CHARTER_THRESHOLDS.find(item => item.key === thresholdKey);
  if (!threshold) return;
  openSeasonalThreshold = thresholdKey;
  openCharterCode = null;
  updateSeasonalThresholdButtons();
  renderCharterCodesAccordion();
  openCharterHexModal({
    kicker: `${threshold.emoji} ${threshold.kicker}`,
    title: threshold.title,
    subtitle: threshold.subtitle,
    color: threshold.color,
    body: threshold.body
  });
}

function toggleCharterCode(codeNumber) {
  const code = CODES_OF_ALL.find(item => item.number === codeNumber);
  if (!code) return;
  openCharterCode = codeNumber;
  openSeasonalThreshold = null;
  updateSeasonalThresholdButtons();
  renderCharterCodesAccordion();
  openCharterHexModal({
    kicker: `Code ${code.number} of 12`,
    title: code.name,
    subtitle: code.ray,
    color: code.color,
    mantra: code.mantra,
    body: code.exchange
  });
}

function renderCharterCodesAccordion() {
  const container = document.getElementById('charterCodesAccordion');
  if (!container) return;

  container.innerHTML = `
    <div class="charter-hive charter-code-hive">
      ${CODES_OF_ALL.map((code, index) => {
        const col = index % 3;
        const row = Math.floor(index / 3);
        return `
          <div class="charter-hex-frame" style="--hex-col:${col}; --hex-row:${row}; --hex-parity:${col % 2}; --code-color:${code.color}; --hex-bg:linear-gradient(180deg, ${code.color}, #080c1c); --hex-border:${code.color}; --hex-glow:${code.color}44;">
            <button class="charter-hex-button ${openCharterCode === code.number ? 'active' : ''}" onclick="toggleCharterCode(${code.number})" aria-label="Open Code ${code.number}: ${code.name}">
              <div class="charter-hex-shape">
                <div class="charter-hex-inner">
                  <div class="charter-code-number">Code ${code.number}</div>
                  <div class="charter-code-name">${code.name}</div>
                  <div class="charter-code-ray">${code.ray}</div>
                </div>
              </div>
            </button>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// (codes init handled in unified setView)


// ══════════════════════════════════════════
// CO-CREATOR ROLES SYSTEM
// ══════════════════════════════════════════

const PRESET_ROLES = [
  { label: 'Visual Artist 🎨', key: 'visual-artist' },
  { label: 'Sound Weaver 🎵', key: 'sound-weaver' },
  { label: 'Word Keeper ✍️', key: 'word-keeper' },
  { label: 'Healer 💆', key: 'healer' },
  { label: 'Ritual Crafter 🌿', key: 'ritual-crafter' },
  { label: 'Oracle Guide 🔮', key: 'oracle-guide' },
  { label: 'Movement Artist 💃', key: 'movement-artist' },
  { label: 'Sacred Maker 🧵', key: 'sacred-maker' },
  { label: 'Visual Witness 📸', key: 'visual-witness' },
  { label: 'Space Holder 🌱', key: 'space-holder' },
  { label: 'Alchemist ⚗️', key: 'alchemist' },
  { label: 'Ceremony Keeper 🌙', key: 'ceremony-keeper' },
];

let activeRoles = []; // { key, label, beings: [] }

function buildRolePresets() {
  const grid = document.getElementById('wishRolePresets');
  if (!grid) return;
  grid.innerHTML = PRESET_ROLES.map(r => {
    const active = activeRoles.find(a => a.key === r.key);
    return `<div class="wish-type-chip ${active ? 'selected' : ''}"
      onclick="toggleRole('${r.key}', '${r.label.replace(/'/g,"\\'")}', this)"
      style="${active ? 'border-color:#c8922a;background:rgba(200,146,42,0.12);color:#e8b84b;' : ''}"
    >${r.label}</div>`;
  }).join('');
}

function toggleRole(key, label, el) {
  const idx = activeRoles.findIndex(r => r.key === key);
  if (idx > -1) {
    activeRoles.splice(idx, 1);
    el.classList.remove('selected');
    el.style.borderColor = '';
    el.style.background = '';
    el.style.color = '';
  } else {
    activeRoles.push({ key, label, beings: [''] });
    el.classList.add('selected');
    el.style.borderColor = '#c8922a';
    el.style.background = 'rgba(200,146,42,0.12)';
    el.style.color = '#e8b84b';
  }
  renderActiveRoles();
  updateWishPreview();
}

function addCustomRole() {
  const input = document.getElementById('customRoleInput');
  const val = input ? input.value.trim() : '';
  if (!val) return;
  const key = 'custom-' + Date.now();
  activeRoles.push({ key, label: val, beings: [''], custom: true });
  if (input) input.value = '';
  renderActiveRoles();
  updateWishPreview();
}

function renderActiveRoles() {
  const container = document.getElementById('activeRolesContainer');
  const list = document.getElementById('activeRolesList');
  if (!container || !list) return;

  if (activeRoles.length === 0) {
    container.style.display = 'none';
    return;
  }
  container.style.display = 'block';

  list.innerHTML = activeRoles.map((role, ri) => `
    <div style="border:1px solid rgba(200,146,42,0.2);border-radius:0.85rem;padding:1rem 1.1rem;background:rgba(200,146,42,0.04)">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.65rem">
        <div style="font-family:'Alice',serif;font-size:0.9rem;color:var(--orichalcum-pale)">${role.label}</div>
        <button onclick="removeRole(${ri})" style="background:none;border:none;color:rgba(240,232,213,0.3);cursor:pointer;font-size:0.8rem;padding:0;transition:color 0.2s" onmouseover="this.style.color='rgba(240,232,213,0.7)'" onmouseout="this.style.color='rgba(240,232,213,0.3)'">✕</button>
      </div>
      <div style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:0.75rem;color:var(--muted);margin-bottom:0.5rem">Co-Creator beings in this role:</div>
      ${role.beings.map((b, bi) => `
        <div style="display:flex;gap:0.4rem;margin-bottom:0.4rem">
          <input class="field-input" type="text" value="${b}"
            placeholder="Name / pronouns / offering…"
            oninput="updateRoleBeing(${ri},${bi},this.value)"
            style="flex:1;font-size:0.8rem;padding:0.4rem 0.7rem">
          ${role.beings.length > 1 ? `<button onclick="removeBeing(${ri},${bi})" style="background:none;border:none;color:rgba(240,232,213,0.25);cursor:pointer;font-size:0.75rem;padding:0.2rem 0.4rem;flex-shrink:0" onmouseover="this.style.color='rgba(240,232,213,0.6)'" onmouseout="this.style.color='rgba(240,232,213,0.25)'">✕</button>` : ''}
        </div>
      `).join('')}
      <button onclick="addBeing(${ri})" style="margin-top:0.2rem;padding:0.25rem 0.7rem;border-radius:2rem;border:1px dashed rgba(200,146,42,0.3);background:transparent;color:rgba(200,146,42,0.6);font-size:0.68rem;cursor:pointer;letter-spacing:0.06em;text-transform:uppercase;font-family:'Atkinson Hyperlegible',sans-serif" onmouseover="this.style.color='var(--orichalcum)';this.style.borderColor='var(--orichalcum)'" onmouseout="this.style.color='rgba(200,146,42,0.6)';this.style.borderColor='rgba(200,146,42,0.3)'">+ Add Being to This Role</button>
    </div>
  `).join('');
}

function removeRole(ri) {
  const role = activeRoles[ri];
  // If it was a preset, deselect its chip
  if (!role.custom) {
    buildRolePresets();
  }
  activeRoles.splice(ri, 1);
  renderActiveRoles();
  updateWishPreview();
}

function addBeing(ri) {
  activeRoles[ri].beings.push('');
  renderActiveRoles();
}

function removeBeing(ri, bi) {
  activeRoles[ri].beings.splice(bi, 1);
  renderActiveRoles();
}

function updateRoleBeing(ri, bi, val) {
  activeRoles[ri].beings[bi] = val;
  updateWishPreview();
}

// ── EXTEND updateWishPreview to show roles ──
const _origUpdateWishPreview = updateWishPreview;
updateWishPreview = function() {
  _origUpdateWishPreview();
  const rolesEl = document.getElementById('wPreviewRoles');
  if (!rolesEl) return;
  if (activeRoles.length > 0) {
    rolesEl.innerHTML = `<div class="wish-portal-label">Roles 🌟</div>
    <div class="roles-preview" style="width:100%;margin-top:0.3rem;display:flex;flex-wrap:wrap;gap:0.3rem">
      ${activeRoles.map(r => `<span style="font-size:0.65rem;padding:0.15rem 0.55rem;border-radius:2rem;border:1px solid rgba(200,146,42,0.4);color:var(--orichalcum);background:rgba(200,146,42,0.06)">${r.label}</span>`).join('')}
    </div>`;
  } else {
    rolesEl.innerHTML = `<div class="wish-portal-label">Roles 🌟</div><div style="font-size:0.72rem;color:var(--muted);font-style:italic">No roles chosen yet</div>`;
  }
};

// ── EXTEND buildWishForm to init roles ──
const _origBuildWishForm = buildWishForm;
buildWishForm = function() {
  _origBuildWishForm();
  renderWishProfileStatus();
  buildRolePresets();
  renderActiveRoles();
  updateWishPreview();
};


// ══════════════════════════════════════════════════════
// PROFILE & ADMIN SYSTEM
// ══════════════════════════════════════════════════════

const _sp = ['aGVhcnRs','aWdodA==']; const STEWARD_PASS = atob(_sp.join(''));
const DEFAULT_STEWARD_CES = atob('MTIzNDU2Nzg5');
const DEFAULT_STEWARD_PROFILE_PASS = atob('YXRsYXNnYXRl');
function isReservedStewardOverride(value) {
  return String(value || '') === STEWARD_PASS;
}

function createDefaultStewardEntry() {
  return {
    cesPlain: DEFAULT_STEWARD_CES,
    cesEncrypted: cesEncrypt(DEFAULT_STEWARD_CES),
    name: 'Atlas Morphoenix',
    passphrase: DEFAULT_STEWARD_PROFILE_PASS,
    registeredAt: new Date().toISOString()
  };
}
function syncProfileAcrossCollections(profile) {
  const normalized = normalizeCreatorRecord(profile);
  ['pending', 'approved', 'returned'].forEach(key => {
    const list = getStorage(key, []);
    let changed = false;
    const next = list.map(entry => {
      const sameProfile = entry.id === normalized.id || (normalized.cesNumber && entry.cesNumber === normalized.cesNumber);
      if (!sameProfile) return entry;
      changed = true;
      return { ...entry, wishAvailability: normalized.wishAvailability, directoryWishStatus: normalized.wishAvailability };
    });
    if (changed) setStorage(key, next);
  });
}

// ── PROFILE CORNER BUTTON ──
function renderProfileCorner() {
  const corner = document.getElementById('profileCorner');
  if (!corner) return;
  const user = getCurrentUser();
  const submitBtn = document.getElementById('navBtnSubmit');
  const joinCta   = document.getElementById('joinCta');
  if (user) {
    // Signed in — hide C.E.S. Profile nav tab and join CTA
    if (submitBtn) submitBtn.style.display = 'none';
    if (joinCta)   joinCta.style.display   = 'none';
    const initial = (user.name||'?')[0].toUpperCase();
    const avatarHtml = user.photo
      ? `<img src="${escapeHtml(user.photo)}" class="profile-avatar-img" alt="${escapeHtml(user.name)}">`
      : `<div class="profile-avatar-initial">${escapeHtml(user.emoji || initial)}</div>`;
    corner.innerHTML = `
      <button class="profile-avatar-btn" onclick="openProfileModal()">
        ${avatarHtml}
        <span class="profile-btn-label">${escapeHtml(user.name || 'Your Core Energetic Signature')}</span>
      </button>
      <button class="join-corner-btn profile-secondary-btn" style="opacity:0.55;font-size:0.65rem" onclick="signOutUser()">Sign Out</button>`;
  } else {
    // Not signed in — show nav tab and join CTA
    if (submitBtn) submitBtn.style.display = '';
    if (joinCta)   joinCta.style.display   = '';
    corner.innerHTML = `
      <div class="profile-auth-actions">
        <button class="join-corner-btn" onclick="setView('submit',document.getElementById('navBtnSubmit'))">Join ✦</button>
        <button class="join-corner-btn profile-secondary-btn" onclick="openSignIn()">Sign In</button>
      </div>`;
  }
}

// ── PROFILE MODAL ──
function resetSubmissionFeedback() {
  const btn = document.getElementById('submitBtn');
  const conf = document.getElementById('cesConfirmation');
  if (btn) btn.style.display = '';
  if (conf) conf.style.display = 'none';
}

function syncOathBoxes() {
  const oath1 = document.getElementById('oathBox');
  const oath2 = document.getElementById('oathBox2');
  if (oath1) oath1.classList.toggle('checked', !!formState.oathSigned);
  if (oath2) oath2.classList.toggle('checked', !!formState.oath2Signed);
}

function syncPhotoPreview(photoUrl) {
  photoDataUrl = photoUrl || null;
  formState.photoData = photoUrl || null;
  const img = document.getElementById('photoPreviewImg');
  const placeholder = document.getElementById('photoPlaceholder');
  const nameEl = document.getElementById('photoName');
  if (img) {
    img.src = photoUrl || '';
    img.style.display = photoUrl ? 'block' : 'none';
  }
  if (placeholder) {
    placeholder.style.display = photoUrl ? 'none' : 'block';
    if (!photoUrl) placeholder.textContent = normalizeAvatarMark(formState.emoji || '') || '✦';
  }
  if (nameEl) nameEl.textContent = photoUrl ? '✓ Current signature photo' : '';
}

function populateCESFormFromProfile(profile) {
  const data = normalizeCreatorRecord(profile);
  formState = createDefaultFormState();
  formState.emoji = normalizeAvatarMark(data.emoji || '');
  formState.selectedRays = data.rays.slice(0, 3);
  formState.selectedOfferings = [...data.offerings];
  formState.customOfferings = data.offerings.filter(item => !OFFERING_PRESETS.includes(item));
  formState.selectedExchanges = [...data.exchanges];
  formState.selectedSeasons = { Winter: false, Spring: false, Summer: false, Fall: false, ...data.seasons };
  formState.selectedNumerology = [...data.numerology];
  formState.customNumerology = data.numerology.filter(item => !NUMEROLOGY_PRESETS.includes(item));
  formState.selectedAccessibility = [...data.accessibility];
  formState.customAccessibility = data.accessibility.filter(item => !ACCESSIBILITY_PRESETS.includes(item));
  formState.portfolioItems = data.portfolioItems.length ? data.portfolioItems.map(item => ({ ...item })) : [createEmptyPortfolioItem('image')];
  formState.wishAvailability = data.wishAvailability;
  formState.passphrase = data.passphrase || '';
  formState.oathSigned = true;
  formState.oath2Signed = true;

  const fieldMap = {
    f_name: data.name,
    f_pronouns: data.pronouns,
    f_ces_number: data.cesNumber || '',
    f_passphrase: data.passphrase || '',
    f_title: data.title,
    f_location: data.location,
    f_heartlight: data.heartlight,
    f_timeline: data.timeline,
    f_consent: data.consent,
    f_portfolio: data.portfolioLink || '',
    f_contact_instagram: data.contactMethods.instagram || '',
    f_contact_email: data.contactMethods.email || '',
    f_contact_phone: data.contactMethods.phone || '',
    f_contact_discord: data.contactMethods.discord || '',
    f_contact_signal: data.contactMethods.signal || '',
    f_contact_whatsapp: data.contactMethods.whatsapp || '',
    f_contact_public_instagram: data.contactVisibility.instagram,
    f_contact_public_email: data.contactVisibility.email,
    f_contact_public_phone: data.contactVisibility.phone,
    f_contact_public_discord: data.contactVisibility.discord,
    f_contact_public_signal: data.contactVisibility.signal,
    f_contact_public_whatsapp: data.contactVisibility.whatsapp,
    f_avatar_mark: normalizeAvatarMark(data.emoji || ''),
  };
  Object.entries(fieldMap).forEach(([id, value]) => {
    const input = document.getElementById(id);
    if (!input) return;
    if (input.type === 'checkbox') {
      input.checked = !!value;
      return;
    }
    input.value = value || '';
  });

  syncPhotoPreview(data.photo || null);
  resetSubmissionFeedback();
  syncOathBoxes();
  buildEmojiPicker();
  buildRaySelector();
  buildChipGrid('offeringsGrid', OFFERING_PRESETS, 'selectedOfferings');
  buildExchangeToggles();
  buildSeasonToggles();
  buildChipGrid('numerologyGrid', NUMEROLOGY_PRESETS, 'selectedNumerology');
  buildChipGrid('accessibilityGrid', ACCESSIBILITY_PRESETS, 'selectedAccessibility');
  buildPortfolioInputs();
  buildWishAvailabilityToggles();
  updateCESNumberPreview();
  updatePreview();
  updateSubmitBtn();
}

function openProfileEditor() {
  const user = getCurrentUser();
  if (!user) return;
  closeProfileModal();
  setView('submit', document.getElementById('navBtnSubmit'));
  setTimeout(() => populateCESFormFromProfile(user), 80);
}

function updateProfileWishAvailability(value) {
  const user = getCurrentUser();
  if (!user) return;
  const normalized = normalizeWishAvailability(value);
  const updated = {
    ...user,
    wishAvailability: normalized,
    directoryWishStatus: normalized,
  };
  setCurrentUser(updated);
  syncProfileAcrossCollections(updated);
  renderProfileCorner();
  renderDirectory();
  openProfileModal();
}

function openProfileModal() {
  const user = getCurrentUser();
  if (!user) return;
  const overlay = document.getElementById('profileModalOverlay');
  const content = document.getElementById('profileModalContent');
  if (!overlay || !content) return;

  const pending = getStorage('pending',[]);
  const approved = getStorage('approved',[]);
  const returned = getStorage('returned',[]);
  const allSubmissions = [...pending, ...approved];
  const submission = normalizeCreatorRecord(allSubmissions.find(s => s.id === user.id) || returned.find(s => s.id === user.id) || user);
  const statusInPending = pending.find(s => s.id === user.id);
  const statusInApproved = approved.find(s => s.id === user.id);
  const statusReturned = returned.find(s => s.id === user.id);

  let statusLabel = '';
  if (statusInApproved) {
    statusLabel = `<span class="admin-tag admin-tag-approved">✦ Active in Directory</span>`;
  } else if (statusInPending) {
    statusLabel = `<span class="admin-tag admin-tag-pending">⏳ Awaiting Steward Review</span>`;
  } else if (statusReturned) {
    statusLabel = `<span style="font-size:0.68rem;letter-spacing:0.1em;text-transform:uppercase;font-family:'Atkinson Hyperlegible',sans-serif;color:#e8a0a0">↩ Returned — ${statusReturned.note||'Review note sent'}</span>`;
  }

  const initial = (submission.name||'?')[0].toUpperCase();
  const avatarHtml = submission.photo
    ? `<img src="${escapeHtml(submission.photo)}" class="profile-modal-avatar" alt="${escapeHtml(submission.name)}">`
    : `<div class="profile-modal-avatar" style="background:linear-gradient(135deg,#7a00c0,#c8922a);display:flex;align-items:center;justify-content:center;font-family:'Alice',serif;font-size:1.8rem;color:var(--cream)">${escapeHtml(submission.emoji || initial)}</div>`;

  const rayColors = {'Magenta Ray':'#c4407a','Red Ray':'#c94040','Orange Ray':'#d4732a','Yellow Ray':'#d4b830','Green Ray':'#3a9b6f','Turquoise Ray':'#2ab3c4','Blue Ray':'#3a6bb5','Indigo Ray':'#5a4a9e','Violet Ray':'#8b4fb5','Omni Ray':'#c0c0d8','Elemental Ray':'#7a9e5a','ALL Ray':'#e8d4ff'};
  const rayColor = rayColors[submission.primaryRay] || '#c8922a';
  const portfolioGallery = renderPortfolioGallery(submission.portfolioItems, { linkItems: true, gridClass: 'portfolio-gallery-grid' });

  content.innerHTML = `
    <div class="profile-modal-header">
      ${avatarHtml}
      <div>
        <div class="profile-modal-name">${escapeHtml(submission.name || 'Unnamed Being')}</div>
        <div style="font-size:0.78rem;color:${rayColor};font-family:'Atkinson Hyperlegible',sans-serif;letter-spacing:0.06em;margin-bottom:0.3rem">${escapeHtml(submission.primaryRay || '')}</div>
        ${submission.cesNumber ? `<div style="font-size:0.65rem;letter-spacing:0.14em;color:rgba(200,146,42,0.45);font-family:'Atkinson Hyperlegible',sans-serif;margin-bottom:0.4rem">C.E.S. ${escapeHtml(submission.cesNumber)}</div>` : ''}
        ${statusLabel}
      </div>
    </div>
    ${submission.title || submission.location ? `<div class="profile-modal-section">
      <div class="profile-modal-label">Identity</div>
      <div class="profile-modal-value">${escapeHtml([submission.title, submission.pronouns, submission.location].filter(Boolean).join(' · '))}</div>
    </div>` : ''}
    ${submission.heartlight ? `<div class="profile-modal-section">
      <div class="profile-modal-label">Heartlight Statement</div>
      <div class="profile-modal-value" style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:0.96rem">"${escapeHtml(submission.heartlight)}"</div>
    </div>` : ''}
    ${submission.offerings && submission.offerings.length ? `<div class="profile-modal-section">
      <div class="profile-modal-label">Offerings</div>
      <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-top:0.3rem">${submission.offerings.map(o=>`<span style="padding:0.2rem 0.65rem;border-radius:2rem;font-size:0.72rem;border:1px solid rgba(200,146,42,0.3);color:var(--orichalcum);font-family:'Atkinson Hyperlegible',sans-serif">${escapeHtml(o)}</span>`).join('')}</div>
    </div>` : ''}
    ${submission.exchanges && submission.exchanges.length ? `<div class="profile-modal-section">
      <div class="profile-modal-label">Exchange Pathways</div>
      <div class="profile-modal-value">${escapeHtml(submission.exchanges.join(', '))}</div>
    </div>` : ''}
    <div class="profile-modal-section">
      <div class="profile-modal-label">Directory Wish Status</div>
      <div class="profile-modal-value">Let the Directory reflect whether you are currently receiving new wishes.</div>
      <div style="margin-top:0.8rem">${renderWishAvailabilityBadge(submission.wishAvailability)}</div>
      <div class="profile-capacity-toggle-row">
        ${['accepting', 'full'].map(key => {
          const option = getWishAvailabilityMeta(key);
          return `<button class="profile-capacity-toggle ${submission.wishAvailability === option.key ? 'active' : ''}" onclick="updateProfileWishAvailability('${option.key}')">
            <span class="profile-capacity-toggle-title">${option.emoji} ${escapeHtml(option.label)}</span>
            <span class="profile-capacity-toggle-copy">${escapeHtml(option.copy)}</span>
          </button>`;
        }).join('')}
      </div>
    </div>
    ${portfolioGallery ? `<div class="profile-modal-section">
      <div class="profile-modal-label">Portfolio Gallery</div>
      ${portfolioGallery}
    </div>` : ''}
    ${(submission.portfolioLink || hasAnyContactMethods(submission.contactMethods) || submission.contactMethod) ? `<div class="profile-modal-section">
      <div class="profile-modal-label">Your Shared Contact Paths</div>
      ${renderPortfolioLinkLine(submission)}
      <div class="portfolio-link-line" style="margin-bottom:0.55rem">Public on Directory: ${escapeHtml(getPublicContactVisibilitySummary(submission.contactMethods, submission.contactVisibility))}</div>
      ${renderContactMethodGrid(submission.contactMethods, {
        emptyHtml: submission.contactMethod ? `<div class="portfolio-link-line">Contact: ${escapeHtml(submission.contactMethod)}</div>` : ''
      })}
    </div>` : ''}
    ${renderProfileConnectionsSection(submission)}
    ${renderProfileAgreementsSection(submission)}
    ${renderProfileWishesSection()}
    <div style="margin-top:1rem;display:flex;gap:0.6rem;flex-wrap:wrap">
      <button onclick="openProfileEditor()" style="padding:0.5rem 1.2rem;border-radius:2rem;border:1px solid rgba(200,146,42,0.35);background:rgba(200,146,42,0.07);color:var(--orichalcum);font-family:'Atkinson Hyperlegible',sans-serif;font-size:0.75rem;cursor:pointer;letter-spacing:0.06em;text-transform:uppercase;transition:all 0.2s">✏️ Edit Core Energetic Signature</button>
      <button onclick="signOutUser()" style="padding:0.5rem 1.2rem;border-radius:2rem;border:1px solid rgba(255,255,255,0.12);background:transparent;color:rgba(240,232,213,0.45);font-family:'Atkinson Hyperlegible',sans-serif;font-size:0.75rem;cursor:pointer;letter-spacing:0.06em;text-transform:uppercase;transition:all 0.2s">Sign Out</button>
    </div>
  `;
  overlay.classList.add('open');
}
function closeProfileModal() {
  const overlay = document.getElementById('profileModalOverlay');
  if (overlay) overlay.classList.remove('open');
}
function demoSignOut() {
  clearCurrentUser();
  closeProfileModal();
  renderProfileCorner();
}

// ── WIRE CES FORM SUBMISSION into pending queue ──
function submitCESProfile() {
  const now = new Date().toISOString();
  const currentUser = getCurrentUser();
  const collections = {
    pending: getStorage('pending', []),
    approved: getStorage('approved', []),
    returned: getStorage('returned', []),
  };
  const cesNumber = (document.getElementById('f_ces_number')?.value || '').trim();
  const passphrase = (document.getElementById('f_passphrase')?.value || '').trim();

  let existingKey = null;
  let existingProfile = null;
  for (const [key, list] of Object.entries(collections)) {
    const found = list.find(profile =>
      (currentUser && profile.id === currentUser.id) ||
      (cesNumber && profile.cesNumber === cesNumber)
    );
    if (found) {
      existingKey = key;
      existingProfile = found;
      break;
    }
  }
  if (!existingProfile && currentUser) existingProfile = currentUser;

  const seasons = { ...formState.selectedSeasons };
  const rays = [...formState.selectedRays];
  const portfolioItems = normalizePortfolioItems(formState.portfolioItems);
  const contactMethods = {
    instagram: (document.getElementById('f_contact_instagram')?.value || '').trim(),
    email: (document.getElementById('f_contact_email')?.value || '').trim(),
    phone: (document.getElementById('f_contact_phone')?.value || '').trim(),
    discord: (document.getElementById('f_contact_discord')?.value || '').trim(),
    signal: (document.getElementById('f_contact_signal')?.value || '').trim(),
    whatsapp: (document.getElementById('f_contact_whatsapp')?.value || '').trim(),
  };
  const contactVisibility = {
    instagram: !!document.getElementById('f_contact_public_instagram')?.checked,
    email: !!document.getElementById('f_contact_public_email')?.checked,
    phone: !!document.getElementById('f_contact_public_phone')?.checked,
    discord: !!document.getElementById('f_contact_public_discord')?.checked,
    signal: !!document.getElementById('f_contact_public_signal')?.checked,
    whatsapp: !!document.getElementById('f_contact_public_whatsapp')?.checked,
  };
  const contactSummary = getContactMethodItems(contactMethods).map(item => `${item.label}: ${item.display}`).join(' · ');
  const profile = {
    ...(existingProfile || {}),
    id: existingProfile?.id || `ces_${Date.now()}`,
    name: (document.getElementById('f_name')?.value || '').trim() || 'Unnamed Being',
    pronouns: (document.getElementById('f_pronouns')?.value || '').trim(),
    title: (document.getElementById('f_title')?.value || '').trim(),
    location: (document.getElementById('f_location')?.value || '').trim(),
    photo: photoDataUrl || formState.photoData || existingProfile?.photo || null,
    emoji: normalizeAvatarMark(formState.emoji || ''),
    ray: rays[0] || '',
    primaryRay: rays[0] ? `${rays[0]} Ray` : '',
    rays,
    heartlight: (document.getElementById('f_heartlight')?.value || '').trim(),
    offerings: [...formState.selectedOfferings],
    exchanges: [...formState.selectedExchanges],
    exchangePathways: [...formState.selectedExchanges],
    seasons,
    seasonalCapacity: Object.entries(seasons).filter(([, open]) => open).map(([season]) => season),
    timeline: document.getElementById('f_timeline')?.value || '',
    numerology: [...formState.selectedNumerology],
    accessibility: [...formState.selectedAccessibility],
    accessibilityOfferings: [...formState.selectedAccessibility],
    consent: (document.getElementById('f_consent')?.value || '').trim(),
    portfolioLink: (document.getElementById('f_portfolio')?.value || '').trim(),
    portfolio: (document.getElementById('f_portfolio')?.value || '').trim(),
    portfolioItems,
    mediaPortfolio: portfolioItems,
    contactMethods,
    contactVisibility,
    publicContactVisibility: getPublicContactMethodItems(contactMethods, contactVisibility).length > 0,
    contactMethod: contactSummary,
    contact: contactSummary,
    cesNumber: cesNumber || existingProfile?.cesNumber || null,
    passphrase: passphrase || existingProfile?.passphrase || '',
    wishAvailability: normalizeWishAvailability(formState.wishAvailability || existingProfile?.wishAvailability || existingProfile?.directoryWishStatus),
    directoryWishStatus: normalizeWishAvailability(formState.wishAvailability || existingProfile?.wishAvailability || existingProfile?.directoryWishStatus),
    season_current: getSeasonBadge(seasons),
    oathSigned: formState.oathSigned,
    oath2Signed: formState.oath2Signed,
    submittedAt: existingProfile?.submittedAt || now,
    updatedAt: now,
  };

  const targetStatus = existingKey === 'approved' ? 'approved' : 'pending';
  profile.status = targetStatus;
  if (targetStatus === 'approved') {
    profile.approvedAt = existingProfile?.approvedAt || now;
  } else {
    delete profile.approvedAt;
    delete profile.returnedAt;
    profile.note = null;
  }

  Object.keys(collections).forEach(key => {
    collections[key] = collections[key].filter(entry =>
      entry.id !== profile.id && (!profile.cesNumber || entry.cesNumber !== profile.cesNumber)
    );
  });
  collections[targetStatus].push(profile);

  setStorage('pending', collections.pending);
  setStorage('approved', collections.approved);
  setStorage('returned', collections.returned);
  setCurrentUser(profile);
  renderProfileCorner();
  renderDirectory();
  return { profile, status: targetStatus, isNew: !existingKey && !currentUser };
}

// ── HOOK INTO EXISTING "submitCES" BUTTON ──
// Find the CES form submit and wire it
document.addEventListener('DOMContentLoaded', function() {
  renderProfileCorner();
});

// ── ADMIN SYSTEM ──
let adminAuthed = false;

// tryAdminLogin defined below in CES auth system
function adminLogout() {
  adminAuthed = false;
  adminActiveCES = null;
  const input = document.getElementById('adminPassInput');
  if (input) input.value = '';
  // Return to last view before admin, or default to directory
  const returnTo = sessionStorage.getItem('preAdminView') || 'directory';
  setView(returnTo, null);
  // Re-activate the matching nav button
  const navBtns = document.querySelectorAll('nav button');
  navBtns.forEach(b => {
    b.classList.remove('active');
    if (b.getAttribute('onclick') && b.getAttribute('onclick').includes("'" + returnTo + "'")) {
      b.classList.add('active');
    }
  });
}

// setAdminTab defined below in CES auth system

function renderAdminStats() {
  const pending = getStorage('pending',[]);
  const approved = getStorage('approved',[]);
  const returned = getStorage('returned',[]);
  const row = document.getElementById('adminStatsRow');
  if (!row) return;
  row.innerHTML = [
    {num:pending.length, label:'Awaiting Review', color:'#d4b830'},
    {num:approved.length, label:'Active in Directory', color:'#7dd9a8'},
    {num:returned.length, label:'Returned for Refinement', color:'#e8a0a0'},
  ].map(s=>`<div class="admin-stat-card">
    <div class="admin-stat-num" style="color:${s.color}">${s.num}</div>
    <div class="admin-stat-label">${s.label}</div>
  </div>`).join('');
}

const RAY_COLORS = {'Magenta Ray':'#c4407a','Red Ray':'#c94040','Orange Ray':'#d4732a','Yellow Ray':'#d4b830','Green Ray':'#3a9b6f','Turquoise Ray':'#2ab3c4','Blue Ray':'#3a6bb5','Indigo Ray':'#5a4a9e','Violet Ray':'#8b4fb5','Omni Ray':'#c0c0d8','Elemental Ray':'#7a9e5a','ALL Ray':'#e8d4ff'};

function adminCardHTML(profile, actions) {
  const rayColor = RAY_COLORS[profile.primaryRay] || '#c8922a';
  const initial = (profile.name||'?')[0].toUpperCase();
  const avatarHtml = profile.photo
    ? `<img src="${profile.photo}" class="admin-avatar" style="display:block" alt="${profile.name}">`
    : `<div class="admin-avatar">${initial}</div>`;
  const date = profile.submittedAt ? new Date(profile.submittedAt).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}) : '';
  return `<div class="admin-queue-card" style="--card-ray-color:${rayColor}">
    <div class="admin-card-header">
      <div class="admin-card-meta">
        ${avatarHtml}
        <div>
          <div class="admin-card-name">${profile.name}</div>
          <div class="admin-card-ray">${profile.primaryRay||'Ray unspecified'} ${profile.rays&&profile.rays.length>1?'+ '+(profile.rays.length-1)+' more':''}</div>
          ${profile.cesNumber ? `<div style="font-size:0.62rem;letter-spacing:0.12em;color:rgba(200,146,42,0.4);font-family:'Atkinson Hyperlegible',sans-serif;margin-top:0.15rem">C.E.S. ${profile.cesNumber}</div>` : ''}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:0.68rem;color:rgba(240,232,213,0.35);font-family:'Atkinson Hyperlegible',sans-serif">${date}</div>
      </div>
    </div>
    ${profile.heartlight ? `<div class="admin-card-body" style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:0.9rem">"${profile.heartlight}"</div>` : ''}
    ${profile.offerings&&profile.offerings.length ? `<div style="display:flex;flex-wrap:wrap;gap:0.35rem;margin-bottom:0.8rem">${profile.offerings.map(o=>`<span style="padding:0.15rem 0.55rem;border-radius:2rem;font-size:0.65rem;border:1px solid ${rayColor}55;color:${rayColor};font-family:'Atkinson Hyperlegible',sans-serif">${o}</span>`).join('')}</div>` : ''}
    ${profile.note ? `<div style="font-size:0.78rem;color:#e8a0a0;font-family:'Atkinson Hyperlegible',sans-serif;margin-bottom:0.7rem;padding:0.5rem 0.8rem;border-radius:0.5rem;background:rgba(201,64,64,0.06);border:1px solid rgba(201,64,64,0.2)">↩ Steward note: "${profile.note}"</div>` : ''}
    <div class="admin-card-actions">${actions}</div>
  </div>`;
}

function renderPendingList() {
  const list = document.getElementById('pendingList');
  if (!list) return;
  const pending = getStorage('pending',[]);
  if (!pending.length) { list.innerHTML = '<div class="admin-empty">✦ No submissions awaiting review. The queue is clear and the field is held. ✦</div>'; return; }
  list.innerHTML = pending.map((p,i) => adminCardHTML(p,
    `<input class="admin-return-note" type="text" id="note_${p.id}" placeholder="Steward note for return (optional)…">
     <button class="admin-btn-accept" onclick="acceptProfile('${p.id}')">✓ Accept</button>
     <button class="admin-btn-return" onclick="returnProfile('${p.id}')">↩ Return</button>`
  )).join('');
}

function renderApprovedList() {
  const list = document.getElementById('approvedList');
  if (!list) return;
  const approved = getStorage('approved',[]);
  if (!approved.length) { list.innerHTML = '<div class="admin-empty">✦ The Directory awaits its first Co-Creators. ✦</div>'; return; }
  list.innerHTML = approved.map(p => adminCardHTML(p,
    `<button class="admin-btn-return" onclick="removeFromDirectory('${p.id}')">Remove from Directory</button>`
  )).join('');
}

function renderReturnedList() {
  const list = document.getElementById('returnedList');
  if (!list) return;
  const returned = getStorage('returned',[]);
  if (!returned.length) { list.innerHTML = '<div class="admin-empty">✦ No returned submissions. ✦</div>'; return; }
  list.innerHTML = returned.map(p => adminCardHTML(p,
    `<button class="admin-btn-accept" onclick="reAcceptProfile('${p.id}')">Accept Now</button>`
  )).join('');
}

function acceptProfile(id) {
  const pending = getStorage('pending',[]);
  const idx = pending.findIndex(p=>p.id===id);
  if (idx<0) return;
  const [profile] = pending.splice(idx,1);
  profile.status = 'approved';
  profile.approvedAt = new Date().toISOString();
  const approved = getStorage('approved',[]);
  approved.push(profile);
  setStorage('pending',pending);
  setStorage('approved',approved);
  renderAdminStats();
  renderPendingList();
  renderDirectory();
}
function returnProfile(id) {
  const pending = getStorage('pending',[]);
  const idx = pending.findIndex(p=>p.id===id);
  if (idx<0) return;
  const note = (document.getElementById('note_'+id)||{}).value || '';
  const [profile] = pending.splice(idx,1);
  profile.status = 'returned';
  profile.note = note;
  profile.returnedAt = new Date().toISOString();
  const returned = getStorage('returned',[]);
  returned.push(profile);
  setStorage('pending',pending);
  setStorage('returned',returned);
  renderAdminStats();
  renderPendingList();
  renderDirectory();
}
function reAcceptProfile(id) {
  const returned = getStorage('returned',[]);
  const idx = returned.findIndex(p=>p.id===id);
  if (idx<0) return;
  const [profile] = returned.splice(idx,1);
  profile.status = 'approved';
  profile.note = null;
  profile.approvedAt = new Date().toISOString();
  const approved = getStorage('approved',[]);
  approved.push(profile);
  setStorage('returned',returned);
  setStorage('approved',approved);
  renderAdminStats();
  renderReturnedList();
  renderDirectory();
}
function removeFromDirectory(id) {
  if (!confirm('Remove this Co-Creator from the Heartlight Directory?')) return;
  const approved = getStorage('approved',[]);
  const filtered = approved.filter(p=>p.id!==id);
  setStorage('approved',filtered);
  renderAdminStats();
  renderApprovedList();
  renderDirectory();
}

// ── PATCH CES FORM: keep init idempotent ──
const _origInitCES = initCESForm;
initCESForm = function() {
  _origInitCES();
  syncOathBoxes();
};


// ══════════════════════════════════════════════════════════════
// CES ENCRYPTION + STEWARD AUTH + LOCKOUT SYSTEM
// ══════════════════════════════════════════════════════════════

// ── CES ENCRYPTION ──
// A 9-digit number is encrypted by reversing it
// and displaying with a negative prefix: -987654321
// The stored value is the encrypted form; validation reverses it back.

function cesEncrypt(digits) {
  // digits = string of 9 numbers
  if (!digits || digits.length !== 9) return '';
  return '-' + digits.split('').reverse().join('');
}

function cesDecrypt(encrypted) {
  // encrypted = "-[reversed]" → original digits
  if (!encrypted || !encrypted.startsWith('-')) return '';
  return encrypted.slice(1).split('').reverse().join('');
}

function cesIsValid(input) {
  // input is the 9-digit plain code the user types
  const authorized = getStorage('authorizedCES', []);
  return authorized.some(entry => entry.cesPlain === input);
}

function getStewardByCode(cesPlain) {
  const authorized = getStorage('authorizedCES', []);
  return authorized.find(entry => entry.cesPlain === cesPlain) || null;
}



// ── GATE STATE ──
let gateVerifiedCES = null;  // the validated CES plain code
let gateFailAttempts = 0;    // current session attempts
const MAX_ATTEMPTS = 3;

function resetGateToStep1() {
  gateVerifiedCES = null;
  document.getElementById('gateStep1').style.display = 'block';
  document.getElementById('gateStep2').style.display = 'none';
  document.getElementById('gateLockedMsg').style.display = 'none';
  const cesInput = document.getElementById('cesCodeInput');
  if (cesInput) { cesInput.value = ''; }

  const passInput = document.getElementById('adminPassInput');
  if (passInput) passInput.value = '';
  const warn = document.getElementById('gateAttemptsWarn');
  if (warn) warn.style.display = 'none';
  const err = document.getElementById('adminLoginError');
  if (err) err.style.display = 'none';
}

function validateCESCode() {
  const input = document.getElementById('cesCodeInput');
  const err = document.getElementById('adminLoginError');
  if (!input) return;
  const val = input.value.trim();

  if (val.length !== 9) {
    showGateError('C.E.S. code must be exactly 9 digits.');
    return;
  }

  if (!cesIsValid(val)) {
    showGateError('This C.E.S. code is not registered as a Steward.');
    return;
  }

  // Code recognized — advance to passphrase step
  gateVerifiedCES = val;
  const steward = getStewardByCode(val);
  document.getElementById('gateStep1').style.display = 'none';
  document.getElementById('gateStep2').style.display = 'block';
  const welcome = document.getElementById('gateWelcomeName');
  if (welcome && steward) welcome.textContent = 'Welcome, ' + steward.name;
  const err2 = document.getElementById('adminLoginError');
  if (err2) err2.style.display = 'none';
  setTimeout(() => {
    const passInput = document.getElementById('adminPassInput');
    if (passInput) passInput.focus();
  }, 80);
}

function showGateError(msg) {
  const err = document.getElementById('adminLoginError');
  if (err) { err.style.display = 'block'; err.textContent = msg; }
}

// ── TRIPLE-CLICK SYNCHRONICITIES ──
let syncClickCount = 0;
let syncClickTimer = null;

function handleSyncClick() {
  syncClickCount++;
  clearTimeout(syncClickTimer);
  syncClickTimer = setTimeout(() => { syncClickCount = 0; }, 1200);
  if (syncClickCount >= 3) {
    syncClickCount = 0;
    clearTimeout(syncClickTimer);
    openStewardGate();
  }
}

function openStewardGate() {
  // Check if currently locked out
  const lockout = getStorage('gateLockout', null);
  if (lockout && lockout.locked) {
    const overlay = document.getElementById('stewardGateOverlay');
    if (overlay) overlay.style.display = 'flex';
    document.getElementById('gateStep1').style.display = 'none';
    document.getElementById('gateStep2').style.display = 'none';
    document.getElementById('gateLockedMsg').style.display = 'block';
    return;
  }
  resetGateToStep1();
  const overlay = document.getElementById('stewardGateOverlay');
  if (overlay) {
    overlay.style.display = 'flex';
    setTimeout(() => {
      const input = document.getElementById('cesCodeInput');
      if (input) input.focus();
    }, 100);
  }
}

function closeStewardGate() {
  const overlay = document.getElementById('stewardGateOverlay');
  if (overlay) overlay.style.display = 'none';
  // Don't reset step state — preserve where they were
  const err = document.getElementById('adminLoginError');
  if (err) err.style.display = 'none';
}

// ── PASSPHRASE VALIDATION with lockout ──
function tryAdminLogin() {
  const passInput = document.getElementById('adminPassInput');
  const err = document.getElementById('adminLoginError');
  const warn = document.getElementById('gateAttemptsWarn');
  if (!passInput) return;

  const authorized = getStorage('authorizedCES', []);
  const stewardEntry = authorized.find(e => e.cesPlain === gateVerifiedCES);
  const enteredPass = passInput.value.trim();
  const currentPass = String(stewardEntry && stewardEntry.passphrase ? stewardEntry.passphrase : '').trim();

  if (!stewardEntry) {
    showGateError('This Steward profile could not be found.');
    return;
  }

  if (!currentPass) {
    showGateError('No passphrase is set for this Steward profile. Contact the Primary Steward.');
    return;
  }

  if (isReservedStewardOverride(enteredPass) && enteredPass !== currentPass) {
    showGateError('The master passphrase only clears a lockout after access is suspended.');
    passInput.value = '';
    if (warn) warn.style.display = 'none';
    passInput.focus();
    return;
  }

  if (enteredPass === currentPass) {
    // SUCCESS
    gateFailAttempts = 0;
    adminAuthed = true;
    adminActiveCES = gateVerifiedCES;
    closeStewardGate();
    resetGateToStep1();
    // Remember which view we were on before entering admin
    const currentView = Array.from(document.querySelectorAll('[id^="view-"]'))
      .find(el => el.style.display === 'block');
    sessionStorage.setItem('preAdminView', currentView ? currentView.id.replace('view-', '') : 'directory');
    // Switch to admin view
    setView('admin', null);
    document.getElementById('adminPanel').style.display = 'block';
    renderAdminStats();
    renderPendingList();
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  } else {
    // FAILED attempt
    gateFailAttempts++;
    passInput.value = '';

    const remaining = MAX_ATTEMPTS - gateFailAttempts;

    if (gateFailAttempts >= MAX_ATTEMPTS) {
      // LOCKOUT
      const steward = getStewardByCode(gateVerifiedCES);
      const logEntry = {
        id: 'lock_' + Date.now(),
        cesEncrypted: cesEncrypt(gateVerifiedCES || 'unknown'),
        stewardName: steward ? steward.name : 'Unknown',
        timestamp: new Date().toISOString(),
        attempts: MAX_ATTEMPTS,
        type: 'lockout',
        message: 'Steward field access suspended after ' + MAX_ATTEMPTS + ' failed passphrase attempts.'
      };
      const log = getStorage('securityLog', []);
      log.unshift(logEntry);
      setStorage('securityLog', log);
      // Lock this session
      setStorage('gateLockout', { locked: true, timestamp: logEntry.timestamp, cesEncrypted: logEntry.cesEncrypted });
      gateFailAttempts = 0;
      // Show locked state
      document.getElementById('gateStep2').style.display = 'none';
      document.getElementById('gateLockedMsg').style.display = 'block';
      if (warn) warn.style.display = 'none';
    } else {
      // Show warning
      if (warn) {
        warn.style.display = 'block';
        warn.textContent = remaining + ' attempt' + (remaining === 1 ? '' : 's') + ' remaining before access is suspended.';
      }
      passInput.focus();
    }
  }
};

// ── PRIMARY STEWARD OVERRIDE (clears lockout with master passphrase) ──
function attemptPrimaryOverride() {
  const input = document.getElementById('overridePassInput');
  const err = document.getElementById('overrideError');
  if (!input) return;
  const val = input.value;
  // Must match the original master passphrase (never per-steward override)
  if (val === STEWARD_PASS) {
    setStorage('gateLockout', null);
    gateFailAttempts = 0;
    input.value = '';
    if (err) err.style.display = 'none';
    resetGateToStep1();
  } else {
    input.value = '';
    if (err) { err.textContent = 'Passphrase not recognized.'; err.style.display = 'block'; }
  }
}

// ── URL EMERGENCY RESET: add ?stewardReset to URL to clear lockout ──
(function() {
  const params = new URLSearchParams(window.location.search);
  if (params.has('stewardReset')) {
    setStorage('gateLockout', null);
    // Clean URL without reload
    const clean = window.location.pathname + window.location.hash;
    window.history.replaceState({}, '', clean);
  }
})();

let adminActiveCES = null;

// ── SETTINGS TAB ──
function setAdminTab(tab, el) {
  const tabs = ['pending','approved','returned','security'];
  tabs.forEach(t => {
    const contentEl = document.getElementById('adminTabContent' + t.charAt(0).toUpperCase() + t.slice(1));
    const tabEl = document.getElementById('adminTab' + t.charAt(0).toUpperCase() + t.slice(1));
    if (contentEl) contentEl.style.display = t === tab ? 'block' : 'none';
    if (tabEl) {
      tabEl.style.background = t === tab ? 'rgba(200,146,42,0.1)' : 'transparent';
      tabEl.style.color = t === tab ? 'var(--orichalcum)' : 'rgba(240,232,213,0.5)';
      tabEl.style.borderColor = t === tab ? 'rgba(200,146,42,0.4)' : 'rgba(255,255,255,0.12)';
    }
  });
  if (tab === 'pending') renderPendingList();
  if (tab === 'approved') renderApprovedList();
  if (tab === 'returned') renderReturnedList();
  if (tab === 'security') renderSecuritySettings();
}

function renderSecuritySettings() {
  renderAuthorizedList();
  renderSecurityLog();
}

function renderAuthorizedList() {
  const list = document.getElementById('authorizedList');
  if (!list) return;
  const authorized = getStorage('authorizedCES', []);
  if (!authorized.length) {
    list.innerHTML = '<div class="admin-empty" style="padding:1rem">No Steward C.E.S. codes registered yet.</div>';
    return;
  }
  list.innerHTML = authorized.map((entry, i) => `
    <div class="admin-member-row" id="steward-card-${i}" style="flex-direction:column;align-items:stretch;gap:0.5rem;padding:0.75rem 1rem">

      <!-- Name row + Revoke -->
      <div style="display:flex;align-items:center;justify-content:space-between;gap:0.75rem">
        <div class="admin-member-info" style="margin:0">
          <div class="admin-avatar" style="width:36px;height:36px;font-size:0.9rem">${(entry.name||'?')[0].toUpperCase()}</div>
          <div>
            <div style="font-family:'Alice',serif;font-size:0.88rem;color:var(--cream)">${entry.name}</div>
            <div style="font-size:0.66rem;color:rgba(200,146,42,0.5);font-family:'Atkinson Hyperlegible',sans-serif;letter-spacing:0.05em;margin-top:0.1rem">C.E.S. ${entry.cesPlain}${entry.cesEncrypted}</div>
          </div>
        </div>
        <button onclick="revokeCES(${i})" style="padding:0.28rem 0.7rem;border-radius:2rem;border:1px solid rgba(201,64,64,0.35);background:transparent;color:#e8a0a0;font-size:0.65rem;cursor:pointer;font-family:'Atkinson Hyperlegible',sans-serif;letter-spacing:0.06em;text-transform:uppercase;transition:all 0.2s;flex-shrink:0" onmouseover="this.style.background='rgba(201,64,64,0.12)'" onmouseout="this.style.background='transparent'">Revoke</button>
      </div>

      <!-- Passphrase row: reveal + edit button -->
      <div style="display:flex;align-items:center;gap:0.6rem;padding:0.4rem 0.6rem;border-radius:0.5rem;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06)">
        <div style="font-family:'Atkinson Hyperlegible',sans-serif;font-size:0.62rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(200,146,42,0.45);min-width:56px">Passphrase</div>
        <div id="pp_${i}" style="font-family:'Atkinson Hyperlegible',sans-serif;font-size:0.78rem;letter-spacing:0.14em;color:rgba(240,232,213,0.6);flex:1">••••••</div>
        <button onclick="togglePassphrase(${i},'${entry.passphrase||''}')" style="background:none;border:none;color:rgba(200,146,42,0.4);font-size:0.62rem;cursor:pointer;font-family:'Atkinson Hyperlegible',sans-serif;letter-spacing:0.06em;text-transform:uppercase;transition:color 0.2s;padding:0.1rem 0.3rem;flex-shrink:0" onmouseover="this.style.color='rgba(200,146,42,0.8)'" onmouseout="this.style.color='rgba(200,146,42,0.4)'">Reveal</button>
        <button onclick="openEditPassphrase(${i})" id="editBtn_${i}" style="background:none;border:1px solid rgba(200,146,42,0.25);border-radius:1rem;color:rgba(200,146,42,0.55);font-size:0.6rem;cursor:pointer;font-family:'Atkinson Hyperlegible',sans-serif;letter-spacing:0.06em;text-transform:uppercase;transition:all 0.2s;padding:0.18rem 0.55rem;flex-shrink:0" onmouseover="this.style.borderColor='rgba(200,146,42,0.6)';this.style.color='var(--orichalcum)'" onmouseout="this.style.borderColor='rgba(200,146,42,0.25)';this.style.color='rgba(200,146,42,0.55)'">Edit</button>
      </div>

      <!-- Inline edit passphrase panel (hidden by default) -->
      <div id="editPass_${i}" style="display:none;padding:0.7rem 0.8rem;border-radius:0.6rem;background:rgba(200,146,42,0.04);border:1px solid rgba(200,146,42,0.15)">
        <div style="font-family:'Atkinson Hyperlegible',sans-serif;font-size:0.6rem;letter-spacing:0.12em;text-transform:uppercase;color:rgba(200,146,42,0.5);margin-bottom:0.55rem">Edit Passphrase — ${entry.name}</div>
        <div style="display:flex;gap:0.5rem;align-items:flex-end;flex-wrap:wrap">
          <div style="flex:1;min-width:130px">
            <div style="font-family:'Atkinson Hyperlegible',sans-serif;font-size:0.6rem;letter-spacing:0.08em;text-transform:uppercase;color:rgba(240,232,213,0.3);margin-bottom:0.28rem">New Passphrase</div>
            <input type="password" id="newPass_${i}" class="field-input" placeholder="Enter new passphrase…" style="font-size:0.82rem;width:100%;box-sizing:border-box" onkeydown="if(event.key==='Enter')saveEditPassphrase(${i})">
          </div>
          <div style="min-width:120px">
            <div style="font-family:'Atkinson Hyperlegible',sans-serif;font-size:0.6rem;letter-spacing:0.08em;text-transform:uppercase;color:rgba(240,232,213,0.3);margin-bottom:0.28rem">Confirm</div>
            <input type="password" id="confirmPass_${i}" class="field-input" placeholder="Confirm passphrase…" style="font-size:0.82rem;width:100%;box-sizing:border-box" onkeydown="if(event.key==='Enter')saveEditPassphrase(${i})">
          </div>
          <div style="display:flex;gap:0.4rem;flex-shrink:0;padding-bottom:0.02rem">
            <button onclick="saveEditPassphrase(${i})" style="padding:0.45rem 0.9rem;border-radius:2rem;border:1px solid rgba(58,155,111,0.4);background:rgba(58,155,111,0.07);color:#7dd9a8;font-family:'Atkinson Hyperlegible',sans-serif;font-size:0.7rem;cursor:pointer;letter-spacing:0.06em;text-transform:uppercase;transition:all 0.2s;white-space:nowrap" onmouseover="this.style.background='rgba(58,155,111,0.18)'" onmouseout="this.style.background='rgba(58,155,111,0.07)'">Save</button>
            <button onclick="closeEditPassphrase(${i})" style="padding:0.45rem 0.9rem;border-radius:2rem;border:1px solid rgba(255,255,255,0.1);background:transparent;color:rgba(240,232,213,0.3);font-family:'Atkinson Hyperlegible',sans-serif;font-size:0.7rem;cursor:pointer;letter-spacing:0.06em;text-transform:uppercase;transition:all 0.2s;white-space:nowrap" onmouseover="this.style.color='rgba(240,232,213,0.6)'" onmouseout="this.style.color='rgba(240,232,213,0.3)'">Cancel</button>
          </div>
        </div>
        <div id="editPassMsg_${i}" style="margin-top:0.45rem;font-size:0.72rem;display:none;font-family:'Atkinson Hyperlegible',sans-serif"></div>
      </div>

    </div>
  `).join('');
}

function openEditPassphrase(i) {
  const panel = document.getElementById('editPass_' + i);
  const btn   = document.getElementById('editBtn_' + i);
  if (!panel) return;
  // Close any other open editors first
  document.querySelectorAll('[id^="editPass_"]').forEach(el => {
    if (el.id !== 'editPass_' + i) { el.style.display = 'none'; }
  });
  const isOpen = panel.style.display === 'block';
  panel.style.display = isOpen ? 'none' : 'block';
  if (!isOpen) {
    setTimeout(() => {
      const inp = document.getElementById('newPass_' + i);
      if (inp) inp.focus();
    }, 60);
  }
  // Clear fields when closing
  if (isOpen) {
    const f1 = document.getElementById('newPass_' + i);
    const f2 = document.getElementById('confirmPass_' + i);
    const msg = document.getElementById('editPassMsg_' + i);
    if (f1) f1.value = '';
    if (f2) f2.value = '';
    if (msg) msg.style.display = 'none';
  }
}

function closeEditPassphrase(i) {
  const panel = document.getElementById('editPass_' + i);
  if (panel) panel.style.display = 'none';
  const f1 = document.getElementById('newPass_' + i);
  const f2 = document.getElementById('confirmPass_' + i);
  const msg = document.getElementById('editPassMsg_' + i);
  if (f1) f1.value = '';
  if (f2) f2.value = '';
  if (msg) msg.style.display = 'none';
}

function saveEditPassphrase(i) {
  const f1  = document.getElementById('newPass_' + i);
  const f2  = document.getElementById('confirmPass_' + i);
  const msg = document.getElementById('editPassMsg_' + i);
  if (!f1 || !f2 || !msg) return;

  const showMsg = (text, color) => {
    msg.style.display = 'block';
    msg.style.color = color;
    msg.textContent = text;
  };

  if (!f1.value.trim()) { showMsg('Please enter a new passphrase.', '#e8a0a0'); return; }
  if (f1.value !== f2.value) { showMsg('Passphrases do not match.', '#e8a0a0'); return; }
  if (f1.value.trim().length < 4) { showMsg('Passphrase must be at least 4 characters.', '#e8a0a0'); return; }
  if (isReservedStewardOverride(f1.value.trim())) {
    showMsg('That passphrase is reserved for lockout recovery only.', '#e8a0a0');
    return;
  }

  const authorized = getStorage('authorizedCES', []);
  if (!authorized[i]) { showMsg('Steward not found.', '#e8a0a0'); return; }

  authorized[i].passphrase = f1.value.trim();
  setStorage('authorizedCES', authorized);

  // Log the passphrase update
  const log = getStorage('securityLog', []);
  log.unshift({
    id: 'passupdate_' + Date.now(),
    cesEncrypted: authorized[i].cesEncrypted,
    stewardName: authorized[i].name,
    timestamp: new Date().toISOString(),
    type: 'passupdate',
    message: 'Passphrase updated for ' + authorized[i].name + ' by active Steward.'
  });
  setStorage('securityLog', log);

  showMsg('✓ Passphrase updated for ' + authorized[i].name + '.', '#7dd9a8');

  // Reset reveal state and re-render after short delay
  _ppVisible = {};
  setTimeout(() => {
    closeEditPassphrase(i);
    renderAuthorizedList();
  }, 1400);
}

function renderSecurityLog() {
  const el = document.getElementById('securityLog');
  if (!el) return;
  const log = getStorage('securityLog', []);
  if (!log.length) {
    el.innerHTML = '<div class="admin-empty" style="padding:1rem">The field is clear. No security events recorded.</div>';
    return;
  }
  el.innerHTML = log.map(entry => {
    const date = new Date(entry.timestamp).toLocaleString('en-US', {month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});
    return `<div style="display:flex;align-items:flex-start;justify-content:space-between;padding:0.7rem 1rem;border-radius:0.65rem;background:rgba(201,64,64,0.04);border:1px solid rgba(201,64,64,0.15);margin-bottom:0.45rem;gap:1rem">
      <div>
        <div style="font-size:0.78rem;color:rgba(240,232,213,0.7);font-family:'Atkinson Hyperlegible',sans-serif;margin-bottom:0.2rem">${entry.message}</div>
        <div style="font-size:0.65rem;color:rgba(200,146,42,0.45);font-family:'Atkinson Hyperlegible',sans-serif;letter-spacing:0.06em">CES: ${entry.cesEncrypted} &nbsp;·&nbsp; ${entry.stewardName}</div>
      </div>
      <div style="font-size:0.65rem;color:rgba(240,232,213,0.3);white-space:nowrap;font-family:'Atkinson Hyperlegible',sans-serif">${date}</div>
    </div>`;
  }).join('');

  // Show unlock button if currently locked
  const lockout = getStorage('gateLockout', null);
  if (lockout && lockout.locked) {
    el.innerHTML += `<div style="margin-top:1rem;padding:0.85rem 1rem;border-radius:0.75rem;border:1px solid rgba(212,184,48,0.3);background:rgba(212,184,48,0.05);display:flex;align-items:center;justify-content:space-between;gap:1rem">
      <div style="font-size:0.8rem;color:rgba(212,184,48,0.8);font-family:'Atkinson Hyperlegible',sans-serif">🔒 Gate currently locked. Suspended at ${new Date(lockout.timestamp).toLocaleString('en-US',{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'})}</div>
      <button onclick="unlockGate()" style="padding:0.35rem 0.9rem;border-radius:2rem;border:1px solid rgba(58,155,111,0.4);background:rgba(58,155,111,0.07);color:#7dd9a8;font-size:0.72rem;cursor:pointer;font-family:'Atkinson Hyperlegible',sans-serif;letter-spacing:0.06em;text-transform:uppercase;white-space:nowrap;transition:all 0.2s" onmouseover="this.style.background='rgba(58,155,111,0.18)'" onmouseout="this.style.background='rgba(58,155,111,0.07)'">Unlock Gate</button>
    </div>`;
  }
}

function unlockGate() {
  setStorage('gateLockout', { locked: false });
  gateFailAttempts = 0;
  renderSecurityLog();
  const log = getStorage('securityLog', []);
  log.unshift({
    id: 'unlock_' + Date.now(),
    cesEncrypted: '—',
    stewardName: 'Admin',
    timestamp: new Date().toISOString(),
    type: 'unlock',
    message: 'Gate lockout cleared by active Steward.'
  });
  setStorage('securityLog', log);
  renderSecurityLog();
}

function generatePassphrase() {
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
  let code = '';
  for (let i = 0; i < 8; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

let _ppVisible = {};
function togglePassphrase(idx, code) {
  const el = document.getElementById('pp_' + idx);
  if (!el) return;
  _ppVisible[idx] = !_ppVisible[idx];
  el.textContent = _ppVisible[idx] ? (code || '(not set)') : '••••••';
  // Auto-hide after 8 seconds
  if (_ppVisible[idx]) setTimeout(() => {
    _ppVisible[idx] = false;
    if (el) el.textContent = '••••••';
  }, 8000);
}

function addAuthorizedCES() {
  const cesInput = document.getElementById('newCESInput');
  const nameInput = document.getElementById('newStewardName');
  const ppInput = document.getElementById('newStewardPassphrase');
  if (!cesInput || !nameInput) return;
  const cesVal = cesInput.value.trim();
  const nameVal = nameInput.value.trim();
  const ppVal = (ppInput && ppInput.value.trim()) ? ppInput.value.trim() : generatePassphrase();
  if (cesVal.length !== 9) { alert('Please enter a valid 9-digit C.E.S. code.'); return; }
  if (!nameVal) { alert('Please enter a name for this Steward.'); return; }
  if (isReservedStewardOverride(ppVal)) {
    alert('That passphrase is reserved for lockout recovery only. Please choose a different steward passphrase.');
    return;
  }
  const authorized = getStorage('authorizedCES', []);
  if (authorized.some(e => e.cesPlain === cesVal)) { alert('This C.E.S. code is already registered.'); return; }
  authorized.push({ cesPlain: cesVal, cesEncrypted: cesEncrypt(cesVal), name: nameVal, passphrase: ppVal, registeredAt: new Date().toISOString() });
  setStorage('authorizedCES', authorized);
  cesInput.value = '';
  nameInput.value = '';
  if (ppInput) ppInput.value = '';
  const preview = document.getElementById('newCESPreview');
  if (preview) preview.textContent = '';
  _ppVisible = {};
  renderAuthorizedList();
  // Show the generated passphrase in a clear alert so admin can note it
  setTimeout(() => {
    showPassphraseAlert(nameVal, ppVal);
  }, 200);
}

function showPassphraseAlert(name, code) {
  // Create a temporary prominent notice
  const existing = document.getElementById('pcAlertOverlay');
  if (existing) existing.remove();
  const overlay = document.createElement('div');
  overlay.id = 'pcAlertOverlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,5,0.85);z-index:9999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(8px)';
  overlay.innerHTML = `
    <div style="background:linear-gradient(160deg,#1a0040 0%,#0d0025 100%);border:1px solid rgba(200,146,42,0.35);border-radius:20px;max-width:360px;width:90%;padding:2.2rem;text-align:center">
      <div style="font-size:1.6rem;margin-bottom:0.8rem">🔑</div>
      <div style="font-family:'Alice',serif;font-size:1.05rem;color:var(--orichalcum-pale);margin-bottom:0.4rem">Steward Registered</div>
      <div style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:0.82rem;color:rgba(240,232,213,0.4);margin-bottom:1.4rem">Share this passphrase with <strong style="color:rgba(240,232,213,0.7);font-style:normal">\${name}</strong>. It will not be shown in full again.</div>
      <div style="background:rgba(200,146,42,0.06);border:1px solid rgba(200,146,42,0.2);border-radius:0.75rem;padding:1rem;margin-bottom:1.4rem">
        <div style="font-family:'Atkinson Hyperlegible',sans-serif;font-size:0.6rem;letter-spacing:0.14em;text-transform:uppercase;color:rgba(200,146,42,0.5);margin-bottom:0.4rem">Passphrase</div>
        <div style="font-family:'Atkinson Hyperlegible',sans-serif;font-size:1.35rem;letter-spacing:0.22em;color:var(--orichalcum-pale)">\${code}</div>
      </div>
      <button onclick="document.getElementById('pcAlertOverlay').remove()" style="width:100%;padding:0.65rem;border-radius:2rem;border:1px solid rgba(200,146,42,0.3);background:rgba(200,146,42,0.07);color:var(--orichalcum);font-family:'Alice',serif;font-size:0.88rem;cursor:pointer;transition:all 0.3s" onmouseover="this.style.background='rgba(200,146,42,0.15)'" onmouseout="this.style.background='rgba(200,146,42,0.07)'">I have noted this passphrase ✓</button>
    </div>
  `;
  document.body.appendChild(overlay);
}

function revokeCES(idx) {
  const authorized = getStorage('authorizedCES', []);
  const entry = authorized[idx];
  if (!entry) return;
  if (!confirm('Revoke Steward access for ' + entry.name + '? They will no longer be able to enter the Steward Field.')) return;
  // Log the revocation
  const log = getStorage('securityLog', []);
  log.unshift({
    id: 'revoke_' + Date.now(),
    cesEncrypted: entry.cesEncrypted,
    stewardName: entry.name,
    timestamp: new Date().toISOString(),
    type: 'revoke',
    message: 'Steward access revoked for ' + entry.name + '.'
  });
  setStorage('securityLog', log);
  authorized.splice(idx, 1);
  setStorage('authorizedCES', authorized);
  renderAuthorizedList();
  renderSecurityLog();
}

function updateNewCESPreview() {
  const input = document.getElementById('newCESInput');
  const preview = document.getElementById('newCESPreview');
  if (!input || !preview) return;
  preview.textContent = input.value.length === 9 ? cesEncrypt(input.value) : '';
}



// ── SEED the demo Steward on first load ──
// ── CES NUMBER FIELD LIVE FEEDBACK ──
function updateCESNumberPreview() {
  const input = document.getElementById('f_ces_number');
  const status = document.getElementById('cesNumberStatus');
  if (!input || !status) return;
  const val = input.value;
  const quadRepeat = /(\d)\1{3}/.test(val);
  if (val.length === 0) {
    status.textContent = '';
  } else if (quadRepeat) {
    status.style.color = '#e8a0a0';
    status.textContent = '\u2726 A C.E.S. number may hold a digit no more than 3 times in a row';
  } else if (val.length < 9) {
    status.style.color = 'rgba(240,232,213,0.3)';
    status.textContent = (9 - val.length) + ' digit' + (9 - val.length === 1 ? '' : 's') + ' remaining';
  } else if (val.length === 9) {
    status.style.color = 'rgba(58,155,111,0.8)';
    status.textContent = '\u2713 C.E.S. number complete';
  }
  updateSubmitBtn();
}

function generateCESNumberValue() {
  const used = new Set(
    ['pending', 'approved', 'returned']
      .flatMap(key => getStorage(key, []))
      .map(profile => String(profile?.cesNumber || profile?.ces || profile?.cesPlain || '').trim())
      .filter(Boolean)
  );

  for (let attempt = 0; attempt < 200; attempt++) {
    let value = '';
    while (value.length < 9) {
      const nextDigit = String(Math.floor(Math.random() * 10));
      const recent = value.slice(-3);
      if (recent.length === 3 && recent.split('').every(digit => digit === nextDigit)) continue;
      value += nextDigit;
    }
    if (!used.has(value)) return value;
  }
  return String(Math.floor(100000000 + Math.random() * 900000000));
}

function assignGeneratedCESNumber() {
  const input = document.getElementById('f_ces_number');
  if (!input) return;
  input.value = generateCESNumberValue();
  updateCESNumberPreview();
  updatePreview();
}

// cesNumber is captured directly inside submitCESProfile

// ── BEING SIGN-IN SYSTEM ──

function openSignIn() {
  const overlay = document.getElementById('signInOverlay');
  if (overlay) {
    overlay.style.display = 'flex';
    setTimeout(() => {
      const inp = document.getElementById('signInCESInput');
      if (inp) inp.focus();
    }, 80);
  }
}

function closeSignIn() {
  const overlay = document.getElementById('signInOverlay');
  if (overlay) overlay.style.display = 'none';
  const inp = document.getElementById('signInCESInput');
  if (inp) inp.value = '';
  const pass = document.getElementById('signInPassInput');
  if (pass) pass.value = '';
  const err = document.getElementById('signInCESError');
  if (err) err.style.display = 'none';
}

async function submitSignIn() {
  await hydrateStorageFromRemote();
  const inp = document.getElementById('signInCESInput');
  const pass = document.getElementById('signInPassInput');
  const err = document.getElementById('signInCESError');
  if (!inp || !pass) return;
  const val = inp.value.trim();
  const passphrase = pass.value.trim();

  if (val.length !== 9 || !/^\d{9}$/.test(val)) {
    err.style.color = '#e8a0a0';
    err.textContent = 'Please enter your full 9-digit C.E.S. number.';
    err.style.display = 'block';
    return;
  }

  // Search pending + approved for a profile with this CES number
  const pending  = getStorage('pending', []);
  const approved = getStorage('approved', []);
  const returned = getStorage('returned', []);
  const all = [...pending, ...approved, ...returned];
  const found = all.find(p => p.cesNumber === val || p.ces === val || p.cesPlain === val);

  if (found) {
    if ((found.passphrase || '').trim()) {
      if (!passphrase) {
        err.style.color = '#e8a0a0';
        err.textContent = 'Please enter your sign-in passphrase.';
        err.style.display = 'block';
        return;
      }
      if ((found.passphrase || '').trim() !== passphrase) {
        err.textContent = 'That passphrase does not match this Core Energetic Signature.';
        err.style.display = 'block';
        err.style.color = '#e8a0a0';
        return;
      }
    }
    setCurrentUser(found);
    renderProfileCorner();
    closeSignIn();
    // Navigate to directory so they can see themselves
    setView('directory', document.querySelector('nav button'));
  } else {
    // Not found — offer to create a profile
    err.textContent = 'No Core Energetic Signature found with this C.E.S. number. Would you like to create one?';
    err.style.display = 'block';
    err.style.color = 'rgba(232,184,75,0.8)';
    // Change button text to guide them
    setTimeout(() => {
      inp.value = '';
      closeSignIn();
      setView('submit', document.getElementById('navBtnSubmit'));
    }, 2200);
  }
}

function signOutUser() {
  if (!confirm('Sign out of your C.E.S. session?')) return;
  clearCurrentUser();
  renderProfileCorner();
  setView('directory', document.querySelector('nav button'));
}
