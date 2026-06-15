# Decision Log

Summary of key decisions made during development. The authoritative record for technical and design decisions is `docs/decisions/README.md` — this log adds context and rationale.

---

## Stack Decisions

### Tailwind CSS v4

**Decision:** Use Tailwind v4 (`@import "tailwindcss"` syntax, not v3 directives).  
**Rationale:** v4 allows CSS-first configuration and better coexistence with custom CSS variables.  
**Implication:** Do not suggest downgrading. Do not use `@tailwind base/components/utilities`. `@theme inline` block in `styles.css` bridges Tailwind to CSS vars.

### TanStack Router (file-based)

**Decision:** Use TanStack Router with file-based routes in `src/routes/`.  
**Rationale:** Type-safe routing, server-rendering compatible, integrates with React Query.  
**Implication:** Do not suggest switching to React Router. Each page is one file in `src/routes/`. Root layout is `__root.tsx`.

### Bun runtime

**Decision:** Bun as runtime and package manager.  
**Rationale:** Faster installs and builds than npm.  
**Implication:** Use `bun run dev`, `bun add`, etc. — not `npm run dev`.

### Cloudflare Pages + Wrangler

**Decision:** Deploy to Cloudflare Pages via Wrangler.  
**Rationale:** Fast global CDN, free tier adequate, Wrangler config already set up.  
**Implication:** Do not suggest Vercel or Netlify. Wrangler artifacts in `dist/server`.

### No Tokens Studio / Style Dictionary

**Decision:** Tokens are CSS-first in `src/styles.css`. No external token pipeline.  
**Rationale:** Added complexity of a token pipeline isn't justified for a single-designer portfolio. CSS variables are the source of truth; `designSystem.ts` re-exports them for JS contexts.  
**Implication:** Do not suggest adding Tokens Studio, Style Dictionary, or similar.

### No CMS

**Decision:** Content lives in `src/lib/*Content.ts` files. No Contentful, Sanity, etc.  
**Rationale:** Portfolio content changes infrequently. CMS adds infrastructure complexity without commensurate benefit.  
**Implication:** To add or update case study copy, edit the relevant `*Content.ts` file.

---

## Design Decisions

### Direction A — Quiet Editorial Portfolio

**Decision:** The visual direction is Direction A: calm, sharp, restrained, confident.  
**Context:** Directions B (Studio Archive) and C (Soft Lifestyle with serif accent) were considered and deferred.  
**Rationale:** Direction A best matches the target audience (design hiring teams at product companies) and Barbora's positioning as a senior UX/product designer.  
**Implication:** Do not introduce gradients, heavy shadows, or serif type. Do not suggest switching direction.

### Floating pill nav — fixed

**Decision:** The nav is a floating pill with backdrop blur.  
**Rationale:** Matches the editorial aesthetic. Already implemented and tested.  
**Implication:** The visual pattern is settled. Accessibility improvements (real `<a>` links) are implemented. Do not change the nav pattern.

### Coco Care is the canonical case study template

**Decision:** All new project pages follow the Coco Care structure.  
**Context:** Coco Care was the first fully built case study; its pattern was refined and documented.  
**Rationale:** Consistency across case studies reduces cognitive load for visitors scanning multiple projects.  
**Implication:** Do not invent a new layout pattern for a case study. Check the Coco Care component map first.

### Play nav item is a placeholder

**Decision:** Keep the "Play" nav item until experimental/side work exists.  
**Context:** A Play section was planned but there is no content for it yet.  
**Rationale:** A placeholder signals intent without committing to delivery.  
**Implication:** Replace "Play" with "Contact" if no play content materialises by launch.

### No serif typeface (yet)

**Decision:** Neue Haas Grotesk Text Pro is the only typeface. No serif accent.  
**Context:** Direction C included a serif accent for a "soft lifestyle" aesthetic. Deferred.  
**Implication:** Do not introduce a serif unless explicitly asked.

---

## Architecture Decisions

### Content separated from presentation

**Decision:** All copy and image paths live in `src/lib/*Content.ts` files. Components contain no inline copy.  
**Rationale:** Makes content updates safe (no component risk), enables future content management, and keeps components reusable.  
**Implication:** If you're editing copy, edit the `*Content.ts` file, not the component.

### 13-step spacing scale

**Decision:** Spacing is constrained to 13 fixed steps (`--spacing-01` to `--spacing-13`).  
**Rationale:** Prevents arbitrary pixel accumulation. Forces intentional rhythm.  
**Implication:** No `p-[34px]` or similar arbitrary values. When in doubt, use the nearest token.

### Component consolidation deferred

**Decision:** Consolidating the 7 near-identical `constants.ts`/`utils.ts` files (one per case study) into shared versions is deferred.  
**Context:** Each case study folder has its own `constants.ts` and `utils.ts` alongside the shared `src/components/project/constants.ts`.  
**Rationale:** Merging would require touching all 7 case studies simultaneously — high risk during content-focused work. Shared `constants.ts` and `utils.ts` already exist and are used by `primitives.tsx`.  
**Implication:** Confirm this decision before starting. If proceeding, plan to update all 7 studies in one session.

---

## Pre-Launch Decisions Pending

| Decision | Context | Status |
|----------|---------|--------|
| Auth gate removal | Currently password-protected pre-launch | Not yet decided — keep, remove, or replace? |
| OG image | No social preview image set | Must be created before launch |
| Analytics | No analytics integrated | Choose tool or decide to skip |
| Play section | Currently a placeholder nav item | Replace with Contact if no content exists at launch |
| Resume link | Not currently in nav | Confirm where this should live (About page, footer, nav?) |
