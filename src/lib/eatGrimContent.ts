/**
 * Eat Grim case study — copy and image paths.
 * Layout/spacing: src/components/project/eatgrim/chapters/*.tsx (per chapter)
 */

export const eatGrimAssetFolder = "eatgrim" as const;

export const eatGrimContent = {
  hero: {
    title: "Eat Grim Brand Identity",
    subtitle:
      "Eat Grim changes the way people think about food by celebrating diversity in shape, size, and colour — creating real impact for farmers, consumers, and the planet.",
    metadata: {
      client: { label: "Client", value: "Eat Grim" },
      year: { label: "Year", value: "2019–2021" },
      role: {
        label: "My role",
        items: [
          "Brand Identity",
          "Design systems",
          "Packaging",
          "Responsive Web Design",
          "Merchandising",
          "Photography",
          "Illustration",
        ],
      },
      tools: {
        label: "Tools",
        items: ["Figma", "Illustrator", "Photoshop", "InDesign"],
      },
      field: {
        label: "Field",
        items: ["Brand Identity", "Sustainability", "E-commerce"],
      },
    },
    heroImage: "eatgrimpagethumbnail-1.jpg",
    heroImageAlt: "Eat Grim — brand identity, packaging, photography and website design for a sustainable food startup",
  },

  projectBackground: {
    heading: "Project Background",
    body:
      "Eat Grim is a Copenhagen-based startup dedicated to fighting food waste by rescuing 'ugly' and surplus fruits and vegetables — produce that would otherwise be discarded because of appearance or overproduction. Through a box subscription model, Eat Grim delivers fresh, organic produce directly from European farms to people's doors, making it easy to eat more sustainably.",
  },

  theChallenge: {
    heading: "The Challenge",
    intro:
      "As Brand Designer, illustrator, and photographer, I shaped Eat Grim's visual identity and voice across every touchpoint — from logo and packaging to emails, website, and merchandise. The goal was to:",
    bullets: [
      "Create a brand that not only stood out but sparked real conversations about food waste and sustainability.",
      "Build a cohesive visual language across packaging, photography, digital, and physical collateral.",
      "Grow a passionate subscriber community — over the two-year collaboration, Eat Grim reached 2,500+ regular subscribers.",
    ],
  },

  tableOfContents: {
    heading: "Table of Contents",
    links: ["Research", "Define", "Design", "Launch"] as const,
  },

  research: {
    sectionTitle: "01. Research - Understanding the Market",

    researchIntro: {
      heading: "Laying the foundation",
      body:
        "To lay a solid foundation for Eat Grim's brand and design, a deep dive into the Danish food delivery and subscription market was conducted — analysing competitors and industry trends shaping consumer behaviour.",
    },

    competitiveAnalysis: {
      heading: "Competitive market analysis",
      body:
        "This analysis helped identify what competitors offer, their strengths, and opportunities for differentiation — especially in areas like packaging, branding, and sustainability messaging. Key findings revealed Eat Grim's unique positioning through its playful branding and focus on 'ugly' produce, setting it apart from meal kit services like HelloFresh and Aarstiderne, and from surplus-food rescue apps like Too Good To Go.",
      image: "Competitive-maket-analysis-2.jpg",
    },

    stakeholderInsights: {
      heading: "Stakeholder insights",
      body:
        "Conversations were held with the two founders, the Marketing Manager, Customer Success Manager, and Head of Operations. Their perspectives provided a well-rounded view of brand aspirations and practical needs — highlighting the importance of bold and playful branding that celebrates imperfect produce, transparency, sustainability, and building a community of eco-conscious consumers.",
    },
  },

  define: {
    sectionTitle: "02. Define - Clarifying Needs & Strategy",

    definingNextSteps: {
      heading: "Defining next steps",
      body:
        "This chapter outlines the strategy that shaped Eat Grim's design direction. By distilling insights from customer types and focusing on clear, actionable deliverables, the team set the stage for building a brand and product that reflect the values and priorities of the target audience.",
    },

    userPersonas: {
      heading: "User personas",
      body:
        "Personas help bring key Eat Grim customers to life by showcasing their habits, needs, and motivations. By outlining different customer types, the team could focus on real-world preferences and pain points — ensuring each design and communication choice resonates with the people most likely to use and love the service.",
      images: [
        "User-Persona4.jpg",
        "User-Persona1-1.jpg",
        "User-Persona2-1.jpg",
      ] as const,
    },

    customerNeeds: {
      heading: "Customer needs & focus points",
      body:
        "Understanding what matters most to Eat Grim's customers helped focus the design and product strategy. The visualisation highlights key user needs — healthy options, flexible subscriptions, and provided recipes — alongside common pain points and the prioritised steps taken to address them.",
      images: [
        "eatgrim-needsnpainpoints.png",
        "eatgrim-priorities.png",
      ] as const,
    },

    designGoals: {
      heading: "Design goals & deliverables",
      items: [
        {
          number: "I",
          text: "Cohesive and unified brand identity: Developing a unique visual language that connects all touchpoints — from logo, typeface, colour palette, and defined style of photography and illustration — ensuring instant recognition and memorability.",
        },
        {
          number: "II",
          text: "New packaging design for three box sizes: Creating functional, bold packaging that communicates the story and values of the brand while protecting a variety of produce.",
        },
        {
          number: "III",
          text: "A responsive website design that converts and reflects the brand: Designing a visually engaging site that highlights the brand mission and achievements, and drives sign-ups for subscriptions.",
        },
        {
          number: "IV",
          text: "Visual guidelines and templates for e-mail marketing, social media content, and B2B communication: Defining ready-to-use templates and rules ensuring consistent style and tone across newsletters, social posts, and professional outreach.",
        },
        {
          number: "V",
          text: "A library of branded content: Building a collection of photos, videos, animations, illustrations, and icons to support marketing and reinforce the brand's personality.",
        },
      ] as const,
    },
  },

  design: {
    sectionTitle: "03. Design - Bringing the Brand to Life",

    buildingBrand: {
      heading: "Building a recognisable brand",
      body:
        "The Eat Grim brand stands out with bold colours, quirky visuals, and a playful tone. From logo to packaging, every detail was crafted to be eye-catching and approachable — celebrating the beauty of 'ugly' produce while creating instant recognition both online and offline. Consistency across materials helped build trust and excitement, making the brand memorable at every touchpoint.",
    },

    brandIdentity: {
      heading: "Brand identity",
      body:
        "The Eat Grim logo and toolkit combine bold, earthy colours, a playful typeface, and the recognisable 'wonky' fruit symbol. This cohesive identity reflects the brand's values: celebrating imperfection, embracing sustainability, and making food waste a fun conversation starter.",
      overviewImage: "Screenshot-brand-overview.png",
      assetImages: [
        "asset-10.jpg",
        "asset-9.jpg",
        "asset-8.jpg",
        "asset-14.jpg",
        "asset-12.jpg",
      ] as const,
    },

    packaging: {
      heading: "Packaging",
      body:
        "Each box was designed for practicality and to spark curiosity upon arrival — featuring bold visuals, educational snippets, and a friendly tone. The packaging invites customers to discover where their food comes from, why it might look quirky, and why that's worth celebrating.",
      images: [
        "Untitled-3-07.jpg",
        "Untitled-3-08.jpg",
        "Untitled-3-10.jpg",
        "Group-427323113.jpg",
      ] as const,
    },

    contentCreation: {
      heading: "Content creation",
      body:
        "Vibrant photography and custom illustrations bring the brand's mission to life by showcasing the beauty of misshapen fruits and veggies. Social media, newsletters, and campaigns are packed with delicious images, behind-the-scenes stories, and playful animations.",
      images: [
        "packing-action123.jpg",
        "hero-with-hand-on-beige-2-copy.jpg",
        "packing-action124-1.jpg",
        "aubergine-on-yellow.jpg",
        "carrot-pepper-orange-on-blue-vertical-1.jpg",
        "halloween-2020-51-1.jpg",
        "easter-2021-112-1.jpg",
        "halloween-2020-63.jpg",
        "2021-05-13-salad.jpg",
        "carrot-pepper-orange-on-red-copy.jpg",
      ] as const,
    },

    merchandise: {
      heading: "Merch & collateral",
      body:
        "A rich library of content — from stickers, tote bags, and posters to email templates and social media graphics — makes sure Eat Grim's personality shines at every touchpoint, from Instagram to the customer's doorstep.",
      images: [
        "merch-screenshot1.jpg",
        "romaine-lettuce-grid.jpg",
        "merch-screenshot2.jpg",
        "fb-ig-shop-family.jpg",
        "merch-screenshot3.jpg",
        "merch-screenshot4.jpg",
        "merch-screenshot5.jpg",
        "animation1.gif",
        "IMG_2884.jpg",
        "animation2.gif",
        "merch-screenshot6.jpg",
        "merch-screenshot7.jpg",
        "Frame-427323107.jpg",
        "Frame-427323106.jpg",
        "Frame-427323108.jpg",
      ] as const,
    },

    website: {
      heading: "Website",
      body:
        "The responsive website balances conversion-focused UI with visual storytelling and quirky microcopy. Users can easily learn about Eat Grim's impact, subscribe for deliveries, and find creative ways to use their 'imperfect' produce.",
      images: [
        "eatgrimwebsite1.jpg",
        "eatgrimwebsite2.jpg",
        "eatgrimwebsite3-1.jpg",
      ] as const,
    },

    emailMarketing: {
      heading: "Email marketing",
      body:
        "Weekly newsletters and updates were designed to feel like personal notes from the Eat Grim universe — friendly, upbeat, and packed with helpful content. Each campaign blended tasty visuals, seasonal tips, recipes, and brand storytelling to keep subscribers engaged.",
      image: "eatgrimemailcommunication-1.jpg",
    },
  },

  launch: {
    sectionTitle: "04. Launch - Delivery & Launch",

    growingMovement: {
      heading: "Growing the movement",
      body:
        "Since the rebrand, Eat Grim attracted thousands of passionate subscribers, sparked a national conversation about food waste, and turned playful, punchy design into real-world impact for farmers, food lovers, and the planet.",
    },

    handover: {
      heading: "Implementation & handover",
      body:
        "All design assets — from brand guidelines and templates to final print files — were prepared to ensure a smooth handoff to the Eat Grim team and their partners. Clear documentation and easy-to-use resources made it simple for the brand to stay consistent and adaptable as it continued to grow and evolve.",
    },

    results: {
      heading: "Reception & results",
      body:
        "Eat Grim turned curious customers into passionate advocates through social media, events, and creative partnerships. By using fun storytelling, striking imagery, and empowering messaging, the brand inspired thousands to rethink food waste and join a more sustainable way of eating.",
      images: [
        "Frame-427323096.jpg",
        "Frame-427323099.jpg",
        "Frame-427323090-1.jpg",
        "Frame-427323100.jpg",
        "Frame-427323085-1.jpg",
        "Frame-427323086-1.jpg",
        "Frame-427323092.jpg",
        "Frame-427323097.jpg",
        "Frame-427323089.jpg",
        "Frame-427323087.jpg",
        "Frame-427323091.jpg",
        "Frame-427323093.jpg",
      ] as const,
    },
  },
} as const;

export type EatGrimContent = typeof eatGrimContent;
