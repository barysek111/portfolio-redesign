# Powermatch — Bank Reconciliation Case Study Handoff

Last session: 2026-06-10/11. Everything needed to continue building this case study page.

---

## What's been built

- **Route**: `/project/powermatch` → `src/routes/project/powermatch.tsx`
- **Page assembly**: `src/components/project/PowermatchPage.tsx` (Research, Define, Ideate, Prototype chapters — TestSection removed)
- **Content file**: `src/lib/powermatchContent.ts` — fully written with real copy
- **Content context**: `src/lib/powermatchContentContext.tsx`
- **Chapter components**: `src/components/project/powermatch/chapters/` (ResearchSection, DefineSection, IdeateSection, PrototypeSection)
- **Images exported from Figma**: `public/powermatch/` (10 files, see below)
- **ResearchSection.tsx fixed**: removed hardcoded Coco Care `InterviewCalloutsSection`
- **CSS fix applied**: `case-editorial-split` now has `width: 100%; min-width: 0`

---

## Figma file

**File key**: `XLoCjb8b2sQF61gr9FEVuE`  
**Page**: "bank reconciliation" (page id `127:88812`)

### Page structure (sections on canvas)

| Section name | Node ID | Type |
|---|---|---|
| Invoices page - old design | `197:78902` | SECTION |
| Exploration | `191:103640` | SECTION |
| Final screens | `191:103641` | SECTION |
| components | `188:90011` | SECTION |

### Exploration subsections
- `118:106348` — Competitor exploration and references (Billy, Revolut, Altar, Dinero, Copilot)
- `118:106374` — Exploration - nav hierarchy
- `188:101523` — Exploration - layout

### Final screens subsections
- `117:67960` — Invoice Details (7 states)
- `117:71581` — Reconciliation Tab (6 states)
- `117:72708` — Invoices Tab (4 states)

### Individual screen node IDs (for re-export if needed)

**Invoice Details:**
- `117:67961` — Invoice Details - Auto-matched
- `117:68373` — Invoice Details - Unmatched
- `117:68959` — Reconcile Invoice Modal - Partially Matched (Multiple Invoices + 1 Transaction)
- `117:69522` — Reconcile Invoice Modal - Partially Matched (1 Invoice + Multiple Transactions)
- `117:70112` — Invoice Details - Pending Approval - Accept
- `117:70435` — Invoice Details - Pending Approval - Reject
- `117:71137` — Invoice Details - Manually Matched

**Reconciliation Tab:**
- `117:71582` — Reconciliation - Large screen ← used as hero image
- `117:71669` — Choose Company (company balance view)
- `117:71981` — Pending Approval
- `117:72379` — Partial match - One invoice, multiple payments
- `117:72573` — Partial match - Multiple payments, one invoice
- `191:98002` — Activity tab

**Invoices Tab:**
- `117:72709` — Invoices Tab (main)
- `117:73032` — Reconcile Invoice - Pending Approval
- `117:73544` — Reconcile Invoice - Partial Match (1 Invoice + Multiple Transactions)
- `117:74093` — Reconcile Invoice - Unmatched

**Original (before) screen:**
- `197:78293` — Invoices page old design (the before state)

---

## Images exported to public/powermatch/

All at `public/powermatch/`:

| Filename | What it shows | Figma node |
|---|---|---|
| `recon-tab-large.png` | Three-column reconciliation workspace — hero image | `117:71582` |
| `invoices-tab.png` | Invoices table with reconciliation status column | `117:72709` |
| `invoice-detail-auto-matched.png` | Invoice detail with auto-matched payment + activity log | `117:67961` |
| `recon-tab-choose-company.png` | Company view with balance summary bar | `117:71669` |
| `recon-tab-pending-approval.png` | Pending approval state in reconciliation tab | `117:71981` |
| `recon-invoice-partial-match.png` | Partial match — one invoice, multiple payments | `117:69522` |
| `competitor-analysis.png` | All 5 competitor references (Billy, Revolut, Altar, Dinero, Copilot) | `118:106348` |
| `layout-exploration.png` | Layout exploration iterations | `188:101523` |
| `nav-exploration.png` | Navigation hierarchy exploration | `118:106374` |
| `invoices-before.png` | Original invoices page (before state, no reconciliation) | `197:78293` |

---

## The project brief — user's verbatim answers

These are the user's exact words from the brief reconstruction session.

---

### Question 1 — Scope

