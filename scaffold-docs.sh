#!/bin/bash

# ============================================================
# Portfolio docs scaffold
# Run from: ~/portfolio-projects/portfolio-redesign
# Usage: bash scaffold-docs.sh
# ============================================================

set -e

REPO="/Users/spagett/portfolio-projects/portfolio-redesign"
cd "$REPO"

echo "📁 Creating folder structure..."
mkdir -p docs/context
mkdir -p docs/case-studies
mkdir -p docs/decisions

# ============================================================
# 1. docs/context/design-principles.md
# Extracted from redesign-foundation.md sections 1, 3, 4, 5
# ============================================================
echo "✍️  Writing docs/context/design-principles.md..."
cat > docs/context/design-principles.md << 'EOF'
# Design Principles

## Visual Direction

**Default: Quiet Editorial Portfolio** (Direction A — closest to localhost:5173 mockup)

Tone: calm, sharp, restrained, confident.
Layout: narrow readable column, generous vertical rhythm, project rows as editorial index entries.
Type: modern grotesk for body/headings, mono for metadata.
Color: warm off-white background, soft grey text, near-black active states, one small accent.
Imagery: small controlled thumbnails in index, larger immersive images inside project pages.
Interaction: subtle nav pill, underline transitions, gentle thumbnail motion.

## Core Principles

- Lead with clarity, then personality.
- Make project scanning effortless.
- Keep every visual treatment reusable across projects.
- Use motion only to clarify state or add quiet polish.
- Preserve content, but improve pacing and hierarchy.

## Audience

- Design hiring teams and creative leads evaluating product design craft and case-study thinking.
- Founders and product teams looking for a designer who connects UX, UI, brand, and systems work.
- Peers scanning for portfolio credibility, visual personality, and contact details.

## Success Criteria

- A visitor understands who Barbora is and what she does within the first screen.
- The project list communicates seniority, scope, role, year, and outcomes without opening every case study.
- A project page supports long-form case studies like Coco Care without feeling heavy or repetitive.
- The visual system is documented well enough to make future changes intentionally.

## Accessibility Rules

- Navigation items should be real `<a>` links when they navigate, not buttons.
- Maintain visible keyboard focus for nav, project rows, social links, and copy-email.
- All project images need meaningful alt text when they communicate content.
- Keep color contrast strong between muted copy and background, especially for 13px project summaries.
- Respect `prefers-reduced-motion` for thumbnail scale, nav pill motion, and page transitions.
EOF

# ============================================================
# 2. docs/context/visual-style.md
# Extracted from FIGMA_DESIGN_SYSTEM.md (tokens, typography, color, spacing)
# and redesign-foundation.md section 4
# ============================================================
echo "✍️  Writing docs/context/visual-style.md..."
cat > docs/context/visual-style.md << 'EOF'
# Visual Style

Source of truth for colors, typography, spacing, and layout rules.

## Token Location (code)

| Layer | Path |
|-------|------|
| CSS custom properties | `src/styles.css` (`:root`, `.dark`) |
| Tailwind theme bridge | `@theme inline` in `src/styles.css` |
| Runtime tokens | `src/lib/designSystem.ts` |
| Runtime usage | Tailwind utilities (`bg-background`, `text-muted-foreground`, etc.) |

Format: Colors in **OKLCH**. Spacing in **Tailwind arbitrary values**.

## Color Tokens

| CSS variable | Usage |
|--------------|-------|
| `--background` | Page fill — warm off-white `oklch(0.985 0.002 90)` |
| `--surface` | Cards, media placeholders — `oklch(0.955 0.003 90)` |
| `--foreground` | Primary text, nav hover fill — near-black `oklch(0.22 0.008 260)` |
| `--muted-foreground` | Secondary text, labels — `oklch(0.52 0.008 260)` |
| `--border` | Dividers — foreground at 8% opacity |
| `--accent` | Availability dot, selection moments — warm red/orange |
| `--primary` | Same as foreground in light mode |
| `--primary-foreground` | Text on inverted surfaces |

