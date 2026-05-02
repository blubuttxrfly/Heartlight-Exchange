/**
 * Offerings Bot — Match Engine
 * 
 * Connects wishes to offerings using resonance scoring.
 */

const fs = require('fs');
const path = require('path');

// ── Config ──────────────────────────────────────────────────────
const STORAGE_URL = process.env.HEARTLIGHT_STORAGE_URL || 'https://heartlight-exchange.vercel.app/api/store';
const LOG_PATH = path.join(__dirname, 'match-log.json');
const SCORE_THRESHOLD = 0.3; // Minimum resonance score to propose
const MAX_PROPOSALS_PER_WISH = 3;

// ── Resonance Dictionary ────────────────────────────────────────
// Maps wish keywords to likely offering matches
const RESONANCE_MAP = {
  // Healing modalities
  'heal': ['healing', 'reiki', 'energy', 'therapy', 'treatment', 'restore'],
  'anxiety': ['calm', 'peace', 'grounding', 'breathwork', 'meditation', 'nervous'],
  'depression': ['uplift', 'joy', 'light', 'therapy', 'counseling'],
  'trauma': ['somatic', 'release', 'therapy', 'safe', 'hold'],
  'pain': ['relief', 'bodywork', 'massage', 'somatic', 'physical'],
  'sleep': ['rest', 'dream', 'calm', 'night', 'insomnia'],
  
  // Creative
  'art': ['illustration', 'design', 'creative', 'paint', 'draw'],
  'music': ['sound', 'song', 'vocal', 'instrument', 'audio'],
  'write': ['writing', 'copy', 'edit', 'words', 'poetry'],
  'photo': ['photography', 'image', 'visual', 'shoot'],
  'video': ['film', 'video', 'edit', 'media', 'documentary'],
  'design': ['design', 'graphic', 'web', 'brand', 'visual'],
  
  // Body / Movement
  'move': ['dance', 'movement', 'yoga', 'body', 'somatic'],
  'dance': ['dance', 'movement', 'somatic', 'ritual', 'body'],
  'yoga': ['yoga', 'stretch', 'movement', 'body', 'breath'],
  'fitness': ['strength', 'training', 'exercise', 'movement'],
  
  // Spirit / Mind
  'read': ['reading', 'astrology', 'tarot', 'divination', 'oracle'],
  'guidance': ['mentor', 'coach', 'guide', 'counsel', 'advise'],
  'astrology': ['astrology', 'natal', 'chart', 'transit', 'zodiac'],
  'tarot': ['tarot', 'oracle', 'divination', 'reading', 'cards'],
  'meditation': ['meditation', 'mindfulness', 'calm', 'sitting'],
  'ritual': ['ritual', 'ceremony', 'sacred', 'practice'],
  'plant': ['herbal', 'plant', 'tea', 'tincture', 'flower', 'medicine'],
  'crystal': ['crystal', 'grid', 'stone', 'gem', 'mineral'],
  'space': ['clearing', 'feng', 'space', 'home', 'arrange'],
  
  // Practical
  'build': ['build', 'construct', 'make', 'craft', 'wood'],
  'fix': ['repair', 'mend', 'fix', 'restore'],
  'grow': ['garden', 'farm', 'grow', 'plant', 'permaculture'],
  'cook': ['cook', 'food', 'meal', 'kitchen', 'culinary'],
  'clean': ['clean', 'tidy', 'organize', 'space'],
  'teach': ['teach', 'educate', 'tutor', 'train', 'workshop'],
  'tech': ['tech', 'code', 'web', 'software', 'digital', 'app'],
  'web': ['web', 'site', 'design', 'code', 'digital'],
  
  // Community
  'facilitate': ['facilitate', 'host', 'hold', 'circle', 'gather'],
  'community': ['community', 'group', 'collective', 'together'],
  'event': ['event', 'plan', 'organize', 'gather', 'host'],
  'retreat': ['retreat', 'getaway', 'immersion', 'journey'],
  'trip': ['travel', 'trip', 'guide', 'tour', 'journey'],
  
  // Emotional
  'love': ['love', 'relationship', 'heart', 'connection'],
  'grief': ['grief', 'loss', 'hold', 'companion', 'process'],
  'family': ['family', 'parent', 'child', 'ancestral'],
  'confidence': ['confidence', 'self', 'esteem', 'empower'],
};