> The Invoices page existed before, I did not design that. My design brief and task scope was to come up with solution where the user can see not only the invoices they could before, but also be able to see that the recieved invoices have all been paid and the bank lines in bank account connected to this match all invoices in the system. Also to edit the connections, make manual ones and so on. I was the only one working on this feature so all screens and flows are my work (except the one frame with original Invoices screen)

---

### Question 2 — Starting point

> Starting point was only the Invoices page but in the table there was no reconciliation column and no action for reconciling. I added a screen of original version here:
> https://www.figma.com/design/XLoCjb8b2sQF61gr9FEVuE/Powermatch-backup?node-id=197-78293&t=N5Nb7mmtGJJGIG4g

---

### Question 3 — Key problem (verbatim, full answer)

> The problem: the reason for creating this feature was that old flow Was inefficient very prone to errors and overall needed some improvement of how this topic is approached to tell you a bit more about the user this page and also the feature I designed is only available in the admin view, therefore not available for the candidates or the companies that work with Powermatch. This is only something that admin will see. The old way of doing things and checking whether all invoices are matched with bank lines was that admin would log into powermatch's account on the platform e-conomic (see more on their bank reconciliation here: https://www.e-conomic.dk/udnyt-smart-pakken/bankafstemning ) and then Open a list of bank transactions and invoices, which is a function that this platform provides however it didn't fulfill all the needs that Powermatch needed specifically, the function to have AI suggested matches which you quickly confirm having matches that only match partially in the cases of two invoices being linked to one payment or vice versa two payments being linked to one invoice and alsothey needed an easier way to edit the matches have a history of when was what changed and by who in order to be able to have a full log of history of changes. And mostly to be able to review both the invoices themselves with the preview and everything that a user can already see on the invoice individual page as well as the bank reconciliation and have full control over all data and all functions performed on that match. The way checking that invoices in bank lines match before I created. This function was the following the admin would go into economic look at the overview of invoices and payments and then in another browser window, they would open a very large Google sheets spreadsheet, which was fetching data on its own, but not re-fetching the data that had to be done manually on demand by the user so not only they had to update the spreadsheet all the time and remember to do it, but also they had to either switch from one browser tab to another or have them next to one another, which is not very efficient and it's also very prone to error. Another reason why this function was needed was the fact that some of the companies in the system which who are sending payments for invoices are not sending exactly the right amount but sometimes send more for example they would in some cases send twice the amount that they should have for a certain month because they sent one payment ahead and therefore empower matches in accounting system, the company would have a plus balance. In this task, besides adding the bank reconciliation function, I also added in the top of the reconciliation tab on the page called invoices a section that only appears once the user has Selected one company and they only get to see the transactions and invoices from into that one company in this view they see the total amount that was requested in sent invoices next to it. They see incoming payments from that company and they also see the company's balance and whether it'sin the plus meaning they have sent more than they needed to or whether it's in minus meaning that they actually owe Powermatch money and they are behind on their payments. In that view on the screen where user has selected one company there is a check box called allow balance matching once that is checked. The system will automatically level the balance in case there is more money sent from the company, but there are invoices that have still not been paid. So for example, if the company keeps sending money, they are not behind but they just send random amounts or they send it not exactly at the time that a certain amount was invoice for the system will automatically match a bunch of payments to one invoice or the vice versa match one invoice to multiple payments. This will be a pending approval state interview meaning that this function will be suggested by AI that will detect this case. This is another thing that cannot be done in e-conomic.
>
> So the user of this that I'm speaking of is the admin to understand who admin is and for this to make sense, please research all available information online that you have about Powermatch - the company what is their concept, How does the product work and what do they offer. in their in this case specifically to the companies looking to hire employees and contractors Powermatch has an internal team off finance employees who handle all the invoicing and finance between powermatch and companies. Besides, making sure that invoices and payments match, other things that they do in their roles are sending payment reminders to their users (being the companies that are using Powermatch. so powermatch's users. bu this i did not mean users of this feature i designer - those are internal powermatch employees in finance team). Another user of this will be Powermatch's accountant. But mostly this internal team.

---

### Question 4 — Design system

> I created the ux and ui for this new feature. There was already aa existing design system for the app, but every new component that was new and related to this feature I created (all components on this page)

---

### Question 5 — Timeline

> I worked on all of this for about 1 month

---

### Question 6 — Deliverables

> It was fully finished, reviewed with co-founder/CPO (my direct manager, it is a small startup) and made ready for development and shipped off. I made a lot of annotations on the screens in that file. I have now made all the annotations in figma visible so you should be able to access them. I did not however be part of anything after launch - user testing with real product, having actual data about how users use it etc. My job ended at the dev handoff. (I left the company after)

