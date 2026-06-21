/**
 * Plinto — AI Invoice Approval case study copy and image paths.
 * Layout/spacing: src/components/project/plinto/chapters/*.tsx (per chapter)
 * Images: /public/plinto/
 * Handoff: docs/case-studies/plinto-handoff.md
 */

export const plintoAssetFolder = "plinto" as const;

export const plintoContent = {
  hero: {
    title: "Plinto: Designing an AI Invoice Approval Interface",
    subtitle:
      "A Round 3 design task for a Copenhagen fintech startup. I designed the invoice approval workspace where finance operators review AI recommendations, act through a split view and copilot chat, and move invoices across three clear states: Auto-matched, Needs review, and Blocked.",
    metadata: {
      client: { label: "Client", value: "Plinto" },
      year: { label: "Year", value: "2026" },
      role: {
        label: "My role",
        items: [
          "UX Research",
          "Interaction Design",
          "UI Design",
          "Prototyping",
        ],
      },
      tools: {
        label: "Tools",
        items: ["Figma", "HTML/CSS"],
      },
      field: {
        label: "Field",
        items: ["B2B SaaS", "FinTech", "AI interfaces"],
      },
    },
    heroImage: "plinto project hero.jpg",
    heroImageAlt:
      "Plinto app icon in a frosted glass dock alongside Apple TV and Settings",
  },

  projectBackground: {
    heading: "Project Background",
    body: "Plinto is an early stage Copenhagen startup building an AI virtual controller for financial controlling. Finance teams processing dozens of invoices each week often work across disconnected tools with no single place to review AI output and record a decision. This case study covers a product design task focused on the approval moment: after the AI has parsed an invoice, matched it against purchase orders, and assigned a status, the operator needs to understand the recommendation and act with confidence.",
  },

  theChallenge: {
    heading: "The Challenge",
    intro:
      "A generic approve or reject pattern breaks down in an AI-assisted workflow. A clean match should take seconds. A duplicate or missing PO should not allow a fast approval path. The interface had to express risk through a simple status model, adapt the detail panel and copilot conversation to each case, and keep every override documented.",
    bullets: [
      "Collapse complex backend logic into three operator facing states without hiding the nuance inside each state",
      "Make AI reasoning visible in the copilot pane so operators can trust good matches and challenge weak ones",
      "Design for speed on Auto-matched invoices while making Blocked cases structurally hard to bypass",
    ],
  },

  tableOfContents: {
    heading: "Table of Contents",
    links: ["Research", "Define", "Design", "Prototype"] as const,
  },

  research: {
    sectionTitle: "01. Research - Understanding the decision context",
    sectionIcon: "research.svg",

    overview: {
      heading: "Overview",
      items: ["USER CONTEXT", "COMPETITIVE ANALYSIS", "KEY PATTERNS"] as const,
    },

    researchIntro: {
      heading: "Starting with the operator",
      body: "The brief scoped a single approval surface, but the right structure depended on how finance operators actually work. I mapped user context, AP automation patterns, and competitor products first so the interface could reflect real decision making before visual design started.",
    },

    userContext: {
      heading: "The finance operator's context",
      body: "A controller or finance operator in a mid sized organisation processes a high volume of supplier invoices under time pressure, often in a small team. Every approval carries audit weight. Speed and accuracy pull in opposite directions. The product needed to reduce cognitive load on routine matches while forcing deliberate action when something looks wrong, new, or incomplete.",
    },

    competitorAnalysis: {
      heading: "Competitive analysis",
      body: "I reviewed AP automation tools including AvidXchange, Invoiceflow, Tipalti, HighRadius, and Rillion. Confidence scoring and transparent reasoning were common in stronger products. Most still used one layout for every exception type and only changed labels. That gap pointed to varying interaction depth by status, not just copy on the same screen.",
      images: [] as readonly string[],
    },
  },

  define: {
    sectionTitle: "02. Define - Three states, one workspace",
    sectionIcon: "define.svg",

    overview: {
      heading: "Overview",
      items: [
        "THE HANDOFF MOMENT",
        "THREE STATES",
        "DESIGN PRINCIPLES",
      ] as const,
    },

    definingNextSteps: {
      heading: "The AI human handoff moment",
      body: "The task centred on one moment in the workflow. The operator selects an invoice from the queue. The AI has already extracted data, run matching rules, and assigned a status. The design job was to make that status legible at a glance, surface the evidence behind it, and offer the right actions without sending people to other tools.",
    },

    threeStates: {
      heading: "Mapping three operator states",
      questions: [
        {
          number: "01",
          text: "Auto-matched: PO, vendor, and amount align within policy. The operator confirms quickly. Primary action is approve with minimal friction and optional copilot summary.",
        },
        {
          number: "02",
          text: "Needs review: human judgement required. Covers variance, first time vendors, policy edge cases, and other exceptions. The UI surfaces the specific issue, suggested next steps, and may require a reason or checklist before approval.",
        },
        {
          number: "03",
          text: "Blocked: hard stop. Duplicate suspicion, no PO match, or other conditions that should not proceed on a single click. Resolution options stay explicit and the copilot explains why approval is unavailable.",
        },
      ] as const,
    },

    designPrinciples: {
      heading: "Design principles",
      items: [
        {
          number: "01",
          text: "Status before detail: KPI tiles and row badges tell the story before the operator opens a record. Color and weight support the label, not replace it.",
        },
        {
          number: "02",
          text: "Reasoning in the open: the copilot states why Plinto reached a conclusion. Evidence sits in the conversation, not behind a tooltip.",
        },
        {
          number: "03",
          text: "Progressive depth: the queue stays scannable. Detail and chat expand only when an invoice is selected.",
        },
        {
          number: "04",
          text: "Human control with audit trail: overrides stay possible where policy allows, but consequential actions leave a documented trace.",
        },
        {
          number: "05",
          text: "Calibrated friction: Auto-matched paths stay short. Blocked paths cannot be mistaken for routine approval.",
        },
      ] as const,
    },

    scopeDecision: {
      heading: "Scope decision",
      body: "I scoped the invoices overview, split workspace, and copilot approval flow. Vendor onboarding, bulk automation rules, and reporting were out of scope for this task. The deliverable was an interactive HTML prototype detailed enough to present in a final interview round and clear enough to extend into a full product surface.",
    },
  },

  design: {
    sectionTitle: "03. Design - From structure to visual system",
    sectionIcon: "prototype.svg",

    overview: {
      heading: "Overview",
      items: ["WIREFRAMES", "INTERACTION MODEL"] as const,
    },

    translatingConcepts: {
      heading: "One workspace, behaviour by status",
      body: "Instead of four separate modal designs, the final model uses one desktop workspace. The invoice queue, KPI summary, and filter tabs stay stable. The copilot pane and action footer adapt to Auto-matched, Needs review, or Blocked. Wireframes established hierarchy. Visual design applied a restrained fintech language. Interaction design connected table selection to chat led approvals.",
    },

    wireframes: {
      heading: "Wireframes",
      body: "Early wireframes tested how to place the AI recommendation relative to invoice facts, where confidence and status should live, and how gating differed between low and high risk cases. Three layout directions explored chat-forward, dashboard-first, and minimal decision-card patterns before the split queue plus detail model survived every iteration.",
      screens: [
        {
          image: "wireframe-conversational-ease.svg",
          heading: "Conversational Ease",
          caption:
            "Chat-forward layout with copilot thread dominant, quick-reply actions, and an inline composer for guided approval without leaving the conversation.",
        },
        {
          image: "wireframe-control-room.svg",
          heading: "Control Room",
          caption:
            "Dashboard-first layout with KPI strip, filter bar, and invoice table for batch scanning before drill-down into individual records.",
        },
        {
          image: "wireframe-decision-card.svg",
          heading: "Decision Card",
          caption:
            "Minimal queue plus focused decision card with compact fact rows, primary approve and reject actions, and a composer at the point of decision.",
        },
      ] as readonly { image: string; heading: string; caption: string }[],
    },

    interactionModel: {
      heading: "Interaction model",
      body: "Selecting a row opens the copilot pane with context loaded for that invoice. Quick actions in chat trigger typed user replies, a brief thinking state, and an AI follow up that reflects the decision. Approve and reject paths update the post action area so the operator sees confirmation in place. On smaller viewports the same content collapses into a mobile queue with a bottom sheet for review, preserving status logic without duplicating layouts.",
    },
  },

  prototype: {
    sectionTitle: "04. Prototype - Final screens",
    sectionIcon: "prototype.svg",

    overview: {
      heading: "Overview",
      items: ["DESKTOP"] as const,
    },

    translatingConcepts: {
      heading: "Interactive approval prototype",
      body: "The final deliverable is a clickable HTML prototype of the invoices workspace. Desktop shows the full split view with queue, KPI strip, filters, and copilot chat. The screens below are exported from that prototype for the portfolio.",
    },

    desktop: {
      sectionLabel: "Desktop",
      fullScreens: {
        heading: "Full screens",
        intro:
          "Three desktop states with the copilot pane open: Auto-matched, Needs review, and Blocked. Each shows how the shared shell carries different content density and actions.",
        screens: [
          {
            image: "screens exports/Auto-matched invoice.jpg",
            heading: "Auto-matched invoice open",
            caption:
              "Clean match with copilot summary, primary approve action, and minimal fields between scan and decision.",
          },
          {
            image: "screens exports/Needs review invoice.jpg",
            heading: "Needs review invoice open",
            caption:
              "Exception detail with contextual guidance. Approval stays gated until the operator addresses the flagged issue.",
          },
          {
            image: "screens exports/Blocked invoice.jpg",
            heading: "Blocked invoice open",
            caption:
              "Hard stop state with explicit resolution paths. No single click approval when policy blocks the match.",
          },
        ] as readonly { image: string; heading: string; caption: string }[],
      },
      chatDetail: {
        heading: "Copilot chat detail",
        screens: [
          {
            image: "screens exports/ai chat screens.jpg",
            heading:
              "Zoomed AI chat after the operator acts from suggested quick replies.",
            caption:
              "Four chat states showing quick-reply taps, operator messages, a brief thinking indicator, and AI confirmation after approve or reject.",
          },
        ] as readonly { image: string; heading: string; caption: string }[],
      },
    },
  },

  reflection: {
    sectionTitle: "05. Reflection",
    sectionIcon: "test.svg",

    overview: {
      heading: "Overview",
      items: ["WHAT I WOULD TEST", "WHAT COMES NEXT"] as const,
    },

    reflectionIntro: {
      heading: "Designed as an interview task",
      body: "This was a Round 3 design task for Plinto, time boxed to a few hours of design work plus presentation prep. The output is a fully interactive prototype, not production code. The move from four scenario modals to three status states plus chat simplified the story for operators while still allowing depth inside Needs review and Blocked.",
    },

    whatIWouldTest: {
      heading: "What I would test",
      scenarios: [
        {
          number: "01",
          text: "Status comprehension: do operators correctly predict required effort from Auto-matched, Needs review, and Blocked before opening a row?",
        },
        {
          number: "02",
          text: "Chat led approvals: does acting through copilot quick replies feel faster than traditional form buttons, or does it add uncertainty?",
        },
        {
          number: "03",
          text: "Blocked recovery: when an invoice is Blocked, can operators find the right resolution without support? Where do they still export to email or spreadsheet?",
        },
      ] as const,
    },

    whatComesNext: {
      heading: "What comes next",
      body: "This workspace is one slice of a larger controller product. Next problems include batch actions on Auto-matched queues, vendor management tied to Needs review cases, tolerance rules configured per client, and analytics on override rates. The prototype is structured so those features can extend the same shell rather than replace it.",
    },
  },
} as const;

export type PlintoContent = typeof plintoContent;
