import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ContentPill } from "@/components/home/ContentPill";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { SiteTopNav } from "@/components/nav/SiteTopNav";

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

export default function Homepage() {
  return (
    <main className="case-study case-study--home min-h-screen overflow-x-hidden antialiased">
      <SiteTopNav />
      <section id="about" className="page-shell py-13">
        <HeroIntro />
      </section>
      <motion.div
        className="case-page-shell page-shell pb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <HowIWork />
        <ProjectShowcase />
      </motion.div>
    </main>
  );
}

function HeroIntro() {
  return (
    <h1 className="hero-intro">
      <span className="hero-intro-emphasis">Barbora</span>
      <span className="hero-intro-muted"> Gadlinova is a product </span>
      <span className="hero-intro-emphasis">designer</span>
      <span className="hero-intro-muted"> crafting intuitive digital interfaces for the </span>
      <span className="hero-intro-emphasis">future</span>
      <span className="hero-intro-muted">
        {" "}
        of tech and lifestyle, with a focus on accessibility and user engagement.
      </span>
    </h1>
  );
}

function HowIWork() {
  return (
    <section id="services">
      <h2 className="text-h1 mb-09 text-left text-foreground">How I work</h2>
      <motion.div
        className="nav-top-grid grid w-full items-stretch"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="how-i-work-span-6 overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="h-full w-full min-h-[320px] rounded-[var(--radius-lg)] bg-[var(--surface)]" />
        </motion.div>
        <motion.div
          className="how-i-work-span-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <CapabilityColumn title="Focus" items={focusItems.map((label) => ({ label }))} />
        </motion.div>
        <motion.div
          className="how-i-work-span-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <CapabilityColumn title="Tools" items={toolItems} useCountUp />
        </motion.div>
      </motion.div>
    </section>
  );
}

const PRINCIPLE_PILL_HEIGHT = 32;
const PRINCIPLE_PILL_PADDING = 12;
const PRINCIPLE_PILL_FONT_SIZE = 16;
const PRINCIPLE_CHAR_WIDTH = 8.2;

function PrinciplePill({
  x,
  y,
  width,
  height = PRINCIPLE_PILL_HEIGHT,
  fill,
  stroke,
  strokeWidth,
}: {
  x: number;
  y: number;
  width: number;
  height?: number;
  fill: string;
  stroke?: string;
  strokeWidth?: number;
}) {
  const radius = height / 2;
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={radius}
      ry={radius}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  );
}

const PRINCIPLES_MAP_VIEW = 560;

function PrinciplesMap({ className = "aspect-square w-full" }: { className?: string }) {
  const centerLabel = "principles";
  const centerWidth = centerLabel.length * PRINCIPLE_CHAR_WIDTH + PRINCIPLE_PILL_PADDING * 2;
  const centerHeight = PRINCIPLE_PILL_FONT_SIZE + PRINCIPLE_PILL_PADDING * 2;
  const center = { x: 52, y: 196, w: centerWidth, h: centerHeight };
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
    const width = box.text.length * PRINCIPLE_CHAR_WIDTH + PRINCIPLE_PILL_PADDING * 2;
    const height = PRINCIPLE_PILL_HEIGHT;
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

  const contentTop = Math.min(center.y, ...measuredBoxes.map((box) => box.y));
  const contentBottom = Math.max(
    center.y + center.h,
    ...measuredBoxes.map((box) => box.y + box.height),
  );
  const contentOffsetY = Math.round((PRINCIPLES_MAP_VIEW - (contentBottom - contentTop)) / 2 - contentTop);

  return (
    <div className={`relative overflow-hidden bg-[var(--case-callout-bg)] ${className}`}>
      <svg
        viewBox={`0 0 ${PRINCIPLES_MAP_VIEW} ${PRINCIPLES_MAP_VIEW}`}
        className="h-full w-full overflow-hidden"
        aria-label="Principles map"
      >
        <rect width={PRINCIPLES_MAP_VIEW} height={PRINCIPLES_MAP_VIEW} fill="transparent" />
        <g transform={`translate(0 ${contentOffsetY})`}>
        <g>
          <PrinciplePill
            x={center.x}
            y={center.y}
            width={center.w}
            height={center.h}
            fill="var(--foreground)"
          />
          <text
            x={center.x + center.w / 2}
            y={center.y + center.h / 2}
            fill="var(--background)"
            style={{ fontSize: "var(--text-h5)" }}
            fontWeight="400"
            fontFamily="var(--font-sans)"
            textAnchor="middle"
            dominantBaseline="central"
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
              stroke="var(--muted-foreground)"
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
              <PrinciplePill
                x={box.x}
                y={box.y}
                width={box.width}
                height={box.height}
                fill="var(--card)"
              />
              <text
                x={box.x + PRINCIPLE_PILL_PADDING}
                y={box.y + PRINCIPLE_PILL_HEIGHT / 2}
                fill="var(--muted-foreground)"
                style={{ fontSize: "var(--text-h5)" }}
                fontWeight="400"
                fontFamily="var(--font-sans)"
                dominantBaseline="central"
              >
                {box.text}
              </text>
            </motion.g>
          ))}
        </g>
        </g>
      </svg>
    </div>
  );
}

/** Match .nav-pill horizontal padding so list text and dividers align with pill label. */
const columnListClass =
  "divide-y divide-solid divide-foreground/35 px-04";
const columnItemClass =
  "text-body grid grid-cols-[1fr_auto] items-center gap-06 py-04";
const columnPercentClass = "text-body text-foreground";

function CapabilityColumn({
  title,
  items,
  useCountUp = false,
}: {
  title: string;
  items: ReadonlyArray<{ label: string; percent?: string }>;
  useCountUp?: boolean;
}) {
  const renderRow = (item: { label: string; percent?: string }, index: number) => (
    <div key={item.label} className={columnItemClass}>
      <span className="text-foreground">{item.label}</span>
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
    <div className="min-w-0">
      <ContentPill isStatic className="mb-06 inline-flex w-auto shrink-0 justify-center">
        <h3 className="nav-pill__label m-0 font-normal">{title}</h3>
      </ContentPill>
      <motion.div
        className={columnListClass}
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
