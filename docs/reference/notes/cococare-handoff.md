# Coco Care — handoff for new chat

Copy the block below into a **new chat** as your first message (add `@` files as needed).

---

**Project:** `~/portfolio-projects/portfolio-redesign`  
**Preview:** `npm run dev` → http://localhost:5173/project/cococare  
**Map:** `@AGENTS.md` · tokens `@src/lib/designSystem.ts` · styles `@src/styles.css`

## Done recently

- **Typography:** Chapter `h1`, block labels `h2` (32px laptop), hero block labels `h2`, intro copy `h3` + `case-hero-intro-body` (22px). Subtitle on chapter titles uses body clay color.
- **Personas (Research):** SVGs in `public/coco-care/persona-jonas.svg`, `persona-alice.svg`. Carousel in `PersonaFigureRow` (`primitives.tsx`) — one at a time, dissolve, nav button above image (44×44 touch target). Editorial split routes carousel to **full-width media** row on laptop+. `npm run optimize:personas` runs SVGO + radius normalize.
- **Interview callouts:** Gray body `#66615a`, black in-card titles; headline→cards gap 24px.
- **Sticky notes:** Square (`aspect-ratio: 1`), 14px text, labels left-aligned. Key user needs + prioritized features still sticky grids.
- **Success metrics + UX goals:** Stacked gray callouts (same pattern as Key Interview Findings). UX goals have one-word headlines (Onboarding, Intuitive, Insights, Channels). Fixed white text bug on light callouts (chapter-intro only).
- **Spacing rule:** `--case-prose-to-media-gap-half: 34px` (half column, e.g. figure-split caption → media). `--case-prose-to-media-gap-full: 64px` (prose row → full-width media). Applied in **Prototype** (design system + hi-fi blocks), **Ideate** (wireframes), **Test** (priority revisions → revision images).
- **Cleanup:** Removed unused `public/coco-care/persona-*.jpg` (SVGs only in content).

## Key files

| Area | File |
|------|------|
| Copy | `src/lib/cocoCareContent.ts` |
| Research | `src/components/project/cococare/chapters/ResearchSection.tsx` |
| Define | `src/components/project/cococare/chapters/DefineSection.tsx` |
| Prototype | `src/components/project/cococare/chapters/PrototypeSection.tsx` |
| Ideate | `src/components/project/cococare/chapters/IdeateSection.tsx` |
| Test | `src/components/project/cococare/chapters/TestSection.tsx` |
| Hero | `src/components/project/cococare/ProjectHero.tsx` |
| Boards / callouts | `src/components/project/CaseStickyNotes.tsx` |
| Shared UI | `src/components/project/cococare/primitives.tsx` |
| Case study CSS | `src/styles.css` (search `case-study`, `case-persona`, `case-sticky`, `case-prose-to-media`) |

## Optional next

- Git: branch `cococare-chapters` has uncommitted work; small commits via Source Control.
- Visual QA: Prototype hi-fi screen stacks, persona carousel on narrow viewports.

## Starter prompt (paste into new chat)

```
Coco Care case study — continue from handoff.

@AGENTS.md
@docs/reference/notes/cococare-handoff.md

[Your task here]
```

---

*Generated for chat handoff — delete or update when outdated.*