// ── Keyword Extraction ──────────────────────────────────────────
function extractKeywords(text) {
  if (!text) return [];
  const lower = text.toLowerCase();
  const words = lower.match(/[a-z]+/g) || [];
  const keywords = new Set();
  
  // Direct word matches
  for (const word of words) {
    if (word.length > 2) keywords.add(word);
  }
  
  // Resonance map lookups
  for (const [key, values] of Object.entries(RESONANCE_MAP)) {
    if (lower.includes(key)) {
      keywords.add(key);
      values.forEach(v => keywords.add(v));
    }
  }
  
  return Array.from(keywords);
}

// ── Ray Resonance ─────────────────────────────────────────────
function rayResonance(ray1, ray2) {
  if (!ray1 || !ray2) return 0;
  const r1 = ray1.toLowerCase().replace(' ray', '');
  const r2 = ray2.toLowerCase().replace(' ray', '');
  
  if (r1 === r2) return 1.0;
  
  // Adjacent rays have partial resonance
  const rayOrder = ['red', 'orange', 'yellow', 'green', 'turquoise', 'blue', 'indigo', 'violet', 'magenta'];
  const i1 = rayOrder.indexOf(r1);
  const i2 = rayOrder.indexOf(r2);
  if (i1 >= 0 && i2 >= 0) {
    const dist = Math.abs(i1 - i2);
    if (dist === 1) return 0.5;
    if (dist === 2) return 0.2;
  }
  
  // Omni and ALL resonate with everything
  if (r1 === 'omni' || r1 === 'all' || r2 === 'omni' || r2 === 'all') return 0.7;
  
  return 0;
}

// ── Wish-Profile Matching ─────────────────────────────────────
function scoreMatch(wish, profile) {
  let score = 0;
  
  // Extract wish content
  const wishText = [wish.letter, wish.category, wish.title, wish.description]
    .filter(Boolean)
    .join(' ');
  const wishKeywords = extractKeywords(wishText);
  
  // Extract profile offerings
  const profileText = [
    ...(profile.offerings || []),
    profile.heartlight,
    profile.title,
    profile.location,
  ].filter(Boolean).join(' ');
  const profileKeywords = extractKeywords(profileText);
  
  // Keyword overlap (main signal)
  const overlap = wishKeywords.filter(k => profileKeywords.includes(k));
  const keywordScore = overlap.length / Math.max(wishKeywords.length, 1);
  score += keywordScore * 1.0;
  
  // Ray resonance
  const rayScore = rayResonance(wish.ray || wish.primaryRay, profile.primaryRay);
  score += rayScore * 0.5;
  
  // Exchange pathway compatibility
  const wishPathways = (wish.exchangePathways || []).map(p => p.toLowerCase());
  const profilePathways = (profile.exchanges || []).map(p => p.toLowerCase());
  const pathwayOverlap = wishPathways.filter(p => profilePathways.some(pp => pp.includes(p) || p.includes(pp)));
  const pathwayScore = pathwayOverlap.length / Math.max(wishPathways.length, 1);
  score += pathwayScore * 0.3;
  
  // Availability boost
  if (profile.wishAvailability === 'accepting') score += 0.1;
  if (profile.directoryWishStatus === 'accepting') score += 0.1;
  
  return {
    score: Math.min(score, 2.0),
    keywordOverlap: overlap,
    rayScore,
    pathwayScore,
    wishKeywords: wishKeywords.slice(0, 10),
    profileKeywords: profileKeywords.slice(0, 10),
  };
}

// ── Fetch from Vercel Storage ──────────────────────────────────
async function fetchStorage(key) {
  try {
    const url = `${STORAGE_URL}?key=${encodeURIComponent(key)}`;
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) {
      // 400 might mean key not in ALLOWED_KEYS — fall back to demo data
      console.warn(`     Storage read returned ${response.status} for key "${key}" — using fallback data`);
      return getFallbackData(key);
    }
    const data = await response.json();
    return data?.value || [];
  } catch (err) {
    console.warn(`     Storage fetch failed: ${err.message} — using fallback data`);
    return getFallbackData(key);
  }
}

