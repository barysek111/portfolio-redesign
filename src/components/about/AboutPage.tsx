import { useEffect, useState } from "react";
import { motion } from "motion/react";
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

const slideshowImages = [
  "/about/photo-1.jpg",
  "/about/photo-2.jpg",
  "/about/photo-3.jpg",
  "/about/photo-4.jpg",
  "/about/photo-5.jpg",
  "/about/photo-6.jpg",
  "/about/photo-7.jpg",
  "/about/photo-8.jpg",
  "/about/photo-9.jpg",
] as const;

function PhotoSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % slideshowImages.length);
    }, 500);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", overflow: "hidden", borderRadius: 0 }}>
      {slideshowImages.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: i === current ? 1 : 0,
            transition: "none",
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

const focusItems = [
  "Product Design",
  "User Research",
  "UI Design",
  "Design Systems",
  "Prototyping",
  "Information Architecture",
  "Usability Testing",
  "Accessibility",
  "Journey Mapping",
  "Visual Identity",
] as const;

const toolItems = [
  { label: "Figma", percent: "95%" },
  { label: "FigJam", percent: "95%" },
  { label: "Claude", percent: "60%" },
  { label: "Notion", percent: "90%" },
  { label: "Cursor", percent: "75%" },
  { label: "Illustrator", percent: "85%" },
  { label: "Photoshop", percent: "80%" },
  { label: "InDesign", percent: "80%" },
] as const;

const columnListClass = "divide-y-2 divide-solid divide-border";
const columnItemClass = "text-h4 grid grid-cols-[1fr_auto] items-center gap-06 py-04";
const columnPercentClass = "text-h4 text-muted-foreground";

function CountUpPercent({ value, delay = 0 }: { value: string; delay?: number }) {
  const target = Number.parseInt(value, 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const start = performance.now();
      const duration = 1100 + delay * 0.25;
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(target * eased));
        if (progress < 1) window.requestAnimationFrame(tick);
      };
      window.requestAnimationFrame(tick);
    }, delay);
    return () => window.clearTimeout(timeout);
  }, [delay, target]);

  return <span className={columnPercentClass}>{count}%</span>;
}

function AboutHowIWork() {
  return (
    <section className="flex flex-col gap-04">
      <motion.div
        className="how-i-work-grid items-stretch"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* How I Work intro — 6 cols */}
        <motion.div
          className="how-i-work-span-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="min-w-0 pr-13">
            <p className="case-hero-intro-body m-0" style={{ color: "var(--muted-foreground)", fontSize: "var(--text-h2)" }}>
              How I Work
            </p>
            <p className="case-hero-intro-body m-0" style={{ color: "var(--ink)", fontSize: "var(--text-h2)" }}>
              Areas of expertise and tools I use.
            </p>
          </div>
        </motion.div>

        {/* Focus — 3 cols */}
        <motion.div
          className="how-i-work-span-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="min-w-0">
            <Button variant="static" className="inline-flex w-auto shrink-0">Focus</Button>
            <div className="p-03">
              <motion.div
                className={columnListClass}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {focusItems.map((label) => (
                  <div key={label} className={columnItemClass}>
                    <span className="text-muted-foreground">{label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Tools — 3 cols */}
        <motion.div
          className="how-i-work-span-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="min-w-0">
            <Button variant="static" className="inline-flex w-auto shrink-0">Tools</Button>
            <div className="p-03">
              <motion.div
                className={columnListClass}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {toolItems.map((item, index) => (
                  <div key={item.label} className={columnItemClass}>
                    <span className="text-muted-foreground">{item.label}</span>
                    <CountUpPercent value={item.percent} delay={180 + index * 115} />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}


export function AboutPage() {
  return (
    <main className="case-study min-h-screen overflow-x-hidden antialiased">
      <SiteTopNav />
      <div className="case-page-shell page-shell pb-12 flex flex-col gap-13">

        {/* ── Hi! intro ── */}
        <div className="grid grid-cols-12 gap-x-03 pt-11 items-center">
          {/* Left 6 cols: bio + links */}
          <div className="col-span-6 flex flex-col gap-07">
            <p className="text-h2 m-0 text-foreground">
              Hey! I'm Barbora<span style={{ color: "var(--clay)" }}>, a UX/UI Designer with experience crafting intuitive interfaces that solve complex business challenges and make people's lives easier. Skilled in prototyping, with a strong focus on accessibility and user engagement.</span>
            </p>
            <div className="flex flex-col gap-03">
              <Button variant="arrow" href="https://www.linkedin.com/in/barboragadlinova/">LinkedIn</Button>
              <CopyEmailButton />
              <Button variant="arrow" href="https://drive.google.com/file/d/1LpCfCp_pGDMXybvYA6mNpW9bz-8PGaUR/view?usp=sharing">View Resume</Button>
            </div>
          </div>

          {/* Right 6 cols: slideshow at 4 cols centered */}
          <div className="col-span-6 flex justify-center">
            <div style={{ width: "66.667%" }}>
              <PhotoSlideshow />
            </div>
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
                    className="block w-[100px] h-[100px] shrink-0"
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

        {/* ── How I work ── */}
        <AboutHowIWork />

      </div>
    </main>
  );
}
