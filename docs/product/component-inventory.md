# Component Inventory

All components in the portfolio. Organized by directory. Updated: 2026-06-15.

Reusability levels:
- **Global** — used across multiple pages
- **Section** — used within one page type (e.g. all case studies)
- **Local** — used only in one specific page
- **Primitive** — base building block composed into higher-level components

---

## Navigation (`src/components/nav/`)

| Component | File | Purpose | Reusability |
|-----------|------|---------|-------------|
| `SiteTopNav` | `SiteTopNav.tsx` | Site-wide floating nav — thin wrapper around PortfolioTopNav with shared config | Global |
| `PortfolioTopNav` | `PortfolioTopNav.tsx` | Floating pill nav with 12-col grid, brand + items | Global |
| `ProjectShowcaseNav` | `ProjectShowcaseNav.tsx` | Nav variant for the project showcase section | Section (homepage) |
| `topNavConfig` | `topNavConfig.ts` | Nav items data: brand (Work/), About, Work with me | Config |

---

## Homepage (`src/components/home/`)

| Component | File | Purpose | Reusability |
|-----------|------|---------|-------------|
| `Homepage` | `Homepage.tsx` | Homepage page assembly: SiteTopNav + Hero + HowIWork + ProjectShowcase | Local |
| `ProjectShowcase` | `ProjectShowcase.tsx` | Project list with images, role lines, explore copy | Local |
| `ProjectShowcaseMedia` | `ProjectShowcaseMedia.tsx` | Image layout renderer for showcase entries | Local |
| `PROJECT_SHOWCASE_ENTRIES` | `projectShowcaseEntries.ts` | All 7 project entries with images, copy, routes, layouts | Data |

---

## About (`src/components/about/`)

| Component | File | Purpose | Reusability |
|-----------|------|---------|-------------|
| `AboutPage` | `AboutPage.tsx` | About page assembly | Local |

---

## Auth (`src/components/auth/`)

| Component | File | Purpose | Reusability |
|-----------|------|---------|-------------|
| `LoginPage` | `LoginPage.tsx` | Password gate shown when unauthenticated | Global (pre-launch) |

---

## Shared (`src/components/shared/`)

| Component | File | Purpose | Reusability |
|-----------|------|---------|-------------|
| `SiteFooter` | `SiteFooter.tsx` | Site-wide footer, injected by root route | Global |
| `HowIWork` | `HowIWork.tsx` | "How I work" principles section on homepage | Local (homepage) |
| `ContactGrid` | `ContactGrid.tsx` | Contact information grid for /work-with-me | Local (work-with-me) |
| `CopyEmailButton` | `CopyEmailButton.tsx` | Copies email address to clipboard on click | Global |
| `EditorialList` | `EditorialList.tsx` | Editorial-style list component | Section |

---

## UI Primitives (`src/components/ui/`)

| Component | File | Purpose | Reusability |
|-----------|------|---------|-------------|
| `Button` | `Button.tsx` | Button with variants: default, arrow, arrow-always, dual, static | Global |
| `input` | `input.tsx` | Text input (shadcn base) | Global |
| `textarea` | `textarea.tsx` | Textarea (shadcn base) | Global |

---

## Case Study — Shared Primitives (`src/components/project/`)

These are reused across all case studies.

| Component | File | Purpose | Reusability |
|-----------|------|---------|-------------|
| `MajorSection` | `primitives.tsx` | Numbered section wrapper with h1 title parsing | Section |
| `ContentBlock` | `primitives.tsx` | Callout or editorial split container | Section |
| `EditorialSplit` | `primitives.tsx` | Prose + media two-column layout (auto-partitions Figure children) | Section |
| `NumberedCalloutSection` | `primitives.tsx` | Numbered list/grid with heading; 4 card layout modes | Section |
| `Prose` | `primitives.tsx` | Body paragraph wrapper | Section |
| `FigureRow` | `primitives.tsx` | Image row in 12-col grid | Section |
| `Figure` | `Figure.tsx` | Image figure with optional caption; marked as media for EditorialSplit detection | Section |
| `CalloutGrid` | `CalloutGrid.tsx` | Title-top/body-bottom card grid | Section |
| `CalloutStack` | `CalloutStack.tsx` | Unnumbered callout card stack | Section |
| `NumberedCalloutGrid` | `NumberedCalloutGrid.tsx` | Numbered squares in grid layout | Section |
| `NumberedCalloutStack` | `NumberedCalloutStack.tsx` | Numbered stack cards | Section |
| `CaseStudyShell` | `CaseStudyShell.tsx` | Case study page wrapper | Section |
| `ProjectHero` | `ProjectHero.tsx` | Shared hero component (some studies use per-study versions) | Section |
| `CaseChapterIcons` | `CaseChapterIcons.tsx` | Icon set for chapter intro sections (research, define, ideate, etc.) | Section |
| `CaseStickyNotes` | `CaseStickyNotes.tsx` | Sticky note grid for interview/research callouts | Section |
| `InterviewCalloutBoard` | `InterviewCalloutBoard.tsx` | Board layout for interview findings | Section |
| `ProjectGoalsDiagram` | `ProjectGoalsDiagram.tsx` | Goals visualization component | Section |

