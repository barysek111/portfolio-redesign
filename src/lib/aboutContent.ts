import type { ChapterIntroId } from "@/components/project/CaseChapterIcons";

export const EMAIL = "barboragadlinova@gmail.com";

export const education = [
  { title: "Interaction Design Specialization", institution: "Course by University of California San Diego" },
  { title: "Innovation Through Design", institution: "Course by The University of Sydney" },
  { title: "UX Design Professional Certificate", institution: "Google Career Certificate" },
  { title: "BA in Design & Business — Communication Design", institution: "KEA, Københavns Erhvervsakademi" },
  { title: "Accessibility in UX Design", institution: "Workshop by Siteimprove" },
] as const;

export const experience = [
  { title: "Digital Brand Designer", meta: "2024–2025, Ageras" },
  { title: "Product Designer", meta: "2023–2024, Coco Care" },
  { title: "Digital Designer", meta: "2022–2023, Rokoko" },
  { title: "Visual Designer", meta: "2021–2022, Weld" },
  { title: "Brand Designer", meta: "2019–2021, Eat Grim" },
  { title: "Designer Intern", meta: "2019, 1508.dk" },
] as const;

export const services: { key: string; icon: ChapterIntroId; title: string; text: string }[] = [
  {
    key: "1",
    icon: "research",
    title: "UX Research",
    text: "I run user interviews, usability tests, and journey mapping to make sure design decisions are rooted in what people actually need rather than what seems right in a meeting room.",
  },
  {
    key: "2",
    icon: "define",
    title: "Product Design",
    text: "I take projects from early brief to shipped feature, working closely with PMs and engineers along the way so what gets built is something that genuinely solves the right problem.",
  },
  {
    key: "3",
    icon: "ideate",
    title: "Interface Design",
    text: "I design interfaces that are clear, considered, and visually strong. Every detail is thought through and everything is handed off in a state that is ready to build.",
  },
  {
    key: "4",
    icon: "prototype",
    title: "Prototyping",
    text: "I turn early concepts into interactive prototypes in Figma so flows, interactions, and edge cases can be tested and refined before any code gets written.",
  },
  {
    key: "5",
    icon: "test",
    title: "Accessibility",
    text: "I treat accessibility as part of the design process from the start. WCAG principles are built in by default and I have completed dedicated training in inclusive design.",
  },
  {
    key: "6",
    icon: "launch",
    title: "Design Systems",
    text: "I build component libraries that give teams a shared language to work from. The goal is always something consistent and scalable that people actually enjoy using.",
  },
];

// Images are 653×653 (square). At width 58% the window is 58% tall too.
// Safe range: left 0–42%, top 0–42% — nothing clips.
export const WINDOWS = [
  { src: "/about/window-1.png", left:  4, top:  3 },
  { src: "/about/window-2.png", left: 33, top:  5 },
  { src: "/about/window-3.png", left: 16, top: 12 },
  { src: "/about/window-4.png", left:  3, top: 28 },
  { src: "/about/window-5.png", left: 36, top: 22 },
  { src: "/about/window-6.png", left: 20, top: 36 },
  { src: "/about/window-7.png", left: 10, top: 20 },
] as const;
