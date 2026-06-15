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

const columnListClass = "divide-y divide-solid divide-foreground/35 px-04";
const columnItemClass = "text-body grid grid-cols-[1fr_auto] items-center gap-06 py-04";
const columnPercentClass = "text-body text-muted-foreground";

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
      <Button variant="static" className="mb-06 inline-flex w-auto shrink-0">
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
