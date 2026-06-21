# Plinto — AI Invoice Approval Case Study Handoff

Created: 2026-06-18. Updated: 2026-06-21 (Design wireframes + Prototype screens integrated).

---

## Route

`/plinto` → `src/routes/plinto.tsx`

Preview: `npm run dev` → http://localhost:5173/plinto

---

## Chapter map

| # | Chapter | ID | Sections on page |
|---|---------|-----|------------------|
| 01 | Research | `research` | User context, competitive analysis |
| 02 | Define | `define` | Three states, principles, scope |
| 03 | Design | `design` | Wireframes (3 directions), interaction model |
| 04 | Prototype | `prototype` | Desktop full screens, copilot chat detail |
| 05 | Reflection | `reflection` | What to test, what comes next |

**Removed from page (2026-06-21):** Design → Visual system; Prototype → Mobile sub-chapter.

---

## File map

```
src/
  lib/
    plintoContent.ts           ← all copy, image paths, chapter data
    plintoContentContext.tsx
  components/project/
    PlintoPage.tsx
    plinto/
      chapters/
        ResearchSection.tsx
        DefineSection.tsx
        DesignSection.tsx      ← wireframes 3-col grid
        PrototypeSection.tsx   ← desktop screens + chat detail
        ReflectionSection.tsx
      ProjectHero.tsx
      Figure.tsx
      primitives.tsx
      utils.ts                 ← asset() encodes path segments (spaces/subfolders OK)
  routes/
    plinto.tsx
  components/home/
    projectShowcaseEntries.ts  ← Plinto showcase (3rd img: showcasenewww.jpg)
public/plinto/
```

---

## Session log — 2026-06-21

### Design chapter — Wireframes

- Replaced single `wireframes.svg` with three direction wireframes (600×400 SVG, full-bleed `#fafafa`, sidebar `#fafafa`).
- **Layout:** `DesignSection.tsx` — 12-col grid, 4 cols each on `lg+`, stack on tablet/mobile (`figureRow12` + `lg:col-span-4`).
- **Cards:** Same pattern as prototype screen cards — `Figure` with `title`, `caption`, `callout`, `calloutTitleAs="h5"`.
- **Copy:** `plintoContent.ts` → `design.wireframes.screens[]` (Conversational Ease, Control Room, Decision Card).
- **CSS:** `#design .case-figure-row--12` uses `gap-04` headline↔caption (matches prototype desktop cards).

### Design chapter — User flows (assets only, not on page)

Created 600×280 SVGs in `public/plinto/`:

| File | Direction |
|------|-----------|
| `wireframe-flow-conversational-ease.svg` | Conversational Ease |
| `wireframe-flow-control-room.svg` | Control Room |
| `wireframe-flow-decision-card.svg` | Decision Card |

Style: Inter Regular, accent `#F4442D`, no numbered step bubbles, enlarged decision diamonds, centered flows. **Not wired into `DesignSection` yet.**

### Prototype chapter — Desktop screens

Images live in `public/plinto/screens exports/` (paths with spaces — handled by `utils.ts` `asset()`).

| Content path | File |
|--------------|------|
| `prototype.desktop.fullScreens.screens[0]` | `screens exports/Auto-matched invoice.jpg` |
| `prototype.desktop.fullScreens.screens[1]` | `screens exports/Needs review invoice.jpg` |
| `prototype.desktop.fullScreens.screens[2]` | `screens exports/Blocked invoice.jpg` |
| `prototype.desktop.chatDetail.screens[0]` | `screens exports/ai chat screens.jpg` |

- Desktop/Mobile subchapter intros use `Prose` (body text level), not `heroIntroBody`.
- Copilot chat detail: single image block; no subchapter intro line; wrapper `.case-prototype-chat-detail` sets label→frame gap `--spacing-07`.
- `#prototype .case-figure-caption-callout__media img` — full width, `--case-radius-inner` (10px).

### Homepage showcase

Plinto entry third image: `/plinto/showcasenewww.jpg` (replaces `plintoshowcase3.jpg`).

### Site-wide layout

`styles.css` — `--page-pad` breakpoints:

| Viewport | Side padding |
|----------|----------------|
| `< 1024px` | 20px fixed |
| `1024px – 1579px` | 1 column — `calc(100vw / 14)` |
| `≥ 1580px` | 2 columns — `calc(100vw / 8)` |

---

## Assets in `public/plinto/`

| Path | Use |
|------|-----|
| `plinto project hero.jpg` | Hero |
| `plintoshowcase1.jpg`, `plintoshowcase2.jpg`, `showcasenewww.jpg`, `plintoshowcase4.jpg` | Homepage showcase grid |
| `wireframe-*.svg` | Design chapter wireframes |
| `wireframe-flow-*.svg` | User flows (not on page) |
| `screens exports/*.jpg` | Prototype chapter desktop exports |
| `Project page images/` | Source/reference exports |
| `ref-direction-*` | Retired from copy; may remain on disk |

---

## Edit cheatsheet

| Change | File |
|--------|------|
| Copy / image paths | `src/lib/plintoContent.ts` |
| Wireframes layout | `src/components/project/plinto/chapters/DesignSection.tsx` |
| Prototype layout | `src/components/project/plinto/chapters/PrototypeSection.tsx` |
| Prototype figure spacing / image radius | `src/styles.css` (`#prototype`, `.case-prototype-chat-detail`) |
| Wireframe card headline↔caption gap | `src/styles.css` (`#design .case-figure-row--12`) |
| Homepage Plinto tiles | `src/components/home/projectShowcaseEntries.ts` |

---

## Product model (current copy)

Three operator-facing states:

1. **Auto-matched** — fast confirm path  
2. **Needs review** — variance, new vendor, policy exceptions  
3. **Blocked** — duplicate, no PO match, hard stops  

Desktop: queue + KPI + copilot split view. Mobile mentioned in interaction model copy only (no mobile prototype section on page).

---

## Source materials (do not delete)

`public/case studies materials/Plinto/`

- `Plinto - prototype files/plinto-invoice-approvals-v4.html` — interactive prototype  
- `files/*.md` — research docs  
- `Plinto design task- case study.pdf` — presentation deck  

---

## Not done / backlog

- [ ] Wire `wireframe-flow-*.svg` into Design chapter (if desired)
- [ ] Git commit: Plinto route, components, `public/plinto/` assets
- [ ] Copy pass on reflection chapter
- [ ] Optional: rename `screens exports/` to URL-safe folder (e.g. `screen-exports/`)
