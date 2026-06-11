import { cn } from "@/lib/utils";
import { InterviewCalloutBoard } from "@/components/project/InterviewCalloutBoard";
import { CalloutStack } from "@/components/project/CalloutStack";
import {
  useLayoutEffect,
  useRef,
  type ReactElement,
  type ReactNode,
  type RefObject,
} from "react";

type StickyColor = "white" | "yellow" | "green";

const KEY_USER_NEEDS = {
  patients: [
    "Easy-to-follow, step-by-step guidance for exercises.",
    "Clear feedback and progress tracking to see improvements over time.",
    "Reminders and motivational messages to support adherence.",
    "Quick communication with their physiotherapist when needed.",
  ],
  physios: [
    "Fast workflows to assign and update training plans.",
    "Integration with clinical documentation systems.",
    "Automated—not manual—reminder and follow-up features.",
    "Dashboards to monitor multiple patients' compliance and pain scores.",
  ],
} as const;

const PRIORITIZED_FEATURES = [
  "Real-time chat between physios and patients.",
  "In-app, push, and SMS reminders to maximize adherence.",
  "Easy data export and integration options for physiotherapists.",
  "Visual daily dashboard for patients showing progress, task completion, and upcoming sessions.",
  "Modular templates and batch-edit tools for physios to streamline program management.",
  "Comprehensive compliance and pain tracking, filterable by time and user.",
] as const;

const SUCCESS_METRICS = [
  "Reduce the number of 'lost-to-follow-up' patients by 15%.",
  "Increase patient program compliance rate by at least 20% within the first six months after launch.",
  "Achieve ≥85% satisfaction scores on post-interaction surveys for both patients and physios.",
  "Decrease physio admin time per patient by 25%.",
] as const;

const UX_GOALS = [
  "Ensure onboarding and daily tasks can be completed without outside help by users across age and tech-confidence levels.",
  "Make exercise flows intuitive, even for users with limited digital skills or accessibility needs.",
  "Provide physios with actionable insights and easy navigation, enabling fast, informed care decisions.",
  "Deliver feedback, reminders, and support in the channels each user prefers, reducing cognitive load.",
] as const;

const UX_GOAL_HEADLINES = [
  "Onboarding",
  "Intuitive",
  "Insights",
  "Channels",
] as const;

const INTERVIEW_QUESTIONS = [
  "What are your biggest challenges in home-based rehab?",
  "How easy is it to follow or adjust training plans?",
  "What motivates (or demotivates) you to complete exercises?",
  "How do you track your recovery progress today?",
  "How do you prefer to communicate with your physio?",
  "Can you describe a time you stopped your rehab program early? Why?",
] as const;

const INTERVIEW_FINDINGS = [
  "Patients forget their exercises or are unsure if they're doing them correctly.",
  "Progress tracking is unclear or missing, lowering motivation.",
  "Physios want more efficient ways to assign, update, and monitor training plans.",
  "Both groups requested better reminders and feedback loops.",
] as const;

const INTERVIEW_FINDING_HEADLINES = [
  "Consistency",
  "Transparency",
  "Speed",
  "Reminders",
] as const;

const STICKY_NOTE_BOARD_FILES = {
  "key-user-needs.svg": "key-user-needs",
  "prioritized-features.svg": "prioritized-features",
  "success-metrics.svg": "success-metrics",
  "ux-goals.svg": "ux-goals",
  "interview-questions.png": "interview-questions",
  "interview-findings.png": "interview-findings",
} as const;

type StickyNoteBoardId =
  (typeof STICKY_NOTE_BOARD_FILES)[keyof typeof STICKY_NOTE_BOARD_FILES];

function useEqualStickyNoteHeights(
  containerRef: RefObject<HTMLElement | null>,
  enabled = true,
) {
  useLayoutEffect(() => {
    if (!enabled) return;

    const container = containerRef.current;
    if (!container) return;

    let frame = 0;

    const equalize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const notes =
          container.querySelectorAll<HTMLElement>(".case-sticky-note");
        if (!notes.length) return;

        container.removeAttribute("data-note-heights-equalized");
        container.style.removeProperty("--sticky-note-equal-height");

        let maxHeight = 0;
        notes.forEach((note) => {
          maxHeight = Math.max(maxHeight, note.getBoundingClientRect().height);
        });

        if (maxHeight <= 0) return;

        container.style.setProperty(
          "--sticky-note-equal-height",
          `${Math.ceil(maxHeight)}px`,
        );
        container.setAttribute("data-note-heights-equalized", "true");
      });
    };

    equalize();

    const resizeObserver = new ResizeObserver(equalize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
    };
  }, [containerRef, enabled]);
}

