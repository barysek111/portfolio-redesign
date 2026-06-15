# Case Study Inventory

All 7 case studies. Status, content source, documentation, and gaps. Updated: 2026-06-15.

Canonical template: Coco Care (`docs/case-studies/cococare.md`).

---

## Summary Table

| Case study | Route | Year | Domain | Status | Documentation |
|-----------|-------|------|--------|--------|--------------|
| Powermatch | `/powermatch` | 2025 | B2B SaaS / FinTech | Live — visual QA pending | `docs/case-studies/powermatch-handoff.md` |
| Ageras | `/ageras` | 2025 | Multi-market design system | Live | `docs/case-studies/ageras.md` |
| Coco Care | `/cococare` | 2024 | Digital health (mobile + web) | Live | `docs/case-studies/cococare.md` |
| Rokoko Web | `/rokokoweb` | 2023 | Marketing site / webshop | Live | None |
| Rokoko Brand | `/rokokobrand` | 2022 | Brand identity rebrand | Live | None |
| Weld | `/weld` | 2021 | Data SaaS brand + web | Live | None |
| Eat Grim | `/eatgrim` | 2019–2021 | Sustainable startup brand | Live | None |

---

## Powermatch — Bank Reconciliation

**Route:** `/powermatch`  
**Content file:** `src/lib/powermatchContent.ts`  
**Context:** `src/lib/powermatchContentContext.tsx`  
**Page:** `src/components/project/PowermatchPage.tsx`  
**Chapters:** ResearchSection, DefineSection, IdeateSection, PrototypeSection (TestSection exists but not rendered)  
**Images:** `public/powermatch/` (10 files)  
**Documentation:** `docs/case-studies/powermatch-handoff.md` — very detailed

### What's done

- Hero: "Bank Reconciliation" title, subtitle, metadata, hero image (`recon-tab-large.png`)
- Ch01 Research: stakeholder alignment, user observation, competitor analysis (5 tools)
- Ch02 Define: problem statement, 3 HMW design goals, V1 scope decisions
- Ch03 Ideate: navigation structure, layout exploration, user flows, wireframes
- Ch04 Design (Prototype section): new components, final screens across 3 areas
- CSS fix applied: `case-editorial-split` has `width: 100%; min-width: 0`

### Gaps / next actions

