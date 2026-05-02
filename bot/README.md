# Offerings Bot — Heartlight Exchange

A resonance-matching agent that connects expressed needs (wishes) with beings who can serve them (offerings).

## What It Does

1. **Listens** — Reads new wish submissions from the Heartlight Exchange
2. **Matches** — Compares wish content against all approved Co-Creator offerings using keyword + ray-frequency resonance
3. **Proposes** — Sends Atlas a Signal/iMessage with match proposals: *"Wish for 'sound healing anxiety' resonates with Isara Lune (Sound Healing, Indigo Ray) — connect them?"*
4. **Connects** — If Atlas approves, messages both parties via their preferred contact method (Signal, email, etc.)
5. **Records** — Logs the match in Exchange storage for tracking abundance flow

## Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Wish Submissions │────▶│  Offerings Bot  │────▶│  Atlas Approval  │
│  (localStorage +   │     │  (Node.js cron  │     │  (Signal/iMsg)   │
│   Vercel API)     │     │   + OpenClaw)    │     │                  │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                              │
                              ▼
                       ┌─────────────────┐
                       │  Contact both   │
                       │  parties via    │
                       │  preferred      │
                       │  method         │
                       └─────────────────┘
                              │
                              ▼
                       ┌─────────────────┐
                       │  Record match   │
                       │  in Exchange    │
                       │  storage        │
                       └─────────────────┘
```

## Files

- `match-engine.js` — Core matching logic
- `messenger.js` — Signal/iMessage delivery (via OpenClaw bridge)
- `run.js` — Entry point, triggered by cron or manually
- `match-log.json` — Local record of all matches (gitignored)

## Data Sources

The bot reads from two sources:

1. **Vercel Remote Storage** (`/api/store?key=wish_submissions`) — Wishes
2. **Vercel Remote Storage** (`/api/store?key=approved`) — Approved CES profiles

Since the Exchange uses browser localStorage as primary with optional Vercel remote sync, the bot runs server-side to access the remote API.

## Matching Algorithm

```
For each unprocessed wish:
  Extract keywords from wish.letter + wish.category
  For each approved profile:
    Score = keyword overlap (offerings vs wish) * 1.0
          + ray resonance (primaryRay match) * 0.5
          + exchange pathway compatibility * 0.3
  Sort by score, top 3 proposed to Atlas
```

## Setup

```bash
npm install
# Configure .env with SIGNAL_BRIDGE_URL or OpenClaw gateway
# Add to crontab for daily runs:
# 0 9 * * * cd /path/to/bot && node run.js
```

## Sovereign Design

- No funds held by the bot
- No dependency on Stripe/crypto (those can be added per-exchange later)
- Just a connector — beings arrange their own terms
- Runs on Atlas's Mac, not a cloud server
- Source open, logic transparent

## Future Evolution

- **v2**: Auto-approve low-risk matches (below threshold)
- **v3**: Track exchange outcomes, build trust scores
- **v4**: Integrate with Thunderbolt for decentralized sync

---
*Built with love for Atlas Island* 🌈💗
