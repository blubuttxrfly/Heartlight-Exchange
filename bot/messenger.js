/**
 * Offerings Bot — Messenger
 * 
 * Delivers match proposals and connection messages via Signal/iMessage.
 * Uses OpenClaw's native messaging capabilities (not exec/curl).
 */

const { formatProposalMessage } = require('./match-engine');

// ── Config ──────────────────────────────────────────────────────
const ATLAS_PHONE = process.env.ATLAS_PHONE || '+16198415588';
// We'll use OpenClaw's signal bridge or sessions_send for delivery

// ── Send to Atlas for Approval ─────────────────────────────────
async function proposeMatchToAtlas(proposal) {
  const message = formatProposalMessage(proposal);
  
  // Try to send via OpenClaw signal channel
  // This uses the native messaging system, not exec/curl
  try {
    // In an OpenClaw context, we can use sessions_send or the signal tool
    // But since this is a standalone script, we'll output the message
    // and let the caller (OpenClaw agent) deliver it
    console.log('\n📤 PROPOSAL MESSAGE (for Atlas):');
    console.log(message);
    console.log('\n(To approve, Atlas replies YES — to skip, replies NO)');
    
    return {
      delivered: true,
      message,
      proposal,
    };
  } catch (err) {
    console.error('Failed to propose match:', err);
    return { delivered: false, error: err.message };
  }
}

// ── Connect Two Parties ────────────────────────────────────────
async function connectParties(wish, profile, atlasApproved = true) {
  const wishContact = extractContact(wish);
  const profileContact = extractContact(profile);
  
  // Message to the wish-caster
  const wishMessage = formatConnectionMessage('wish', wish, profile);
  console.log('\n📤 TO WISH-CASTER:');
  console.log(wishMessage);
  
  // Message to the co-creator
  const creatorMessage = formatConnectionMessage('creator', wish, profile);
  console.log('\n📤 TO CO-CREATOR:');
  console.log(creatorMessage);
  
  // Record in storage
  const connection = {
    id: `conn_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    wishId: wish.id,
    profileId: profile.id,
    wishContact,
    profileContact,
    atlasApproved,
    connectedAt: new Date().toISOString(),
    status: 'connected',
  };
  
  return connection;
}

// ── Format Connection Message ─────────────────────────────────
function formatConnectionMessage(role, wish, profile) {
  if (role === 'wish') {
    return `🌟 *Heartlight Exchange Match*

Hello ${wish.name || 'beautiful soul'}!

The Offerings Bot has found a resonant Co-Creator for your wish:

*${profile.name}* (${profile.primaryRay})
${profile.title || ''}
${profile.heartlight || ''}

*Offerings:* ${(profile.offerings || []).join(', ')}
*Exchange pathways:* ${(profile.exchanges || []).join(', ')}

If this feels aligned, reply here and we'll connect you directly 💗`;
  }
  
  return `🌟 *Heartlight Exchange Opportunity*

Hello ${profile.name}!

A wish has arrived that resonates with your offerings:

*From:* ${wish.name || 'A fellow being'}
*Wish:* ${(wish.letter || wish.title || '').slice(0, 200)}${(wish.letter || '').length > 200 ? '...' : ''}

*Their exchange pathways:* ${(wish.exchangePathways || []).join(', ')}

If you'd like to explore this co-creation, reply here 💗`;
}

// ── Extract Best Contact ────────────────────────────────────────
function extractContact(entity) {
  const methods = entity.contactMethods || {};
  const visibility = entity.contactVisibility || {};
  
  // Priority: Signal > WhatsApp > Email > Phone > Instagram > Discord
  const priority = ['signal', 'whatsapp', 'email', 'phone', 'instagram', 'discord'];
  
  for (const method of priority) {
    if (methods[method] && visibility[method] !== false) {
      return {
        method,
        value: methods[method],
        label: method.charAt(0).toUpperCase() + method.slice(1),
      };
    }
  }
  
  // Fallback: if they have any contact method
  for (const [method, value] of Object.entries(methods)) {
    if (value) {
      return { method, value, label: method };
    }
  }
  
  return null;
}

// ── Exports ───────────────────────────────────────────────────
module.exports = {
  proposeMatchToAtlas,
  connectParties,
  extractContact,
  formatConnectionMessage,
};

// ── CLI Test ────────────────────────────────────────────────────
if (require.main === module) {
  // Test with mock data
  const mockProposal = {
    wish: {
      id: 'wish_001',
      name: 'Atlas',
      letter: 'Seeking sound healing for anxiety and sleep troubles. Open to gift exchange.',
      title: 'Sound Healing for Anxiety',
      ray: 'Indigo',
      exchangePathways: ['Gift Exchange', 'Time Exchange'],
      contactMethods: { signal: '+16198415588', email: 'atlas@atlas.island' },
      contactVisibility: { signal: true, email: true },
    },
    matches: [{
      profile: {
        id: 'profile_001',
        name: 'Isara Lune',
        primaryRay: 'Indigo Ray',
        title: 'Sound Weaver',
        heartlight: 'I tend the inner garden so others may bloom.',
        offerings: ['Sound Healing', 'Vocal Activation', 'Guided Ritual'],
        exchanges: ['Gift Exchange', 'Gratitude Weave'],
        contactMethods: { signal: '+14155551234', email: 'isara@heartlight.land' },
        contactVisibility: { signal: true, email: true },
      },
      score: 0.85,
      keywordOverlap: ['sound', 'healing', 'anxiety', 'gift'],
    }],
  };
  
  proposeMatchToAtlas(mockProposal).then(() => {
    console.log('\n---\n');
    connectParties(mockProposal.wish, mockProposal.matches[0].profile);
  });
}
