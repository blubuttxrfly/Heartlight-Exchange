/**
 * Offerings Bot — Run Script
 * 
 * Entry point. Triggered by cron or manually.
 * Finds matches, sends proposals to Atlas, awaits approval.
 */

const { findMatches } = require('./match-engine');
const { proposeMatchToAtlas, connectParties } = require('./messenger');

// ── Config ──────────────────────────────────────────────────────
const MODE = process.argv[2] || 'propose'; // 'propose' | 'connect' | 'dry-run'
const WISH_ID = process.argv[3]; // For manual connect mode
const PROFILE_ID = process.argv[4]; // For manual connect mode

// ── Main ────────────────────────────────────────────────────────
async function main() {
  console.log('🌈 Heartlight Exchange — Offerings Bot');
  console.log(`   Mode: ${MODE}`);
  console.log(`   Time: ${new Date().toISOString()}`);
  console.log('');
  
  if (MODE === 'dry-run') {
    console.log('💨 DRY RUN — No messages will be sent\n');
    const proposals = await findMatches();
    console.log(`\n📊 Found ${proposals.length} proposals`);
    for (const p of proposals) {
      console.log(`\n   Wish: ${p.wish.title || p.wish.letter?.slice(0, 50)}...`);
      for (const m of p.matches) {
        console.log(`   → ${m.profile.name} (score: ${m.score.toFixed(2)})`);
      }
    }
    return;
  }
  
  if (MODE === 'propose') {
    const proposals = await findMatches();
    
    if (proposals.length === 0) {
      console.log('\n💤 No new matches. The Exchange rests.');
      return;
    }
    
    console.log(`\n📤 Sending ${proposals.length} proposal(s) to Atlas...`);
    
    for (const proposal of proposals) {
      await proposeMatchToAtlas(proposal);
      
      // TODO: In a full implementation with OpenClaw integration,
      // we would store these proposals in a pending-approval queue
      // and wait for Atlas's YES/NO response before connecting.
      // For now, we output the messages to console for manual delivery.
    }
    
    console.log('\n✨ Proposals sent! Atlas, check your Signal for matches to approve.');
    return;
  }
  
  if (MODE === 'connect') {
    if (!WISH_ID || !PROFILE_ID) {
      console.error('Usage: node run.js connect <wish-id> <profile-id>');
      process.exit(1);
    }
    
    // Manual connection mode — used when Atlas approves a match
    console.log(`🔗 Connecting wish ${WISH_ID} with profile ${PROFILE_ID}...`);
    
    // In a full implementation, we'd fetch the specific wish and profile
    // from storage and connect them. For now, this is a placeholder.
    console.log('   (This mode requires the match-engine to fetch specific records)');
    console.log('   Use dry-run to test, then manual approval via Signal.');
    return;
  }
  
  console.error(`Unknown mode: ${MODE}. Use: propose | connect | dry-run`);
  process.exit(1);
}

main().catch(err => {
  console.error('💔 Bot crashed:', err);
  process.exit(1);
});
