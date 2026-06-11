/**
 * Coco Care case study — copy and image paths.
 * Layout/spacing: src/components/project/cococare/chapters/*.tsx (per chapter)
 */

export const cocoCareAssetFolder = "coco-care_assets" as const;

/** Image filenames referenced in coco-care.html (jpg, png, svg). */
export const cocoCareImages = [
  "appmap-fysio-admin.svg",
  "1.svg",
  "2.svg",
  "3.svg",
  "4.svg",
  "ARROWDOWN-1-1.svg",
  "Design-System-1-scaled.jpg",
  "Design-System-2-1-scaled.jpg",
  "Group-427323035.svg",
  "Group-427323036.svg",
  "prioritized-features.svg",
  "Prototype.svg",
  "Screenshot-2025-08-24-at-16.01.06.png",
  "Screenshot-2025-08-24-at-16.01.17.png",
  "Slide-16_9-1-scaled.jpg",
  "Test.svg",
  "Wireframesmobileapp1-scaled.svg",
  "Wireframesmobileapp2-scaled.svg",
  "define.svg",
  "hi-fidelity-mobilescreen1.jpg",
  "hi-fidelity-mobilescreen4.svg",
  "hi-fidelity-mobilescreens2.svg",
  "hi-fidelity-mobilescreens3.svg",
  "hi-fidelity-mobilescreens5-1.svg",
  "hi-fidelity-mobilescreens6-new.svg",
  "hi-fidelity-portalscreen1.svg",
  "hi-fidelity-portalscreen2-1.svg",
  "hi-fidelity-portalscreen3-2.svg",
  "hi-fidelity-portalscreen4-1.svg",
  "hi-fidelity-portalscreen5-1.svg",
  "ideate.svg",
  "interview-findings.png",
  "interview-questions.png",
  "key-user-needs.svg",
  "project-goals.svg",
  "research-1.svg",
  "revision1.svg",
  "revision2.svg",
  "revision3.svg",
  "sitemapsdesktopapp-scaled.svg",
] as const;