---

### Question 7 — Team & research done

> Most of the time solo work. I was the only designer responsible for creating this feature. That icluded:
>
> Research i actually did:
> Discussions and alignment with CPO and dev team on constraints: technical and systematic (devs), time scope and desired deadline for dev handoff + MVP and what is out of scope and what we need for V1 now and what is good to explore and have later but we will save for V2 (CPO)
>
> competition - similar saas fintech tols or neobanks (see the Competitor exploration and references section in figma file) and how they handle bank reconciliation and what flows, layouts, logic they use, best practices in the topic
>
> interviewing users beforehand - understanding how they work and what they need from this (terview methods: observing how they perform this task without that feature and finding blockers and biggest pain poitns), Check ins with co-founder/CPO (my direct manager, acts as product manager on this projecrt), check ins with development team about constraints, backend context etc)
>
> Frequently checking in with both stakeholders - CPO, devs and main internal users (actual user target group) and showing them latest versions and adjusting based on their input

---

## What was found from Figma analysis

### Screens discovered

**Original invoices page (before state):**
- Simple table: Invoice #, Company Name, Amount, Sent Date, Due Date, Status (Sent/Draft/Paid/Overdue), Action
- No reconciliation column, no reconciliation-related actions
- Had: Search by Company, Status filter, Export button, New Invoice button, Last Synced timestamp + Sync Now

**New screens designed (all by the user):**

**1. Invoices Tab enhancements**
- Added "Reconciliation" column to the existing table with status badges: Auto-matched (green), Manually Matched, Pending Approval (yellow), Partial Match, Unmatched
- States: default, with pending approval action, with partial match states, with unmatched state

**2. Reconciliation Tab (3 columns)**
- Left: "Sent Invoices" list — company avatar, name, date, invoice #, amount
- Center: "Matched Payments" — drag-and-drop target, status badges visible
- Right: Search panel — "Payments" / "Invoices" toggle, search by company/amount/number
- Company view: top banner appears when one company is selected, shows total invoices sent, total incoming payments, and company balance (+ or -)
- "Allow balance matching" checkbox in company view
- Pending Approval state: AI-suggested match awaiting admin confirmation
- Partial match states: one invoice ↔ multiple payments, multiple payments ↔ one invoice

**3. Invoice Detail view enhancements**
- Existing invoice document (PDF-style, in Danish, Powermatch branded)
- Added right sidebar: Invoice Details, Linked Invoices, Matched Payment section with reconciliation status badge, Activity log
- "Reconcile Invoice" slide-in drawer: lists incoming bank transactions for manual matching
- 7 states: Auto-matched, Unmatched, Pending Approval (Accept), Pending Approval (Reject), Manually Matched, + partial match modal states

### Competitors studied
- **Billy** — Danish accounting software
- **Revolut Business** — neobank business account
- **Altar** — fintech
- **Dinero** — Danish accounting software  
- **Copilot** — finance management tool

All studied for: matched/unmatched status patterns, side-by-side layouts, drag-to-match interactions, partial match handling.

### Components created (all new, extending existing design system)
- Reconciliation status badges (5 states)
- Invoice list cards with company avatars
- Payment list cards
- Three-column reconciliation workspace
- Company balance summary bar
- "Allow balance matching" toggle + state variants
- Slide-in reconciliation drawer
- Activity log with timestamped entries

---

## About Powermatch (company context)

Powermatch is a Danish B2B staffing/contractor matching platform. They manage the full lifecycle between companies and contractors: recruitment/matching, timesheets, and invoicing. The platform has three types of users:
- **Companies** — businesses hiring contractors/consultants
- **Candidates** — the contractors/consultants
- **Admin** — internal Powermatch employees (finance team + accountant)

The bank reconciliation feature is **admin-only** — it's not visible to companies or candidates. The primary users are Powermatch's internal finance team members who handle all billing between Powermatch and the companies it works with. Secondary user: Powermatch's accountant.

The finance team's other responsibilities (outside this feature): sending payment reminders to companies using Powermatch.

---

## Content written (in powermatchContent.ts)

### Hero
- **Title**: "Bank Reconciliation"
- **Subtitle**: "Designing a bank reconciliation feature for Powermatch's internal finance team — replacing a fragmented cross-tool workflow with a single interface for matching payments to invoices, handling edge cases, and maintaining a full audit trail."
- **Hero image**: `recon-tab-large.png`
- **Metadata**: Client: Powermatch | Year: 2025 | Role: UX Research, UX & UI Design, Component System, User Flows, Dev Handoff | Tools: Figma | Field: B2B SaaS, FinTech