// ── Fallback Demo Data ────────────────────────────────────────
function getFallbackData(key) {
  if (key === 'approved') {
    // Return the CREATORS array as CreatorRecords
    return [
      {
        id: 1, name: 'Solara Moon', pronouns: 'she/her',
        title: 'Frequency Weaver & Sound Alchemist',
        location: 'Pacific Northwest · PST',
        sunPlacement: '', moonPlacement: '', emoji: '🌿', photo: null,
        ray: 'Turquoise', primaryRay: 'Turquoise Ray', primaryRayKey: 'Turquoise',
        rays: ['Turquoise'],
        heartlight: 'I give voice to what the soul already knows. My sound is a bridge between the seen and the sacred.',
        offerings: ['Sound Healing', 'Vocal Activation', 'Guided Ritual', 'Community Circles'],
        exchanges: ['Sliding Scale', 'Trade', 'Gift'],
        seasons: { Winter: true, Spring: true, Summer: false, Fall: true },
        timeline: '1 moon — 1 season',
        numerology: ['Life Path 9', 'Expression 6'],
        accessibility: ['Audio formats', 'Multiple time zones', 'Captioned video'],
        consent: 'Deep emotional content may arise. All sessions held with full reverence and consent.',
        portfolioLink: 'soundcloud.com/solara',
        portfolioItems: [], stewardAlerts: [],
        contactMethods: { instagram: '', email: 'solara@heartlight.land', phone: '', discord: '', signal: '', whatsapp: '' },
        contactVisibility: { instagram: false, email: true, phone: false, discord: false, signal: false, whatsapp: false },
        publicContactVisibility: true,
        contactMethod: 'email',
        season_current: '🌱',
        cesNumber: null, passphrase: '',
        wishAvailability: 'accepting',
        directoryWishStatus: 'accepting',
        stewardStanding: 'active',
        stewardStandingNote: '',
      },
      {
        id: 2, name: 'Kael Riviera', pronouns: 'they/them',
        title: 'Sacred Artist & Sigil Dreamer',
        location: 'New Orleans · CST',
        sunPlacement: '', moonPlacement: '', emoji: '🐦‍🔥', photo: null,
        ray: 'Violet', primaryRay: 'Violet Ray', primaryRayKey: 'Violet',
        rays: ['Violet'],
        heartlight: 'I transmute what is hidden into what is held. My art is ceremony. My ceremony is art.',
        offerings: ['Sacred Illustration', 'Sigil Crafting', 'Oracle Art', 'Altar Objects'],
        exchanges: ['Paid', 'Trade', 'Scholarship'],
        seasons: { Winter: true, Spring: false, Summer: true, Fall: true },
        timeline: '1–2 weeks — 1 moon',
        numerology: ['Life Path 11', 'Master Synthesis'],
        accessibility: ['Digital & physical', 'Text descriptions for all art'],
        consent: 'Physical offerings shipped with care. Sigils created only with clear intention consent.',
        portfolioLink: 'instagram.com/kaelriviera',
        portfolioItems: [], stewardAlerts: [],
        contactMethods: { instagram: 'kaelriviera', email: '', phone: '', discord: '', signal: '', whatsapp: '' },
        contactVisibility: { instagram: true, email: false, phone: false, discord: false, signal: false, whatsapp: false },
        publicContactVisibility: true,
        contactMethod: 'instagram',
        season_current: '❄️',
        cesNumber: null, passphrase: '',
        wishAvailability: 'accepting',
        directoryWishStatus: 'accepting',
        stewardStanding: 'active',
        stewardStandingNote: '',
      },
      {
        id: 3, name: 'Dessa Thornwood', pronouns: 'she/they',
        title: 'Herbalist & Healing Tea Crafter',
        location: 'Vermont · EST',
        sunPlacement: '', moonPlacement: '', emoji: '🌱', photo: null,
        ray: 'Green', primaryRay: 'Green Ray', primaryRayKey: 'Green',
        rays: ['Green'],
        heartlight: 'Every blend is a love letter from the Earth. I craft nourishment that remembers you whole.',
        offerings: ['Custom Tea Blends', 'Herbal Ritual Kits', 'Plant Spirit Guidance', 'Seasonal Tinctures'],
        exchanges: ['Paid', 'Sliding Scale', 'Trade'],
        seasons: { Winter: true, Spring: true, Summer: true, Fall: true },
        timeline: '1–2 weeks — multi-season',
        numerology: ['Life Path 6', 'Expression 4'],
        accessibility: ['Full ingredient lists', 'Allergen transparency', 'Sensory-friendly pacing'],
        consent: 'Medical herb interactions honored. Clear communication required before creating.',
        portfolioLink: 'thornwoodbotanicals.com',
        portfolioItems: [], stewardAlerts: [],
        contactMethods: { instagram: '', email: 'dessa@thornwood.land', phone: '', discord: '', signal: '', whatsapp: '' },
        contactVisibility: { instagram: false, email: true, phone: false, discord: false, signal: false, whatsapp: false },
        publicContactVisibility: true,
        contactMethod: 'email',
        season_current: '🌿',
        cesNumber: null, passphrase: '',
        wishAvailability: 'accepting',
        directoryWishStatus: 'accepting',
        stewardStanding: 'active',
        stewardStandingNote: '',
      },
      {
        id: 4, name: 'Orynn Celestar', pronouns: 'he/him',
        title: 'Astrologer & Natal Chart Reader',
        location: 'UK · GMT',
        sunPlacement: '', moonPlacement: '', emoji: '🌙', photo: null,
        ray: 'Indigo', primaryRay: 'Indigo Ray', primaryRayKey: 'Indigo',
        rays: ['Indigo'],
        heartlight: 'The stars do not predict your future — they reveal your frequency. I translate the language of light.',
        offerings: ['Natal Chart Reading', 'Transit Guidance', 'Ancestral Astrology', 'Written Reports'],
        exchanges: ['Paid', 'Sliding Scale'],
        seasons: { Winter: false, Spring: true, Summer: true, Fall: true },
        timeline: '1–2 weeks',
        numerology: ['Life Path 7', 'Mercury Dominant'],
        accessibility: ['Written and audio', 'Simplified language available'],
        consent: 'Deep ancestral content may surface. Readings offered as guidance, not prescription.',
        portfolioLink: 'celestablue.com',
        portfolioItems: [], stewardAlerts: [],
        contactMethods: { instagram: '', email: 'orynn@celestablue.com', phone: '', discord: '', signal: '', whatsapp: '' },
        contactVisibility: { instagram: false, email: true, phone: false, discord: false, signal: false, whatsapp: false },
        publicContactVisibility: true,
        contactMethod: 'email',
        season_current: '🔭',
        cesNumber: null, passphrase: '',
        wishAvailability: 'accepting',
        directoryWishStatus: 'accepting',
        stewardStanding: 'active',
        stewardStandingNote: '',
      },
      {
        id: 5, name: 'Marisol Fuego', pronouns: 'she/her',
        title: 'Movement Ritualist & Dance Shaman',
        location: 'Costa Rica · CST',
        sunPlacement: '', moonPlacement: '', emoji: '🔥', photo: null,
        ray: 'Orange', primaryRay: 'Orange Ray', primaryRayKey: 'Orange',
        rays: ['Orange'],
        heartlight: 'Your body is the most honest temple you have. I help you return to it. Joy lives in the movement.',
        offerings: ['Somatic Ritual Dance', 'Group Ceremony', 'Body Sovereignty Workshops', 'Online Sessions'],
        exchanges: ['Sliding Scale', 'Gift', 'Scholarship'],
        seasons: { Winter: true, Spring: true, Summer: true, Fall: false },
        timeline: '1 season — multi-season',
        numerology: ['Life Path 3', 'Expression 5'],
        accessibility: ['Mobility adaptations', 'Chair-based options', 'Multiple time zones'],
        consent: 'All movement is sovereign. Participants always choose what their body is ready for.',
        portfolioLink: 'marisolmoves.com',
        portfolioItems: [], stewardAlerts: [],
        contactMethods: { instagram: '', email: 'marisol@marisolmoves.com', phone: '', discord: '', signal: '', whatsapp: '' },
        contactVisibility: { instagram: false, email: true, phone: false, discord: false, signal: false, whatsapp: false },
        publicContactVisibility: true,
        contactMethod: 'email',
        season_current: '🌀',
        cesNumber: null, passphrase: '',
        wishAvailability: 'accepting',
        directoryWishStatus: 'accepting',
        stewardStanding: 'active',
        stewardStandingNote: '',
      },
      {
        id: 6, name: 'Vael Stormborn', pronouns: 'any/all',
        title: 'Crystal Grid Architect & Frequency Engineer',
        location: 'Sedona, AZ · MST',
        sunPlacement: '', moonPlacement: '', emoji: '💎', photo: null,
        ray: 'Omni', primaryRay: 'Omni Ray', primaryRayKey: 'Omni',
        rays: ['Omni'],
        heartlight: 'I build with what the Earth remembers. Every grid is a conversation between stone, soul, and sky.',
        offerings: ['Crystal Grid Design', 'Space Clearing', 'Sacred Geometry Layouts', 'Crystal Selection Guidance'],
        exchanges: ['Paid', 'Trade'],
        seasons: { Winter: true, Spring: false, Summer: true, Fall: true },
        timeline: '1 moon',
        numerology: ['Life Path 22', 'Master Builder'],
        accessibility: ['Remote consultations', 'Detailed digital diagrams', 'Video walkthroughs'],
        consent: 'All grids designed for the specific intention of the receiver. No template work.',
        portfolioLink: 'vaelgrids.com',
        portfolioItems: [], stewardAlerts: [],
        contactMethods: { instagram: '', email: 'vael@vaelgrids.com', phone: '', discord: '', signal: '', whatsapp: '' },
        contactVisibility: { instagram: false, email: true, phone: false, discord: false, signal: false, whatsapp: false },
        publicContactVisibility: true,
        contactMethod: 'email',
        season_current: '✨',
        cesNumber: null, passphrase: '',
        wishAvailability: 'accepting',
        directoryWishStatus: 'accepting',
        stewardStanding: 'active',
        stewardStandingNote: '',
      },
    ];
  }
  
  if (key === 'wish_submissions') {
    // Demo wishes
    return [
      {
        id: 'wish_demo_001',
        name: 'Atlas',
        title: 'Sound Healing for Anxiety and Sleep',
        letter: 'I have been experiencing anxiety and trouble sleeping. I am seeking sound healing or calming energy work. I am open to gift exchange or sliding scale. Located in the Northeast.',
        category: 'Healing',
        ray: 'Indigo',
        primaryRay: 'Indigo',
        exchangePathways: ['Gift Exchange', 'Sliding Scale'],
        wishAvailability: 'accepting',
        contactMethods: { signal: '+16198415588', email: 'atlas@atlas.island', phone: '', discord: '', whatsapp: '' },
        contactVisibility: { signal: true, email: true, phone: false, discord: false, whatsapp: false },
        submittedAt: new Date(Date.now() - 86400000).toISOString(),
      },
      {
        id: 'wish_demo_002',
        name: 'River',
        title: 'Sacred Art for New Home',
        letter: 'I just moved into a new space and would love a sigil or sacred illustration to bless it. Open to trade — I make handmade ceramics.',
        category: 'Art',
        ray: 'Violet',
        primaryRay: 'Violet',
        exchangePathways: ['Trade', 'Gift'],
        wishAvailability: 'accepting',
        contactMethods: { email: 'river@clay.earth', signal: '', phone: '', discord: '', whatsapp: '' },
        contactVisibility: { email: true, signal: false, phone: false, discord: false, whatsapp: false },
        submittedAt: new Date(Date.now() - 43200000).toISOString(),
      },
      {
        id: 'wish_demo_003',
        name: 'Sage',
        title: 'Tea Ritual Guidance',
        letter: 'I want to create a daily tea ritual for grounding. Looking for custom tea blends and guidance on plant spirit connection. I am in Vermont so local would be wonderful.',
        category: 'Wellness',
        ray: 'Green',
        primaryRay: 'Green',
        exchangePathways: ['Paid', 'Gift'],
        wishAvailability: 'accepting',
        contactMethods: { email: 'sage@green.path', signal: '', phone: '', discord: '', whatsapp: '' },
        contactVisibility: { email: true, signal: false, phone: false, discord: false, whatsapp: false },
        submittedAt: new Date(Date.now() - 3600000).toISOString(),
      },
    ];
  }
  
  return [];
}