export const cocoCareContent = {
  hero: {
    /** No separate hero h1 in saved HTML; title from <title> / breadcrumb. */
    title: "Coco Care",
    subtitle:
      "Designing user interface for Coco Care web app and mobile app, an AI-driven motion capture tool for physio rehabilitation.",
    backLink: "Back",
    metadata: {
      client: { label: "Client", value: "Coco Care" },
      year: { label: "Year", value: "2024" },
      role: {
        label: "My role",
        items: [
          "UX & UI",
          "Design System",
          "User Flows",
          "Prototyping",
          "Usability Testing",
        ],
      },
      tools: {
        label: "Tools",
        items: ["Figma", "Figjam", "Linear"],
      },
      field: {
        label: "Field",
        items: ["SaaS", "Health tech", "Mobile app"],
      },
    },
    heroImage: "Slide-16_9-1-scaled.jpg",
    heroImageAlt: "Coco Care hero showing the patient mobile app and physiotherapist web portal",
  },

  projectBackground: {
    heading: "Project Background",
    body:
      "Coco Care is a digital physiotherapy solution that helps patients access personalized, evidence-based rehabilitation at home through an intuitive app. I designed the patient and physio experience and set the foundation for scheduling, exercise tracking and many more functions to boost engagement, compliance, and recovery outcomes.",
  },

  theChallenge: {
    heading: "The Challenge",
    intro:
      "Patients often struggle with motivation and consistency in physiotherapy. Clinics face high dropout rates and limited insight into patients' progress at home. Coco Care aims to:",
    /** Single <p> in source HTML — bullets concatenated without line breaks. */
    bulletsRaw:
      "- Make digital rehabilitation accessible, clear and user-friendly.- Enable physios to track patient progress and personalize plans.- Increase patient engagement and compliance.",
    bullets: [
      "Make digital rehabilitation accessible, clear and user-friendly.",
      "Enable physios to track patient progress and personalize plans.",
      "Increase patient engagement and compliance.",
    ],
  },

  tableOfContents: {
    heading: "Table of Contents",
    links: ["Research", "Define", "Ideate", "Prototype", "Test"] as const,
  },

  research: {
    sectionTitle: "01. Research - Exploring the User's Needs",
    sectionIcon: "research-1.svg",

    overview: {
      heading: "Overview",
      items: ["STAKEHOLDER & USER INTERVIEWS", "USER PERSONAS"] as const,
    },

    researchIntro: {
      heading: "Research Intro",
      body:
        "To ground the project in real user needs, I combined qualitative and exploratory research methods. I conducted targeted interviews with both patients and physiotherapists to capture firsthand insights, crafted personas to crystallize user motivations and pain points, and mapped key user flows to visualize the rehabilitation journey. This approach helped uncover practical challenges while guiding design decisions with empathy and evidence.",
    },

    stakeholderInterviews: {
      heading: "Stakeholder & User Interviews",
      body:
        "To better understand user needs and pain points, I began the project by conducting qualitative interviews with both physiotherapists and patients actively involved in rehabilitation. These conversations provided valuable context about daily routines, common challenges, and communication habits, enabling me to uncover patterns that would shape the direction of the product. The goal was to identify barriers to successful home-based rehab and opportunities for designing a more supportive, motivating digital experience.",
      images: ["interview-questions.png", "interview-findings.png"] as const,
    },

    userPersonas: {
      heading: "User Personas",
      body:
        "Personas in this project are concise, realistic profiles representing our main user groups, patients and physiotherapists. They are based on insights from targeted interviews and typical user behaviors observed in digital health solutions. These personas helped anchor the Coco Care design process in real-world needs and guided feature prioritization at every stage.",
      images: ["persona-jonas.svg", "persona-alice.svg"] as const,
    },
  },

  define: {
    sectionTitle: "02. Define - Turning insights into actions",
    sectionIcon: "define.svg",

    overview: {
      heading: "Overview",
      items: [
        "PROBLEM STATEMENT",
        "HOW MIGHT WE",
        "USER NEEDS & FEATURE PRIORITIZATION",
        "SUCCESS METRICS & UX GOALS",
        "PROJECT GOALS",
      ] as const,
    },

    definingNextSteps: {
      heading: "Defining Next Steps",
      body:
        "Building on the research findings, this chapter refines the project’s direction by identifying core challenges and setting clear objectives. Here, user insights are translated into actionable problem statements, prioritized features, and measurable goals, shaping a focused design strategy going forward.",
    },

    problemStatement: {
      heading: "Problem Statement",
      body:
        "Research revealed that patients often struggle to stay motivated and consistent with their home rehabilitation programs. Many forget their exercises or are uncertain if they are performing them correctly, leading to lower engagement and incomplete recoveries. Physiotherapists, meanwhile, need quicker ways to assign programs, track progress, and provide timely feedback for large caseloads. The central design challenge was to bridge these gaps by creating a digital solution that is accessible, motivating, and supportive for patients, while equipping physios with efficient, real-time management and monitoring tools.",
    },

    howMightWe: {
      heading: "Main design goals",
      questions: [
        {
          number: "01",
          text: "How might we enable physiotherapists to quickly assign, monitor, and adjust treatment plans for multiple patients with ease?",
        },
        {
          number: "02",
          text: "How might we help patients consistently complete their home rehab exercises with greater motivation and confidence?",
        },
        {
          number: "03",
          text: "How might we provide both patients and physios with clear, engaging feedback and reminders that support ongoing progress and communication?",
        },
      ] as const,
    },

    userNeeds: {
      items: [
        {
          image: "key-user-needs.svg",
          title: "Key User Needs",
          caption:
            "Based on interviews and research, I identified the key needs of both patients and physiotherapists. Patients require simple guidance, motivation through progress feedback, and easy communication. Physiotherapists need efficient tools for program creation, monitoring, and edits.",
        },
        {
          image: "prioritized-features.svg",
          title: "Prioritized Features",
          caption:
            "These insights helped prioritize features that balance ease of use for patients with management capabilities for admins.",
        },
      ] as const,
    },

    successMetrics: {
      items: [
        {
          image: "success-metrics.svg",
          title: "Success Metrics",
          caption:
            "To ensure the project delivers real value, I defined clear success metrics and user experience goals from the outset.",
        },
        {
          image: "ux-goals.svg",
          title: "UX Goals",
          caption:
            "These criteria provided a measurable framework to guide design decisions and evaluate the impact post-launch.",
        },
      ] as const,
    },

    projectGoals: {
      image: "project-goals.svg",
      title: "Project goals",
      caption:
        "Before heading on to finding ideas for a solution, I mapped out the business goals, user goals, and technical considerations.",
    },
  },

  ideate: {
    sectionTitle: "03. Ideate - Generating Solutions",
    sectionIcon: "ideate.svg",

    overview: {
      heading: "Overview",
      items: [
        "SITEMAP",
        "INFORMATION ARCHITECTURE",
        "USER FLOWS",
        "WIREFRAMES",
      ] as const,
    },

    fromStructureToConcepts: {
      /** Source heading includes trailing U+FEFF after "Concepts". */
      heading: "From Structure to Concepts\uFEFF",
      body:
        "The ideation phase focuses on brainstorming, mapping out user journeys, and visualizing how key features will come together. Here, initial concepts are turned into wireframes and flows that set the stage for rapid prototyping and user validation.",
    },

    sitemap: {
      heading: "Sitemap",
      body:
        "The sitemap for the portal provides an overview of the platform’s structure and key navigation paths. It outlines how physios access and manage core features, such as creating and editing programs, viewing and updating patient information, and monitoring exercise progress.",
      items: [
        {
          image: "1.svg",
          title: "App map - admin view",
        },
        {
          image: "2.svg",
          title: "App map - Fysio view",
        },
      ] as const,
    },

    informationArchitecture: {
      heading: "Information Architecture",
      body:
        "This information architecture diagram outlines the overall structure and relationships within the Coco Care platform for both patients and physiotherapists. By visualizing key user roles, modules, and the flow of critical actions like onboarding, program assignment, and exercise management. It ensured clarity and alignment across the team.",
      images: ["3.svg", "4.svg"] as const,
    },

    userFlows: {
      heading: "User Flows",
      body:
        "Next, I mapped out the user flow, focusing on the onboarding of new users and in-app exercise flow.These user flow diagrams visualize the main paths for patients navigating the Coco Care app, from initial onboarding to completing daily training sessions.",
      images: ["Group-427323036.svg", "Group-427323035.svg"] as const,
    },

    wireframes: {
      heading: "Wireframes",
      body:
        "These wireframes illustrate the key patient-facing screens for the mobile app. The wireframes present detailed views of essential elements such as dashboard cards, activity tracking, pain score inputs, settings, and real-time exercise instructions. Two alternative dashboard concepts were explored to compare how patients could best view their daily progress, goals, and motivation boosters right from the home screen, ensuring clarity and ease of use.",
      images: [
        "Wireframesmobileapp1-scaled.svg",
        "Wireframesmobileapp2-scaled.svg",
      ] as const,
    },
  },

  prototype: {
    sectionTitle: "04. Prototype - Bringing Ideas to Life",
    sectionIcon: "Prototype.svg",

    overview: {
      heading: "Overview",
      items: ["DESIGN SYSTEM", "HIGH FIDELITY PROTOTYPE"] as const,
    },

    translatingConcepts: {
      heading: "Translating Concepts into Usable Designs",
      body:
        "This chapter transforms early ideas and flows into high-fidelity prototypes. By establishing a robust design system and refining visuals, we shaped consistent, user-focused screens ready for testing and stakeholder feedback.",
    },

    designSystem: {
      heading: "Design System",
      body:
        "The design system establishes a unified visual language and consistent interaction patterns across the entire platform. It defines reusable components, color palettes, typography, and interface states, ensuring every element supports usability, accessibility, and a seamless user experience. This foundation allowed for rapid prototyping and efficient collaboration throughout the product’s evolution.",
      images: [
        "Design-System-1-scaled.jpg",
        "Design-System-2-1-scaled.jpg",
      ] as const,
    },

    highFidelity: {
      heading: "High Fidelity Prototype",
      intro:
        "After creating a comprehensive UI kit, I then designed high fidelity frames ready to be tested and gather user feedback. In the case of this project, there was no need for interactive figma prototype, since I was asked to deliver a documented implementation-ready frames for the developers to execute. User testing was conducted using the app’s staging version, allowing for real-world feedback on implemented designs.",

      mobileApp: {
        sectionLabel: "I. Mobile App",
        screens: [
          { image: "hi-fidelity-mobilescreen1.jpg" },
          { heading: "Pre-Training Flow", image: "hi-fidelity-mobilescreens2.svg" },
          { heading: "Training Flow", image: "hi-fidelity-mobilescreens3.svg" },
          { heading: "Post-Training Flow", image: "hi-fidelity-mobilescreen4.svg" },
          {
            heading: "App screens: Exercises, Chat, Profile",
            image: "hi-fidelity-mobilescreens5-1.svg",
          },
          { heading: "Settings Flow", image: "hi-fidelity-mobilescreens6-new.svg" },
        ] as const,
      },

      desktopPortal: {
        sectionLabel: "Desktop portal",
        screens: [
          {
            image: "hi-fidelity-portalscreen1.svg",
          },
          {
            image: "hi-fidelity-portalscreen2-1.svg",
            heading: "Patient Page",
            caption:
              "Overview on one patient’s data: compliance, SMART goal score, pain development, activity history",
          },
          {
            image: "hi-fidelity-portalscreen3-2.svg",
            heading: "Program Builder",
            caption:
              "Create a new program for patient - Drag’n’drop editor: filter exercises by muscle, search by name, set reps and sets",
          },
          {
            image: "hi-fidelity-portalscreen4-1.svg",
            heading: "Active Program",
            caption:
              "Patient’s active program, Frequency, Note, Chosen exercises (difficulty, image preview, reps, sets, average compliance)",
          },
          {
            image: "hi-fidelity-portalscreen5-1.svg",
            heading: "Goals",
            caption:
              "Here physio is able to see patient's current goal and progress, set a new SMART goal, history of previous goals",
          },
        ] as const,
      },
    },
  },

  test: {
    sectionTitle: "05. Test",
    sectionIcon: "Test.svg",

    overview: {
      heading: "Overview",
      items: ["USABILITY TESTING", "PRIORITY REVISIONS"] as const,
    },

    definingNextSteps: {
      heading: "Defining Next Steps",
      body:
        "This chapter documents the process of validating Coco Care’s designs through hands-on user testing and feedback. By observing real users complete essential tasks and analyzing data, this phase ensured that solutions were intuitive, usable, and aligned with the needs of patients and physiotherapists.",
    },

    usabilityTesting: {
      heading: "Usability Testing",
      intro:
        "I ran unmoderated usability tests with six target users, three patients and three physiotherapists, focusing on key scenarios like app onboarding and completing a daily exercise flow. Participants were given tasks such as registering, setting up goals, starting a training session, and entering progress details.",

      scenarios: [
        {
          heading: "Scenario 1",
          body:
            "Complete the onboarding flow after downloading the app, including entering basic info and setting rehabilitation goals.",
        },
        {
          heading: "Scenario 2",
          body:
            "Navigate and complete the daily exercise routine from initial instructions through pain logging and feedback.",
        },
      ] as const,

      trackedMetrics: {
        heading: "Tracked Metrics",
        bodyRaw:
          "Time on Task: How long users took to complete each step.Success Rate: Whether users finished the main flows without intervention.Error Rate: Mistakes or points where users hesitated.Satisfaction: Post-task ratings on task satisfaction and clarity.Ease of Use: User-reported ratings for intuitiveness on a 1–5 scale.",
        items: [
          "Time on Task: How long users took to complete each step.",
          "Success Rate: Whether users finished the main flows without intervention.",
          "Error Rate: Mistakes or points where users hesitated.",
          "Satisfaction: Post-task ratings on task satisfaction and clarity.",
          "Ease of Use: User-reported ratings for intuitiveness on a 1 to 5 scale.",
        ],
      },

      successCriteria: {
        heading: "Success Criteria",
        bodyRaw:
          "1. Users complete onboarding in under 3 minutes, error-free.2. The exercise flow is completed by all users without external assistance.3. At least 80% rate their experience as 4 or above for satisfaction and ease of use.",
        items: [
          "1. Users complete onboarding in under 3 minutes, error-free.",
          "2. The exercise flow is completed by all users without external assistance.",
          "3. At least 80% rate their experience as 4 or above for satisfaction and ease of use.",
        ],
      },

      conclusion: {
        heading: "Conclusion",
        body:
          "Feedback was positive across both groups, with users especially appreciating clear instructions and intuitive navigation. Some requested even more dashboard visual cues and reminders, which were incorporated into the next design iteration to further boost compliance and satisfaction.",
      },
    },

    priorityRevisions: {
      heading: "Priority Revisions",
      items: [
        "Simplifying labels: \"PSFS Score\" was changed to \"Progress Score\" and \"Compliance\" to \"Completed Sessions\" in all patient-facing instances. This makes the app more accessible to users with varying levels of digital literacy and medical knowledge.",
        "Add rehabilitation overview: Feedback from one of the physios and one of the users suggested that it might be useful for the patient to see an overview of their whole rehabilitation program and be able to scroll through their goals history. After consulting this with the Product Manager, I made a prototype screen of it ready for the next upcoming test session.",
        "Visually enhance in-training elements: Based on majority of user's feedback, I made training flow elements even more prominent with larger sizing. This is crucial as during training flow, user only sees their phone and the feedback or cues on screen from a significant distance. I made those elements as brief and large as possible.",
      ] as const,
      images: ["revision1.svg", "revision3.svg", "revision2.svg"] as const,
    },
  },
} as const;

export type CocoCareContent = typeof cocoCareContent;
