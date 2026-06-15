# Current Working State

**Last session:** 2026-06-14
**Active area:** Project pages (case studies)
**Preview:** `bun run dev` → http://localhost:5173

## Homepage — completed and clean (do not touch)

Full homepage cleanup finished this session:

- `ProjectShowcase` refactored: image layout variants (`"2 3 3" | "3 3 2" | "2 6" | "2 4 2"`), pills converted from `<a>` to decorative `<div>` (background `<Link>` is the real interactive element), Framer Motion wrapper removed from entries
- `HowIWork` grid: renamed from `nav-top-grid` to `how-i-work-grid` (own CSS class, no nav coupling)
- Dead files deleted: `Explore.tsx`, `MyRole.tsx`
- Dead code deleted: `PrinciplesMap`, `PrinciplePill`, all 5 constants (~130 lines)
- `styles.css` deduplication: removed duplicate file header, 5× `@font-face`, `@theme inline`, `@keyframes blink`, all 8 `principleOrbit*` keyframes, empty media stubs, duplicate `--ds-section` and `case-page-shell` media queries
- **File went from 2376 → 2193 lines. Nothing changed visually.**

## Active case study: Powermatch

Authoritative handoff with what's done and what's next:
→ `docs/case-studies/powermatch-handoff.md`

## Other case study (paused)

Coco Care — `docs/reference/notes/cococare-handoff.md`

## Decided conventions

→ `docs/decisions/README.md`
