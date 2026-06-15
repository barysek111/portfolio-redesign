# Product

Barbora Gadlinova's UX/UI design portfolio. Pre-launch, password-protected. Deploys to Cloudflare Pages.

---

## Product Overview

**Purpose:** Online portfolio presenting Barbora's design work to hiring teams and potential collaborators.

**Primary audience:** Design hiring teams, creative leads, and product managers evaluating product design craft, UX thinking, and visual execution. They scan quickly and open only what earns their attention.

**Secondary audience:** Founders and startup teams looking for a freelance or full-time designer who spans UX research, UI design, design systems, and brand. They read deeper once interested.

**Business goals:**
- Establish Barbora as a senior-level UX/product designer
- Showcase breadth: product design (B2B SaaS, digital health), brand identity, multi-market design system work
- Evidence depth: multi-chapter case studies with research → define → design → handoff narrative
- Create a strong first impression before any project is opened

**Success criteria:**
- Visitor understands who Barbora is and what she does within the first viewport
- Project list communicates seniority, scope, role, year, and outcomes without opening every case study
- Case study pages support long-form storytelling without feeling heavy or repetitive
- Visual system is documented well enough that future changes can be made intentionally

---

## Site Structure

### Navigation

Three pills: **Work** (/) | **About** (/about) | **Work with me** (/work-with-me)

No standalone Resume pill. No Play section until experimental work exists (see `docs/decisions/README.md`).

### Pages

| Page | Route | Component | Purpose |
|------|-------|-----------|---------|
| Homepage | `/` | `src/components/home/Homepage.tsx` | Hero intro + project showcase index |
| About | `/about` | `src/components/about/AboutPage.tsx` | Experience, education, services, personality |
| Work With Me | `/work-with-me` | `src/components/shared/ContactGrid.tsx` | Contact (dark theme, no footer) |
| Powermatch | `/powermatch` | `src/components/project/PowermatchPage.tsx` | Case study — bank reconciliation |
| Ageras | `/ageras` | `src/components/project/AgerasPage.tsx` | Case study — website UI/UX consolidation |
| Coco Care | `/cococare` | `src/components/project/CocoCarePage.tsx` | Case study — digital physiotherapy platform |
| Rokoko Web | `/rokokoweb` | `src/components/project/RokokoPage.tsx` | Case study — website revamp |
| Rokoko Brand | `/rokokobrand` | `src/components/project/RokokoBrandPage.tsx` | Case study — brand identity rebrand |
| Weld | `/weld` | `src/components/project/WeldPage.tsx` | Case study — website + brand |
| EatGrim | `/eatgrim` | `src/components/project/EatGrimPage.tsx` | Case study — brand identity |

### Project Showcase Order (homepage, `/src/components/home/projectShowcaseEntries.ts`)

| # | Title | Year | Domain |
|---|-------|------|--------|
| 1 | Powermatch Invoice Reconciliation | 2025 | B2B SaaS / FinTech |
| 2 | Ageras Website UI/UX Consolidation | 2025 | Multi-market design system |
| 3 | Coco Care Interface Design | 2024 | Digital health (mobile + web) |
| 4 | Rokoko Website Revamp | 2023 | Marketing site / webshop |
| 5 | Rokoko Brand Identity | 2022 | Brand rebrand |
| 6 | Weld Website Revamp | 2021 | Data SaaS |
| 7 | Eat Grim Brand Identity | 2019–2021 | Sustainable subscription startup |

---

## Design Principles

### Visual Philosophy

**Direction A — Quiet Editorial Portfolio** (settled; see `docs/decisions/README.md`)

Calm, sharp, restrained, confident. Narrow readable column, generous vertical rhythm, project rows as editorial index entries.

No gradients. No heavy shadows. Warm off-white background (`#f6f6f6`), soft grey text (`#66615a`), near-black active states (`#1B1B1B`). Motion used only to clarify state or add quiet polish.

### Core Principles

1. Lead with clarity, then personality
2. Make project scanning effortless
3. Keep every visual treatment reusable across all projects
4. Use motion only to clarify state or add quiet polish
5. Preserve content hierarchy — improve pacing, not decoration

### Accessibility Standards

