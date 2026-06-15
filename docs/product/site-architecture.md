# Site Architecture

Folder structure, responsibilities, data flow, and content flow for the portfolio site.

---

## Folder Structure

```
portfolio-redesign/
├── src/
│   ├── components/           # All React components
│   │   ├── about/            # About page
│   │   ├── auth/             # Login/auth gate
│   │   ├── home/             # Homepage components
│   │   ├── nav/              # Navigation components + config
│   │   ├── project/          # Case study components
│   │   │   ├── primitives.tsx    ← shared case study building blocks
│   │   │   ├── constants.ts      ← shared CSS class strings
│   │   │   ├── utils.ts          ← shared utilities
│   │   │   ├── Figure.tsx        ← image figure component
│   │   │   ├── CalloutGrid.tsx   ← callout card grid
│   │   │   ├── CalloutStack.tsx  ← callout card stack
│   │   │   ├── NumberedCalloutGrid.tsx
│   │   │   ├── NumberedCalloutStack.tsx
│   │   │   ├── CaseChapterIcons.tsx
│   │   │   ├── CaseStickyNotes.tsx
│   │   │   ├── CaseStudyShell.tsx
│   │   │   ├── InterviewCalloutBoard.tsx
│   │   │   ├── ProjectGoalsDiagram.tsx
│   │   │   ├── ProjectHero.tsx   ← shared hero (some studies have per-project versions)
│   │   │   ├── AgerasPage.tsx    ← Ageras page assembly
│   │   │   ├── CocoCarePage.tsx  ← Coco Care page assembly
│   │   │   ├── EatGrimPage.tsx   ← Eat Grim page assembly
│   │   │   ├── PowermatchPage.tsx
│   │   │   ├── RokokoBrandPage.tsx
│   │   │   ├── RokokoPage.tsx
│   │   │   ├── WeldPage.tsx
│   │   │   ├── ageras/           ← Ageras chapters + local primitives
│   │   │   ├── cococare/         ← Coco Care chapters + local primitives
│   │   │   ├── eatgrim/          ← Eat Grim chapters
│   │   │   ├── powermatch/       ← Powermatch chapters + local primitives
│   │   │   ├── rokoko/           ← Rokoko web chapters
│   │   │   ├── rokokobrand/      ← Rokoko brand chapters
│   │   │   └── weld/             ← Weld chapters
│   │   ├── shared/           # Site-wide shared components
│   │   └── ui/               # shadcn primitives only
│   ├── lib/                  # Content, tokens, utilities
│   │   ├── designSystem.ts   ← JS token constants (mirrors styles.css)
│   │   ├── utils.ts          ← cn() helper
│   │   ├── auth.ts           ← pre-launch password gate
│   │   ├── aboutContent.ts
│   │   ├── howIWorkContent.ts
│   │   ├── agerasContent.ts + agerasContentContext.tsx
│   │   ├── cocoCareContent.ts + cocoCareContentContext.tsx
│   │   ├── eatGrimContent.ts + eatGrimContentContext.tsx
│   │   ├── powermatchContent.ts + powermatchContentContext.tsx
│   │   ├── rokokoContent.ts + rokokoContentContext.tsx
│   │   ├── rokokoBrandContent.ts + rokokoBrandContentContext.tsx
│   │   └── weldContent.ts + weldContentContext.tsx
│   ├── routes/               # TanStack Router file routes
│   │   ├── __root.tsx        ← root layout, auth, footer
│   │   ├── index.tsx         ← /
│   │   ├── about.tsx         ← /about
│   │   ├── work-with-me.tsx  ← /work-with-me
│   │   ├── ageras.tsx        ← /ageras
│   │   ├── cococare.tsx      ← /cococare
│   │   ├── eatgrim.tsx       ← /eatgrim
│   │   ├── powermatch.tsx    ← /powermatch
│   │   ├── rokokobrand.tsx   ← /rokokobrand
│   │   ├── rokokoweb.tsx     ← /rokokoweb
│   │   └── weld.tsx          ← /weld
│   ├── hooks/                # Custom React hooks
│   └── styles.css            ← Global CSS + design tokens (source of truth)
├── public/
│   ├── fonts/                ← Neue Haas Grotesk Text Pro (3 weights)
│   ├── scene.splinecode      ← Homepage 3D hero
│   ├── about/                ← About page window images
│   ├── ageras/               ← Ageras case study images
│   ├── coco-care/            ← Coco Care case study images
│   ├── eatgrim/              ← Eat Grim case study images
│   ├── powermatch/           ← Powermatch case study images
│   ├── rokoko/               ← Rokoko web case study images
│   ├── rokoko-brand/         ← Rokoko brand case study images
│   └── weld/                 ← Weld case study images
├── docs/
│   ├── product/              ← THIS documentation system
│   ├── case-studies/         ← Per-case-study planning docs + handoffs
│   ├── context/              ← Background reference docs (design principles, coding conventions, etc.)
│   ├── decisions/            ← Settled architectural/design decisions
│   ├── reference/            ← Source assets, notes, external references
│   └── _archive/             ← Superseded docs
├── context/
│   ├── current.md            ← Live session state (read this first)
│   └── handoff.md            ← (if present) previous session handoff
├── scripts/                  ← Build and utility scripts
├── AGENTS.md                 ← Component map (partially outdated — superseded by component-inventory.md)
├── CLAUDE.md                 ← Claude Code behavior rules
└── configuration files       ← vite.config, tsconfig, package.json, wrangler.toml, etc.
```

