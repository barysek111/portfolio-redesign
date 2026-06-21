# Portfolio redesign

**Folder:** `~/portfolio-projects/portfolio-redesign`  
**Preview:** `npm run dev` (port **5173** fixed) → http://localhost:5173/ · http://localhost:5173/project/cococare · http://localhost:5173/plinto  
**Open in browser:** `npm run open:home` or `npm run open:coco` (after dev server is running)

## Live pages

| Page | Route | UI | Copy |
|------|-------|-----|------|
| Homepage | `/` | `src/components/home/AiDesignHomepage.tsx` | inline |
| Coco Care | `/project/cococare` | `src/components/project/CocoCarePage.tsx` | `src/lib/cocoCareContent.ts` |
| Plinto | `/plinto` | `src/components/project/PlintoPage.tsx` | `src/lib/plintoContent.ts` |

→ Plinto handoff: `docs/case-studies/plinto-handoff.md`

**Styles:** `src/styles.css` · **Tokens:** `src/lib/designSystem.ts`

## Homepage sections (`AiDesignHomepage.tsx`)

Nav ~126 · Hero ~144 · Work grid ~162 · How I work ~268 · Footer ~485

## Coco Care — edit by chapter

| Chapter | Layout file (`@` this for spacing/components) |
|---------|-----------------------------------------------|
| Shell (nav, page wrapper) | `src/components/project/CocoCarePage.tsx` |
| Hero + background + challenge | `src/components/project/cococare/ProjectHero.tsx` |
| 01 Research | `src/components/project/cococare/chapters/ResearchSection.tsx` |
| 02 Define | `src/components/project/cococare/chapters/DefineSection.tsx` |
| 03 Ideate | `src/components/project/cococare/chapters/IdeateSection.tsx` |
| 04 Prototype | `src/components/project/cococare/chapters/PrototypeSection.tsx` |
| 05 Test | `src/components/project/cococare/chapters/TestSection.tsx` |
| Footer CTA | `src/components/project/cococare/ProjectFooterCta.tsx` |

**Shared building blocks:** `src/components/project/cococare/primitives.tsx`  
**Copy/images:** `src/lib/cocoCareContent.ts` only

## Reference (not app code)

- `docs/reference/notes/` — portfolio notes, Cursor speed guide, design reference screenshot
- `docs/reference/source-assets/` — original project cover PNGs
- `docs/aidesign-os-design-system.json` — design tokens reference
