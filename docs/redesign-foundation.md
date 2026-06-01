# Portfolio Redesign Foundation

This document turns the first redesign phase into a working foundation for the new portfolio. It preserves the current site content, project story structure, and information architecture while using the new `localhost:5173` mockup as the preferred visual starting point.

## 1. Redesign Brief

### Project Overview

Barbora Gadlinova's portfolio should become a focused product design portfolio that feels current, editorial, and precise while staying easy to scan for hiring managers, design leads, founders, and collaborators. The redesign should keep the current copy, images, projects, and page structure as the content source of truth, but present the work with a cleaner coded system that can later be versioned in GitHub and hosted outside WordPress/Semplice.

### Problem Statement

The current site is expressive and content-rich, but it is locked inside a WordPress/Semplice builder workflow. That makes iteration, component reuse, performance tuning, and long-term maintainability harder than necessary. The new site should keep the existing portfolio story intact while making the experience feel more intentional, responsive, accessible, and easy to evolve in Cursor.

### Primary Audience

- Design hiring teams and creative leads evaluating product design craft, case-study thinking, and taste.
- Founders, product teams, and potential collaborators looking for a designer who can connect UX, UI, brand, and systems work.
- Peers or design community visitors scanning for portfolio credibility, visual personality, and contact details.

### Design Goals

- Preserve the current information architecture: Home/projects, About, Work with me/contact, and individual project pages.
- Keep existing copy and imagery unless a future requested edit explicitly changes them.
- Build on the current Vite mockup direction: minimal, calm, editorial, detail-oriented, and interaction-light.
- Make the work easier to scan by using consistent project metadata, summaries, tags, and page sections.
- Make the rebuild component-friendly, with reusable content objects and page templates rather than one-off layouts.

### Success Criteria

- A visitor understands who Barbora is and what kind of work she does within the first screen.
- The project list communicates seniority, scope, role, year, and outcomes without needing to open every case study.
- A project page can support long-form case studies like Coco Care without feeling heavy or visually repetitive.
- The visual system is documented well enough to make future changes intentionally, not by guessing values in components.
- Content migration from the Semplice export can happen page-by-page without changing IA.

### Scope

In scope for this phase:

- Redesign brief.
- Current content and IA inventory.
- Visual direction options.
- Core design system definition.
- Template specifications for Home, About, and Project pages.

Out of scope for this phase:

- Hosting, Cloudflare, DNS, production deployment, CMS decisions.
- Full implementation of every project page.
- Final copywriting rewrite.
- Replacing all images or creating new visual assets.

## 2. Content And IA Inventory

### Existing Page Structure

- `home.html`: portfolio landing page, introduction, service/skill cue, selected project list, footer/contact navigation.
- `about.html`: portrait-led bio, personality line, education and training, skills, tools, and experience.
- `work.html`: contact/work-with-me landing page with large CTA and footer navigation.
- `coco-care.html`: representative long-form project page with hero, metadata, cover image, background, challenge, table of contents, process sections, and many supporting images.

### Navigation To Preserve

- Brand/home link.
- Projects or Work.
- About.
- Work with me / contact.
- External links: LinkedIn and CV/resume destinations.

The new mockup currently uses a floating pill nav with `Work`, `About`, `Play`, and `Resume`. This can remain visually, but IA should map to the current portfolio:

- `Work` scrolls to or links to the project list.
- `About` links to the About page/template.
- `Resume` links to CV/read.cv/pdf.
- `Play` should only remain if there is real content for experimental work; otherwise replace with `Contact` or `Work with me`.

### Home Content To Preserve

Source: `current-site/home.html`.

- Hero: "Hey, I'm Barbora. Designing for the future of tech and lifestyle."
- Supporting intro: "Crafting intuitive digital interfaces that solve complex business challenges and make people's lives easier. Skilled in prototyping, with a strong focus on accessibility and user engagement."
- Skill/service cue: "I've got your back with.."
- Featured projects:
  - 2025 - Ageras Website UI/UX Consolidation: "End-to-end website redesign across four markets, from wireframes and sitemaps to a final UI. Building the foundation for a comprehensive, responsive and scalable design system."
  - 2024 - Coco Care Interface Design: "A digital physiotherapy platform designed to help patients recover at home and enable physiotherapists to track progress. I designed both the mobile app and web portal from user flows to interface details."
  - 2023 - Rokoko Website Revamp: "Redesign of the company's main marketing website, webshop and a helpdesk site."
  - 2022 - Rokoko Brand Identity: "Rebrand of everything from digital experience, SoMe campaigns, email templates, internal branding to print."
  - 2021 - Weld Website Revamp: "Website information architecture, wireframing, visual identity and illustration for a data SaaS company."
  - 2019-2021 - Eat Grim Brand Identity.

### About Content To Preserve

Source: `current-site/about.html`.