Dark mode: CSS `.dark` overrides background/foreground/surface in `styles.css`.

## Typography

**Primary sans:** `"Neue Haas Grotesk"` (code) / `"Inter"` fallback in Figma.
**Metadata mono:** `"JetBrains Mono"` — for years, labels, availability, section markers.

| Role | Code | Size |
|------|------|------|
| Hero intro | `text-[52px] font-medium tracking-[-0.05em]` | 52px |
| Section title | `text-[52px] font-extrabold` | 52px |
| Case studies display | `text-[96px] font-extrabold` | 96px |
| Card title | `text-[76px] font-extrabold` | 76px |
| Card body | `text-[28px] font-medium` | 28px |
| Meta label | `text-[12px] uppercase tracking-[0.08em]` | 12px |
| Nav | `text-[14px] font-medium` | 14px |
| Body default | `text-[18px] font-medium` | 18px |

Mobile hero: 28px, line-height 1.25. Desktop hero: 34px, line-height 1.25.

## Spacing & Layout

- Main content max-width: `max-w-[1180px] mx-auto px-4 md:px-6`
- Home/index pages: 920px content width
- Long-form project content: 920px for intro/meta, up to 1210px for image-heavy sections
- Min horizontal padding: 24px
- Section gap: 96px desktop, reduced mobile
- Project rows: top border, 28px vertical padding
- Radius base: `--radius: 0.875rem` (14px)

## Image Ratios

- Project list thumbnails: 4:3
- Project hero: 16:9
- Process image grids: 1, 2, or 3 columns depending on content density

## Key CSS Classes

| Class | Effect |
|-------|--------|
| `.intro-blur-text` | Display heading blur treatment |
| `.nav-item` | Nav link state styles |
| `.nav-blur-shell` | Floating nav backdrop blur |
| `.text-meta` | Composite meta label style |

## Asset Paths

| Type | Location |
|------|----------|
| Project thumbnails | `src/assets/projects/*.jpg` |
| Case study images | `public/coco-care/` |
| Fonts | `@font-face` NeueHaas in `styles.css` |
| Noise overlay | Inline SVG data URL on `body::after` |
EOF

# ============================================================
# 3. docs/context/figma-bridge.md
# Extracted from FIGMA_DESIGN_SYSTEM.md (Figma-specific sections)
# ============================================================
echo "✍️  Writing docs/context/figma-bridge.md..."
cat > docs/context/figma-bridge.md << 'EOF'
# Figma ↔ Code Bridge

Reference for keeping Figma and code in sync.

