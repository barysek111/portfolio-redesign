export type ShowcaseMedia = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

/** For entries with a custom multi-image layout. `span` maps to flex-[n]. */
export type ShowcaseMediaItem = ShowcaseMedia & { span: number };

export type ProjectShowcaseEntry = {
  meta: string;
  year: string;
  roleLines: readonly string[];
  exploreCopy: string;
  href: string;
  routerLink?: boolean;
  /** Custom multi-image layout — overrides mediaLeft/mediaRight when present. */
  mediaItems?: readonly ShowcaseMediaItem[];
  mediaLeft?: ShowcaseMedia;
  mediaRight?: ShowcaseMedia;
};

/** Split comma-separated role strings into stacked lines (no commas). */
function roleLinesFromCommas(text: string): string[] {
  return text.split(",").map((line) => line.trim()).filter(Boolean);
}

export const PROJECT_SHOWCASE_ENTRIES: readonly ProjectShowcaseEntry[] = [
  {
    meta: "Ageras Website UI/UX Consolidation",
    year: "2025",
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
    mediaItems: [
      { src: "/ageras/agerasshowcase2.jpg", alt: "Ageras dashboard chart UI", span: 2 },
      { src: "/ageras/agerasshowcase1.jpg", alt: "Ageras mobile app — invoice quote flow", span: 3 },
      { src: "/ageras/agerasshowcase3.jpg.jpg", alt: "Ageras careers page on tablet", span: 3 },
    ],
  },
  {
    meta: "Coco Care Interface Design",
    year: "2024",
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
    mediaItems: [
      { src: "/coco-care/cococareshowcase2.jpg", alt: "Coco Care physio dashboard — patient overview", span: 3 },
      { src: "/coco-care/cococareshowcase1.jpg", alt: "Coco Care mobile app — home and pain tracking screens", span: 3 },
      { src: "/coco-care/cococareshowcase3.jpg", alt: "Coco Care web — feature highlights", span: 1 },
    ],
  },
  {
    meta: "Rokoko Website Revamp",
    year: "2023",
    roleLines: roleLinesFromCommas(
      "UX/UI Design, Wireframing & Prototyping, Brand identity, Responsive Web Design, Design Systems",
    ),
    exploreCopy:
      "Redesign of the company's main marketing website, webshop and a helpdesk site.",
    href: "/rokokoweb",
    routerLink: true,
    mediaLeft: {
      src: "/rokoko/rokokowebimg.jpg",
      alt: "Rokoko website — new product modal and sale banner UI",
    },
    mediaRight: {
      src: "/rokoko/rokokowerthumbnailprojectpage-2.jpg",
      alt: "Rokoko website revamp — marketing site and webshop",
    },
  },
  {
    meta: "Rokoko Brand Identity",
    year: "2022",
    roleLines: roleLinesFromCommas(
      "Brand Identity, Merchandising, Design for print, Design systems, Packaging design",
    ),
    exploreCopy:
      "Rebrand of everything from digital experience, SoMe campaigns, email templates, internal branding to print.",
    href: "/rokokobrand",
    routerLink: true,
    mediaItems: [
      { src: "/rokoko-brand/some1-scaled copy.jpg", alt: "Rokoko social media campaigns", span: 2 },
      { src: "/rokoko-brand/rokokobrandthumbnailprojectpage copy.jpg", alt: "Rokoko logo system and typography", span: 3 },
      { src: "/rokoko-brand/Headrig_21-copy copy.jpg", alt: "Rokoko Headrig packaging design", span: 3 },
    ],
  },
  {
    meta: "Weld Website Revamp",
    year: "2021",
    roleLines: roleLinesFromCommas(
      "Brand Identity, Information Architecture, Wireframing, Illustration, Responsive Web Design",
    ),
    exploreCopy:
      "Website information architecture, wireframing, visual identity and illustration for a data SaaS company.",
    href: "/weld",
    routerLink: true,
    mediaLeft: {
      src: "/weld/weld-showcase-left.png",
      alt: "Weld platform — feature highlights on dark background",
    },
    mediaRight: {
      src: "/weld/weldthumbnail2-1.jpg",
      alt: "Weld website and brand identity design",
    },
  },
  {
    meta: "Eat Grim Brand Identity",
    year: "2019–2021",
    roleLines: roleLinesFromCommas(
      "Brand Identity, Design systems, Packaging, Responsive Webdesign, Merchandising, Photography, Illustration",
    ),
    exploreCopy:
      "Brand guidelines and digital+print B2B and B2C presence for a sustainable subscription-based startup.",
    href: "/eatgrim",
    routerLink: true,
    mediaItems: [
      { src: "/eatgrim/showcase2.jpg", alt: "Eat Grim editorial photography — celery in bag", span: 2 },
      { src: "/eatgrim/showcase1.jpg", alt: "Eat Grim website — Mixy box product page on laptop", span: 4 },
      { src: "/eatgrim/showcase3.jpg", alt: "Eat Grim colour system brand guidelines", span: 2 },
    ],
  },
];
