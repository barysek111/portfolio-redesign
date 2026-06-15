/**
 * Rokoko Brand case study — copy and image paths.
 * Layout/spacing: src/components/project/rokokobrand/chapters/*.tsx (per chapter)
 */

export const rokokoBrandAssetFolder = "rokoko-brand" as const;

export const rokokoBrandContent = {
  hero: {
    title: "Rokoko Brand Identity",
    subtitle:
      "Rokoko empowers creators with innovative motion capture technology, enabling artists to bring animated characters to life with intuitive, real-time tools. This project documents the rollout of a revitalized brand identity.",
    metadata: {
      client: { label: "Client", value: "Rokoko" },
      year: { label: "Year", value: "2022" },
      role: {
        label: "My role",
        items: [
          "Brand Identity",
          "Merchandising",
          "Design for print",
          "Design systems",
          "Packaging design",
        ],
      },
      tools: {
        label: "Tools",
        items: ["Figma", "InDesign", "Illustrator", "Keynote"],
      },
      field: {
        label: "Field",
        items: ["Brand Identity", "Motion Capture"],
      },
    },
    heroImage: "rokokobrandthumbnailprojectpage.jpg",
    heroImageAlt: "Rokoko Brand — brand identity rollout across packaging, print, digital, and merchandising",
  },

  projectBackground: {
    heading: "Project Background",
    body:
      "Rokoko is a motion capture company providing hardware and software for animators and creators globally. In 2022, they partnered with E-types for a complete rebrand redefining their visual language across all platforms. My focus was translating the new direction into everyday brand assets, building consistency across packaging, print, digital templates, and merchandising.",
  },

  theChallenge: {
    heading: "The Challenge",
    intro:
      "The task was to unify all of Rokoko's brand touchpoints under the new identity and bring clarity and cohesion to all brand communication. Deliverables needed to:",
    bullets: [
      "Demonstrate visual distinctiveness and reflect Rokoko's position as a creative leader.",
      "Support fast-paced tech environments with adaptable, scalable templates.",
      "Reinforce consistency across packaging, print, digital, and merchandising.",
    ],
  },

  tableOfContents: {
    heading: "Table of Contents",
    links: ["Research", "Define", "Implementation", "Reflect"] as const,
  },

  research: {
    sectionTitle: "01. Research - Laying the Foundation",

    researchIntro: {
      heading: "Understanding the Brand",
      body:
        "The project started with three parallel activities: a deep study of the new brand manual, a full audit of existing assets, and strategic prioritisation of rollout efforts. Together, these established a clear picture of where the brand stood and what needed to change first.",
    },

    activities: {
      heading: "Research activities",
      items: [
        {
          number: "01",
          text: "Understanding the Brand Manual: Thoroughly analysed E-types' comprehensive brand guidelines covering typography and logo rules to colour palette and photographic style, translating guidelines into actionable frameworks.",
        },
        {
          number: "02",
          text: "Design Audit: Reviewed existing assets — slides, social templates, packaging, and print materials — identifying inconsistencies in visual style and messaging, highlighting where the new brand creates the most impact.",
        },
        {
          number: "03",
          text: "Priorities & Rollout Approach: Prioritised high-impact touchpoints such as company slides, Quick Start guides, and social media branding, balancing urgent business needs, visibility, and user value.",
        },
        {
          number: "04",
          text: "Implementation Plan: Created templates, checklists, and documentation to streamline the asset creation process and enable the wider team to apply the new brand consistently.",
        },
      ] as const,
    },
  },

  define: {
    sectionTitle: "02. Define - Brand Building Blocks",

    buildingBlocks: {
      heading: "Establishing the system",
      body:
        "A comprehensive design system was established to set visual rules for logo usage, colour palette, typography, grid structure, and graphic elements — ensuring consistency across every touchpoint.",
    },

    logoUsage: {
      heading: "Logo usage",
      body:
        "Logo placement rules and clear-space guidelines were documented across different backgrounds and contexts to ensure consistent, high-quality application in all formats.",
      images: [
        "logo-placement-example1.svg",
        "logo-placement-example2.svg",
        "logo-placement-example2-1.svg",
      ] as const,
    },

    logoVariations: {
      heading: "Logo variations",
      body:
        "The full suite of logo lockups and variations — primary, secondary, and icon-only — was documented for use across digital and print contexts.",
      image: "logos-2.svg",
    },

    colorPalette: {
      heading: "Colour palette",
      body:
        "The brand colour system was translated from the E-types manual into production-ready specifications covering primary, secondary, and tonal palettes for both dark and light applications.",
      image: "colors-1.svg",
    },
  },

  implementation: {
    sectionTitle: "03. Implementation - Reaching All Touchpoints",

    reachingTouchpoints: {
      heading: "Bringing the brand to life",
      body:
        "With the design system in place, I moved into production — building templates and assets across every major Rokoko brand touchpoint. Each deliverable was built for flexibility, consistency, and real-world usability by the team.",
    },

    deckTemplate: {
      heading: "Deck template",
      body:
        "A flexible Google Slides template was developed supporting both internal and external use, with seamless switching between dark and light modes. The template ensures consistent storytelling while giving the team enough flexibility to adapt it for any audience.",
      images: ["slides1-1-scaled.jpg", "slides2-scaled.jpg"] as const,
    },

    socialMedia: {
      heading: "Social media branding",
      body:
        "Rokoko's social channels were refreshed across Instagram, Facebook, LinkedIn, and YouTube. The new visual approach enhances community recognition and strengthens engagement, making the platforms a vibrant space where artists and animators connect and learn from each other.",
      images: [
        "some1-scaled.jpg",
        "some2-scaled.jpg",
        "joblistingsrokoko.svg",
        "someprofiles-scaled.jpg",
        "someposts3-1-scaled.jpg",
        "youtubethumbnails-scaled.jpg",
      ] as const,
    },

    emailCommunication: {
      heading: "Email communication",
      body:
        "A streamlined Ortto email template was created prioritising a clear information hierarchy with bold headlines and lively imagery — designed to be easy for the marketing team to update and maintain.",
      image: "emailcommunication-1.jpg",
    },

    headrigPackaging: {
      heading: "Headrig packaging",
      body:
        "Packaging was designed for Rokoko's first product launch under the new brand identity. The design emphasises brand recognition, minimalism, and practicality, focusing on a cohesive unboxing experience that reflects Rokoko's premium position.",
      images: [
        "Headrig_20-copy.jpg",
        "Headrig_21-copy.jpg",
        "Headrig_23-copy.jpg",
        "Headrig_19-copy.jpg",
      ] as const,
    },

    merchandise: {
      heading: "Merchandise",
      body:
        "Branded merchandise — including tote bags and team t-shirts — was created for conventions and events, translating the new brand identity into physical items that Rokoko's community could connect with.",
      images: [
        "20231011_123048.jpg",
        "20231011_123339-1.jpg",
        "IMG_8484-1.jpg",
        "Frame-427322101-1.jpg",
      ] as const,
    },
  },

  reflect: {
    sectionTitle: "04. Reflect - Outcomes & Insights",

    reflectIntro: {
      heading: "Looking back",
      body:
        "The Rokoko rebrand rollout covered dozens of assets across print, digital, packaging, and merchandise — a process that demanded strategic thinking, cross-team collaboration, and consistent quality at every step.",
    },

    lastingImpact: {
      heading: "Lasting impact",
      body:
        "The unified brand system elevated Rokoko's perception in the market, making the company stand out as a creative and trustworthy leader in motion capture technology. Teams gained practical tools for communication and storytelling, supporting smoother internal workflows across every department.",
    },

    whatILearnt: {
      heading: "What I learnt",
      body:
        "This project reinforced the importance of strategy and attention to detail in executing a rebrand across dozens of assets. It required cross-team collaboration, system thinking, and ongoing iteration — building both the assets and the processes to keep the brand consistent as Rokoko continues to grow.",
    },
  },
} as const;

export type RokokoBrandContent = typeof rokokoBrandContent;
