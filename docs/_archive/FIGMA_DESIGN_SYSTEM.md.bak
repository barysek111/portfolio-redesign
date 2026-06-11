# Figma ↔ Code Design System Rules

Portfolio homepage design system derived from `src/components/home/AiDesignHomepage.tsx` and `src/styles.css`.

**Figma file:** [New-portfolio-website](https://www.figma.com/design/rHULRmqazpCUuOjWFZs7uC/New-portfolio-website?node-id=0-1)

---

## 1. Token definitions

### Location (code)

| Layer | Path |
|--------|------|
| CSS custom properties | `src/styles.css` (`:root`, `.dark`) |
| Tailwind theme bridge | `@theme inline` in `src/styles.css` |
| Runtime usage | Tailwind utilities (`bg-background`, `text-muted-foreground`, etc.) |

### Format

- Colors: **OKLCH** in CSS, e.g. `oklch(0.985 0.002 90)`
- Spacing/layout: **Tailwind arbitrary values** and fixed px in components (`max-w-[1180px]`, `pt-24`)
- Radius base: `--radius: 0.875rem` (14px) with derived `--radius-sm` … `--radius-2xl`
- No Style Dictionary / Tokens Studio in repo — tokens are CSS-first

### Semantic tokens (map 1:1 to Figma `Color` collection)

| CSS variable | Figma variable | Usage |
|--------------|----------------|--------|
| `--background` | `color/background` | Page fill |
| `--surface` | `color/surface` | Cards, media placeholders |
| `--foreground` | `color/foreground` | Primary text, nav hover fill |
| `--muted-foreground` | `color/muted-foreground` | Secondary text, labels |
| `--border` | `color/border` | Dividers (~35% foreground) |
| `--accent` | `color/accent` | Selection, highlights |
| `--primary` | `color/primary` | Same as foreground in light mode |
| `--primary-foreground` | `color/primary-foreground` | Text on inverted surfaces |

### Spacing scale (Figma `Spacing` collection)

Aligns with homepage gaps: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128` → `spacing/1` … `spacing/32`.

### Radius (Figma `Radius` collection)

`--radius` 14px → `radius/lg`; pills use `radius/full` (9999).

---

## 2. Component library

### Code components

| Component | Path | Notes |
|-----------|------|--------|
| Homepage shell | `src/components/home/AiDesignHomepage.tsx` | Nav, Hero, How I work, Work grid, Footer |
| shadcn UI primitives | `src/components/ui/*` | Button, Card, etc. (CVA variants) |
| Case study page | `src/routes/project/cococare.tsx` | Long-form layout |
| Mockups | `src/components/mockups/*` | Optional showcase frames |

### Figma components (page: **Components**)

| Figma name | Maps to |
|------------|---------|
| `Nav Item` | `.nav-item` (State=Default \| Hover) |
| `Nav Pill` | Fixed header nav shell |
| `Tag` | Case study tag pills |
| `Divider / Horizontal` | `border-foreground/35` rules |
| `Capability Row` | Focus / Tools list rows |
| `Section Header / Work` | “Case Studies” block header |
| `Hero / Intro` | Hero paragraph (52px) |
| `Case Study Card` | Selected work article |
| `Footer / Contact` | Site footer |

### Architecture

- **React 19** + **TanStack Router** file routes
- **Tailwind CSS v4** (`@import "tailwindcss"`)
- **class-variance-authority** for variant APIs (see `button.tsx`)
- **motion/react** for hover on work media

---

## 3. Frameworks & libraries

| Concern | Choice |
|---------|--------|
| UI | React 19 |
| Routing | `@tanstack/react-router` |
| Styling | Tailwind CSS v4 + CSS variables |
| Components | shadcn/ui pattern (`src/components/ui/`) |
| Animation | `motion/react` |
| Icons | `lucide-react` (available; homepage uses minimal icons) |
| Build | Vite 7 |
| Deploy target | Cloudflare (Wrangler artifacts in `dist/server`) |

---

## 4. Asset management

| Type | Location |
|------|----------|
| Project thumbnails | `src/assets/projects/*.jpg` |
| Case study images | `public/coco-care/` |
| Fonts | Local stack via `@font-face` **NeueHaas** in `styles.css` |
| Noise overlay | Inline SVG data URL on `body::after` |

No CDN config in repo; static assets ship with the Vite build.

---

## 5. Icon system

- **Library:** `lucide-react` under `src/components/ui/`
- **Homepage:** SVG principles map is inline in `AiDesignHomepage.tsx` (not Lucide)
- **Convention:** PascalCase component names from Lucide imports

---

## 6. Styling approach

| Pattern | Implementation |
|---------|----------------|
| Global tokens | `:root` / `.dark` in `styles.css` |
| Utilities | Tailwind + custom `@layer utilities` |
| Key effects | `.intro-blur-text`, `.nav-item`, `.nav-blur-shell`, `.text-meta` |
| Responsive | Tailwind breakpoints (`md:`, `sm:`) |
| Dividers | `border-foreground/35` (semantic border token) |
| Max width | `max-w-[1180px] mx-auto px-4 md:px-6` |

### Typography (code → Figma text styles)

| Role | Code | Figma text style |
|------|------|------------------|
| Hero intro | `text-[52px] font-medium tracking-[-0.05em]` | `Hero/Intro` |
| Section title | `text-[52px] font-extrabold` | `Display/Section` |
| Case studies display | `text-[96px] font-extrabold` | `Display/Case Studies` |
| Card title | `text-[76px] font-extrabold` | `Heading/Card` |
| Card body | `text-[28px] font-medium` | `Body/Large` |
| Meta label | `text-[12px] uppercase tracking-[0.08em]` | `Label/Meta` |
| Nav | `text-[14px] font-medium` | `Label/Nav` |
| Focus row | `text-[18px] font-medium` | `Body/Default` (approx.) |

**Font:** Code uses **Neue Haas Grotesk**; Figma file uses **Inter** as fallback with matching weights (Medium, Semi Bold, Extra Bold).

---

## 7. Project structure

```
portfolio-redesign-lovable-mockup-homepage/
├── src/
│   ├── components/
│   │   ├── home/          # Homepage (canonical UI)
│   │   ├── ui/            # shadcn primitives
│   │   ├── mockups/       # Project showcase mockups
│   │   └── showcase/      # Showcase stage system
│   ├── routes/            # TanStack file routes
│   ├── lib/               # Content + utils
│   └── styles.css         # Tokens + global utilities
├── public/                # Static assets
└── FIGMA_DESIGN_SYSTEM.md # This file
```

### Feature organization

- **Routes** = pages (`index.tsx`, `project/cococare.tsx`)
- **home/** = marketing homepage composition
- **ui/** = reusable primitives only
- **lib/** = copy and data, not presentation

---

## 8. Figma file structure

| Page | Purpose |
|------|---------|
| Cover | DS title card |
| Getting Started | Usage + code paths |
| Foundations | Color swatches, type specimens, spacing bars |
| --- | Separator |
| Components | Component library |
| --- Utilities | Reserved |
| Page 1 | Legacy empty page (safe to ignore) |

### Variable collections

1. **Primitives** — raw neutrals + accent (hidden scopes)
2. **Color** — Light / Dark semantic aliases
3. **Spacing** — gap / size scale
4. **Radius** — corner tokens

---

## 9. Implementing designs from Figma (MCP workflow)

1. Read tokens from Figma variables → map to `var(--*)` in `styles.css`.
2. Prefer existing **Components** instances over redrawing.
3. Match layout: **1180px** content width, **auto-layout** for stacked/side-by-side regions.
4. Apply `.intro-blur-text` to display headings in code (not reproducible 1:1 in Figma alone).
5. Nav: use `Nav Pill` + `Nav Item` variants; code uses `<a className="nav-item">`.
6. Validate with `get_metadata` + `get_screenshot` after `use_figma` writes.

### Code Connect (optional next step)

Map Figma components to:

- `AiDesignHomepage` sections
- `@/components/ui/button` for any shadcn buttons added later

---

## 10. Dark mode

CSS `.dark` overrides background/foreground/surface in `styles.css`. Figma **Color** collection includes **Dark** mode on semantic variables — switch mode in Figma to preview.

---

*Generated from homepage restore session. Figma build run ID: `portfolio-homepage-ds-2026-05-22`.*
