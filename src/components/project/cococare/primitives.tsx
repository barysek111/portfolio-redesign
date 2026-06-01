import {
  Children,
  isValidElement,
  type ReactNode,
} from "react";
import {
  ChapterIntroIcon,
  type ChapterIntroId,
} from "@/components/project/CaseChapterIcons";
import {
  resolveStickyNoteBoard,
} from "@/components/project/CaseStickyNotes";
import { resolveProjectGoalsDiagram } from "@/components/project/ProjectGoalsDiagram";
import { cn } from "@/lib/utils";
import {
  blockTitle,
  body,
  calloutColumns,
  contentBlockLabel,
  editorialSplit,
  halfColumns,
  scenarioColumns,
  screenTitle,
  h1,
  subsectionTitle,
} from "./constants";
import {
  asset,
  displayCalloutNumber,
  figureAlt,
  parseLabeledItem,
  parseSectionTitle,
  toSentenceCase,
} from "./utils";

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
    <section id={id} className="scroll-mt-28 w-full">
      <div className="case-major-section-header">
        <h1 className={h1}>
          <span className="h1__index">{indexLine}</span>
          {subtitle ? <span className="h1__subtitle">{subtitle}</span> : null}
        </h1>
      </div>
      <div className="flex flex-col gap-[160px]">{children}</div>
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
        <div className="flex h-full flex-col gap-[1.125rem]">
          <TitleTag className={titleClass}>{title}</TitleTag>
          <div className="min-w-0 w-full">{children}</div>
        </div>
      ) : (
        <div className={calloutColumns}>
          <TitleTag className={titleClass}>{title}</TitleTag>
          <div className="min-w-0 w-full space-y-8">{children}</div>
        </div>
      )}
    </div>
  );
}

