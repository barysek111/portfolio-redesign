import { useEffect, useRef, useState } from "react";
import { SiteTopNav } from "@/components/nav/SiteTopNav";
import { Button } from "@/components/ui/Pill";
import { ChapterIntroIcon } from "@/components/project/CaseChapterIcons";
import type { ChapterIntroId } from "@/components/project/CaseChapterIcons";

const education = [
  { title: "Interaction Design Specialization", institution: "Course by University of California San Diego" },
  { title: "Innovation Through Design", institution: "Course by The University of Sydney" },
  { title: "UX Design Professional Certificate", institution: "Google Career Certificate" },
  { title: "BA in Design & Business — Communication Design", institution: "KEA, Københavns Erhvervsakademi" },
  { title: "Accessibility in UX Design", institution: "Workshop by Siteimprove" },
] as const;

const services: { key: string; icon: ChapterIntroId; title: string; text: string }[] = [
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

const experience = [
  { title: "Digital Brand Designer", meta: "2024–2025, Ageras" },
  { title: "Product Designer", meta: "2023–2024, Coco Care" },
  { title: "Digital Designer", meta: "2022–2023, Rokoko" },
  { title: "Visual Designer", meta: "2021–2022, Weld" },
  { title: "Brand Designer", meta: "2019–2021, Eat Grim" },
  { title: "Designer Intern", meta: "2019, 1508.dk" },
] as const;

// Images are 653×653 (square). At width 58% the window is 58% tall too.
// Safe range: left 0–42%, top 0–42% — nothing clips.
const WINDOWS = [
  { src: "/about/window-1.png", left:  4, top:  3 },
  { src: "/about/window-2.png", left: 33, top:  5 },
  { src: "/about/window-3.png", left: 16, top: 12 },
  { src: "/about/window-4.png", left:  3, top: 28 },
  { src: "/about/window-5.png", left: 36, top: 22 },
  { src: "/about/window-6.png", left: 20, top: 36 },
  { src: "/about/window-7.png", left: 10, top: 20 },
] as const;

function PhotoSlideshow() {
  // Each window gets a monotonically increasing z-index when it's "popped"
  const [zIndexes, setZIndexes] = useState<number[]>(Array(WINDOWS.length).fill(0));
  const counter = useRef(0);
  const slot = useRef(0);

  useEffect(() => {
    const tick = () => {
      const winIdx = slot.current % WINDOWS.length;
      counter.current += 1;
      const z = counter.current;
      setZIndexes(prev => { const n = [...prev]; n[winIdx] = z; return n; });
      slot.current += 1;
    };
    tick();
    const id = setInterval(tick, 300);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", overflow: "hidden" }}>
      {WINDOWS.map((w, i) => (
        <img
          key={w.src}
          src={w.src}
          alt=""
          draggable={false}
          style={{
            position: "absolute",
            width: "58%",
            height: "auto",
            left: `${w.left}%`,
            top: `${w.top}%`,
            zIndex: zIndexes[i],
            opacity: zIndexes[i] > 0 ? 1 : 0,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      ))}
    </div>
  );
}

const EMAIL = "barboragadlinova@gmail.com";

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  function handleCopy() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }
  return (
    <Button variant="dual" left={EMAIL} right={copied ? "copied" : "copy"} onClick={handleCopy} />
  );
}



export function AboutPage() {
  return (
    <main className="case-study min-h-screen overflow-x-hidden antialiased">
      <SiteTopNav />
      <div className="case-page-shell page-shell pb-12 flex flex-col gap-13">

        {/* ── Hi! intro ── */}
        <div className="grid grid-cols-1 gap-07 pt-11 md:grid-cols-12 md:gap-x-03 md:gap-y-07">
          {/* Headline */}
          <div className="md:col-span-6 flex flex-col gap-07">
            <p className="text-h1 m-0 text-foreground">Hey! I'm Barbora</p>
            <p className="about-hero__sub text-h3 m-0" style={{ color: "var(--clay)" }}>A UX/UI Designer with experience crafting intuitive interfaces that solve complex business challenges and make people's lives easier. Skilled in prototyping, with a strong focus on accessibility and user engagement.</p>
          </div>

          {/* Slideshow — right col, spans headline + buttons rows on desktop */}
          <div className="about-hero__slideshow md:col-start-7 md:col-span-6 md:row-span-2 flex justify-center">
            <div style={{ width: "66.667%" }}>
              <PhotoSlideshow />
            </div>
          </div>

          {/* Buttons */}
          <div className="md:col-span-6 flex flex-col gap-03">
            <Button variant="arrow" href="https://www.linkedin.com/in/barboragadlinova/">LinkedIn</Button>
            <CopyEmailButton />
            <Button variant="arrow" href="https://drive.google.com/file/d/1LpCfCp_pGDMXybvYA6mNpW9bz-8PGaUR/view?usp=sharing">View Resume</Button>
          </div>
        </div>

        {/* ── Education & Training ── */}
        <div className="case-editorial-split">
          <h2 className="content-block-label" style={{ fontSize: "var(--text-h2)" }}>Education &amp; Training</h2>
          <div className="flex flex-col gap-04">
            {education.map((item) => (
              <div key={item.title}>
                <p className="text-h4 m-0 text-foreground">{item.title}</p>
                <p className="text-h4 m-0 text-muted-foreground">{item.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Experience ── */}
        <div className="case-editorial-split">
          <h2 className="content-block-label" style={{ fontSize: "var(--text-h2)" }}>Experience</h2>
          <div className="flex flex-col gap-04">
            {experience.map((item) => (
              <div key={item.title}>
                <p className="text-h4 m-0 text-foreground">{item.title}</p>
                <p className="text-h4 m-0 text-muted-foreground">{item.meta}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Services ── */}
        <div className="flex flex-col gap-06">
          <h3 className="text-h2 m-0 text-foreground">Services</h3>
          <div className="case-interview-callouts__row case-interview-callouts__row--3">
            {services.map((item) => (
              <div
                key={item.key}
                className="flex flex-col gap-05 h-full rounded-[18px] p-[18px]"
                style={{ background: "var(--foreground)" }}
              >
                <div
                  style={{
                    color: "var(--card)",
                    filter: "drop-shadow(0 1px 6px rgba(255,255,255,0.18))",
                    alignSelf: "flex-start",
                  }}
                >
                  <ChapterIntroIcon
                    chapterId={item.icon}
                    className="about-service__icon block w-[100px] h-[100px] shrink-0"
                  />
                </div>
                <h5
                  className="m-0 text-h5"
                  style={{ color: "var(--card)" }}
                >
                  {item.title}
                </h5>
                <p
                  className="m-0"
                  style={{
                    color: "var(--card)",
                    fontSize: "var(--text-body)",
                    fontFamily: "var(--font-text)",
                    lineHeight: "125%",
                    letterSpacing: "-0.005em",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </main>
  );
}