- [ ] Visual QA — screenshot not taken; dev server needed
- [ ] 4 Figma exports still missing: Unmatched state (`117:68373`), Pending Approval Accept (`117:70112`), Partial match reverse (`117:72573`), Activity tab (`191:98002`)
- [ ] `DefineSection`: `userNeeds.items` and `successMetrics.items` are empty arrays
- [ ] `IdeateSection`: `userFlows.images` and `wireframes.images` are empty arrays
- [ ] `PrototypeSection` designSystem section: `images` are empty
- [ ] Figma annotations not yet extracted (user confirmed they're visible)
- [ ] TestSection not rendered — intentional, but decide whether to add a short reflection section

---

## Ageras — Website UI/UX Consolidation

**Route:** `/ageras`  
**Content file:** `src/lib/agerasContent.ts`  
**Context:** `src/lib/agerasContentContext.tsx`  
**Page:** `src/components/project/AgerasPage.tsx`  
**Chapters:** ResearchSection, DefineSection, PrototypeSection, ImplementSection, SystemSection  
**Images:** `public/ageras/`  
**Documentation:** `docs/case-studies/ageras.md` — planning doc (not a handoff)

### About the project

End-to-end website redesign across four markets (Denmark, Norway, Sweden, Germany). Deliverables: sitemaps, wireframes, final UI, design system foundation. Highest-priority case study for senior-readiness signals — foregrounds design system and multi-market complexity.

### Gaps / next actions

- [ ] No handoff doc — status of content completeness unknown
- [ ] Confirm all sections are populated with real copy (not placeholders)
- [ ] Visual QA across breakpoints

---

## Coco Care — Interface Design

**Route:** `/cococare`  
**Content file:** `src/lib/cocoCareContent.ts`  
**Context:** `src/lib/cocoCareContentContext.tsx`  
**Page:** `src/components/project/CocoCarePage.tsx`  
**Chapters:** ResearchSection, DefineSection, IdeateSection, PrototypeSection, TestSection  
**Images:** `public/coco-care/`  
**Documentation:** `docs/case-studies/cococare.md` (canonical template) + `docs/reference/notes/cococare-handoff.md` (old handoff)

### About the project

Digital physiotherapy platform. Designed both mobile app and web portal from user flows to interface details. Both patient-facing and physio-facing experiences. Canonical case study template for all other projects.

### What's done (from handoff notes)

- Persona carousel with SVG personas
- Interview callouts, sticky notes
- Success metrics, UX goals callouts
- Prototype: design system + hi-fi blocks
- Typography: chapter h1, block labels, hero intro
- Persona SVGs optimized (`npm run optimize:personas`)

### Gaps / next actions

- [ ] Visual QA (personas carousel on narrow viewports, prototype hi-fi stacks)
- [ ] Old handoff doc (`docs/reference/notes/cococare-handoff.md`) may be superseded — cross-check and update if needed

---

## Rokoko Web — Website Revamp

**Route:** `/rokokoweb`  
**Content file:** `src/lib/rokokoContent.ts`  
**Context:** `src/lib/rokokoContentContext.tsx`  
**Page:** `src/components/project/RokokoPage.tsx`  
**Chapters:** ResearchSection, DefineSection, IdeateSection, ImplementSection  
**Images:** `public/rokoko/`  
**Documentation:** None

### About the project

Redesign of Rokoko's main marketing website, webshop, and helpdesk site. Role: UX/UI Design, Wireframing & Prototyping, Brand Identity, Responsive Web Design, Design Systems. Year: 2023.

### Gaps / next actions

- [ ] No documentation — content completeness unknown
- [ ] Create a handoff doc once confirmed complete
- [ ] Visual QA

---

## Rokoko Brand — Brand Identity

**Route:** `/rokokobrand`  
**Content file:** `src/lib/rokokoBrandContent.ts`  
**Context:** `src/lib/rokokoBrandContentContext.tsx`  
**Page:** `src/components/project/RokokoBrandPage.tsx`  
**Chapters:** ResearchSection, DefineSection, ImplementSection, ReflectSection  
**Images:** `public/rokoko-brand/`  
**Documentation:** None

### About the project

Complete rebrand of Rokoko: digital experience, social media campaigns, email templates, internal branding, print, packaging. Year: 2022. Role: Brand Identity, Merchandising, Design for print, Design systems, Packaging design.

### Gaps / next actions

- [ ] No documentation — content completeness unknown
- [ ] Visual QA

---

## Weld — Website Revamp

**Route:** `/weld`  
**Content file:** `src/lib/weldContent.ts`  
**Context:** `src/lib/weldContentContext.tsx`  
**Page:** `src/components/project/WeldPage.tsx`  
**Chapters:** ResearchSection, DefineSection, ImplementSection  
**Images:** `public/weld/`  
**Documentation:** None

### About the project

Website information architecture, wireframing, visual identity, and illustration for a data SaaS company. Year: 2021. Role: Brand Identity, Information Architecture, Wireframing, Illustration, Responsive Web Design.

### Gaps / next actions

- [ ] No documentation — content completeness unknown
- [ ] Visual QA

---

## Eat Grim — Brand Identity

**Route:** `/eatgrim`  
**Content file:** `src/lib/eatGrimContent.ts`  
**Context:** `src/lib/eatGrimContentContext.tsx`  
**Page:** `src/components/project/EatGrimPage.tsx`  
**Chapters:** ResearchSection, DefineSection, DesignSection, LaunchSection  
**Images:** `public/eatgrim/`  
**Documentation:** None

### About the project

Brand guidelines and digital+print B2B and B2C presence for a sustainable subscription-based startup. Years: 2019–2021. Role: Brand Identity, Design systems, Packaging, Responsive Webdesign, Merchandising, Photography, Illustration. Earliest project in the portfolio.

### Gaps / next actions

- [ ] No documentation — content completeness unknown
- [ ] Visual QA

---

## Documentation Priority

For launch readiness, prioritize in this order:

1. **Powermatch** — needs visual QA + missing image exports + empty content arrays
2. **Ageras** — highest hiring-signal case study; needs content audit
3. **Coco Care** — canonical template, mostly done; needs visual QA
4. **Rokoko Web, Rokoko Brand, Weld, Eat Grim** — audit content completeness
