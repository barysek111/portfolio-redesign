/**
 * Weld case study — copy and image paths.
 * Layout/spacing: src/components/project/weld/chapters/*.tsx (per chapter)
 */

export const weldAssetFolder = "weld" as const;

export const weldContent = {
  hero: {
    title: "Weld",
    subtitle:
      "Website information architecture, wireframing, visual identity and illustration for a data SaaS company.",
    backLink: "Back",
    metadata: {
      client: { label: "Client", value: "Weld" },
      year: { label: "Year", value: "2021" },
      role: {
        label: "My role",
        items: [
          "Brand Identity",
          "Information Architecture",
          "Wireframing",
          "Illustration",
          "Web Design",
        ],
      },
      tools: {
        label: "Tools",
        items: ["Figma", "Figjam", "Webflow"],
      },
      field: {
        label: "Field",
        items: ["Brand Identity", "SaaS", "Web Design"],
      },
    },
    heroImage: "weldthumbnail2-1.jpg",
    heroImageAlt: "Weld — brand identity, design system and website redesign for a data SaaS platform",
  },

  projectBackground: {
    heading: "Project Background",
    body:
      "I joined Weld to help create a visual identity and design system that would support its growth as a next-generation data platform. My work focused on elevating the brand, shaping a cohesive UI library, and ensuring consistency across both web and product experiences.",
  },

  theChallenge: {
    heading: "The Challenge",
    intro:
      "Weld needed to stand out in a crowded SaaS landscape and evolve from startup aesthetics to a trusted enterprise brand. My role was to:",
    bullets: [
      "Bring clarity and originality to their interfaces and unite the visual language.",
      "Make their digital products as intuitive and professional as their mission.",
      "Build a scalable system that would support the team long after project delivery.",
    ],
  },

  tableOfContents: {
    heading: "Table of Contents",
    links: ["Research", "Define", "Implementation"] as const,
  },

  research: {
    sectionTitle: "01. Research - Design Audit & Defining Goals",

    visualLandscape: {
      heading: "Understanding the visual landscape",
      body:
        "Kicked off with a detailed audit of Weld's existing assets and competitive analysis. This process identified what worked, highlighted inconsistencies, and inspired new directions for colour, typography, and UI patterns — laying the groundwork for a more unified visual language.",
    },

    designAudit: {
      heading: "Design audit",
      body:
        "I conducted an in-depth review of Weld's existing digital presence to uncover gaps, inconsistencies, and opportunities for improvement. This audit informed the new visual language and design system, setting a solid foundation for the redesign and ensuring every detail aligned with brand goals.",
    },

    designGoals: {
      heading: "Design goals & deliverables",
      items: [
        {
          number: "I",
          text: "Refreshed Visual Identity: Revitalising Weld's brand identity with a bold colour palette, clean typography, and modern visual language — ensuring the platform stands out in a crowded tech landscape. The refreshed brand materials establish both trust and approachability across all customer touchpoints.",
        },
        {
          number: "II",
          text: "Custom Iconography and Illustration: Developing a set of bespoke icons and illustrations that inject personality into the brand experience. These elements help convey complex ideas clearly, bring consistency to the user interface, and make the brand instantly memorable.",
        },
        {
          number: "III",
          text: "New UI and UX for the Website: Redesigning key web experiences such as the demo signup and pricing pages crucial for conversion and user trust. Introduced a new global navigation and footer, improving orientation and discoverability across the site.",
        },
        {
          number: "IV",
          text: "Scalable Design System for Product and Web: Creating a unified design system of reusable components, style guides, and patterns that streamline both product and marketing development. This foundation ensures brand consistency, speeds up new feature launches, and supports future growth.",
        },
      ] as const,
    },
  },

  define: {
    sectionTitle: "02. Define - Design System Foundations",

    buildingSystem: {
      heading: "Building the design system",
      body:
        "I developed a scalable Figma library of components, grids, colour tokens, and icons. This toolkit enabled rapid prototyping and consistent handoff to developers, while future-proofing Weld's product for ongoing evolution and expansion — all built with accessibility and clarity at the core.",
    },

    keyScreensFlows: {
      heading: "Key UI screens & flows",
      body:
        "I produced wireframes for critical product flows, focusing on intuitive navigation and clear information hierarchy. These flows helped streamline complex user tasks such as onboarding, data integration, and project management.",
      images: [
        "weldsitemap.jpg",
        "weld_wireframes1.jpg",
        "weld_wireframes2.jpg",
      ] as const,
    },

    websiteScreens: {
      heading: "Website screens",
      body:
        "I designed and refined core website screens including the homepage, pricing, signup, resources, and all product pages to align with Weld's refreshed identity. Each screen was crafted for clarity, conversion, and a smooth user journey — ensuring visitors can easily understand Weld's value and take the next step.",
      navigation: {
        label: "Navigation",
        images: ["nav0-2.jpg", "nav1.jpg"] as const,
      },
      fullPages: {
        label: "Features & product pages",
        images: [
          "weld-website-full-pages1.jpg",
          "weld-website-full-pages2.jpg",
        ] as const,
      },
      components: {
        label: "Modular website components",
        images: [
          "weld-website-components1.svg",
          "weld-website-components2.svg",
        ] as const,
      },
    },

    brandVisualLanguage: {
      heading: "Brand & visual language",
      body:
        "Developing a unique visual language that connects all touchpoints — from logo, typeface, and colour palette to a defined style of photography and illustration — ensuring instant recognition and memorability.",
      brandElements: {
        label: "Key brand elements",
        images: ["weld_brand1.svg", "weld_brand2.svg", "weld_brand3.svg"] as const,
      },
      iconPack: {
        label: "Bespoke icon pack",
        image: "weldiconpack.svg",
      },
      infographics: {
        label: "Website infographics & content illustrations",
        images: [
          "Group-13358-1.svg",
          "Group-13589.svg",
          "Group-13540.svg",
          "Group-13359.svg",
          "Group-13358-2.svg",
          "Group-13357-2.svg",
          "Group-13360.svg",
          "Group-13486.svg",
          "Group-13982.svg",
          "Group-13357-1.svg",
          "Group-13478-1.svg",
          "Group-13358.svg",
        ] as const,
      },
      metaImages: {
        label: "Website meta images",
        image: "weldmetaimages.jpg",
      },
    },
  },

  implementation: {
    sectionTitle: "03. Implementation & Outcomes",

    smoothImplementation: {
      heading: "Smooth implementation",
      body:
        "I created clean, annotated Figma files, written documentation, and handoff guides for engineers and marketers. Regular check-ins ensured the system translated perfectly from design to code, and that future teams could build on this system.",
    },

    handover: {
      heading: "Implementation & handover",
      body:
        "Provided comprehensive design documentation and worked closely with developers to ensure a seamless build process. Created guidelines and reusable assets in Figma, making it easy for the Weld team to maintain consistency and continue evolving the brand after project delivery.",
    },

    learnings: {
      heading: "Learnings",
      body:
        "Weld's new design system and brand visuals now underpin all digital touchpoints, empowering the team to launch product updates faster and with greater cohesion. The project was a crash course in bringing order and polish to a fast-moving tech startup, and a chance to make a visible impact through strong, systematic design.",
    },
  },
} as const;

export type WeldContent = typeof weldContent;
