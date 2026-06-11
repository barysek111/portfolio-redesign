# Visual Style

Source of truth for colors, typography, spacing, and layout rules.

## Token Location (code)

| Layer | Path |
|-------|------|
| CSS custom properties | `src/styles.css` (`:root`, `.dark`) |
| Tailwind theme bridge | `@theme inline` in `src/styles.css` |
| Runtime tokens | `src/lib/designSystem.ts` |
| Runtime usage | Tailwind utilities (`bg-background`, `text-muted-foreground`, etc.) |

## Color Tokens

5 tokens cover the whole site. Use these — nothing else.

| CSS variable | Tailwind class | Value | Usage |
|---|---|---|---|
| `--background` | `bg-background` | `#f6f6f6` | Page fill |
| `--surface` | `bg-surface` | `#eeeeee` | Cards, callout areas, image placeholders |
| `--foreground` | `text-foreground` | `#111111` | Primary text, filled buttons |
| `--muted-foreground` | `text-muted-foreground` | `#66615a` | Labels, captions, secondary text |
| `--border` | `border-border` | `#eeeeee` | Dividers, outlines |

Dark mode: `.dark` class on `<html>` overrides `--background`, `--surface`, `--foreground` in `styles.css`.

The remaining shadcn tokens (`--primary`, `--accent`, `--input`, `--ring`, etc.) wire up shadcn/ui components internally — don't reference them directly in layout code.

## Typography

**Font:** Neue Haas Grotesk Text Pro (all weights, all roles). No display or mono variant.

Use semantic classes — never arbitrary `text-[Npx]` values.

| Class | CSS var | Size range | Usage |
|---|---|---|---|
| `text-h1` | `--text-h1` | 36–46px fluid | Page-level headings |
| `text-h2` | `--text-h2` | 24–36px fluid | Section headings |
| `text-h3` | `--text-h3` | 18–24px fluid | Sub-section headings |
| `text-h4` | `--text-h4` | 16–18px fluid | Card titles, callout headings |
| `text-h5` | `--text-h5` | 14–16px fluid | Small headings, nav |
| `text-body` | `--text-body-prose` | 16–18px fluid | Long-form prose |
| `text-s` | `--text-body` | 12–14px fluid | UI labels, tags, metadata |
| `text-xs` | `--text-xs` | 12px fixed | Fine print, captions |

Letter spacing and line height are set at the CSS var level — don't override them per-component.

## Spacing & Layout

- Spacing scale: 13 steps (`spacing-01` → `spacing-13`), defined in `designSystem.ts` and bridged to Tailwind. No arbitrary spacing values.
- Page side padding: fluid column-based (`--page-pad`), applied via `.page-shell` class
- Content max-width: `920px` (homepage + case study prose)
- Section gap: `spacing-13` (160px) between major case study sections
- Radius base: `--radius: 0.875rem` (14px)

## Image Ratios

- Project list thumbnails: 4:3
- Project hero: 16:9
- Process image grids: 1, 2, or 3 columns depending on content density

## Key CSS Classes

| Class | Effect |
|---|---|
| `.page-shell` | Fluid side padding (column-based) |
| `.intro-blur-text` | Display heading blur treatment |
| `.nav-blur-shell` | Floating nav backdrop blur |
| `.text-meta` | Composite meta label style |
| `.case-study` | Root wrapper for case study pages |

## Asset Paths

| Type | Location |
|---|---|
| Case study images | `public/coco-care/`, `public/ageras/` |
| Fonts | `@font-face` NeueHaas in `styles.css` |
| Noise overlay | Inline SVG data URL on `body::after` |