- Navigation items that navigate must be `<a>` links, not `<button>` elements
- Keyboard focus visible on nav, project rows, social links, email copy button
- All content images have meaningful alt text
- Color contrast maintained for muted copy against background (especially `text-s` at 12–14px)
- `prefers-reduced-motion` respected for thumbnail scale, nav pill, page transitions
- Minimum 44×44px touch targets for interactive controls

### Responsiveness

- Mobile-first
- Fluid page padding: 16px fixed below 780px → 1 col (÷14) at 780–1399px → 2 cols (÷8) at ≥1400px
- Content max-width: 920px
- Typography uses fluid `clamp()` values scaling between mobile and large display
- Breakpoints: 780px (md), 1400px (lg), 1600px (wide)

### Interaction Principles

- Subtle underline transitions on links
- Gentle thumbnail scale/motion on project cards
- Floating nav pill with `backdrop-filter: blur`
- `scroll-behavior: smooth` on the page root
- Framer Motion used selectively — not on every element

---

## Design System

See `docs/product/design-system.md` for the complete reference.

### Token Strategy

Two-layer system:
1. **CSS custom properties** in `src/styles.css` `:root` — the source of truth for raw values
2. **JS constants** in `src/lib/designSystem.ts` — re-exports the same tokens for JS contexts (inline styles, Spline)

Never hardcode values in components. Use `var(--)` in CSS or `designSystem.ts` exports in JS.

### Color (5 semantic tokens cover the whole site)

| Token | CSS var | Light | Dark | Usage |
|-------|---------|-------|------|-------|
| Background | `--background` | #f6f6f6 | #1B1B1B | Page fill |
| Surface | `--surface` | #eeeeee | #2D2D2D | Cards, callout areas |
| Foreground | `--foreground` | #1B1B1B | near-white | Primary text, filled buttons |
| Muted foreground | `--muted-foreground` | #66615a | same | Labels, captions |
| Border | `--border` | #eeeeee | same | Dividers, outlines |

Project card tinted backgrounds: `--color-project-ageras`, `--color-project-cococare`, `--color-project-rokoko`, `--color-project-rokoko-brand`.

Dark mode: `.dark` class on `<html>`. Work With Me page forces dark via className.

### Typography (Neue Haas Grotesk Text Pro — single typeface, no serif)

| Class | Range | Usage |
|-------|-------|-------|
| `text-h1` | 36–46px fluid | Page-level headings |
| `text-h2` | 24–36px fluid | Section headings |
| `text-h3` | 18–24px fluid | Sub-section headings |
| `text-h4` | 16–18px fluid | Card titles |
| `text-h5` | 14–16px fluid | Small headings, nav |
| `text-body` | 16–18px fluid | Long-form prose |
| `text-s` | 12–14px fluid | UI labels, tags, metadata |
| `text-xs` | 12px fixed | Captions, fine print |

### Spacing (strict 13-step scale — no arbitrary values)

`spacing-01` (2px) → `spacing-13` (160px). Use Tailwind utilities (`p-05`, `gap-06`, `mt-12`) or CSS vars (`var(--spacing-05)`).

### Radius

Base: `--radius: 0.875rem` (14px). Scale: sm (10px) → md (12px) → lg/base (14px) → xl (18px) → 2xl (26px) → full (9999px).

---

## Content Strategy

See `docs/product/content-standards.md` for full writing rules.

### Voice and Tone

Direct, human, no filler. Short sentences. Scannable. Warm but not casual. No dashes in copy. No AI-sounding phrases.

### Case Study Structure (Coco Care is the canonical template)

