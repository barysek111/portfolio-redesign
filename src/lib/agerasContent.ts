/**
 * Ageras case study — copy and image paths.
 * Layout/spacing: src/components/project/ageras/chapters/*.tsx (per chapter)
 */

export const agerasAssetFolder = "ageras" as const;

export const agerasContent = {
  hero: {
    title: "Ageras Website UI/UX Consolidation",
    subtitle:
      "Reinventing the approach to web interface and consolidating digital UI/UX for a fintech SaaS suite catering to small business owners.",
    metadata: {
      client: { label: "Client", value: "Ageras" },
      year: { label: "Year", value: "2025" },
      role: {
        label: "My role",
        items: [
          "UX/UI Design",
          "User Flows",
          "Wireframing & Prototyping",
          "Usability Testing",
          "Brand Identity",
          "Engineer Collaboration",
        ],
      },
      tools: {
        label: "Tools",
        items: ["Figma", "Figjam", "Miro", "Linear"],
      },
      field: {
        label: "Field",
        items: ["SaaS", "Fintech"],
      },
    },
    heroImage: "agerasthumbnailprojectpage123.jpg",
    heroImageAlt: "Ageras — redesigned web interface for a fintech SaaS suite",
  },

  projectBackground: {
    heading: "Project Background",
    body:
      "Ageras is a fintech SaaS provider delivering a suite of digital tools designed to empower small business owners with financial management, invoicing, and accounting solutions. With offerings available in multiple regions, I was brought in to consolidate and evolve the digital experience into a single, coherent system.",
  },

  theChallenge: {
    heading: "The Challenge",
    intro:
      "The task was to consolidate a diverse set of websites for different products, to reflect the transition into one brand and one product. I created one cohesive interface, while ensuring an intuitive, streamlined experience for small business customers of varying tech backgrounds. This meant rethinking:",
    bullets: [
      "Navigation patterns and content strategy for clarity and guidance.",
      "UI patterns that scale across regional product variants.",
      "A design system flexible enough to support Ageras's continued growth.",
    ],
  },

  tableOfContents: {
    heading: "Table of Contents",
    links: ["Research", "Define", "System", "Prototype", "Implement"] as const,
  },

  research: {
    sectionTitle: "01. Research - Defining Goals",

    researchIntro: {
      heading: "Understanding The Visual Landscape",
      body:
        "To set the right foundation, I began by analyzing the existing website and design assets, gathering feedback from key stakeholders and users, and mapping out both strengths and friction points. This phase helped clarify project goals and uncovered opportunities for greater consistency and brand impact.",
    },

    designAudit: {
      heading: "Design Audit",
      body:
        "The initial design audit examined every aspect of Ageras's digital presence, including web UI, navigation flows, and content organization. By identifying usability pain points, gaps in branding, and inconsistencies in component usage, I could pinpoint areas for immediate improvement and inform the vision for a new design system.",
    },

    designGoals: {
      heading: "Design Goals & Deliverables",
      items: [
        {
          number: "01",
          text: "Refreshed visual identity: Establish a refreshed visual identity that's approachable, reliable, and distinctly Ageras.",
        },
        {
          number: "02",
          text: "Custom iconography and illustration: Develop a custom iconography and illustration style, as well as image style, to clarify complex content and boost brand recognition.",
        },
        {
          number: "03",
          text: "New UI and UX for the website: Reimagine the website's UI and UX for seamless task completion and easy product discovery.",
        },
        {
          number: "04",
          text: "Scalable design system for web: Build a scalable design system, making it effortless to expand and customize the suite as Ageras grows into new markets and product areas.",
        },
      ] as const,
    },
  },

  define: {
    sectionTitle: "02. Define - Shaping Information & Experience",

    definingNextSteps: {
      heading: "Foundation For The New Website",
      body:
        "With research in place, I translated insights into actionable plans, mapping product offerings to regional markets, defining user flows, and visualizing new interface directions. This created alignment with stakeholders and provided a concrete blueprint for the system's next evolution.",
    },

    sitemapsAndFlows: {
      heading: "Sitemaps and Flows",
      body:
        "In this part of the process, I created an overview of what regions Ageras offers their products and what the local product and service offering is. This helped streamline and define what product pages would be needed for each locale.",
      images: [
        "ageras-product-regions-scaled.png",
        "sitemaps_dk.jpg",
        "sitemaps_nl.jpg",
        "login-exploration.jpg",
      ] as const,
    },

    visualExploration: {
      heading: "Visual Exploration",
      body:
        "Visual exploration and collecting inspiration references focused on color, typography, spacing, and modular layouts to reinforce trust and accessibility.",
      image: "ageras-inspiration-scaled.png",
    },
  },

  system: {
    sectionTitle: "03. System - Scalable Modular Library",

    buildingIntro: {
      heading: "Building The Design System",
      body:
        "A robust design system was imperative not only for visual consistency, but for speed and flexibility as Ageras continues to add features and regional variants. This library empowers both designers and developers, ensuring that new components remain coherent and on-brand through every release.",
    },

    documentation: {
      heading: "Documentation",
      body:
        "Detailed documentation was created for every component and interaction pattern, providing clear usage guidelines and best practices. This ensures maintainability and knowledge transfer as the team grows.",
      images: [
        "documentation-1.png",
        "Screenshot-2025-09-17-at-14.10.24.png",
      ] as const,
    },

    globalRules: {
      heading: "Global Rules & Principles",
      body:
        "I established universal design principles covering color, spacing, type hierarchy, and interaction feedback that guide all current and future UI work. These rules ensure a cohesive look and predictable experience, no matter which part of the suite a user interacts with.",
      image: "Designsystemageras-grid-scaled.jpg",
    },

    keyBuildingBlocks: {
      heading: "Key Building Blocks",
      body:
        "The design system includes a suite of foundational components like buttons, alerts, cards, tables, forms, and navigation elements, built to adapt across multiple use cases and devices. Early mockups were tested for clarity and engagement, with rapid iterations based on usability feedback and business priorities.",
      images: [
        "Designsystemageras-main-scaled.jpg",
        "Designsystemageras-buttonsandfilter-scaled.jpg",
      ] as const,
    },

    navigation: {
      heading: "Navigation",
      body:
        "Special care went into designing navigation that adapts to both simple and advanced workflows. Ageras users can easily move between product overviews, detailed pages, and support resources, helping them stay oriented and confident as they manage their financial operations.",
      image: "Designsystemageras-nav-scaled.jpg",
    },

    modalsAndDropdowns: {
      heading: "Modals & Dropdowns",
      body:
        "Flexible modal and dropdown systems ensure users can access relevant actions and information without losing context. These patterns were prototyped and tested for accessibility and responsiveness.",
      images: [
        "Designsystemageras-modals-scaled.jpg",
        "Designsystemageras-modals-1-scaled.jpg",
        "Designsystemageras-modals-2-scaled.jpg",
      ] as const,
    },

    sectionComponents: {
      heading: "Section Components",
      body:
        "The entire website would be created with clearly defined building blocks catering for different types of content. Each content section — such as feature highlights, testimonials, pricing, or product comparisons — was built as a modular component. This allows for rapid page assembly and easy localization for different regions.",
      image: "Designsystemageras-components.jpg",
    },

    iconography: {
      heading: "Iconography",
      body:
        "A custom icon set was developed to communicate complex ideas quickly, unify visual language, and add a distinct, recognizable feel to the brand. Icons reflect the sleek, modern, and bold language of the brand and are carefully crafted following a grid system.",
      image: "Designsystemageras-icons-scaled.jpg",
    },

    imageLibrary: {
      heading: "Image Library",
      body:
        "The new image library features consistent, on-brand artwork and illustrations, supporting everything from educational content to onboarding, across all Ageras channels. These would later become the images used on product pages to convey product features, benefits and all the ways the product simplifies things for the user.",
      images: [
        "Ageras_tabsimages-1-scaled.png",
        "Screenshot-2025-09-17-at-13.08.26.png",
        "Screenshot-2025-09-17-at-13.07.42.png",
      ] as const,
    },
  },

  prototype: {
    sectionTitle: "04. Prototype - Putting the Pieces Together",

    puttingItTogether: {
      heading: "Putting the Pieces Together",
      body:
        "Bringing together the research, system, and visual work, interactive prototypes illustrated how real users would navigate new flows and accomplish their goals on the site.",
    },

    mainLandingPages: {
      heading: "Main Landing Pages",
      body:
        "Main landing pages were designed for clarity, conversion, and storytelling. Each template adapts key messaging, value propositions, and calls to action to the needs of specific user segments and regions, as well as keeping conversion and best marketing practices for landing pages as a top priority.",
      images: ["ageras_fullpages1.png", "ageras_fullpages2.png"] as const,
    },

    highFidelityMockups: {
      heading: "High Fidelity Mockups",
      body:
        "High-fidelity mockups demonstrated the final look and feel, validating typography, color, spacing, and component composition. These screens helped align stakeholders and gave the engineering team the precise details needed for development.",
      images: [
        "ageraswebmockup11.jpg",
        "ageraswebmockup5-1.jpg",
        "ageraswebmockup4.jpg",
        "ageraswebmockup6.jpg",
        "ageraswebmockup3.jpg",
        "pricing.jpg",
        "ageraswebmockup7.jpg",
        "ageraswebmockup8.jpg",
      ] as const,
    },
  },

  implement: {
    sectionTitle: "05. Implement - Smooth Implementation",

    smoothImplementation: {
      heading: "Smooth Implementation",
      body:
        "The new system was implemented in close collaboration with engineers, ensuring pixel-perfect accuracy, accessibility, and mobile optimization at every step.",
    },

    implementationAndHandover: {
      heading: "Implementation & Handover",
      paragraphs: [
        "Transitioning from prototype to production, I provided detailed specs, asset exports, and live documentation, enabling the engineering team to build confidently and empowering future content owners to extend the system with ease.",
        "Since I followed a strict system of rules for documenting Figma designs, which I developed earlier, implementation went fairly smoothly and fast. The developers had all the needed specs and variables for all components, as well as descriptions for any transitions and functionality on the website. In this stage, I did daily check-ins with the developers and used Linear for a status overview and feedback loop, as I was the one responsible for quality control and approval of the final interface.",
      ] as const,
    },

    learnings: {
      heading: "Learnings",
      body:
        "This project reinforced how a robust, modular design system is essential for supporting product evolution and consistent user experiences across markets. Continuous collaboration with all teams created a shared ownership of quality and set a foundation for smooth scaling as Ageras's offerings continue to grow.",
    },
  },
} as const;

export type AgerasContent = typeof agerasContent;