// ── Log Management ────────────────────────────────────────────
function loadLog() {
  try {
    if (fs.existsSync(LOG_PATH)) {
      return JSON.parse(fs.readFileSync(LOG_PATH, 'utf8'));
    }
  } catch (e) {
    console.warn('Could not load match log:', e.message);
  }
  return { processedWishIds: [], matches: [] };
}

function saveLog(log) {
  fs.writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));
}

function isWishProcessed(wishId, log) {
  return log.processedWishIds.includes(wishId);
}

function markWishProcessed(wishId, log) {
  if (!log.processedWishIds.includes(wishId)) {
    log.processedWishIds.push(wishId);
  }
}

// ── Main Matching ─────────────────────────────────────────────
async function findMatches() {
  console.log('🌈 Offerings Bot: Finding resonance matches...\n');
  
  // Load data
  const [wishes, profiles] = await Promise.all([
    fetchStorage('wish_submissions'),
    fetchStorage('approved'),
  ]);
  
  console.log(`  Wishes: ${wishes?.length ?? 0}`);
  console.log(`  Profiles: ${profiles?.length ?? 0}`);
  
  if (!Array.isArray(profiles) || profiles.length === 0) {
    console.log('  ⚠️ No approved profiles found in storage — using demo creators as fallback');
  } else {
    console.log(`  ✅ Found ${profiles.length} profile(s) in remote storage`);
  }
  
  // Also load demo creators from the app source if available
  const demoCreators = getFallbackData('approved');
  const allProfiles = [...profiles];
  // Add demo creators that aren't already in the list (by id)
  const existingIds = new Set(allProfiles.map(p => String(p?.id ?? '')));
  for (const creator of demoCreators) {
    if (!existingIds.has(String(creator.id))) {
      allProfiles.push(creator);
    }
  }
  
  console.log(`  Total profiles for matching: ${allProfiles.length}\n`);
  
  const log = loadLog();
  const proposals = [];
  
  for (const wish of wishes) {
    if (!wish?.id) continue;
    if (isWishProcessed(wish.id, log)) {
      console.log(`  ⏭  Wish ${wish.id} already processed`);
      continue;
    }
    
    console.log(`\n  ✨ Processing wish: "${summarize(wish.letter || wish.title || 'Untitled', 40)}"`);
    
    // Score all profiles
    const scored = allProfiles
      .map(profile => ({
        profile,
        ...scoreMatch(wish, profile),
      }))
      .filter(r => r.score >= SCORE_THRESHOLD)
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_PROPOSALS_PER_WISH);
    
    if (scored.length === 0) {
      console.log(`     No matches found (threshold: ${SCORE_THRESHOLD})`);
      // Still mark as processed so we don't keep trying
      markWishProcessed(wish.id, log);
      continue;
    }
    
    proposals.push({
      wish,
      matches: scored,
      proposedAt: new Date().toISOString(),
    });
    
    markWishProcessed(wish.id, log);
    
    // Log output
    for (const match of scored) {
      console.log(`     🎯 ${match.profile.name} — score: ${match.score.toFixed(2)}`);
      console.log(`        Keywords: ${match.keywordOverlap.join(', ')}`);
    }
  }
  
  saveLog(log);
  
  console.log(`\n📊 Summary: ${proposals.length} wishes with matches found`);
  
  return proposals;
}

