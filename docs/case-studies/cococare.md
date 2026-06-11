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
