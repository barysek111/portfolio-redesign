# Design System

Source of truth for tokens, typography, spacing, color, component conventions, and naming. Derived from `src/styles.css` and `src/lib/designSystem.ts`.

---

## Token Locations

| Layer | File | What lives there |
|-------|------|-----------------|
| CSS custom properties | `src/styles.css` `:root` / `.dark` | Raw values — the only place hex values appear |
| Tailwind theme bridge | `src/styles.css` `@theme inline` | Maps CSS vars to Tailwind utility names |
| JS exports | `src/lib/designSystem.ts` | Re-exports same tokens for JS contexts (Spline, inline styles) |
| Figma | New-portfolio-website file | Mirrors the CSS layer — 4 variable collections |

**Rule:** Never hardcode a hex color, pixel spacing, or font size in a component. Always use `var(--)` in CSS or `designSystem.ts` in JS.

---

## Color

### Primitives (only place raw hex values live — in `src/styles.css :root`)

| Name | Value |
|------|-------|
| `--ink` | `#1B1B1B` |
| `--white` | `#ffffff` |
| `--aluminium` | `#f6f6f6` |
| `--light-gray` | `#eeeeee` |
| `--clay` | `#66615a` |

### Semantic tokens (5 tokens cover the entire site)

| CSS var | Tailwind | Light value | Dark value | Usage |
|---------|----------|-------------|------------|-------|
| `--background` | `bg-background` | aluminium (#f6f6f6) | ink (#1B1B1B) | Page fill |
| `--surface` | `bg-surface` | light-gray (#eeeeee) | #2D2D2D | Cards, callout areas, placeholders |
| `--foreground` | `text-foreground` | ink (#1B1B1B) | near-white | Primary text, filled buttons |
| `--muted-foreground` | `text-muted-foreground` | clay (#66615a) | same | Labels, captions, secondary text |
| `--border` | `border-border` | light-gray (#eeeeee) | same | Dividers, outlines |

**Never reference `--primary`, `--accent`, `--input`, `--ring`, etc. directly in layout code.** These wire up shadcn/ui components internally.

### Project card tinted backgrounds

| Token | Value | Usage |
|-------|-------|-------|
| `--color-project-ageras` | `oklch(0.94 0.04 145)` | Ageras card background |
| `--color-project-cococare` | `oklch(0.93 0.05 60)` | Coco Care card background |
| `--color-project-rokoko` | `oklch(0.92 0.04 30)` | Rokoko web card background |
| `--color-project-rokoko-brand` | `oklch(0.93 0.03 280)` | Rokoko brand card background |

### Dark mode

`.dark` class on `<html>` triggers dark mode. Swaps `--background`, `--surface`, `--foreground`. Work With Me page forces dark via className — it does not require the system dark mode to be active.

---

## Typography

### Typeface

**Neue Haas Grotesk Text Pro** — used for all roles (body, headings, UI, meta). No Display variant. No mono variant. No serif. Weights: 400 (55Rg), 500 (65Md), 600/700 (75Bd).

Font files in `public/fonts/`. Loaded via `@font-face` in `src/styles.css` with `font-display: swap`. Preloaded for the 400 weight only (performance optimization in `__root.tsx`).

### Type scale

All fluid values using `clamp()`. Medium-display (<1600px) breakpoint tightens heading maxima by ~10%.

| Class | CSS var | Size range | Line height | Letter spacing | Usage |
|-------|---------|------------|-------------|----------------|-------|
| `text-h1` | `--text-h1` | clamp(36px, 4vw, 46px) | 110% | -0.015em | Page-level headings |
| `text-h2` | `--text-h2` | clamp(24px, 4vw, 36px) | 120% | -0.008em | Section headings |
| `text-h3` | `--text-h3` | clamp(18px, 4vw, 24px) | 120% | -0.008em | Sub-section headings |
| `text-h4` | `--text-h4` | clamp(16px, 2vw, 18px) | 125% | -0.005em | Card titles, callout headings |
| `text-h5` | `--text-h5` | clamp(14px, 2vw, 16px) | 120% | — | Small headings, nav |
| `text-body` | `--text-body-prose` | clamp(16px, 2vw, 18px) | 120% | — | Long-form prose |
| `text-s` | `--text-body` | clamp(12px, 2vw, 14px) | 120% | -0.005em | UI labels, tags, metadata |
| `text-xs` | `--text-xs` | 12px fixed | 120% | — | Fine print, captions |

**Rule:** Never override letter spacing or line height per-component. These are set at the CSS variable level. Never use arbitrary text sizes like `text-[13px]`.

### Font weight

- Default: 400 (body, labels)
- Medium: 500 (callout titles, emphasis)
- Bold: 600 (headings, strong emphasis)

---

## Spacing

Strict 13-step scale. No arbitrary values. No Tailwind arbitrary spacing like `p-[34px]`.

| Token | Tailwind | rem | px |
|-------|----------|-----|----|
| `--spacing-01` | `p-01`, `gap-01`, etc. | 0.125rem | 2px |
| `--spacing-02` | `p-02` | 0.25rem | 4px |
| `--spacing-03` | `p-03` | 0.5rem | 8px |
| `--spacing-04` | `p-04` | 0.75rem | 12px |
| `--spacing-05` | `p-05` | 1rem | 16px |
| `--spacing-06` | `p-06` | 1.5rem | 24px |
| `--spacing-07` | `p-07` | 2rem | 32px |
| `--spacing-08` | `p-08` | 2.5rem | 40px |
| `--spacing-09` | `p-09` | 3rem | 48px |
| `--spacing-10` | `p-10` | 4rem | 64px |
| `--spacing-11` | `p-11` | 5rem | 80px |
| `--spacing-12` | `p-12` | 6rem | 96px |
| `--spacing-13` | `p-13` | 10rem | 160px |

**When in doubt:** When a requested px value matches a token exactly, use that token. When it falls between tokens, use the nearest one. When equidistant, ask.

### Semantic layout aliases (from `designSystem.ts`)

| Name | Token | Usage |
|------|-------|-------|
| `containerMaxWidth` | 920px | Content max-width on all pages |
| `sectionGap` | spacing-12 (96px) | Gap between major content sections |
| `caseSectionStack` | spacing-13 (160px) | Gap between case study major sections |
| `caseMajorBlock` | spacing-13 (160px) | Gap between major blocks within a section |
| `caseHeroStack` | spacing-11 (80px) | Gap in hero area |
| `caseProseToMediaFull` | spacing-10 (64px) | Prose row → full-width media gap |
| `caseProseToMediaHalf` | spacing-07 (32px) | Prose → half-width media gap |
| `caseHeadlineToCards` | spacing-06 (24px) | Heading → callout cards gap |

---

## Border Radius

| Name | CSS var | Value | Usage |
|------|---------|-------|-------|
| sm | `--radius-sm` | 10px | Small interactive elements |
| md | `--radius-md` | 12px | Medium elements |
| lg (base) | `--radius` / `--radius-lg` | 14px | Cards, panels, modals |
| xl | `--radius-xl` | 18px | Large cards |
| 2xl | `--radius-2xl` | 26px | Hero-scale elements |
| full | n/a | 9999px | Nav pills, tags, badges |
| card | card | 16px (1rem) | Project card images |

---

## Layout System

### Page shell

`.page-shell` — fluid side padding applied as `padding-inline: var(--page-pad)`. Applied to all page wrappers.

Page padding breakpoints (see `styles.css` `--page-pad`):
- `< 1024px`: 20px fixed
- `1024–1579px`: `calc(100vw / 14)` — 1 column each side (14-column grid)
- `≥ 1580px`: `calc(100vw / 8)` — 2 columns each side (16-column grid)

### Content width

Max-width: `920px`, centered, for homepage sections and case study prose.

### Nav grid

12-column grid. Mobile: Work (4) | About (4) | Work with me (4). Desktop: Work (7) | About (3) | Work with me (2).

### Image ratios

| Context | Ratio |
|---------|-------|
| Project showcase thumbnails | 4:3 or variable (layout determines) |
| Project hero images | 16:9 |
| Process image grids | 1, 2, or 3 columns depending on content density |
| About page windows | 1:1 (square, 653×653) |

---

## Key CSS Classes

| Class | Effect | Source |
|-------|--------|--------|
| `.page-shell` | Fluid side padding | `styles.css` |
| `.case-study` | Root wrapper for case study pages | `styles.css` |
| `.case-major-section-header` | Section number + title treatment | `styles.css` |
| `.case-callout` | Callout card container | `styles.css` |
| `.case-editorial-split` | Prose/media two-column layout | `styles.css` |
| `.case-chapter-intro-slot` | Chapter intro callout container | `styles.css` |
| `.intro-blur-text` | Display heading blur treatment | `styles.css` |
| `.nav-blur-shell` | Floating nav backdrop blur | `styles.css` |
| `.home-hero` | Homepage hero layout (Spline + headline) | `styles.css` |
| `.how-i-work-grid` | Homepage principles grid | `styles.css` |
| `.hero-intro` | Homepage hero h1 | `styles.css` |

---

## Component Conventions

- **Reuse before creating.** Check `src/components/` before writing a new component.
- Variants via CVA (class-variance-authority) for components with multiple visual states.
- `src/components/ui/` is shadcn primitives only — no custom layout logic inside.
- Per-project constants (`constants.ts`) exist in each case study folder — consolidation to shared `src/components/project/constants.ts` is a deferred decision (see `docs/decisions/README.md`).

### Tag / Badge styles (from `designSystem.ts`)

| Variant | Class | Usage |
|---------|-------|-------|
| skill | `rounded-full border border-border bg-surface px-04 py-02 text-[12px] text-muted-foreground` | About page skills |
| project | same as skill | Homepage project tags |
| cardOverlay | `rounded-full bg-background/95 px-04 py-02 text-[11px] text-foreground backdrop-blur` | Image overlay tags |

---

## Accessibility Requirements

- All interactive elements keyboard accessible
- Focus state visible (ring or underline) — uses `--ring` token
- Color contrast: foreground on background passes WCAG AA for all text sizes
- `prefers-reduced-motion` honored for Framer Motion animations and Spline scene
- Alt text on all content images (see `docs/product/content-standards.md`)
- Nav items use `<a>` links, not `<button>` elements

---

## Known Inconsistencies

1. **Per-project constants duplication:** `constants.ts` and `utils.ts` are near-identical across 7 case study folders (ageras, cococare, eatgrim, powermatch, rokoko, rokokobrand, weld). A shared `src/components/project/constants.ts` exists but per-project files haven't been consolidated. Decision deferred — confirm before starting.

2. **`text-[12px]` hardcoding in tagStyles:** Two tag variants in `designSystem.ts` use `text-[12px]` — this should reference `text-xs` or `text-s`. Minor inconsistency, not yet fixed.

3. **`--text-body-l` defined but unused:** `styles.css` defines `--text-body-l` as an alias for `--text-body-prose`. Not referenced anywhere in components. Safe to remove.

4. **Font weight 700 and 800 both map to the 75Bd file:** `@font-face` declarations for weights 600, 700, 800 all point to the same Bold file. Weights 700 and 800 are effectively aliases. No visual inconsistency; just metadata duplication.