- Portrait asset: `about_assets/IMG_1125.jpg`.
- Personality line: "Detail oriented, dog person, fashion nerd, amateur nail tech."
- Sections:
  - Education & Training.
  - Skills.
  - Tools.
  - Experience.
- Skills copy: "User Interface Design, User Experience Design, Responsive Design, Information Architecture, User Research, Usability Testing, Wireframing & Prototyping, Design Systems, Accessibility & Inclusive Design"
- Tools copy: "Figma, Figjam, Miro, Linear, Notion, Webflow, Maze, InVision, Illustrator, Photoshop, InDesign"
- Education items include Interaction Design Specialization, Innovation Through Design, UX Design Professional Certificate, BA in Design & Business - Communication Design, and Accessibility in UX Design.
- Experience items include Digital Brand Designer, Product Designer, and Digital Designer.

### Work With Me Content To Preserve

Source: `current-site/work.html`.

- Main CTA: "Let's build together?"
- Footer navigation and copyright.
- This page can become either a standalone contact page or a strong footer/contact section if the new IA should stay lean.

### Project Page Content To Preserve

Source: `current-site/coco-care.html`.

Coco Care should become the reference project template.

- Project title: Coco Care.
- Hero summary: "Designing user interface for Coco Care web app and mobile app, an AI-driven motion capture tool for physio rehabilitation."
- Metadata:
  - Client: Coco Care.
  - Year: 2024.
  - Role: UX & UI, Design System, User Flows, Prototyping, Usability Testing.
  - Tools: shown as grouped tool tags in the current page.
- Cover image: `coco-care_assets/Slide-16_9-1-scaled.jpg`.
- Sections:
  - Project Background.
  - The Challenge.
  - Table of Contents.
  - 01. Research - Exploring the User's Needs.
  - Stakeholder & User Interviews.
  - Define.
  - Ideate.
  - Prototype.
  - Test.
- Background copy: "Coco Care is a digital physiotherapy solution that helps patients access personalized, evidence-based rehabilitation at home through an intuitive app. I designed the patient and physio experience and set the foundation for scheduling, exercise tracking and many more functions to boost engagement, compliance, and recovery outcomes."
- Challenge copy starts with: "Patients often struggle with motivation and consistency in physiotherapy. Clinics face high dropout rates and limited insight into patients' progress at home."
- Research intro copy: "To ground the project in real user needs, I combined qualitative and exploratory research methods. I conducted targeted interviews with both patients and physiotherapists to capture firsthand insights, crafted personas to crystallize user motivations and pain points, and mapped key user flows to visualize the rehabilitation journey. This approach helped uncover practical challenges while guiding design decisions with empathy and evidence."

### Asset Inventory

- Shared nav/social assets: `logobg.svg`, `burger-1.svg`, `x-1.svg`, `li.svg`, `button-arrow.svg`, arrow icons.
- Home assets: project thumbnails and service/tag graphics inside `home_assets`.
- About assets: portrait and CV/email/social icons inside `about_assets`.
- Coco Care assets: hero image, research/define/ideate/prototype/test icons, hi-fidelity mobile screens, portal screens, revision images, and supporting SVGs/JPGs inside `coco-care_assets`.

## 3. Visual Directions

### Direction A: Quiet Editorial Portfolio

This is closest to the current `localhost:5173` mockup.

- Tone: calm, sharp, restrained, confident.
- Layout: narrow readable column, generous vertical rhythm, project rows as editorial index entries.
- Type: modern grotesk for body and headings, mono for metadata.
- Color: warm off-white background, soft grey text, near-black active states, one small accent color.
- Imagery: small controlled thumbnails in the index, larger immersive images inside project pages.
- Interaction: subtle nav pill, underline transitions, gentle thumbnail motion.

Use this as the default direction.

### Direction B: Studio Case-Study Archive

- Tone: more systematic, more product/design-system oriented.
- Layout: denser project index with filters/tags, stronger metadata columns, clearer case-study scaffolding.
- Type: neutral sans with strong hierarchy between title, metadata, and body.
- Color: light neutral base with project-specific tints.
- Imagery: project thumbnails become modular cards; case-study pages use consistent image blocks and captions.
- Interaction: hover previews, sticky project table of contents, section progress cues.

Use this if the portfolio needs to feel more senior and structured.

### Direction C: Soft Tech And Lifestyle

- Tone: warmer, more personal, more fashion/editorial.
- Layout: calm hero with expressive type moments, more whitespace, occasional oversized images.
- Type: sans foundation with selective serif/italic accent for personality.
- Color: warm neutrals, muted clay/rose/green accents, high-contrast black only for primary text.
- Imagery: larger crops, lifestyle/product pairing, more magazine-like case openers.
- Interaction: minimal, focused on pacing and reveal.

Use this if the next iteration should feel less SaaS and more personal-brand/lifestyle.

## 4. Core Visual System

### Principles

