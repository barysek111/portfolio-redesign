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