export function NumberedCalloutRows({
  rows,
  parseTitles = false,
  columns = 1,
  className,
  variant = "default",
}: {
  rows: readonly { number: string; text: string }[];
  parseTitles?: boolean;
  columns?: 1 | 2;
  className?: string;
  variant?: "default" | "hero";
}) {
  return (
    <div
      className={cn(
        columns === 2
          ? "grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4"
          : "flex flex-col gap-4",
        variant === "hero" && "case-hero-numbered-callouts",
        className,
      )}
    >
      {rows.map((row) => {
        const parsed = parseTitles
          ? parseLabeledItem(row.text)
          : { title: undefined, body: row.text };

        if (variant === "hero") {
          return (
            <div key={row.number} className="case-callout case-numbered-item">
              <h2 className="case-index">{displayCalloutNumber(row.number)}</h2>
              <div className="case-numbered-item-content min-w-0">
                {parsed.title ? (
                  <h5 className={screenTitle}>{parsed.title}</h5>
                ) : null}
                <p className={body}>{parsed.body}</p>
              </div>
            </div>
          );
        }

        return (
          <div key={row.number} className="case-callout case-numbered-item">
            {parsed.title ? (
              <div className="case-numbered-item-heading">
                <h2 className="case-index">{displayCalloutNumber(row.number)}</h2>
                <h5 className={screenTitle}>{parsed.title}</h5>
              </div>
            ) : (
              <h2 className="case-index">{displayCalloutNumber(row.number)}</h2>
            )}
            <p className={body}>{parsed.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export function NumberedCalloutSection({
  heading,
  headingAs = "h2",
  rows,
  parseTitles = false,
  layout = "stacked",
  columns = 1,
  splitTemplate = "scenario",
  rowsVariant = "default",
  headingTone = "block",
}: {
  heading: string;
  headingAs?: "h2" | "h3";
  rows: readonly { number: string; text: string }[];
  parseTitles?: boolean;
  layout?: "stacked" | "split";
  columns?: 1 | 2;
  splitTemplate?: "callout" | "half" | "scenario";
  rowsVariant?: "default" | "hero";
  headingTone?: "block" | "subsection";
}) {
  const HeadingTag = headingAs;
  const headingClass =
    headingAs === "h2"
      ? contentBlockLabel
      : headingTone === "subsection"
        ? subsectionTitle
        : blockTitle;

  const items = (
    <NumberedCalloutRows
      rows={rows}
      parseTitles={parseTitles}
      columns={columns}
      variant={rowsVariant}
    />
  );

  if (layout === "split") {
    const splitColumns =
      splitTemplate === "callout"
        ? calloutColumns
        : splitTemplate === "half"
          ? halfColumns
          : scenarioColumns;

    return (
      <div className={splitColumns}>
        <HeadingTag className={headingClass}>{toSentenceCase(heading)}</HeadingTag>
        <div className="min-w-0 w-full">{items}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
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
  if (child.type === Figure || child.type === FigureRow || child.type === PersonaFigureRow) {
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
        <div className="case-editorial-split__prose min-w-0 w-full space-y-10">
          {prose}
        </div>
      ) : null}
      {media.length > 0 ? (
        <div className="case-editorial-split__media w-full">
          <div className="flex w-full flex-col gap-10">{media}</div>
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
      <div className="flex w-full flex-col gap-3">
        {label ? (
          <h2 className={contentBlockLabel}>{toSentenceCase(label)}</h2>
        ) : null}
        <div className="min-w-0 w-full space-y-10">{children}</div>
      </div>
    );
  }

  return <EditorialSplit label={label}>{children}</EditorialSplit>;
}

export function Prose({ children }: { children: ReactNode }) {
  return <p className={`${body} text-body`}>{children}</p>;
}

function FigureCaptionCallout({ media }: { media?: ReactNode }) {
  if (!media) return null;
  return (
    <div className="case-figure-caption-callout w-full min-h-0 flex-1">
      <div className="case-figure-caption-callout__media">{media}</div>
    </div>
  );
}

export function Figure({
  src,
  caption,
  title,
  alt,
  layout = "full",
  callout = false,
  calloutFrame = true,
  calloutTitleAs = "p",
}: {
  src: string;
  caption?: string;
  title?: string;
  alt?: string;
  layout?: "full" | "pair";
  callout?: boolean;
  calloutFrame?: boolean;
  calloutTitleAs?: "p" | "h2" | "h3" | "h5";
}) {
  const imageAlt = figureAlt(src, alt ?? caption ?? title);
  const stickyNoteBoard = resolveStickyNoteBoard(src);
  const projectGoalsDiagram = resolveProjectGoalsDiagram(src);
  const image = stickyNoteBoard ??
    projectGoalsDiagram ?? (
      <img
        src={asset(src)}
        alt={imageAlt}
        className="block h-auto w-full max-w-none"
        loading="lazy"
        decoding="async"
      />
    );

  if (callout && (title || caption)) {
    const TitleTag = calloutTitleAs;
    const titleClass =
      calloutTitleAs === "h2"
        ? contentBlockLabel
        : calloutTitleAs === "h5"
          ? `${screenTitle} case-figure-callout-headline`
          : calloutTitleAs === "h3"
            ? `${blockTitle} case-figure-callout-headline`
            : "case-figure-callout-headline";

    if (layout === "pair") {
      return (
        <figure className="case-figure-split h-full min-h-0">
          {title ? <TitleTag className={titleClass}>{title}</TitleTag> : null}
          <div className="case-figure-split__content flex min-h-0 flex-col gap-[75px]">
            {caption ? <p className={body}>{caption}</p> : null}
            <div className="case-figure-media w-full min-h-0 flex-1">{image}</div>
          </div>
        </figure>
      );
    }

    return (
      <figure className="flex w-full flex-col gap-3">
        {title ? <TitleTag className={titleClass}>{title}</TitleTag> : null}
        {caption ? <p className={body}>{caption}</p> : null}
        {calloutFrame ? (
          <FigureCaptionCallout media={image} />
        ) : (
          <div className="w-full">{image}</div>
        )}
      </figure>
    );
  }

  return (
    <figure className={layout === "pair" ? "min-w-0" : "w-full"}>
      <div className="overflow-hidden">{image}</div>
      {caption ? (
        <figcaption className="case-caption mt-3">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function FigureRow({ children }: { children: ReactNode }) {
  return (
    <div className="case-figure-row grid w-full items-stretch gap-8 md:grid-cols-2">
      {children}
    </div>
  );
}

export function PersonaFigureRow({ slots = 2 }: { slots?: number }) {
  return (
    <div className="case-persona-figure-row">
      {Array.from({ length: slots }, (_, index) => (
        <figure
          key={`persona-slot-${index}`}
          className="case-persona-figure-row__item m-0 min-w-0"
          aria-label={`Persona placeholder ${index + 1}`}
        >
          <div className="case-callout case-persona-callout case-persona-callout--empty" />
        </figure>
      ))}
    </div>
  );
}