---

## Layer Responsibilities

| Layer | Responsibility | Files |
|-------|---------------|-------|
| Routes | URL → component mapping | `src/routes/*.tsx` |
| Root layout | Shared shell, auth, footer | `src/routes/__root.tsx` |
| Page components | Assemble page from sections | `*Page.tsx`, `Homepage.tsx`, `AboutPage.tsx` |
| Section components | Stateless content sections | `chapters/*.tsx`, `shared/*.tsx` |
| Primitives | Reusable structural blocks | `project/primitives.tsx` |
| UI primitives | shadcn base components | `src/components/ui/` |
| Content files | All copy and image paths | `src/lib/*Content.ts` |
| Context | Content delivery to components | `src/lib/*ContentContext.tsx` |
| Tokens | Design values | `src/styles.css` + `src/lib/designSystem.ts` |
| Assets | Static files | `public/` |

---

## Data Flow

### Content flow (case studies)

```
src/lib/powermatchContent.ts
    ↓  (exported as const)
src/lib/powermatchContentContext.tsx
    ↓  (React context + hook)
src/components/project/PowermatchPage.tsx
    ↓  (passes sections to chapter components)
src/components/project/powermatch/chapters/ResearchSection.tsx
src/components/project/powermatch/chapters/DefineSection.tsx
etc.
```

**Rule:** Content files hold all copy and image paths. Page assembly files compose sections. Chapter files handle layout and rendering only. Nothing is hardcoded in components.

### Token flow

```
src/styles.css :root { --spacing-05: 1rem; }
    ↓  (Tailwind @theme inline)
Tailwind utility: p-05, gap-05, mt-05
    ↓  (used in component className)
<div className="gap-05 p-06"> ...

src/lib/designSystem.ts { spacing.gridGap: spacingTokens["05"].rem }
    ↓  (used for JS-side inline styles or Spline)
style={{ gap: spacing.gridGap }}
```

### Navigation flow

```
src/components/nav/topNavConfig.ts
    ↓  (topNavBrand + topNavItems)
src/components/nav/SiteTopNav.tsx
    ↓  (passes config to)
src/components/nav/PortfolioTopNav.tsx
    ↓  (renders nav grid with Button variants)
```

---

## Case Study Component Pattern

Every case study follows the same pattern (Coco Care is canonical):

```
src/routes/{slug}.tsx                    ← route (thin wrapper)
src/components/project/{Study}Page.tsx   ← page assembly
src/components/project/{study}/
    ProjectHero.tsx                      ← hero section
    chapters/
        ResearchSection.tsx
        DefineSection.tsx
        ...
    primitives.tsx                       ← per-study local building blocks (if needed)
    constants.ts                         ← CSS class strings (candidate for consolidation)
    utils.ts                             ← asset() helper + utilities
src/lib/{study}Content.ts                ← ALL copy + image paths
src/lib/{study}ContentContext.tsx        ← React context for content delivery
public/{study}/                          ← image assets
```

---

## Shared Component Inventory

For the complete inventory see `docs/product/component-inventory.md`.

Quick reference for shared site-wide components:

| Component | File | Used by |
|-----------|------|---------|
| `SiteTopNav` | `src/components/nav/SiteTopNav.tsx` | All pages |
| `SiteFooter` | `src/components/shared/SiteFooter.tsx` | All pages except /work-with-me |
| `ContactGrid` | `src/components/shared/ContactGrid.tsx` | Work With Me page |
| `HowIWork` | `src/components/shared/HowIWork.tsx` | Homepage |
| `CopyEmailButton` | `src/components/shared/CopyEmailButton.tsx` | Contact areas |
| `EditorialList` | `src/components/shared/EditorialList.tsx` | About, case studies |
| `Button` | `src/components/ui/Button.tsx` | Everywhere |

---

## Asset Organization

Images live in `public/{study-slug}/` and are referenced as root-relative paths in content files.

| Study | Public folder | Example path |
|-------|-------------|-------------|
| Coco Care | `public/coco-care/` | `/coco-care/hero.jpg` |
| Ageras | `public/ageras/` | `/ageras/agerasshowcase1.jpg` |
| Powermatch | `public/powermatch/` | `/powermatch/recon-tab-large.png` |
| Rokoko Web | `public/rokoko/` | `/rokoko/rokokowebimg.jpg` |
| Rokoko Brand | `public/rokoko-brand/` | `/rokoko-brand/some1-scaled copy.jpg` |
| Weld | `public/weld/` | `/weld/weld-showcase-left.png` |
| Eat Grim | `public/eatgrim/` | `/eatgrim/showcase1.jpg` |
| About | `public/about/` | `/about/window-1.png` |
| Homepage 3D | `public/` | `/scene.splinecode` |
| Fonts | `public/fonts/` | `/fonts/NHaasGroteskTXPro-55Rg.otf` |
