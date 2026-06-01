import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type RefObject } from "react";
import { motion } from "motion/react";
import ageras from "@/assets/projects/ageras.jpg";
import cococare from "@/assets/projects/cococare.jpg";
import rokoko from "@/assets/projects/rokoko.jpg";
import weld from "@/assets/projects/weld.jpg";
import InteractiveLetter3D from "@/components/home/InteractiveLetter3D";

const caseStudies = [
  {
    year: "2025",
    title: "Ageras",
    subtitle:
      "Consolidating multiple product websites into one cohesive digital interface while transitioning to a unified brand identity for a fintech SaaS suite.",
    role: "UX/UI Design · User Flows · Wireframing & Prototyping · Usability Testing · Brand Identity",
    tags: ["Web", "Design System", "Fintech"],
    timeline: "1 yr 3 mo",
    contributions: "Wireframes, sitemaps, responsive UI, scalable design system",
    img: ageras,
  },
  {
    year: "2024",
    title: "Coco Care",
    subtitle:
      "Design of user interface for an AI-driven motion capture tool for physiotherapy rehabilitation — mobile app and web portal.",
    role: "UX & UI · Design System · User Flows · Prototyping · Usability Testing",
    tags: ["Product", "Healthcare", "Mobile"],
    timeline: "1 yr",
    contributions: "Patient app, physio portal, flows, prototypes, usability testing",
    img: cococare,
    projectHref: "/project/cococare",
  },
  {
    year: "2023",
    title: "Rokoko Website Revamp",
    subtitle:
      "Complete website redesign for a motion capture company — marketing site, knowledge base, and e-commerce across three distinct platforms.",
    role: "UX/UI Design · Wireframing & Prototyping · Brand Identity · Web Design · Design Systems",
    tags: ["Web", "Brand", "Design System"],
    timeline: "11 mo",
    contributions: "Marketing site, webshop, helpdesk IA, UI system",
    img: rokoko,
  },
  {
    year: "2022",
    title: "Rokoko Brand",
    subtitle:
      "Comprehensive rebrand rollout translating a new visual identity across all digital and physical brand touchpoints for a motion capture technology company.",
    role: "Brand Identity · Print Design · Design Systems · Packaging",
    tags: ["Brand", "Print", "Identity"],
    timeline: "11 mo",
    contributions: "Digital rollout, social campaigns, email, internal brand, print",
    img: null,
  },
  {
    year: "2021",
    title: "Weld",
    subtitle:
      "Website information architecture, wireframing, visual identity and illustration for a next-generation data SaaS platform.",
    role: "Brand Identity · Information Architecture · Wireframing · Illustration · Web Design",
    tags: ["Web", "Brand", "SaaS"],
    timeline: "5 mo",
    contributions: "Information architecture, wireframes, visual identity, illustration",
    img: weld,
  },
  {
    year: "2019-2021",
    title: "Eat Grim",
    subtitle:
      "Brand identity, packaging design, responsive website and visual system for a sustainable food subscription service that rescued cosmetically imperfect produce.",
    role: "Brand Identity · Packaging · Responsive Web · Photography · Illustration",
    tags: ["Brand", "Packaging", "Web"],
    timeline: "2 yr 1 mo",
    contributions: "Brand identity, packaging, responsive website, photography, illustration",
    img: null,
  },
] as const;

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

const displayHeadingClass = "intro-blur-text text-h1";

export default function AiDesignHomepage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <InteractiveLetter3D letter="B" />
      <motion.div
        className="mx-auto w-full max-w-[1180px] px-4 pb-32 md:px-6 md:pb-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Hero />
        <HowIWork />
        <WorkGrid />
        <Footer />
      </motion.div>
    </main>
  );
}

