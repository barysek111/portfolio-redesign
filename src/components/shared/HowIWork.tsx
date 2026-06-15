import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Pill";

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

const nodes = [
  { x: 30, y: 14, label: "keep the system flexible" },
  { x: 62, y: 16, label: "be proven wrong" },
  { x: 80, y: 28, label: "ship with care" },
  { x: 32, y: 36, label: "never assume" },
  { x: 60, y: 40, label: "progress over polish" },
  { x: 78, y: 48, label: "design for trust" },
  { x: 34, y: 62, label: "measure what matters" },
  { x: 68, y: 64, label: "prioritise people" },
  { x: 30, y: 84, label: "prototype fast" },
  { x: 62, y: 86, label: "solid foundation" },
];
const center = { x: 12, y: 50 };

function PrinciplesMap() {
  return (
    <div className="relative w-full overflow-hidden border border-border bg-surface aspect-[4/3]">
      {/* SVG viewBox 0 0 100 100 + preserveAspectRatio="none" stretches x/y independently,
          so SVG coordinate (n.x, n.y) maps exactly to CSS left: n.x%, top: n.y% */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {nodes.map((n, i) => (
          <line
            key={i}
            x1={center.x} y1={center.y}
            x2={n.x} y2={n.y}
            stroke="var(--foreground)"
            strokeWidth="0.15"
            opacity="0.3"
          />
        ))}
      </svg>

      <div
        className="absolute -translate-y-1/2 rounded-full bg-foreground px-04 py-03 text-s font-medium text-background"
        style={{ left: "4%", top: "50%" }}
      >
        principles
      </div>

      {nodes.map((n, i) => (
        <div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-border bg-background px-04 py-03 text-s text-foreground transition-transform duration-300 hover:scale-[1.04]"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          {n.label}
        </div>
      ))}
    </div>
  );
}

const columnListClass = "divide-y divide-solid divide-foreground/20";
const columnItemClass = "text-s grid grid-cols-[1fr_auto] items-center py-03 px-04";
const columnPercentClass = "text-s text-muted-foreground";

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
      <span className="text-muted-foreground">{item.label}</span>
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
      <Button variant="static" className="inline-flex w-auto shrink-0">
        {title}
      </Button>
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

export function HowIWork() {
  return (
    <section className="flex flex-col gap-04">
      <h2 className="text-h3 text-left text-foreground">How I work</h2>
      <motion.div
        className="how-i-work-grid items-stretch"
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
          <PrinciplesMap />
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
