/**
 * Powermatch — Bank Reconciliation case study copy and image paths.
 * Layout/spacing: src/components/project/powermatch/chapters/*.tsx (per chapter)
 * Images: /public/powermatch/
 */

export const powermatchAssetFolder = "powermatch" as const;

export const powermatchContent = {
  hero: {
    title: "Powermatch: Designing a Bank Reconciliation feature",
    subtitle:
      "Designing a bank reconciliation feature for Powermatch's internal finance team — replacing a fragmented cross-tool workflow with a single interface for matching payments to invoices, handling edge cases, and maintaining a full audit trail.",
    metadata: {
      client: { label: "Client", value: "Powermatch" },
      year: { label: "Year", value: "2025" },
      role: {
        label: "My role",
        items: [
          "UX Research",
          "UX & UI Design",
          "Component System",
          "User Flows",
          "Dev Handoff",
        ],
      },
      tools: {
        label: "Tools",
        items: ["Figma"],
      },
      field: {
        label: "Field",
        items: ["B2B SaaS", "HR platform"],
      },
    },
    heroImage: "pw1hero.jpg",
    heroImageAlt: "Powermatch hero image",
  },

  projectBackground: {
    heading: "Project Background",
    body: "Powermatch is a Danish B2B staffing platform that manages the full lifecycle between companies and their contractors — from recruitment and matching to timesheets and invoicing. An internal finance team handles all billing between Powermatch and the companies it works with. Bank reconciliation — verifying that every issued invoice has a matching bank payment — was a critical daily task with no in-platform support.",
  },

  theChallenge: {
    heading: "The Challenge",
    intro:
      "Three tools, no sync, no shared logic. The finance team was manually cross-referencing Powermatch, the e-conomic accounting platform, and a manually-refreshed Google Sheet to reconcile invoices and payments — with no support for edge cases and no record of who made any change.",
    bullets: [
      "Match invoices to bank payments across two external tools — with no in-platform support and no real-time sync",
      "Handle complex scenarios like partial payments and company balance surplus with no system logic — resolved manually every time",
      "Maintain no shared history of who confirmed, changed, or rejected any invoice-payment match",
    ],
  },

  tableOfContents: {
    heading: "Table of Contents",
    links: ["Research", "Define", "Ideate", "Prototype"] as const,
  },

  research: {
    sectionTitle: "01. Research - Understanding the workflow",
    sectionIcon: "research.svg",

    overview: {
      heading: "Overview",
      items: ["STAKEHOLDER ALIGNMENT", "USER OBSERVATION", "COMPETITOR ANALYSIS"] as const,
    },

    researchIntro: {
      heading: "Starting with the people who do the work",
      body: "Before a single screen was drawn, I needed to understand how the finance team's reconciliation workflow actually worked — and exactly where it broke down. The research phase ran three parallel tracks: alignment with the CPO and development team on scope and technical constraints, direct observation of the existing workflow with the users who would own the feature, and a structured review of how comparable B2B finance tools handle bank reconciliation.",
    },

    stakeholderInterviews: {
      heading: "Stakeholder alignment & user observation",
      body: "I started with the co-founder and CPO — acting as product owner on this project — to align on the business problem, agree on MVP scope, and define what was in and out of bounds for V1. In parallel, I ran observation sessions with the finance team: watching them switch between e-conomic and a Google Sheet, manually refreshing data, and mentally tracking which invoices were covered. These sessions surfaced the core friction clearly — the process was slow, error-prone, and forced users to hold too much context in their heads. Frequent check-ins with both the CPO and the development team throughout ensured scope decisions stayed grounded in what was technically feasible.",
      images: [] as readonly string[],
    },

    userPersonas: {
      heading: "Competitor analysis",
      body: "I studied how five tools handle bank reconciliation to establish baseline UX patterns and identify what Powermatch's specific workflow required beyond standard approaches: Billy, Revolut Business, Altar, Dinero, and Copilot. Key observations: matched/unmatched status badges are near-universal, side-by-side invoice and transaction views dominate, drag-to-match or click-to-confirm are the two primary interaction models. None of the tools reviewed supported company-level balance tracking — a requirement specific to how Powermatch's billing model works.",
      images: ["competitor-analysis.png"] as readonly string[],
    },
  },

  define: {
    sectionTitle: "02. Define - Translating findings into goals",
    sectionIcon: "define.svg",

    overview: {
      heading: "Overview",
      items: [
        "PROBLEM STATEMENT",
        "DESIGN GOALS",
        "V1 SCOPE",
      ] as const,
    },

    definingNextSteps: {
      heading: "From fragmented tools to a single source of truth",
      body: "The research made one thing clear: reconciliation wasn't a missing button — it was a broken workflow. Finance admins were managing critical financial data across three systems that didn't communicate, handling complexity those tools were never designed for. The design challenge was to consolidate this into a single interface that could handle every edge case without adding overhead to the routine, daily cases.",
    },

    problemStatement: {
      heading: "Problem statement",
      body: "Powermatch's finance team had no in-platform way to verify that sent invoices were matched to bank payments. Reconciliation required switching between e-conomic and a manually-refreshed Google Sheet, with no support for partial payments, multi-invoice transactions, or company balance tracking — and no record of who made any change.",
    },

    howMightWe: {
      heading: "Design goals",
      questions: [
        {
          number: "01",
          text: "How might we let admins confirm that every invoice is matched to a payment — without leaving Powermatch?",
        },
        {
          number: "02",
          text: "How might we surface and resolve complex matching scenarios (partial payments, company balance surplus, multi-invoice transactions) without overwhelming the standard case?",
        },
        {
          number: "03",
          text: "How might we give admins full traceability — knowing what was matched, when, and by whom — across every invoice in the system?",
        },
      ] as const,
    },

    userNeeds: {
      items: [] as readonly { image: string; title: string; caption: string }[],
    },

    successMetrics: {
      items: [] as readonly { image: string; title: string; caption: string }[],
    },

    projectGoals: {
      image: "invoices-tab.png",
      title: "V1 scope decisions",
      caption:
        "Working with the CPO and dev team, I defined the V1 feature set: AI-assisted auto-matching with manual override, partial match support (one invoice ↔ multiple payments, and vice versa), per-company balance tracking with an allow-balance-matching toggle, a full activity log on every reconciliation event, and a dedicated reconciliation tab within the Invoices page. Deeper analytics, bulk actions, and cross-company views were scoped to V2.",
    },
  },

  ideate: {
    sectionTitle: "03. Ideate - Exploring the structure",
    sectionIcon: "ideate.svg",

    overview: {
      heading: "Overview",
      items: [
        "NAVIGATION STRUCTURE",
        "LAYOUT EXPLORATION",
        "USER FLOWS",
        "WIREFRAMES",
      ] as const,
    },

    fromStructureToConcepts: {
      heading: "Finding the right structure before committing to screens",
      body: "With a clear problem definition, I moved into structural exploration: where does bank reconciliation belong within the existing navigation? How do you lay out a workspace that shows invoices, bank transactions, and their matching state simultaneously? What are the core flows a user needs to complete? I explored each of these questions before committing to any screen.",
    },

    sitemap: {
      heading: "Navigation structure",
      body: "Rather than adding a standalone section to the left nav, I placed bank reconciliation as a second tab within the existing Invoices page. This kept the mental model intact — if you are thinking about invoices, you are already in the right place. The tab structure let the all-invoices view and the reconciliation workspace share context (company filters, sync state) without duplication. I also added reconciliation status directly to the invoice table rows so admins can see and act on individual invoice matches from the list view.",
      items: [
        {
          image: "nav-exploration.png",
          title: "Navigation exploration — tab structure vs standalone nav",
        },
      ] as readonly { image: string; title: string }[],
    },

    informationArchitecture: {
      heading: "Layout exploration",
      body: "The central design challenge was the reconciliation workspace: how do you display sent invoices, incoming bank transactions, and their matched state at the same time without losing context? I explored two-panel splits, a single list with inline expansion, and a three-column layout. The three-column approach — invoices on the left, matched payments in the center, transaction search on the right — mapped most directly to the mental model of the task and was validated by the patterns observed in the competitor analysis.",
      images: ["layout-exploration.png"] as readonly string[],
    },

    userFlows: {
      heading: "User flows",
      body: "I mapped the seven primary flows: auto-match review and confirmation, manual match from the reconciliation tab, inline reconciliation from the invoice detail view, partial match (one invoice to multiple payments), partial match (multiple payments to one invoice), pending approval review and action, and company balance reconciliation with the allow-balance-matching toggle. Every flow was designed to be completable without leaving the Invoices page.",
      images: [] as readonly string[],
    },

    wireframes: {
      heading: "Wireframes",
      body: "Early wireframes focused on three areas: the reconciliation tab workspace layout, the invoice detail side panel with matched payment state, and the slide-in drawer for inline reconciliation. Multiple iterations explored how to surface the reconciliation status column within the existing invoice table, and how to present the per-company balance view above the transaction list when a specific company was selected.",
      images: [] as readonly string[],
    },
  },

  prototype: {
    sectionTitle: "04. Design - Final screens",
    sectionIcon: "prototype.svg",

    overview: {
      heading: "Overview",
      items: ["NEW COMPONENTS", "FINAL SCREENS"] as const,
    },

    translatingConcepts: {
      heading: "From exploration to a fully annotated handoff",
      body: "Powermatch had an existing design system. Every component needed for bank reconciliation was new — I designed each one to extend the existing visual language while introducing the density patterns and interaction states that financial data requires. The feature was reviewed with the CPO before dev handoff and shipped as a fully annotated design specification.",
    },

    designSystem: {
      heading: "New components",
      body: "All UI components for this feature were designed from scratch as extensions of the existing design system: reconciliation status badges (Auto-matched, Manually Matched, Pending Approval, Partial Match, Unmatched), invoice and payment list cards with company avatars, the three-column reconciliation workspace with drag-and-drop matching zones, the company balance summary bar, the allow-balance-matching toggle with its state variants, the slide-in reconciliation drawer with an inline bank transaction list, and an activity log showing timestamped entries for every match event.",
      images: [] as readonly string[],
    },

    highFidelity: {
      heading: "Final screens",
      intro:
        "The feature spans three primary surfaces: the enhanced Invoices table, the dedicated Reconciliation Tab, and the Invoice Detail view with reconciliation sidebar and slide-in drawer. Together they cover every reconciliation scenario — from routine auto-match confirmation to complex partial-payment edge cases.",

      mobileApp: {
        sectionLabel: "I. Reconciliation Tab",
        screens: [
          { image: "recon-tab-large.png", heading: "Three-column reconciliation workspace" },
          { image: "recon-tab-choose-company.png", heading: "Company view — balance summary bar and transactions" },
          { image: "recon-tab-pending-approval.png", heading: "Pending approval — AI-suggested match awaiting confirmation" },
          { image: "recon-invoice-partial-match.png", heading: "Partial match — one invoice linked to multiple payments" },
        ] as readonly { image: string; heading?: string; caption?: string }[],
      },

      desktopPortal: {
        sectionLabel: "II. Invoices Tab & Invoice Detail",
        screens: [
          { image: "invoices-tab.png", heading: "Invoices table — with reconciliation status column" },
          { image: "invoice-detail-auto-matched.png", heading: "Invoice detail — auto-matched state with activity log" },
        ] as readonly { image: string; heading?: string; caption?: string }[],
      },
    },
  },

  test: {
    sectionTitle: "05. Test",
    sectionIcon: "test.svg",

    overview: {
      heading: "Overview",
      items: ["USABILITY TESTING", "PRIORITY REVISIONS"] as const,
    },

    definingNextSteps: {
      heading: "Reflection",
      body: "This feature shipped directly to production after CPO sign-off and dev handoff. No formal usability testing was conducted within the scope of this engagement — my role ended at handoff. Looking back, the main area I would prioritise for a V2 research cycle is the partial match flow, which requires the most steps and has the most decision points for the user.",
    },

    usabilityTesting: {
      heading: "What I would test",
      intro:
        "If a testing phase had been in scope, these are the scenarios I would have prioritised:",

      scenarios: [
        {
          heading: "Auto-match confirmation",
          body: "Can users confidently review and confirm AI-suggested matches without second-guessing the status badges?",
        },
        {
          heading: "Partial match resolution",
          body: "Can users successfully navigate the partial match flow — linking one invoice to multiple payments — without guidance?",
        },
      ] as const,

      trackedMetrics: {
        heading: "Hypothetical tracked metrics",
        items: [
          "Time to reconcile: How long to process a standard invoice batch vs the previous workflow.",
          "Error rate: Incorrect matches made and later reversed.",
          "Feature discovery: Whether users find the reconciliation tab and per-company view without prompting.",
          "Satisfaction: Post-task rating on confidence in data accuracy.",
        ],
      },

      successCriteria: {
        heading: "Success criteria",
        items: [
          "1. Admin can reconcile a standard invoice batch faster than the previous cross-tool workflow.",
          "2. Partial match flow completable without external guidance.",
          "3. Activity log sufficient to answer audit queries without accessing e-conomic.",
        ],
      },

      conclusion: {
        heading: "Outcome",
        body: "The feature was shipped and handed off to the development team after a review with the CPO. Without post-launch data, the clearest signal of quality was the alignment reached during iterative check-ins — no major scope pivots were needed after the first round of high-fidelity screens.",
      },
    },

    priorityRevisions: {
      heading: "Priority revisions",
      items: [] as readonly string[],
      images: [] as readonly string[],
    },
  },
} as const;

export type PowermatchContent = typeof powermatchContent;