**Shared constants:** `src/components/project/constants.ts` — CSS class strings used by primitives.  
**Shared utilities:** `src/components/project/utils.ts` — `asset()`, `parseSectionTitle()`, `toSentenceCase()`, `parseLabeledItem()`.

---

## Case Study — Page Assemblies

| Component | File | Case study | Status |
|-----------|------|-----------|--------|
| `AgerasProjectPage` | `AgerasPage.tsx` | Ageras | Live |
| `CocoCarePage` | `CocoCarePage.tsx` | Coco Care | Live |
| `EatGrimProjectPage` | `EatGrimPage.tsx` | Eat Grim | Live |
| `PowermatchPage` | `PowermatchPage.tsx` | Powermatch | Live — visual QA pending |
| `RokokoBrandPage` | `RokokoBrandPage.tsx` | Rokoko Brand | Live |
| `RokokoProjectPage` | `RokokoPage.tsx` | Rokoko Web | Live |
| `WeldProjectPage` | `WeldPage.tsx` | Weld | Live |

---

## Case Study — Per-Study Chapters

### Ageras (`src/components/project/ageras/`)
| Component | Purpose |
|-----------|---------|
| `ProjectHero.tsx` | Ageras hero |
| `Figure.tsx` | Local Figure variant |
| `chapters/ResearchSection.tsx` | Research chapter |
| `chapters/DefineSection.tsx` | Define chapter |
| `chapters/PrototypeSection.tsx` | Prototype/design chapter |
| `chapters/ImplementSection.tsx` | Implementation chapter |
| `chapters/SystemSection.tsx` | Design system chapter |

### Coco Care (`src/components/project/cococare/`)
| Component | Purpose |
|-----------|---------|
| `ProjectHero.tsx` | Coco Care hero |
| `Figure.tsx` | Local Figure variant |
| `primitives.tsx` | Local primitives |
| `chapters/ResearchSection.tsx` | 01 Research |
| `chapters/DefineSection.tsx` | 02 Define |
| `chapters/IdeateSection.tsx` | 03 Ideate |
| `chapters/PrototypeSection.tsx` | 04 Prototype |
| `chapters/TestSection.tsx` | 05 Test |

### Eat Grim (`src/components/project/eatgrim/`)
| Component | Purpose |
|-----------|---------|
| `ProjectHero.tsx` | Eat Grim hero |
| `Figure.tsx` | Local Figure variant |
| `chapters/ResearchSection.tsx` | Research chapter |
| `chapters/DefineSection.tsx` | Define chapter |
| `chapters/DesignSection.tsx` | Design chapter |
| `chapters/LaunchSection.tsx` | Launch chapter |

### Powermatch (`src/components/project/powermatch/`)
| Component | Purpose |
|-----------|---------|
| `ProjectHero.tsx` | Powermatch hero |
| `Figure.tsx` | Local Figure variant |
| `primitives.tsx` | Local primitives |
| `chapters/ResearchSection.tsx` | 01 Research |
| `chapters/DefineSection.tsx` | 02 Define |
| `chapters/IdeateSection.tsx` | 03 Ideate |
| `chapters/PrototypeSection.tsx` | 04 Design (final screens) |
| `chapters/TestSection.tsx` | Not rendered — kept for later |

### Rokoko Web (`src/components/project/rokoko/`)
| Component | Purpose |
|-----------|---------|
| `ProjectHero.tsx` | Rokoko web hero |
| `Figure.tsx` | Local Figure variant |
| `chapters/ResearchSection.tsx` | Research chapter |
| `chapters/DefineSection.tsx` | Define chapter |
| `chapters/IdeateSection.tsx` | Ideate chapter |
| `chapters/ImplementSection.tsx` | Implementation chapter |

### Rokoko Brand (`src/components/project/rokokobrand/`)
| Component | Purpose |
|-----------|---------|
| `ProjectHero.tsx` | Rokoko brand hero |
| `Figure.tsx` | Local Figure variant |
| `chapters/ResearchSection.tsx` | Research chapter |
| `chapters/DefineSection.tsx` | Define chapter |
| `chapters/ImplementSection.tsx` | Implementation chapter |
| `chapters/ReflectSection.tsx` | Reflection chapter |

### Weld (`src/components/project/weld/`)
| Component | Purpose |
|-----------|---------|
| `ProjectHero.tsx` | Weld hero |
| `Figure.tsx` | Local Figure variant |
| `chapters/ResearchSection.tsx` | Research chapter |
| `chapters/DefineSection.tsx` | Define chapter |
| `chapters/ImplementSection.tsx` | Implementation chapter |

---

## Known Issues

- **Per-project constants duplication:** `constants.ts` exists in ageras, eatgrim, rokoko, rokokobrand, weld folders alongside the shared `src/components/project/constants.ts`. Decision to consolidate is deferred.
- **AGENTS.md is outdated:** Only reflects homepage and CocoCare. This file (`component-inventory.md`) supersedes it for the case study pages.