### Chapters

**01. Research — Understanding the workflow**
- Chapter intro: starting with the people who do the work, three parallel research tracks
- Stakeholder alignment & user observation: CPO meetings, dev team alignment, observing the finance team working across e-conomic and Google Sheets
- Competitor analysis: five tools studied (Billy, Revolut Business, Altar, Dinero, Copilot), key takeaways on patterns and what's missing

**02. Define — Translating findings into goals**
- Chapter intro: from fragmented tools to a single source of truth
- Problem statement: no in-platform way to verify invoice-payment matching, three-tool manual process, no partial match support, no audit trail
- Three design goals (HMW format): in-platform reconciliation, complex scenario handling without overwhelm, full traceability
- V1 scope decisions: AI auto-match + manual override, partial match both directions, company balance tracking + allow-balance-matching toggle, activity log, tab within Invoices page

**03. Ideate — Exploring the structure**
- Navigation structure: tab within Invoices page (not standalone nav) + reconciliation status column in table
- Layout exploration: tested three approaches, landed on 3-column (invoices | matched center | transaction search)
- User flows: 7 primary flows mapped
- Wireframes: three focus areas (reconciliation tab layout, invoice detail side panel, slide-in drawer)

**04. Design — Final screens**
- New components: all listed above
- Reconciliation Tab screens: large workspace, company balance view, pending approval, partial match
- Invoices Tab + Invoice Detail screens

---

## What's still missing / to do next session

### Images not yet exported
These screens exist in Figma but aren't in `public/powermatch/` yet. Useful to add:
- `117:68373` — Invoice Details - Unmatched state (shows the "no match" state clearly)
- `117:70112` — Invoice Details - Pending Approval - Accept (before/after approval flow)
- `117:72573` — Partial match - Multiple payments, one invoice (the reverse direction)
- `191:98002` — Activity tab (audit trail view)
- Annotation overlays — user said annotations are now visible in Figma

### Content that could be improved
- The `DefineSection` has empty `userNeeds.items` and `successMetrics.items` — these could be populated with diagram-style images if custom assets are created
- The `IdeateSection` has empty `userFlows.images` and `wireframes.images` — if user has wireframe exports, add them
- The `PrototypeSection` designSystem section has empty `images` — component system diagrams could go here

### Annotations
The user said: "I made a lot of annotations on the screens in that file. I have now made all the annotations in figma visible so you should be able to access them." — annotations haven't been read yet. Worth doing next session using `use_figma` to extract annotation text nodes from each final screen.

### Visual QA not done
The dev server was running at `http://localhost:5173/project/powermatch` but a screenshot wasn't taken due to browser access not being granted. Check the page visually before calling it done.

### Chapter structure note
The `test` section content exists in `powermatchContent.ts` (with a reflection-style response since no testing was done) but `TestSection` is NOT rendered in `PowermatchPage.tsx`. This was intentional. If you want to add a short reflection section later, add `<TestSection />` back to `PowermatchPage.tsx`.

---

## File map

```
src/
  lib/
    powermatchContent.ts          ← all copy, image paths
    powermatchContentContext.tsx  ← React context + hook
  components/project/
    PowermatchPage.tsx            ← page assembly (4 chapters)
    powermatch/
      constants.ts                ← CSS class strings
      utils.ts                    ← asset(), parseSectionTitle(), etc.
      primitives.tsx              ← MajorSection, ContentBlock, Figure, etc.
      ProjectNav.tsx              ← re-exports SiteTopNav
      ProjectHero.tsx             ← hero with background + challenge sections
      ProjectFooterCta.tsx        ← footer CTA
      chapters/
        ResearchSection.tsx       ← ch01 (fixed: no CaseStickyNotes)
        DefineSection.tsx         ← ch02
        IdeateSection.tsx         ← ch03
        PrototypeSection.tsx      ← ch04 (title: "04. Design - Final screens")
        TestSection.tsx           ← not rendered, kept for later
  routes/project/
    powermatch.tsx                ← TanStack route
public/powermatch/                ← 10 exported Figma screenshots
```

---

## Pending decisions from last session

**Component system consolidation**: There are 7 near-identical copies of `constants.ts` and `utils.ts` (one per case study project). Recommendation was to merge into shared `src/components/project/constants.ts` + `primitives.tsx` and keep only `asset()` per-project. Decision was deferred — confirm before starting.

**`case-editorial-split` CSS fix**: Already applied — `width: 100%; min-width: 0` added. Affects all pages using this class.