**Figma file:** [New-portfolio-website](https://www.figma.com/design/rHULRmqazpCUuOjWFZs7uC/New-portfolio-website?node-id=0-1)

## Figma File Structure

| Page | Purpose |
|------|---------|
| Cover | DS title card |
| Getting Started | Usage + code paths |
| Foundations | Color swatches, type specimens, spacing bars |
| Components | Component library |

## Variable Collections

1. **Primitives** — raw neutrals + accent (hidden scopes)
2. **Color** — Light / Dark semantic aliases (maps 1:1 to `--*` CSS vars)
3. **Spacing** — gap/size scale `spacing/1` … `spacing/32`
4. **Radius** — corner tokens

## Figma Component → Code Map

| Figma name | Code equivalent |
|------------|-----------------|
| `Nav Item` | `.nav-item` (State=Default / Hover) |
| `Nav Pill` | Fixed header nav shell |
| `Tag` | Case study tag pills |
| `Divider / Horizontal` | `border-foreground/35` |
| `Capability Row` | Focus / Tools list rows |
| `Hero / Intro` | Hero paragraph (52px) |
| `Case Study Card` | Selected work article |
| `Footer / Contact` | Site footer |

## MCP Workflow

1. Read tokens from Figma variables → map to `var(--*)` in `styles.css`.
2. Prefer existing **Components** instances over redrawing.
3. Match layout: **1180px** content width.
4. Apply `.intro-blur-text` to display headings in code (not 1:1 reproducible in Figma).
5. Validate with `get_metadata` + `get_screenshot` after `use_figma` writes.
EOF

# ============================================================
# 4. docs/context/coding-conventions.md
# Extracted from WORKFLOW.md + FIGMA_DESIGN_SYSTEM.md (stack/arch sections)
# ============================================================
echo "✍️  Writing docs/context/coding-conventions.md..."
cat > docs/context/coding-conventions.md << 'EOF'
# Coding Conventions

## Stack

| Concern | Choice |
|---------|--------|
| UI | React 19 |
| Routing | `@tanstack/react-router` (file routes) |
| Styling | Tailwind CSS v4 + CSS variables |
| Components | shadcn/ui pattern (`src/components/ui/`) |
| Animation | `motion/react` (Framer Motion) |
| Icons | `lucide-react` |
| Build | Vite 7 |
| Deploy | Cloudflare (Wrangler artifacts in `dist/server`) |
| Runtime | Bun |

## File Conventions

- `src/styles.css` — CSS custom properties and Tailwind theme config
- `src/lib/designSystem.ts` — single source of truth for all design tokens
- `src/lib/utils.ts` — `cn()` helper
- `src/components/ui/` — shadcn primitives only (button, badge, navigation-menu, etc.)
- `src/routes/` — TanStack file routes (one file per page)
- Routes use layout: `__root.tsx` wraps all pages

## Component Rules

- **Reuse before creating.** Check `src/components/` before writing a new component.
- **Content separate from presentation.** Copy and data live in `src/lib/*Content.ts`, not in components.
- **Tokens via designSystem.ts.** Import from `@/lib/designSystem` — don't hardcode values in components.
- **Variants via CVA.** Use class-variance-authority for any component with multiple visual states.
- shadcn primitives in `ui/` only — no custom layout logic inside `ui/`.

## Styling Rules

- Global tokens in `:root` / `.dark` in `styles.css` — edit here first.
- Tailwind utilities for layout; CSS variables for color/radius/spacing tokens.
- Max-width pattern: `max-w-[1180px] mx-auto px-4 md:px-6`
- Dark mode via `.dark` class on `<html>` — CSS variables auto-swap.
- Never hardcode a color hex. Use `var(--*)` or a Tailwind semantic utility.

## Naming

- Components: PascalCase (`ProjectHero.tsx`)
- Utilities/hooks: camelCase (`useScrollPosition.ts`)
- Content files: camelCase with `Content` suffix (`cocoCareContent.ts`)
- Route files: lowercase (`cococare.tsx`, `ageras.tsx`)
EOF

# ============================================================
# 5. docs/context/dev-workflow.md
# Extracted from WORKFLOW.md (tooling/editor sections)
# ============================================================
echo "✍️  Writing docs/context/dev-workflow.md..."
cat > docs/context/dev-workflow.md << 'EOF'
# Dev Workflow

## Starting the dev server

```bash
cd ~/portfolio-projects/portfolio-redesign
npm run dev          # starts on http://localhost:5173
npm run open:home    # opens / in browser
npm run open:coco    # opens /project/cococare
```

After each change: **Cmd+Shift+R** in browser.

## Cursor mode guide

| Task | Mode |
|------|------|
| Click element, tweak spacing | Design mode + short prompt |
| One file, clear change | Composer (`Cmd+I`) |
| Many files / refactor | Agent (slower) |

## Which file to edit

See `AGENTS.md` for line numbers. Quick reference:

- Homepage layout → `src/components/home/AiDesignHomepage.tsx`
- Case study layout → `src/components/project/CocoCarePage.tsx`
- Case study text/images → `src/lib/cocoCareContent.ts`
- Global look → `src/styles.css` (last resort)

Always `@` the file in your prompt.

## Cursor settings

- Network → HTTP/1.1 (`disableHttp2` already on)
- Optional: turn off Enhanced Context if edits feel slow
EOF

# ============================================================
# 6. docs/context/writing-style.md
# Extracted from redesign-foundation.md IA/content sections
# ============================================================
echo "✍️  Writing docs/context/writing-style.md..."
cat > docs/context/writing-style.md << 'EOF'
# Writing Style

## Voice

- Direct, human, no filler.
- No dashes (— or -) in copy. No AI-sounding phrases.
- Short sentences. Scannable.
- Warm but not casual to the point of flippancy.

## Hero / Intro Copy (preserve exactly)

> "Hey, I'm Barbora. Designing for the future of tech and lifestyle."

Supporting intro:
> "Crafting intuitive digital interfaces that solve complex business challenges and make people's lives easier. Skilled in prototyping, with a strong focus on accessibility and user engagement."

Skill cue:
> "I've got your back with.."

## About Page Personality Line (preserve exactly)

> "Detail oriented, dog person, fashion nerd, amateur nail tech."

## Project Summary Format

Each project row: **year · title · one-line summary · tags · role**

Keep project summaries factual and outcome-oriented. Lead with what was built, not the process.

## Navigation Labels

Current: Work / About / Play / Resume
IA mapping:
- Work → project list
- About → about page
- Resume → CV/PDF link
- Play → only if experimental work exists; otherwise replace with Contact

## Section Headers

Use sentence case, not title case.
Avoid vague labels like "Overview" — prefer "Project background" or "The challenge".
EOF

# ============================================================
# 7. docs/case-studies/cococare.md
# ============================================================
echo "✍️  Writing docs/case-studies/cococare.md..."
cat > docs/case-studies/cococare.md << 'EOF'
# Case Study: Coco Care

Reference doc for the Coco Care project page. This is the canonical template for all long-form case studies.

## Page Structure

Route: `/project/cococare`
Shell: `src/components/project/CocoCarePage.tsx`

## Component Inventory

| Section | File |
|---------|------|
| Shell (nav, page wrapper) | `src/components/project/CocoCarePage.tsx` |
| Hero + background + challenge | `src/components/project/cococare/ProjectHero.tsx` |
| 01 Research | `src/components/project/cococare/chapters/ResearchSection.tsx` |
| 02 Define | `src/components/project/cococare/chapters/DefineSection.tsx` |
| 03 Ideate | `src/components/project/cococare/chapters/IdeateSection.tsx` |
| 04 Prototype | `src/components/project/cococare/chapters/PrototypeSection.tsx` |
| 05 Test | `src/components/project/cococare/chapters/TestSection.tsx` |
| Footer CTA | `src/components/project/cococare/ProjectFooterCta.tsx` |
| Shared primitives | `src/components/project/cococare/primitives.tsx` |

Copy and images: `src/lib/cocoCareContent.ts` **only** — do not inline copy in layout files.

## Section Order

1. Back link to Work/Home
2. Project title + one-sentence summary
3. Metadata grid (client, year, role, tools)
4. Hero image
5. Project background
6. The challenge
7. Table of contents / process nav
8. 01 Research
9. 02 Define
10. 03 Ideate
11. 04 Prototype
12. 05 Test
13. Footer CTA

## Key Copy

**Title:** Coco Care
**Summary:** Designing user interface for Coco Care web app and mobile app, an AI-driven motion capture tool for physio rehabilitation.

**Metadata:**
- Client: Coco Care
- Year: 2024
- Role: UX & UI, Design System, User Flows, Prototyping, Usability Testing

**Background:**
Coco Care is a digital physiotherapy solution that helps patients access personalized, evidence-based rehabilitation at home through an intuitive app. Designed the patient and physio experience and set the foundation for scheduling, exercise tracking and engagement, compliance, and recovery outcomes.

**Challenge:**
Patients often struggle with motivation and consistency in physiotherapy. Clinics face high dropout rates and limited insight into patients' progress at home.

**Research intro:**
To ground the project in real user needs, combined qualitative and exploratory research methods. Conducted targeted interviews with both patients and physiotherapists, crafted personas to crystallize user motivations and pain points, and mapped key user flows to visualize the rehabilitation journey.

## Storytelling Pattern (use for all future case studies)

1. Frame the real-world problem before showing any design work.
2. Show research evidence before solutions.
3. Each process section ends with a clear "so we decided to..." bridge.
4. Images support the narrative — don't just dump screens without context.
5. Outcomes section (if available) uses concrete numbers or user feedback, not vague adjectives.

## Asset Paths

- Hero: `public/coco-care/Slide-16_9-1-scaled.jpg`
- Process icons: `public/coco-care/` (research, define, ideate, prototype, test SVGs)
- Hi-fi screens: `public/coco-care/` (mobile + portal)
EOF

# ============================================================
# 8. docs/case-studies/ageras.md
# ============================================================
echo "✍️  Writing docs/case-studies/ageras.md..."
cat > docs/case-studies/ageras.md << 'EOF'
# Case Study: Ageras

Planning doc for the Ageras project page. Not yet implemented — use Coco Care as the template reference.

## Project Summary

**Title:** Ageras Website UI/UX Consolidation
**Year:** 2025
**Summary:** End-to-end website redesign across four markets, from wireframes and sitemaps to a final UI. Building the foundation for a comprehensive, responsive and scalable design system.
**Route (planned):** `/project/ageras`

## Role & Scope

End-to-end ownership. Multi-market platform (four countries). Deliverables included: sitemaps, wireframes, final UI, design system foundation.

## Key Proof Points (foreground these)

- Multi-market design system work — strongest signal of design maturity in the portfolio.
- Cross-functional collaboration across markets.
- Systems thinking: scalable, responsive, consistent across four locales.

## Sections to Include (follow Coco Care template)

1. Back link
2. Title + summary
3. Metadata (client, year, role, tools)
4. Hero image
5. Project background
6. Challenge / problem statement
7. Process sections (adapt to what actually happened — don't force the Research/Define/Ideate/Prototype/Test structure if it doesn't fit)
8. Outcomes
9. Footer CTA

## Notes

- This is the highest-priority case study for hiring teams evaluating senior readiness.
- Foreground the design system work and multi-market complexity.
- If process sections feel thin, use a Before/After or Problem/Solution structure instead.
EOF

# ============================================================
# 9. docs/decisions/README.md
# ============================================================
echo "✍️  Writing docs/decisions/README.md..."
cat > docs/decisions/README.md << 'EOF'
# Design & Tech Decisions

Log of resolved decisions. Claude reads this to avoid re-litigating things that are already settled.

---

## Stack decisions

**Tailwind v4 over v3**
Using `@import "tailwindcss"` syntax, not `@tailwind base/components/utilities`. Don't suggest downgrading.

**TanStack Router over React Router**
File-based routing in `src/routes/`. Don't suggest switching.

**Bun over npm/yarn**
Runtime and package manager. Use `bun` commands, not `npm`, unless a script is already written with npm.

**Cloudflare Pages + Wrangler**
Deploy target. Don't suggest Vercel or Netlify.

**No Tokens Studio / Style Dictionary**
Tokens are CSS-first in `src/styles.css`. No external token pipeline. Don't suggest adding one.

**No serif typeface (yet)**
Direction C (soft lifestyle aesthetic) with a serif accent was considered and deferred. Don't introduce serif unless explicitly asked.

**No CMS**
Content lives in `src/lib/*Content.ts` files. No Contentful, Sanity, etc. Don't suggest adding one.

---

## Design decisions

**Direction A (Quiet Editorial) is the default**
Direction B (Studio Archive) and Direction C (Soft Lifestyle) were considered and deferred. Don't suggest switching direction unless asked.

**Floating pill nav stays**
The nav pattern is fixed. Accessibility improvements (real `<a>` links) are in progress but the visual pattern is settled.

**Coco Care is the canonical project template**
All new project pages should follow its structure. Don't invent a new layout pattern.

**Play nav item is a placeholder**
Keep until experimental/play work exists. Replace with Contact if no play content materialises.
EOF

# ============================================================
# 10. Rewrite CLAUDE.md as a lean pointer file
# ============================================================
echo "✍️  Rewriting CLAUDE.md..."
cat > CLAUDE.md << 'EOF'
# Portfolio Redesign — Claude Context

## Stack
Vite + React + TypeScript + TailwindCSS v4 + shadcn/ui + TanStack Router + Framer Motion (motion/react). Bun runtime. Deploy target: Cloudflare Pages.

## Source of truth
- Design tokens → `src/lib/designSystem.ts` + `src/styles.css`
- Content/copy → `src/lib/*Content.ts` files (never inline in components)
- Component map → `AGENTS.md`

## Rules
- Reuse existing components before creating new ones (`src/components/`)
- Never hardcode a color — use `var(--*)` or a Tailwind semantic utility
- Content stays separate from presentation
- Check `docs/decisions/README.md` before proposing architectural changes

## Read when relevant

| Topic | File |
|-------|------|
| Visual style, tokens, layout rules | `docs/context/visual-style.md` |
| Design principles + accessibility | `docs/context/design-principles.md` |
| Writing style + copy rules | `docs/context/writing-style.md` |
| Coding conventions + naming | `docs/context/coding-conventions.md` |
| Dev server + Cursor workflow | `docs/context/dev-workflow.md` |
| Figma ↔ code sync | `docs/context/figma-bridge.md` |
| Coco Care page (canonical template) | `docs/case-studies/cococare.md` |
| Ageras page (planned) | `docs/case-studies/ageras.md` |
| Resolved decisions (read before proposing changes) | `docs/decisions/README.md` |
EOF

# ============================================================
# 11. Archive old monolithic files
# ============================================================
echo "📦 Archiving old monolithic docs..."
mkdir -p docs/_archive
cp WORKFLOW.md docs/_archive/WORKFLOW.md.bak
cp FIGMA_DESIGN_SYSTEM.md docs/_archive/FIGMA_DESIGN_SYSTEM.md.bak
cp docs/redesign-foundation.md docs/_archive/redesign-foundation.md.bak

echo ""
echo "✅ Done. New structure:"
echo ""
echo "CLAUDE.md                          ← lean pointer file (rewritten)"
echo "AGENTS.md                          ← untouched (Cursor line numbers)"
echo ""
echo "docs/context/"
echo "  design-principles.md             ← vision, audience, accessibility"
echo "  visual-style.md                  ← tokens, type, spacing, color"
echo "  coding-conventions.md            ← stack, file rules, naming"
echo "  dev-workflow.md                  ← dev server, Cursor modes"
echo "  writing-style.md                 ← voice, copy rules, nav labels"
echo "  figma-bridge.md                  ← Figma sync, MCP workflow"
echo ""
echo "docs/case-studies/"
echo "  cococare.md                      ← canonical template + component map"
echo "  ageras.md                        ← plan for next case study"
echo ""
echo "docs/decisions/"
echo "  README.md                        ← settled stack + design decisions"
echo ""
echo "docs/_archive/"
echo "  WORKFLOW.md.bak                  ← original (safe to delete later)"
echo "  FIGMA_DESIGN_SYSTEM.md.bak       ← original (safe to delete later)"
echo "  redesign-foundation.md.bak       ← original (safe to delete later)"
echo ""
echo "WORKFLOW.md and FIGMA_DESIGN_SYSTEM.md are still in place."
echo "Once you've confirmed everything looks good, you can delete them:"
echo "  rm WORKFLOW.md FIGMA_DESIGN_SYSTEM.md docs/redesign-foundation.md"