// ── Format for Message ────────────────────────────────────────
function formatProposalMessage(proposal) {
  const wish = proposal.wish;
  const lines = [];
  
  lines.push(`🌟 *New Wish Match*`);
  lines.push('');
  lines.push(`*Wish:* ${wish.title || summarize(wish.letter || 'Untitled', 60)}`);
  if (wish.letter) lines.push(`*Details:* ${summarize(wish.letter, 120)}`);
  if (wish.ray) lines.push(`*Ray:* ${wish.ray}`);
  lines.push('');
  lines.push(`*Resonant Co-Creators:*`);
  
  for (const match of proposal.matches) {
    const p = match.profile;
    lines.push(`\n  🎯 *${p.name}* (${p.primaryRay})`);
    lines.push(`     Score: ${match.score.toFixed(2)}`);
    lines.push(`     Offerings: ${(p.offerings || []).slice(0, 3).join(', ')}`);
    lines.push(`     Exchange: ${(p.exchanges || []).slice(0, 2).join(', ')}`);
    if (match.keywordOverlap.length > 0) {
      lines.push(`     Match words: ${match.keywordOverlap.join(', ')}`);
    }
  }
  
  lines.push('');
  lines.push(`Reply *YES* to connect them, or *NO* to skip.`);
  
  return lines.join('\n');
}

// ── Utils ──────────────────────────────────────────────────────
function summarize(text, maxLen) {
  if (!text) return '';
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLen) return clean;
  return clean.slice(0, maxLen - 3) + '...';
}

// ── Exports ───────────────────────────────────────────────────
module.exports = {
  findMatches,
  formatProposalMessage,
  scoreMatch,
  extractKeywords,
  rayResonance,
  loadLog,
  saveLog,
};

// ── CLI Run ─────────────────────────────────────────────────────
if (require.main === module) {
  findMatches().then(proposals => {
    if (proposals.length === 0) {
      console.log('No new proposals. Bot rests. 💗');
      return;
    }
    
    for (const proposal of proposals) {
      console.log('\n' + '='.repeat(50));
      console.log(formatProposalMessage(proposal));
      console.log('='.repeat(50));
    }
  }).catch(err => {
    console.error('💔 Match engine failed:', err);
    process.exit(1);
  });
}
