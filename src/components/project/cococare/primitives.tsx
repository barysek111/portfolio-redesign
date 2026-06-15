import {
  Children,
  isValidElement,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ChapterIntroIcon,
  type ChapterIntroId,
} from "@/components/project/CaseChapterIcons";
import { CalloutGrid } from "@/components/project/CalloutGrid";
import { CalloutStack } from "@/components/project/CalloutStack";
import { NumberedCalloutGrid } from "@/components/project/NumberedCalloutGrid";
import { NumberedCalloutStack } from "@/components/project/NumberedCalloutStack";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Pill";
import {
  body,
  calloutColumns,
  contentBlockLabel,
  editorialSplit,
  figureRow12,
  figureRow12Cell,
  halfColumns,
  halfColumnsContent,
  halfColumnsLabel,
  scenarioColumns,
  h1,
  personaAltBySrc,
  personaSizeBySrc,
  subsectionTitle,
  blockTitle,
} from "./constants";
import {
  asset,
  figureAlt,
  parseLabeledItem,
  parseSectionTitle,
  toSentenceCase,
} from "./utils";

import { Figure } from "./Figure";
export { Figure };

export function MajorSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  icon?: string;
  children: ReactNode;
}) {
  const { indexLine, subtitle } = parseSectionTitle(title);

  return (
    <section id={id} className="scroll-mt-12 w-full">
      <div className="case-major-section-header">
        <h1 className={h1}>
          <span className="h1__index">{indexLine}</span>
          {subtitle ? <span className="h1__subtitle">{subtitle}</span> : null}
        </h1>
      </div>
      <div className="flex flex-col gap-13">{children}</div>
    </section>
  );
}

function CaseCallout({
  title,
  titleAs = "h2",
  layout = "split",
  variant = "default",
  chapterId,
  children,
}: {
  title?: ReactNode;
  titleAs?: "h2" | "h3";
  layout?: "split" | "stacked";
  variant?: "default" | "chapter-intro";
  chapterId?: ChapterIntroId;
  children: ReactNode;
}) {
  if (variant === "chapter-intro") {
    return (
      <div className="case-chapter-intro-slot">
        <div className="case-callout case-callout--chapter-intro h-full">
          <div className="case-callout--chapter-intro__inner">
            {chapterId ? (
              <ChapterIntroIcon chapterId={chapterId} className="case-chapter-intro-icon" />
            ) : null}
            <div className="case-callout--chapter-intro__prose min-w-0">{children}</div>
          </div>
        </div>
      </div>
    );
  }

  const TitleTag = titleAs;
  const titleClass = titleAs === "h2" ? contentBlockLabel : blockTitle;
  return (
    <div className="case-callout h-full">
      {layout === "stacked" ? (
        <div className="flex h-full flex-col gap-05">
          <TitleTag className={titleClass}>{title}</TitleTag>
          <div className="min-w-0 w-full">{children}</div>
        </div>
      ) : (
        <div className={calloutColumns}>
          <TitleTag className={titleClass}>{title}</TitleTag>
          <div className="min-w-0 w-full space-y-07">{children}</div>
        </div>
      )}
    </div>
  );
}

function rowsToGridItems(
  rows: readonly { number: string; text: string }[],
  parseTitles: boolean,
) {
  return rows.map((row) => {
    const parsed = parseTitles
      ? parseLabeledItem(row.text)
      : { title: undefined, body: row.text };
    return {
      key: `${row.number}-${row.text}`,
      number: row.number,
      title: parsed.title,
      text: parsed.body,
    };
  });
}

function rowsToCalloutGridItems(
  rows: readonly { number: string; text: string }[],
  parseTitles: boolean,
) {
  return rows.map((row) => {
    const parsed = parseTitles
      ? parseLabeledItem(row.text)
      : { title: undefined, body: row.text };
    return {
      key: `${row.number}-${row.text}`,
      title: parsed.title,
      text: parsed.body,
    };
  });
}

function rowsToStackItems(
  rows: readonly { number: string; text: string }[],
  parseTitles: boolean,
) {
  return rows.map((row) => {
    const parsed = parseTitles
      ? parseLabeledItem(row.text)
      : { title: undefined, body: row.text };
    return {
      key: `${row.number}-${row.text}`,
      number: row.number,
      title: parsed.title,
      text: parsed.body,
    };
  });
}