function Nav() {
  return (
    <header className="nav-blur-shell fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <nav className="relative z-10 flex items-center gap-1 rounded-full border border-foreground/15 bg-background/70 p-1 text-body backdrop-blur-xl">
        {[
          ["How", "#how"],
          ["Work", "#work"],
          ["Contact", "#contact"],
        ].map(([label, href]) => (
          <a key={label} href={href} className="nav-item">
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative max-w-[820px] pt-24 md:pt-32">
      <p className="intro-blur-text text-h1 text-left">
        <span className="text-foreground">Barbora Gadlinova</span>
        <span className="text-muted-foreground">
          {" "}
          is a product designer crafting intuitive digital interfaces for the future of{" "}
        </span>
        <span className="text-foreground">tech</span>
        <span className="text-muted-foreground"> and </span>
        <span className="text-foreground">lifestyle</span>
        <span className="text-muted-foreground">, with a focus on accessibility and user engagement.</span>
      </p>
    </section>
  );
}

function WorkGrid() {
  return (
    <section id="work" className="pt-32 md:pt-48">
      <header className="mb-16 max-w-[720px] border-t border-foreground/35 pt-10 md:mb-20 md:pt-12">
        <p className="text-xs mb-5 uppercase tracking-[0.08em] text-muted-foreground">Selected work</p>
        <h2 className={displayHeadingClass}>Case studies</h2>
        <p className="text-body mt-6 max-w-[540px] text-muted-foreground">
          Product and brand systems shaped through research, structure, prototyping, and careful interface direction.
        </p>
      </header>

      <ol className="flex list-none flex-col gap-24 p-0 md:gap-32">
        {caseStudies.map((study, index) => (
          <li key={study.title}>
            <SelectedWorkCard study={study} index={index} />
          </li>
        ))}
      </ol>
    </section>
  );
}

function SelectedWorkCard({
  study,
  index,
}: {
  study: (typeof caseStudies)[number];
  index: number;
}) {
  const projectHref = "projectHref" in study ? study.projectHref : undefined;

  const media = (
    <motion.div
      className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-lg)] bg-surface md:aspect-[5/3]"
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {study.img ? (
        <motion.img
          src={study.img}
          alt=""
          className="h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-0"
        />
      ) : (
        <motion.div
          className="flex h-full min-h-[240px] items-center justify-center bg-[radial-gradient(circle_at_30%_25%,var(--surface),var(--background)_62%)] text-xs uppercase tracking-[0.08em] text-muted-foreground"
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Brand · packaging · web
        </motion.div>
      )}
      {projectHref ? (
        <Link
          to={projectHref}
          className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:opacity-100"
        >
          <span className="rounded-full bg-background/55 px-4 py-2 text-xs uppercase tracking-[0.08em] text-foreground backdrop-blur-xl">
            View project
          </span>
        </Link>
      ) : null}
    </motion.div>
  );

  return (
    <article className="group">
      <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-foreground/35 pb-4">
        <span className="text-xs tabular-nums uppercase tracking-[0.08em] text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
        <span className="text-xs tabular-nums uppercase tracking-[0.08em] text-muted-foreground">{study.year}</span>
      </div>

      {media}

      <div className="mt-8 max-w-[680px] md:mt-10">
        <h3 className="intro-blur-text text-h2">{study.title}</h3>
        <p className="text-body mt-4 text-muted-foreground">
          {study.subtitle}
        </p>
      </div>

      <dl className="text-body mt-8 grid w-full gap-5 border-t border-foreground/35 pt-8 text-muted-foreground md:grid-cols-2 md:gap-x-12">
        <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
          <dt className="text-xs mb-2 uppercase tracking-[0.08em]">Role</dt>
          <dd>{study.role}</dd>
        </motion.div>
        <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
          <dt className="text-xs mb-2 uppercase tracking-[0.08em]">Output</dt>
          <dd>{study.contributions}</dd>
        </motion.div>
      </dl>

      <ul className="mt-6 flex list-none flex-wrap gap-2 p-0" aria-label={`${study.title} tags`}>
        {study.tags.map((tag) => (
          <li key={tag}>
            <span className="tag-pill">{tag}</span>
          </li>
        ))}
        <li>
          <span className="tag-pill">{study.timeline}</span>
        </li>
      </ul>
    </article>
  );
}

function HowIWork() {
  const focusListRef = useRef<HTMLDivElement>(null);
  const [mapHeight, setMapHeight] = useState<number | null>(null);

  useEffect(() => {
    const el = focusListRef.current;
    if (!el) return;

    const update = () => setMapHeight(el.offsetHeight);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how" className="pt-16 md:pt-24">
      <h2 className={`${displayHeadingClass} mb-12 text-right`}>How I work</h2>
      <motion.div
        className="grid gap-10 md:grid-cols-2 md:items-start"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div className="min-w-0 overflow-hidden" style={mapHeight != null ? { height: mapHeight } : undefined}>
          <PrinciplesMap className={mapHeight != null ? "h-full" : "aspect-[1.28]"} />
        </motion.div>
        <motion.div
          className="grid min-w-0 gap-10 sm:grid-cols-2 sm:items-start"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <CapabilityColumn title="Focus" items={focusItems.map((label) => ({ label }))} listRef={focusListRef} />
          <CapabilityColumn title="Tools" items={toolItems} useCountUp />
        </motion.div>
      </motion.div>
    </section>
  );
}

function PrinciplesMap({ className = "aspect-[1.28]" }: { className?: string }) {
  const centerLabel = "principles";
  const centerWidth = centerLabel.length * 7.2 + 20;
  const center = { x: 52, y: 196, w: centerWidth, h: 28 };
  const boxes = [
    { text: "keep the system flexible", x: 170, y: 40 },
    { text: "be proven wrong", x: 392, y: 36 },
    { text: "ship with care", x: 300, y: 92 },
    { text: "never assume", x: 174, y: 130 },
    { text: "progress over polish", x: 370, y: 150 },
    { text: "design for trust", x: 214, y: 205 },
    { text: "measure what matters", x: 376, y: 234 },
    { text: "prioritise people over features", x: 150, y: 300 },
    { text: "prototype fast", x: 404, y: 318 },
    { text: "build solid foundation", x: 244, y: 370 },
  ];
  const profiles = [
    { x: [0, 14, -8, 10, 0], y: [0, -10, -4, 8, 0], duration: 12.5, delay: -2.3 },
    { x: [0, -5, 4, -3, 0], y: [0, 4, -5, 6, 0], duration: 22, delay: -9.1 },
    { x: [0, 8, -13, 6, 0], y: [0, 12, -6, -10, 0], duration: 15.5, delay: -5.8 },
    { x: [0, -4, 7, -6, 0], y: [0, -6, 3, 5, 0], duration: 18.5, delay: -12.4 },
    { x: [0, 11, 3, -9, 0], y: [0, 5, -11, 7, 0], duration: 13.25, delay: -7.7 },
    { x: [0, -9, 12, 4, 0], y: [0, -4, 9, -8, 0], duration: 17, delay: -3.2 },
    { x: [0, 5, -4, 7, 0], y: [0, 7, -3, -5, 0], duration: 24, delay: -14.6 },
    { x: [0, -12, 6, -8, 0], y: [0, 9, 11, -6, 0], duration: 14, delay: -1.5 },
    { x: [0, 4, -7, 5, 0], y: [0, -3, 6, -4, 0], duration: 20.5, delay: -10.2 },
    { x: [0, 13, -5, 9, 0], y: [0, -8, 10, 4, 0], duration: 16.25, delay: -6.4 },
  ];
  const measuredBoxes = boxes.map((box, index) => {
    const width = box.text.length * 7.2 + 20;
    const height = 28;
    const profile = profiles[index % profiles.length];

    return {
      ...box,
      profile,
      width,
      height,
      lineStartX: center.x + center.w,
      lineStartY: center.y + center.h / 2,
      lineEndX: box.x + width / 2,
      lineEndY: box.y + height / 2,
    };
  });

  return (
    <div className={`relative overflow-hidden border border-foreground/35 bg-background/40 ${className}`}>
      <svg viewBox="0 0 560 438" className="h-full w-full overflow-hidden" aria-label="Principles map">
        <rect x="0.5" y="0.5" width="559" height="437" fill="transparent" />
        <g>
          <rect x={center.x} y={center.y} width={center.w} height={center.h} fill="var(--foreground)" />
          <text
            x={center.x + center.w / 2}
            y={center.y + 20}
            fill="var(--background)"
            fontSize="15"
            fontWeight="600"
            fontFamily="var(--font-sans)"
            textAnchor="middle"
            className="svg-blur-text svg-blur-text-strong"
          >
            {centerLabel}
          </text>
        </g>

        <g>
          {measuredBoxes.map((box) => (
            <motion.line
              key={`line-${box.text}`}
              x1={box.lineStartX}
              y1={box.lineStartY}
              x2={box.lineEndX}
              y2={box.lineEndY}
              animate={{ x2: box.profile.x.map((x) => box.lineEndX + x), y2: box.profile.y.map((y) => box.lineEndY + y) }}
              transition={{ duration: box.profile.duration, delay: box.profile.delay, repeat: Infinity, ease: "easeInOut" }}
              stroke="var(--foreground)"
              strokeOpacity="0.65"
              strokeWidth="1"
            />
          ))}
        </g>

        <g>
          {measuredBoxes.map((box) => (
            <motion.g
              key={box.text}
              animate={{ x: box.profile.x, y: box.profile.y }}
              transition={{ duration: box.profile.duration, delay: box.profile.delay, repeat: Infinity, ease: "easeInOut" }}
            >
              <rect x={box.x} y={box.y} width={box.width} height={box.height} fill="var(--background)" stroke="var(--foreground)" strokeWidth="1.2" />
              <text x={box.x + 9} y={box.y + 19} fill="var(--foreground)" fontSize="14" fontWeight="400" fontFamily="var(--font-sans)">
                {box.text}
              </text>
            </motion.g>
          ))}
        </g>
      </svg>
    </div>
  );
}

const columnLabelClass =
  "text-xs uppercase tracking-[0.08em] text-muted-foreground";
const columnRowDividerClass = "border-b border-solid border-foreground/35";
const columnTopDividerClass = "border-t border-solid border-foreground/35";
const columnItemClass =
  "text-h4 grid grid-cols-[1fr_auto] items-center gap-6 py-3";
const columnPercentClass = "text-body text-foreground";

function CapabilityColumn({
  title,
  items,
  useCountUp = false,
  listRef,
}: {
  title: string;
  items: ReadonlyArray<{ label: string; percent?: string }>;
  useCountUp?: boolean;
  listRef?: RefObject<HTMLDivElement | null>;
}) {
  const renderRow = (item: { label: string; percent?: string }, index: number) => (
    <div key={item.label} className={`${columnItemClass} ${columnRowDividerClass}`}>
      <span className="intro-blur-text text-foreground">{item.label}</span>
      {item.percent ? (
        useCountUp ? (
          <CountUpPercent value={item.percent} delay={180 + index * 115} />
        ) : (
          <span className={columnPercentClass}>{item.percent}</span>
        )
      ) : null}
    </div>
  );

  return (
    <div className="relative">
      <h3 className={`absolute -top-6 left-0 ${columnLabelClass}`}>{title}</h3>
      <motion.div
        ref={listRef}
        className={columnTopDividerClass}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {items.map((item, index) => renderRow(item, index))}
      </motion.div>
    </div>
  );
}

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

function Footer() {
  return (
    <footer id="contact" className="mt-32 border-t border-foreground/35 pt-12 md:mt-40 md:pt-16">
      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
        <motion.div
          className="max-w-[640px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs mb-5 uppercase tracking-[0.08em] text-muted-foreground">Contact</p>
          <p className={displayHeadingClass}>
            Designing clear systems for messy digital futures.
          </p>
        </motion.div>
        <nav className="text-body grid content-end gap-2 md:min-w-[140px]" aria-label="Contact links">
          <a href="mailto:hello@example.com" className="footer-link">
            Email
          </a>
          <a href="https://www.linkedin.com" className="footer-link">
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