- Lead with clarity, then personality.
- Make project scanning effortless.
- Keep every visual treatment reusable across projects.
- Use motion only to clarify state or add quiet polish.
- Preserve content, but improve pacing and hierarchy.

### Typography

- Primary sans: keep the mockup direction using `"Inter Tight", "Inter", ui-sans-serif, system-ui, sans-serif`.
- Metadata mono: keep `"JetBrains Mono", ui-monospace, monospace` for years, labels, availability, and section markers.
- Optional future accent: introduce a serif only if Direction C is selected later; do not add it by default.
- Hero sizes:
  - Mobile: 28px, line-height 1.25.
  - Desktop: 34px, line-height 1.25.
- Body:
  - Standard: 15px, relaxed line-height.
  - Project summaries: 13px.
  - Meta labels: 11px uppercase with slight tracking.

### Color

Use the existing mockup tokens as the foundation:

- Background: warm off-white `oklch(0.985 0.002 90)`.
- Surface: soft warm grey `oklch(0.955 0.003 90)`.
- Foreground: near-black `oklch(0.22 0.008 260)`.
- Muted text: `oklch(0.52 0.008 260)`.
- Border: foreground at 8% opacity.
- Accent: warm red/orange dot for availability and selection moments.

Project pages can use subtle project-specific surface tints, but body copy and navigation should stay consistent.

### Layout And Spacing

- Main content max width: 920px for home/index pages.
- Long-form project content: 920px for intro/meta, up to 1210px for image-heavy sections.
- Horizontal page padding: 24px minimum.
- Section gap: 96px on desktop, reduced on mobile.
- Project rows: top border, 28px vertical padding, metadata separated from title/summary.
- Use consistent image aspect ratios:
  - Project list thumbnails: 4:3.
  - Project hero: 16:9.
  - Process image grids: 1, 2, or 3 columns depending on content density.

### Components

- Floating pill nav.
- Availability/status line.
- Hero statement with inline emphasis.
- Text link with animated underline.
- Skill/tag pill.
- Project index row.
- Project metadata block.
- Project hero image.
- Section intro block.
- Table of contents / process nav.
- Image grid with optional captions.
- Footer contact CTA with email copy interaction.

### Accessibility

- Navigation items should be real links when they navigate, not buttons.
- Active nav state should not be the only indicator of location.
- Maintain visible keyboard focus for nav, project rows, social links, and copy-email.
- All project images need meaningful alt text when they communicate content; decorative UI mockups can use concise descriptive alt text.
- Keep color contrast strong between muted copy and background, especially for 13px project summaries.
- Respect reduced-motion preferences for thumbnail scale, nav pill motion, and page transitions.

## 5. Page Template Specs

### Home Template

Goal: explain who Barbora is, communicate range, and make the project archive easy to scan.

Structure:

1. Floating navigation.
2. Availability/status line.
3. Hero statement using the current hero copy or the current mockup's refined single-sentence positioning.
4. Supporting intro paragraph preserving existing meaning.
5. Skill/service pills.
6. Case studies index sorted by year.
7. Contact/footer CTA.

Content rules:

- Preserve project order and years.
- Each project row should include year, title, short summary, tags, role/scope, and optional thumbnail.
- The whole row should link to the project page when implemented.

### About Template

Goal: show personality and credibility without turning the page into a CV dump.

Structure:

1. Floating navigation.
2. Portrait plus bio/intro block.
3. Personality line.
4. Experience list.
5. Skills and tools.
6. Education and training.
7. Contact/social footer.

Content rules:

- Keep the existing portrait as the primary visual asset.
- Preserve education, skills, tools, and experience lists.
- Consider moving "Experience" above "Education" for hiring-team scan behavior.

### Project Template

Goal: make each case study scannable at first, then immersive for detailed reading.

Structure:

1. Back link to Work/Home.
2. Project title and one-sentence summary.
3. Metadata grid: client, year, role, tools.
4. Hero image.
5. Overview/background section.
6. Challenge section.
7. Sticky or inline process table of contents.
8. Process sections:
   - Research.
   - Define.
   - Ideate.
   - Prototype.
   - Test.
9. Results/outcomes section if available.
10. Next/previous project navigation.
11. Footer contact CTA.

Content rules:

- Coco Care defines the default long-form section model.
- Other project pages can omit process sections that do not apply, but should keep the same hero and metadata structure.
- Process icons can be retained if they serve scannability, but they should be simplified into a reusable component.

## 6. Implementation Notes For The Rebuild

- Keep content separate from presentation. The new `src/lib/portfolioContent.ts` file should be treated as the first structured content source.
- Use the existing `src/lib/designSystem.ts` and `src/styles.css` as the starting visual system.
- Convert the current button-based nav into links once the About and Project routes exist.
- Keep the current single-page mockup as the design baseline while building the first real pages.
- Migrate one project page first, using Coco Care, then apply the template to the remaining projects.
