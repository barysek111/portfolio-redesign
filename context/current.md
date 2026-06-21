# Current Working State

**Last session:** 2026-06-21 (evening)
**Active area:** Plinto case study (`/plinto`)
**Preview:** `npm run dev` → http://localhost:5173/plinto

## Homepage — completed and clean (do not touch unless asked)

Full homepage cleanup finished 2026-06-18. Showcase entry for Plinto updated 2026-06-21 (3rd image → `showcasenewww.jpg`).

## Active case study: Plinto

Route `/plinto`, 5 chapters (Research, Define, Design, Prototype, Reflection).

→ **`docs/case-studies/plinto-handoff.md`** — full file map, assets, and session log.

### Done this session

- **Design — Wireframes:** 3 direction SVGs in a 12-col row (4+4+4; stack below `lg`). Visual system section removed.
- **Design — Wireframe assets:** `wireframe-conversational-ease.svg`, `wireframe-control-room.svg`, `wireframe-decision-card.svg` (sidebar `#fafafa`). User flows SVGs exist but are **not** on the page yet.
- **Prototype — Desktop:** 3 full-screen JPGs + 1 copilot chat composite wired from `public/plinto/screens exports/`.
- **Prototype:** Mobile sub-chapter removed. Desktop/Mobile intro copy uses `Prose` (body level). Copilot chat detail uses `gap-07` label→frame spacing.
- **Homepage showcase:** Plinto grid image 3 → `/plinto/showcasenewww.jpg`.
- **Site-wide:** Page side padding 2-col breakpoint moved **1400px → 1580px** (`--page-pad` in `styles.css`).

### Next (optional)

- Wire user-flow SVGs into Design chapter if desired (`wireframe-flow-*.svg`).
- Mobile screens / reflection polish / copy pass.
- Commit Plinto route + assets (still largely untracked in git).

## Other case studies

Powermatch — `docs/case-studies/powermatch-handoff.md`  
Coco Care — `docs/reference/notes/cococare-handoff.md`

## Decided conventions

→ `docs/decisions/README.md`
