# Content Standards

Writing rules for every piece of copy on the site — homepage, about page, case studies, navigation, CTAs, and error states. All text must pass these standards before going live.

---

## Voice

**Direct, human, no filler.**

Warm but not casual to the point of flippancy. Confident but not boastful. The reader is smart and time-pressed.

### What the voice sounds like

> "Hey, I'm Barbora. Designing for the future of tech and lifestyle."

> "Crafting intuitive digital interfaces that solve complex business challenges and make people's lives easier. Skilled in prototyping, with a strong focus on accessibility and user engagement."

> "I run user interviews, usability tests, and journey mapping to make sure design decisions are rooted in what people actually need rather than what seems right in a meeting room."

### What to avoid

- **No dashes** (em dashes — or hyphens -) in copy
- **No AI-sounding phrases:** "delve", "leverage", "streamline", "robust", "comprehensive", "at the intersection of", "seamlessly", "elevate"
- No hedging ("I tried to", "we attempted to", "kind of")
- No passive voice when active is possible
- No vague outcome adjectives ("better", "improved", "enhanced") — use specifics

---

## Writing Style

### Sentence style

Short sentences. One idea per sentence. Scannable without reading every word.

Not: "This feature was designed to address the complex workflow challenges faced by Powermatch's internal finance team, who previously had to navigate between multiple external tools to perform bank reconciliation tasks."

But: "The old workflow required switching between e-conomic and a Google Sheets spreadsheet — updated manually and prone to error. This feature replaces that."

### Headline style

Sentence case. Not title case.

- "Project background" — correct
- "Project Background" — wrong
- "The challenge" — correct
- "The Challenge" — wrong

Avoid vague labels: not "Overview" → prefer "Project background" or "The brief".

### CTA style

Action-first. Short. No "Click here".

- "Explore" — correct (project showcase)
- "Work with me" — correct (nav label)
- "Get in touch" — acceptable
- "Click here to see more of my work" — wrong

---

## Hero Copy (preserve exactly)

Homepage hero:

> Barbora Gadlinova is a product **designer** crafting intuitive digital interfaces for the **future** of tech and lifestyle, with a focus on accessibility and user engagement.

(Rendered as a styled `<h1>` with emphasis/muted spans — do not flatten to plain text.)

---

## About Page

### Personality line (preserve exactly)

> "Detail oriented, dog person, fashion nerd, amateur nail tech."

### Service descriptions

Each service has a short paragraph. Pattern: one clear sentence on what the service is, followed by one sentence on the value it delivers. No bullet lists in the service descriptions.

---

## Project Summary Format (homepage showcase)

Each project entry: **title · year · one-line summary · role lines**

Rules:
- Summary leads with what was built, not the process
- Role lines are noun phrases, not verb phrases ("UX Research", not "Did UX Research")
- Year is the delivery year or range
- Outcome-oriented when an outcome is known

Examples from the codebase:

> "Designing an invoice reconciliation feature. Replacing a fragmented cross-tool workflow with a flow for matching payments to invoices."

> "End-to-end website redesign across four markets, from wireframes and sitemaps to a final UI. Building the foundation for a comprehensive, responsive and scalable design system."

---

## Case Study Content

### Structure

Every case study follows this order. Adapt section names to the project — don't force the Coco Care structure if it doesn't fit.

1. **Back link** → Work/Home
2. **Title** — the project name (e.g. "Bank Reconciliation", "Coco Care")
3. **One-sentence summary** — what was built and for whom
4. **Metadata grid** — Client · Year · Role · Tools · (optional: Field)
5. **Hero image** — final product, not process deliverables
6. **Project background** — 1–2 paragraphs. Who is the client, what do they do, why this project exists
7. **The challenge / problem statement** — the specific problem this project solved
8. **Process sections** — adapted to what actually happened (Research, Define, Ideate, Design, Test, Launch, Reflect — use what fits)
9. **Outcomes** — what shipped, what impact was measured (concrete if possible, reflective if not)
10. **Footer CTA** — link to next case study or back to work

### Storytelling rules

1. Frame the real-world problem before showing any design work
2. Show research evidence before solutions
3. Each process section ends with a "so we decided to…" bridge — the reader should understand why a decision was made, not just what was decided
4. Images support the narrative — caption them or introduce them in the prose; don't dump screens without context
5. Foreground the highest-seniority signal (design systems work, multi-market complexity, complex interaction logic)
6. Outcomes section uses concrete numbers or direct user feedback, not adjectives ("reduced error rate by X%", "admin team adopted it immediately", "no longer needed Google Sheets")

### Metadata labels and values

| Field | Format |
|-------|--------|
| Client | Company name |
| Year | 2024 or 2023–2024 |
| Role | Comma-separated noun phrases |
| Tools | Comma-separated tool names |
| Field | Optional — domain classification (e.g. "B2B SaaS, FinTech") |

---

## Navigation Labels

Current labels: **Work** | **About** | **Work with me**

Rules:
- "Work" is the brand pill — links to `/`
- "About" links to `/about`
- "Work with me" links to `/work-with-me`
- If a Play section is added, label it "Play" — only if actual experimental work exists
- Resume: currently accessible via about page, not a standalone nav item

---

## Section Headings in Case Studies

Use sentence case. Be specific — not generic.

| Avoid | Prefer |
|-------|--------|
| Overview | Project background |
| Problem | The challenge |
| Solution | What we built |
| Research | Understanding the workflow |
| Design | Designing the interface |
| Results | What shipped |

---

## Error States and System Messages

404 page (currently in `__root.tsx`):

> "The page you're looking for doesn't exist or has been moved."
> Button: "Go home"

Error page:

> "This page didn't load"
> "Something went wrong on our end. You can try refreshing or head back home."
> Buttons: "Try again" | "Go home"

Rules for error copy: human, calm, not apologetic to the point of excess. No "Oops!". No "Uh oh!".

---

## Alt Text

All project images that communicate content need descriptive alt text. Don't use file names as alt text.

Pattern: `[Subject] — [context or what it shows]`

Examples (from `projectShowcaseEntries.ts`):
- "Powermatch — invoice reconciliation dashboard on tablet"
- "Coco Care physio dashboard — patient overview"
- "Ageras dashboard chart UI"

Decorative images that add no information: `alt=""`