export function NumberedCalloutSection({
  heading,
  headingAs = "h2",
  rows,
  parseTitles = false,
  layout = "stacked",
  splitTemplate = "scenario",
  cardLayout = "stack",
  gridColumns = 3,
  rowsGap = "03",
  headingTone = "block",
}: {
  heading: string;
  headingAs?: "h2" | "h3";
  rows: readonly { number: string; text: string }[];
  parseTitles?: boolean;
  layout?: "stacked" | "split";
  splitTemplate?: "callout" | "half" | "scenario";
  /** `grid` = numbered squares; `callout-grid` = title top / body bottom; `callout-stack` = unnumbered stack; `stack` = numbered stack */
  cardLayout?: "grid" | "callout-grid" | "callout-stack" | "stack";
  gridColumns?: 2 | 3;
  /** Stack gap between callout cards — `06` = 24px */
  rowsGap?: "03" | "06";
  headingTone?: "block" | "subsection";
}) {
  const HeadingTag = headingAs;
  const headingClass =
    headingAs === "h2"
      ? contentBlockLabel
      : headingTone === "subsection"
        ? subsectionTitle
        : blockTitle;

  const stackGapClass =
    cardLayout === "stack" && rowsGap === "06"
      ? "case-hero-numbered-callouts--gap-06"
      : undefined;

  const items =
    cardLayout === "callout-grid" ? (
      <CalloutGrid
        items={rowsToCalloutGridItems(rows, parseTitles)}
        columns={gridColumns}
      />
    ) : cardLayout === "callout-stack" ? (
      <CalloutStack items={rowsToCalloutGridItems(rows, parseTitles)} />
    ) : cardLayout === "grid" ? (
      <NumberedCalloutGrid
        items={rowsToGridItems(rows, parseTitles)}
        columns={gridColumns}
      />
    ) : (
      <NumberedCalloutStack
        items={rowsToStackItems(rows, parseTitles)}
        className={stackGapClass}
      />
    );

  if (layout === "split") {
    const splitColumns =
      splitTemplate === "callout"
        ? calloutColumns
        : splitTemplate === "half"
          ? halfColumns
          : scenarioColumns;

    const useHalfColSpans = splitTemplate === "half";

    return (
      <div className={splitColumns}>
        <HeadingTag
          className={cn(headingClass, useHalfColSpans && halfColumnsLabel)}
        >
          {toSentenceCase(heading)}
        </HeadingTag>
        <div className={cn(useHalfColSpans ? halfColumnsContent : "min-w-0 w-full")}>
          {items}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-05">
      <HeadingTag className={headingClass}>{toSentenceCase(heading)}</HeadingTag>
      {items}
    </div>
  );
}

function containsFigure(node: ReactNode): boolean {
  if (!isValidElement(node)) return false;
  if (node.type === Figure || node.type === FigureRow) return true;
  const kids = (node.props as { children?: ReactNode }).children;
  if (kids == null) return false;
  return Children.toArray(kids).some(containsFigure);
}

function isMediaChild(child: ReactNode): boolean {
  if (!isValidElement(child)) return false;
  if (child.type === Figure || child.type === FigureRow) {
    return true;
  }
  if (child.type === "div" && containsFigure(child)) return true;
  return false;
}

function partitionEditorialChildren(children: ReactNode) {
  const prose: ReactNode[] = [];
  const media: ReactNode[] = [];

  for (const child of Children.toArray(children)) {
    if (isMediaChild(child)) media.push(child);
    else prose.push(child);
  }

  return { prose, media };
}

export function EditorialSplit({
  label,
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  const { prose, media } = partitionEditorialChildren(children);

  return (
    <div className={editorialSplit}>
      {label ? (
        <h2 className={contentBlockLabel}>{toSentenceCase(label)}</h2>
      ) : null}
      {prose.length > 0 ? (
        <div className="case-editorial-split__prose min-w-0 w-full">
          {prose}
        </div>
      ) : null}
      {media.length > 0 ? (
        <div className="case-editorial-split__media w-full">
          <div className="flex w-full flex-col gap-08">{media}</div>
        </div>
      ) : null}
    </div>
  );
}

export function ContentBlock({
  label,
  children,
  emphasized = false,
  chapterIntro = false,
  chapterId,
  calloutTitleAs = "h2",
  editorial = true,
}: {
  label?: string;
  children: ReactNode;
  emphasized?: boolean;
  chapterIntro?: boolean;
  chapterId?: ChapterIntroId;
  calloutTitleAs?: "h2" | "h3";
  editorial?: boolean;
}) {
  if (emphasized) {
    return (
      <CaseCallout
        title={chapterIntro || !label ? undefined : toSentenceCase(label)}
        titleAs={calloutTitleAs}
        variant={chapterIntro ? "chapter-intro" : "default"}
        chapterId={chapterIntro ? chapterId : undefined}
      >
        {children}
      </CaseCallout>
    );
  }

  if (!editorial) {
    return (
      <div className="flex w-full flex-col gap-04">
        {label ? (
          <h2 className={contentBlockLabel}>{toSentenceCase(label)}</h2>
        ) : null}
        <div className="case-prose-follow-full min-w-0 w-full">{children}</div>
      </div>
    );
  }

  return <EditorialSplit label={label}>{children}</EditorialSplit>;
}

export function Prose({ children }: { children: ReactNode }) {
  return <p className={`${body} text-s`}>{children}</p>;
}

export function FigureRow({ children }: { children: ReactNode }) {
  return (
    <div className={figureRow12}>
      {Children.map(children, (child, index) => (
        <div key={index} className={figureRow12Cell}>
          {child}
        </div>
      ))}
    </div>
  );
}


export function PersonaFigureRow({ images }: { images: readonly string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedIndices, setLoadedIndices] = useState(() => new Set([0]));
  const reduceMotion = useReducedMotion();
  const lastIndex = images.length - 1;
  const atLast = activeIndex >= lastIndex;
  const crossfadeDuration = reduceMotion ? 0 : 0.9;

  // Prefetch remaining personas so crossfade can blend both layers in-place.
  useEffect(() => {
    images.forEach((src, index) => {
      if (index === 0) return;
      const preload = new Image();
      preload.src = asset(src);
      preload.onload = () => {
        setLoadedIndices((prev) => {
          if (prev.has(index)) return prev;
          const next = new Set(prev);
          next.add(index);
          return next;
        });
      };
    });
  }, [images]);

  useEffect(() => {
    setLoadedIndices((prev) => {
      if (prev.has(activeIndex)) return prev;
      const next = new Set(prev);
      next.add(activeIndex);
      return next;
    });
  }, [activeIndex]);

  const handleNav = () => {
    setActiveIndex((current) => (current >= lastIndex ? current - 1 : current + 1));
  };

  return (
    <div className="case-persona-carousel w-full">
      <div className="case-callout case-persona-callout case-persona-carousel__frame">
        {images.length > 1 ? (
          <div className="case-persona-carousel__nav-row">
            {atLast ? (
              <Button variant="arrow" direction="left" onClick={handleNav} type="button">Previous</Button>
            ) : (
              <Button variant="arrow" onClick={handleNav} type="button">Next</Button>
            )}
          </div>
        ) : null}
        <div className="case-persona-carousel__stage">
          {images.map((src, index) => {
            const isActive = index === activeIndex;
            return (
            <motion.figure
              key={src}
              className="case-persona-carousel__slide m-0 min-w-0"
              initial={false}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{
                duration: crossfadeDuration,
                ease: [0.45, 0, 0.55, 1],
              }}
              aria-hidden={!isActive}
              style={{
                pointerEvents: isActive ? "auto" : "none",
                zIndex: isActive ? 2 : 1,
              }}
            >
              {loadedIndices.has(index) ? (
                <img
                  src={asset(src)}
                  alt={personaAltBySrc[src] ?? figureAlt(src, `Persona ${index + 1}`)}
                  className="case-persona-callout__img"
                  width={personaSizeBySrc[src]?.width}
                  height={personaSizeBySrc[src]?.height}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              ) : (
                <div
                  className="case-persona-callout__img case-persona-callout__placeholder"
                  style={{
                    aspectRatio: personaSizeBySrc[src]
                      ? `${personaSizeBySrc[src].width} / ${personaSizeBySrc[src].height}`
                      : "975 / 1234",
                  }}
                  aria-hidden
                />
              )}
            </motion.figure>
            );
          })}
        </div>
      </div>
    </div>
  );
}
