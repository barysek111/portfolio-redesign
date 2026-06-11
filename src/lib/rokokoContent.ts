/**
 * Rokoko Web case study — copy and image paths.
 * Layout/spacing: src/components/project/rokoko/chapters/*.tsx (per chapter)
 */

export const rokokoAssetFolder = "rokoko" as const;

export const rokokoContent = {
  hero: {
    title: "Rokoko Website Revamp",
    subtitle:
      "Rokoko is a motion capture software and hardware company with products that allow their users to breathe life into animated characters with intuitive real-time full body motion capture system.",
    backLink: "Back",
    metadata: {
      client: { label: "Client", value: "Rokoko" },
      year: { label: "Year", value: "2023" },
      role: {
        label: "My role",
        items: [
          "UX/UI Design",
          "Wireframing & Prototyping",
          "Brand Identity",
          "Web Design",
          "Design Systems",
        ],
      },
      tools: {
        label: "Tools",
        items: ["Figma", "Figjam", "Linear", "Webflow"],
      },
      field: {
        label: "Field",
        items: ["Motion Capture", "SaaS", "Web Design"],
      },
    },
    heroImage: "rokokowerthumbnailprojectpage-2.jpg",
    heroImageAlt: "Rokoko website revamp — motion capture brand and web design",
  },

  projectBackground: {
    heading: "Project Background",
    body:
      "I entered Rokoko at a very exciting time, just before a complete rebrand which was facilitated by the Copenhagen-based brand agency E-types. They delivered a high level brand manual defining the new look & feel, and my tasks after that revolved around implementing the new art direction into all Rokoko's marketing touchpoints including complete overhaul of the website.",
  },

  theChallenge: {
    heading: "The Challenge",
    intro:
      "The website redesign had to address a complex set of needs and audiences while staying true to Rokoko's new brand vision. As the product line expanded and the user base became more global, it was essential to:",
    bullets: [
      "Create a site that balanced clarity, scalability, and consistent storytelling.",
      "Build an adaptable framework for marketing, seamless navigation to support and e-commerce.",
      "Develop a design system that would keep everything cohesive as features and content evolved.",
    ],
  },

  tableOfContents: {
    heading: "Table of Contents",
    links: ["Research", "Define", "Ideate", "Implement"] as const,
  },

  research: {
    sectionTitle: "01. Research - Audit and Research",

    researchIntro: {
      heading: "Understanding the Landscape",
      body:
        "The project began with an audit of the existing Rokoko digital ecosystem, assessing usability, branding alignment, and technical strengths and weaknesses.",
    },

    competitorBenchmarking: {
      heading: "Competitor Benchmarking",
      body:
        "I conducted Competitive Market Analysis on major motion capture brands' websites to identify industry standards, trends, and opportunities for differentiation.",
      images: [
        "Competitor-Data-Chartrokoko.svg",
        "Screenshot-2025-09-04-at-17.20.34.png",
        "Screenshot-2025-09-04-at-17.20.43.png",
      ] as const,
    },

    heuristicEvaluation: {
      heading: "Heuristic Evaluation",
      body:
        "This evaluation provides a baseline for iterative user experience improvements and highlights successful elements worth preserving or evolving in a rebrand.",
      items: [
        {
          number: "01",
          text: "Visibility of System Status: The site provides direct feedback, such as filter selections and page navigation for user stories. Loading states and active selections are clear, ensuring users know where they are within content modules.",
        },
        {
          number: "02",
          text: "Match Between System and Real World: Language is clear and matches the expectations of the creative and tech-targeted audience. Calls to action like 'Download now' use conventional terminology.",
        },
        {
          number: "03",
          text: "User Control and Freedom: Users can navigate between content modules. However, there is room to further surface navigation back to the homepage or key product pages, especially for first-time visitors.",
        },
        {
          number: "04",
          text: "Consistency and Standards: Navigation labels and interaction patterns are standard for SaaS/creative tech sites. The visual style has quite a few inconsistencies and overall brand feels dated.",
        },
        {
          number: "05",
          text: "Error Prevention: With clear categories and filter tags, the site prevents user error in browsing stories. However, error states for failed searches are not highly visible.",
        },
        {
          number: "06",
          text: "Recognition Rather Than Recall: Stories are visually presented with tags and preview images, allowing users to browse at a glance. Filtering and story selection reduce the need for users to remember exact story names or features.",
        },
        {
          number: "07",
          text: "Flexibility and Efficiency of Use: The filtering system supports efficient story discovery by topic, software, and industry, benefitting power users as well as newcomers.",
        },
        {
          number: "08",
          text: "Aesthetic and Minimalist Design: The site is visually not clean and minimal, it definitely needs more white space and focus on featured content. Some sections could be simplified for scannability or optimized for mobile.",
        },
        {
          number: "09",
          text: "Help Users Recognize, Diagnose, and Recover from Errors: Obvious error feedback is not visible. Labels and calls to action are clear but could be reinforced with helper text where actions have consequences.",
        },
        {
          number: "10",
          text: "Help and Documentation: A help section is evident in the footer, and there are multiple CTAs for users to download, subscribe, or learn more. Quick access to user support resources is present, but could be made more prominent.",
        },
      ] as const,
    },

    userPersonas: {
      heading: "User Personas",
      body:
        "To ensure Rokoko's website and digital ecosystem meet the needs of real users, three distinct personas were developed. These personas are based on insights from previous company research, customer support feedback, and interviews with active motion capture users from indie creators and educators to professional studios.",
      images: [
        "rokoko-User-Persona1.jpg",
        "rokoko-User-Persona2.jpg",
        "rokoko-User-Persona3.jpg",
      ] as const,
    },

    userNeeds: {
      heading: "User Needs & Feature Prioritization",
      body:
        "This section narrows down the most important needs of Rokoko's diverse users: creators, studios, educators, and researchers. By centering real user goals and pain points, the design ensures the site delivers clear value, easy navigation, and a seamless experience across marketing, support, and e-commerce.",
      images: [
        "rokoko_userneeds.png",
        "rokoko_prioritized-features.png",
      ] as const,
    },
  },

  define: {
    sectionTitle: "02. Define - Shaping the Site Structure",

    websiteFoundations: {
      heading: "Website Foundations",
      body:
        "Collaborated with stakeholders to map out a revised information architecture. Created sitemaps and low-fidelity wireframes to clarify user journeys, define core pages, and ensure the new design would support growth team needs for flexible landing pages and clear content hierarchy.",
    },

    sitemap: {
      heading: "Sitemap",
      body:
        "The sitemap was created to provide clear, logical pathways for each audience, whether they're exploring products, seeking integration support, learning from community resources, or reaching out for help. By organizing content around user journeys and frequently accessed areas, the new structure ensures visitors can quickly find relevant information.",
      image: "rokokositemap-scaled.png",
    },

    wireframes: {
      heading: "Wireframes",
      body:
        "These wireframes visualize the core templates for key pages on the Rokoko website, from product overviews to software, help, and user stories. Each layout prioritizes clarity, feature highlights, and intuitive calls to action, resulting in a streamlined user experience that guides visitors from discovery to engagement and purchase.",
      image: "rokokowireframes.svg",
    },

    componentsList: {
      heading: "Components List",
      body:
        "Creating an overview of needed components was essential for creating a roadmap of the project. The idea is to design a website that has consistent, modular repeating sections that can be quickly reused to make a new page for whatever purpose.",
      image: "Screenshot-2025-09-05-at-12.14.10-scaled.png",
    },
  },

  ideate: {
    sectionTitle: "03. Ideate - Visual Exploration",

    fromSystemsToScreens: {
      heading: "From Systems to Screens",
      body:
        "Explored layouts, color schemes, typography, and interaction patterns reflecting the new brand identity. Iterated on key page templates in Figma, balancing boldness and clarity to make complex product offerings engaging.",
    },

    explorationImages: [
      "Moodboard.jpg",
      "UI-Toolkit.jpg",
      "Brainstorm-other-changes.jpg",
    ] as const,
  },

  implement: {
    sectionTitle: "04. Implement - Implementing the New Design",

    fromSystemToScreens: {
      heading: "From System to Screens",
      body:
        "I developed a modular Figma design system for all website components, supporting easy updates and rapid site building via drag-and-drop blocks. Coordinated closely with the Webflow developer to translate the design system into ready-to-use website structures, ensuring pixel-perfect and maintainable implementation.",
    },

    designSystem: {
      heading: "Design System",
      images: [
        "rokokodesignsystem1-1-scaled.jpg",
        "rokokodesignsystem2-1-scaled.jpg",
      ] as const,
    },

    highFidelityScreens: {
      heading: "High Fidelity Screens",

      marketingWebsite: {
        sectionLabel: "I. Marketing Website",
        body:
          "Each section was built with flexibility in mind, allowing the team to easily showcase new products, highlight user projects, and launch campaigns with minimal effort. The result is a visually engaging, intuitive platform that adapts seamlessly to Rokoko's evolving needs while placing user stories and product discovery at the forefront.",
        images: [
          "rokokoweb1-1.jpg",
          "rokokoweb2-1.jpg",
          "rokokoweb7.jpg",
          "rokokoweb3-1.jpg",
          "rokokoweb4.jpg",
          "rokokoweb5.jpg",
          "rokokoweb6.jpg",
        ] as const,
      },

      knowledgeBase: {
        sectionLabel: "II. Knowledge Base",
        body:
          "help.rokoko.com is a knowledge base site including articles and guides on how to use and handle hardware and software products. Users are also able to submit requests through this platform which the tech support team will answer.",
        images: [
          "rokokoweb10.jpg",
          "rokokoweb8.jpg",
          "rokokoweb9.jpg",
        ] as const,
      },

      webshop: {
        sectionLabel: "III. Webshop",
        body:
          "The webshop was modeled based on a minimalistic Shopify template to follow the brand's visual direction. Part of this task was also to design a number of custom functions, and layouts for selected pages.",
        images: [
          "rokokoweb11.jpg",
          "rokokoweb12.jpg",
          "rokokoweb13-1.jpg",
          "rokokoweb14.jpg",
        ] as const,
      },
    },
  },
} as const;

export type RokokoContent = typeof rokokoContent;