1. Back link to Work/Home
2. Title + one-sentence summary
3. Metadata grid (Client, Year, Role, Tools)
4. Hero image
5. Project background
6. The challenge / problem statement
7. Process sections (adapt to what actually happened — don't force a rigid structure)
8. Outcomes (concrete numbers or user quotes — no vague adjectives)
9. Footer CTA

### Portfolio Storytelling Principles

- Lead with the real-world problem before any design work
- Show research evidence before solutions
- Each process section ends with a clear "so we decided to…" bridge
- Images support the narrative — don't dump screens without context
- Foreground the highest-seniority signal (design systems, multi-market, complex logic)

---

## Technical Architecture

### Stack

| Concern | Choice |
|---------|--------|
| UI | React 19 |
| Routing | TanStack Router v1 (file routes in `src/routes/`) |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Animation | Framer Motion (motion/react) |
| Icons | lucide-react |
| 3D / Hero | Spline (@splinetool/react-spline) |
| Build | Vite 7 |
| Runtime | Bun |
| Deploy | Cloudflare Pages (Wrangler) |
| Auth (pre-launch) | Password gate in `__root.tsx` via `src/lib/auth.ts` |

### Routing

File-based routing via TanStack Router in `src/routes/`. Root layout (`__root.tsx`) wraps all routes with:
- Auth gate (password protection, pre-launch only)
- `<SiteFooter />` (suppressed on `/work-with-me` via `NO_FOOTER_ROUTES`)
- React Query provider

See `docs/product/routing-map.md` for the full route table.

### Content Architecture

All copy and image paths live in `src/lib/*Content.ts` — one file per page/case study. Components pull data from these files via React context (`src/lib/*ContentContext.tsx`). Nothing is inlined in components.

Content file naming: `camelCaseContent.ts` (e.g. `cocoCareContent.ts`, `powermatchContent.ts`).

### Component Architecture

Three layers:
1. `src/components/ui/` — shadcn primitives (Button, Badge) — no custom layout logic
2. `src/components/shared/` — site-wide components (SiteFooter, HowIWork, ContactGrid, CopyEmailButton, EditorialList)
3. `src/components/project/` — case study building blocks (shared + per-project)

See `docs/product/component-inventory.md` for the complete list.

### Shared Case Study Primitives (`src/components/project/primitives.tsx`)

- `MajorSection` — numbered section wrapper with h1 title parsing
- `ContentBlock` — editorial split or callout container
- `EditorialSplit` — prose/media two-column layout (auto-partitions Figure children into media slot)
- `NumberedCalloutSection` — numbered list/grid with heading; supports 4 card layouts
- `Prose` — body paragraph wrapper
- `FigureRow` — image row in a 12-column grid

---

## Maintenance Rules

1. When a route is added or changed → update `docs/product/routing-map.md`
2. When a component is added → update `docs/product/component-inventory.md`
3. When a decision is made → add to `docs/decisions/README.md` AND `docs/product/decision-log.md`
4. When a case study is completed → update `docs/product/case-study-inventory.md`
5. Update `context/current.md` at the end of every working session
6. For significant changes → fill out `docs/product/template.md` first

Never hardcode colors, spacing, or font sizes. Never inline copy in components. Never add a new case study layout pattern without confirming Coco Care doesn't already cover it.

---

## Launch Readiness

See `docs/product/release-readiness.md` for the complete checklist.

**Known gaps before launch:**
- Visual QA on Powermatch page not yet done
- 4 Figma screen exports still missing for Powermatch
- Powermatch DefineSection: `userNeeds.items` and `successMetrics.items` are empty
- Powermatch IdeateSection: `userFlows.images` and `wireframes.images` are empty
- AGENTS.md is outdated (reflects only homepage + CocoCare; 8 pages were added since)
- Component constants consolidation (7 near-identical copies) deferred — confirm before starting
- No OG image set (only text meta currently)
- Auth gate must be removed or replaced before public launch

---

## Known Decisions

Summary of settled decisions. Full log: `docs/decisions/README.md` and `docs/product/decision-log.md`.

| Area | Decision |
|------|----------|
| CSS framework | Tailwind v4 — `@import "tailwindcss"` syntax, not v3 directives |
| Routing | TanStack Router (file-based) — do not switch |
| Runtime | Bun — use `bun` commands, not npm |
| Deployment | Cloudflare Pages + Wrangler — not Vercel or Netlify |
| Token pipeline | CSS-first in `src/styles.css` — no Tokens Studio or Style Dictionary |
| Typeface | Neue Haas Grotesk Text Pro only — no serif accent yet |
| CMS | None — content in `src/lib/*Content.ts` files |
| Visual direction | Direction A (Quiet Editorial) — not B (Studio Archive) or C (Soft Lifestyle) |
| Nav pattern | Floating pill — fixed |
| Case study template | Coco Care is canonical — all new case studies follow it |
| Play nav item | Placeholder — keep until experimental work exists; replace with Contact if nothing materialises |