function StickyNoteBoardShell({
  className,
  children,
  equalizeHeights = false,
}: {
  className?: string;
  children: ReactNode;
  equalizeHeights?: boolean;
}) {
  const boardRef = useRef<HTMLDivElement>(null);
  useEqualStickyNoteHeights(boardRef, equalizeHeights);

  return (
    <div ref={boardRef} className={cn("case-sticky-board", className)}>
      {children}
    </div>
  );
}

function StickyNote({
  color,
  children,
  className,
}: {
  color: StickyColor;
  children: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "case-sticky-note",
        `case-sticky-note--${color}`,
        className,
      )}
    >
      <p>{children}</p>
    </div>
  );
}

function StickyNoteGrid({
  notes,
  color,
  columns,
  className,
}: {
  notes: readonly string[];
  color: StickyColor;
  columns: 2 | 3 | 4;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "case-sticky-board__grid",
        columns === 2 && "case-sticky-board__grid--2",
        columns === 3 && "case-sticky-board__grid--3",
        columns === 4 && "case-sticky-board__grid--4",
        className,
      )}
    >
      {notes.map((note) => (
        <StickyNote key={note} color={color}>
          {note}
        </StickyNote>
      ))}
    </div>
  );
}

function KeyUserNeedsBoard() {
  return (
    <StickyNoteBoardShell className="case-sticky-board--key-user-needs">
      <div className="case-sticky-board__group">
        <h6 className="case-sticky-board__label">Patients:</h6>
        <StickyNoteGrid notes={KEY_USER_NEEDS.patients} color="white" columns={2} />
      </div>
      <div className="case-sticky-board__group">
        <h6 className="case-sticky-board__label">Physios:</h6>
        <StickyNoteGrid notes={KEY_USER_NEEDS.physios} color="yellow" columns={2} />
      </div>
    </StickyNoteBoardShell>
  );
}

function PrioritizedFeaturesBoard() {
  return (
    <StickyNoteBoardShell className="case-sticky-board--prioritized-features">
      <StickyNoteGrid
        notes={PRIORITIZED_FEATURES}
        color="green"
        columns={4}
      />
    </StickyNoteBoardShell>
  );
}

/** Same card stack as InterviewCalloutBoard `stack-hero` (Key Interview Findings). */
function StackedCalloutBoard({
  items,
  headlines,
  highlightMetricValues = false,
}: {
  items: readonly string[];
  headlines?: readonly string[];
  highlightMetricValues?: boolean;
}) {
  return (
    <div className="case-interview-callouts">
      <CalloutStack
        items={items.map((text, index) => ({
          key: headlines?.[index] ? `${headlines[index]}-${text}` : text,
          text,
          title: headlines?.[index],
        }))}
        highlightMetricValues={highlightMetricValues}
      />
    </div>
  );
}

function SuccessMetricsBoard() {
  return (
    <StackedCalloutBoard
      items={SUCCESS_METRICS}
      highlightMetricValues
    />
  );
}

function UxGoalsBoard() {
  return (
    <StackedCalloutBoard items={UX_GOALS} headlines={UX_GOAL_HEADLINES} />
  );
}

function InterviewQuestionsBoard() {
  return (
    <InterviewCalloutBoard
      title="Interview Questions"
      items={INTERVIEW_QUESTIONS}
      layout="grid-3"
    />
  );
}

function InterviewFindingsBoard() {
  return (
    <InterviewCalloutBoard
      title="Key Interview Findings"
      items={INTERVIEW_FINDINGS}
      headlines={INTERVIEW_FINDING_HEADLINES}
      layout="stack-hero"
    />
  );
}

export function InterviewCalloutsSection() {
  return (
    <div className="case-subsection-stack case-subsection-stack--64 w-full">
      <InterviewQuestionsBoard />
      <InterviewFindingsBoard />
    </div>
  );
}

const BOARD_COMPONENTS: Record<StickyNoteBoardId, () => ReactElement> = {
  "key-user-needs": KeyUserNeedsBoard,
  "prioritized-features": PrioritizedFeaturesBoard,
  "success-metrics": SuccessMetricsBoard,
  "ux-goals": UxGoalsBoard,
  "interview-questions": InterviewQuestionsBoard,
  "interview-findings": InterviewFindingsBoard,
};

export function useEqualStickyNoteHeightsInRow(
  containerRef: RefObject<HTMLElement | null>,
  enabled = true,
) {
  useEqualStickyNoteHeights(containerRef, enabled);
}

export function StickyNoteEqualizedStack({ children }: { children: ReactNode }) {
  return (
    <div className="case-sticky-notes-equalized flex w-full flex-col gap-13">
      {children}
    </div>
  );
}

export function resolveStickyNoteBoard(src: string) {
  const boardId =
    STICKY_NOTE_BOARD_FILES[src as keyof typeof STICKY_NOTE_BOARD_FILES];
  if (!boardId) return null;
  const Board = BOARD_COMPONENTS[boardId];
  return <Board />;
}
