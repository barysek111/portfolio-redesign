export type ShowcaseMedia = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type ImgLayout = "2 3 3" | "3 3 2" | "2 6" | "2 4 2" | "4 4";

export type ProjectShowcaseEntry = {
  meta: string;
  year: string;
  roleLines: readonly string[];
  exploreCopy: string;
  href: string;
  routerLink?: boolean;
  layout: ImgLayout;
  images: readonly ShowcaseMedia[];
};

function roleLinesFromCommas(text: string): string[] {
  return text.split(",").map((line) => line.trim()).filter(Boolean);
}

export const PROJECT_SHOWCASE_ENTRIES: readonly ProjectShowcaseEntry[] = [
  {
    meta: "Powermatch Invoice Reconciliation",
    year: "2025",
    layout: "2 6",
    images: [
      { src: "/powermatch/pw4.jpg", alt: "Powermatch — reconcile action card" },
      { src: "/powermatch/powermatch1.jpg", alt: "Powermatch — invoice reconciliation dashboard on tablet" },
    ],
    roleLines: [
      "UX Research",
      "UX & UI Design",
      "Component System",
      "User Flows",
      "Dev Handoff",
    ],
    exploreCopy:
      "Designing an invoice reconciliation feature. Replacing a fragmented cross-tool workflow with a flow for matching payments to invoices.",
    href: "/powermatch",
    routerLink: true,
  },
  {
    meta: "Ageras Website UI/UX Consolidation",
    year: "2025",
    layout: "2 3 3",
    images: [
      { src: "/ageras/agerasshowcase2.jpg", alt: "Ageras dashboard chart UI" },
      { src: "/ageras/agerasshowcase1.jpg", alt: "Ageras mobile app — invoice quote flow" },
      { src: "/ageras/agerasshowcase3.jpg.jpg", alt: "Ageras careers page on tablet" },
    ],
    roleLines: [
      "UX/UI Design",
      "User Flows",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Brand identity",
      "Engineer Collaboration",
    ],
    exploreCopy:
      "End-to-end website redesign across four markets, from wireframes and sitemaps to a final UI. Building the foundation for a comprehensive, responsive and scalable design system.",
    href: "/ageras",
    routerLink: true,
  },
  {
    meta: "Coco Care Interface Design",
    year: "2024",
    layout: "2 3 3",
    images: [
      { src: "/coco-care/cococareshowcase3.jpg", alt: "Coco Care web — feature highlights" },
      { src: "/coco-care/cococareshowcase2.jpg", alt: "Coco Care physio dashboard — patient overview" },
      { src: "/coco-care/cococareshowcase1.jpg", alt: "Coco Care mobile app — home and pain tracking screens" },
    ],
    roleLines: [
      "UX/UI Design",
      "User Interviews",
      "Wireframing & Prototyping",
      "Usability Testing",
      "Engineer Collaboration",
    ],
    exploreCopy:
      "A digital physiotherapy platform designed to help patients recover at home and enable physiotherapists to track progress. I designed both the mobile app and web portal from user flows to interface details.",
    href: "/cococare",
    routerLink: true,
  },
  {
    meta: "Rokoko Website Revamp",
    year: "2023",
    layout: "2 6",
    images: [
      { src: "/rokoko/rokokowebimg.jpg", alt: "Rokoko website — new product modal and sale banner UI" },
      { src: "/rokoko/rokokowerthumbnailprojectpage-2.jpg", alt: "Rokoko website revamp — marketing site and webshop" },
    ],
    roleLines: roleLinesFromCommas(
      "UX/UI Design, Wireframing & Prototyping, Brand identity, Responsive Web Design, Design Systems",
    ),
    exploreCopy:
      "Redesign of the company's main marketing website, webshop and a helpdesk site.",
    href: "/rokokoweb",
    routerLink: true,
  },
  {
    meta: "Rokoko Brand Identity",
    year: "2022",
    layout: "2 3 3",
    images: [
      { src: "/rokoko-brand/some1-scaled copy.jpg", alt: "Rokoko social media campaigns" },
      { src: "/rokoko-brand/rokokobrandthumbnailprojectpage copy.jpg", alt: "Rokoko logo system and typography" },
      { src: "/rokoko-brand/Headrig_21-copy copy.jpg", alt: "Rokoko Headrig packaging design" },
    ],
    roleLines: roleLinesFromCommas(
      "Brand Identity, Merchandising, Design for print, Design systems, Packaging design",
    ),
    exploreCopy:
      "Rebrand of everything from digital experience, SoMe campaigns, email templates, internal branding to print.",
    href: "/rokokobrand",
    routerLink: true,
  },
  {
    meta: "Weld Website Revamp",
    year: "2021",
    layout: "2 6",
    images: [
      { src: "/weld/weld-showcase-left.png", alt: "Weld platform — feature highlights on dark background" },
      { src: "/weld/weldthumbnail2-1.jpg", alt: "Weld website and brand identity design" },
    ],
    roleLines: roleLinesFromCommas(
      "Brand Identity, Information Architecture, Wireframing, Illustration, Responsive Web Design",
    ),
    exploreCopy:
      "Website information architecture, wireframing, visual identity and illustration for a data SaaS company.",
    href: "/weld",
    routerLink: true,
  },
  {
    meta: "Eat Grim Brand Identity",
    year: "2019–2021",
    layout: "2 3 3",
    images: [
      { src: "/eatgrim/showcase2.jpg", alt: "Eat Grim editorial photography — celery in bag" },
      { src: "/eatgrim/showcase1.jpg", alt: "Eat Grim website — Mixy box product page on laptop" },
      { src: "/eatgrim/showcase3.jpg", alt: "Eat Grim colour system brand guidelines" },
    ],
    roleLines: roleLinesFromCommas(
      "Brand Identity, Design systems, Packaging, Responsive Webdesign, Merchandising, Photography, Illustration",
    ),
    exploreCopy:
      "Brand guidelines and digital+print B2B and B2C presence for a sustainable subscription-based startup.",
    href: "/eatgrim",
    routerLink: true,
  },
];
