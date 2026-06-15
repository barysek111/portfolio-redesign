import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { resolveStickyNoteBoard } from "@/components/project/CaseStickyNotes";
import { resolveProjectGoalsDiagram } from "@/components/project/ProjectGoalsDiagram";
import {
  blockTitle,
  body,
  contentBlockLabel,
  screenTitle,
} from "@/components/project/constants";

/** Symbol used by containsFigure in primitives.tsx to detect Figure wrappers cross-project. */
export const CASE_FIGURE_MARKER = Symbol("CaseFigure");

export type FigureProps = {
  src: string;
  caption?: string;
  title?: string;
  alt?: string;
  layout?: "full" | "pair";
  callout?: boolean;
  calloutFrame?: boolean;
  calloutTitleAs?: "p" | "h2" | "h3" | "h5";
  calloutCopyBelowMedia?: boolean;
};

function FigureCaptionCallout({
  media,
  titleNode,
  caption,
  mediaOnly = false,
  copyBelowMedia = false,
}: {
  media?: ReactNode;
  titleNode?: ReactNode;
  caption?: string;
  mediaOnly?: boolean;
  copyBelowMedia?: boolean;
}) {
  if (!media && !titleNode && !caption) return null;

  const copyBlock =
    titleNode || caption ? (
      <div className="case-figure-caption-callout__copy">
        {titleNode}
        {caption ? (
          <p className={cn("case-figure-caption-callout__text", body)}>{caption}</p>
        ) : null}
      </div>
    ) : null;

  const mediaBlock = media ? (
    <div
      className={cn(
        "case-figure-caption-callout__media",
        mediaOnly && "case-figure-caption-callout__media--solo",
      )}
    >
      {media}
    </div>
  ) : null;

  if (copyBelowMedia) {
    return (
      <div className="case-figure-caption-callout case-figure-caption-callout--copy-below w-full min-h-0 flex-1">
        {mediaBlock}
        {copyBlock}
      </div>
    );
  }

  return (
    <div className="case-figure-caption-callout w-full min-h-0 flex-1">
      {titleNode}
      {caption ? (
        <p className={cn("case-figure-caption-callout__text", body)}>{caption}</p>
      ) : null}
      {mediaBlock}
    </div>
  );
}

export function Figure({
  src,
  assetFn,
  altFn,
  caption,
  title,
  alt,
  layout = "full",
  callout = false,
  calloutFrame = true,
  calloutTitleAs = "p",
  calloutCopyBelowMedia = false,
}: FigureProps & {
  assetFn: (file: string) => string;
  altFn?: (src: string, label?: string) => string;
}) {
  const label = alt ?? caption ?? title;
  const imageAlt = altFn ? altFn(src, label) : (label ?? src);
  const stickyNoteBoard = resolveStickyNoteBoard(src);
  const projectGoalsDiagram = resolveProjectGoalsDiagram(src);
  const image =
    stickyNoteBoard ??
    projectGoalsDiagram ?? (
      <img
        src={assetFn(src)}
        alt={imageAlt}
        className="block h-auto w-full max-w-none"
        loading="lazy"
        decoding="async"
      />
    );

  const isStickyNoteFigure = stickyNoteBoard != null;
  const pairSplitLayout =
    layout === "pair" &&
    (title || caption) &&
    (!callout || !calloutFrame || isStickyNoteFigure);

  if (pairSplitLayout) {
    const TitleTag = calloutTitleAs;
    const titleClass =
      calloutTitleAs === "h2"
        ? contentBlockLabel
        : calloutTitleAs === "h5"
          ? `${screenTitle} case-figure-callout-headline`
          : calloutTitleAs === "h3"
            ? `${blockTitle} case-figure-callout-headline`
            : "case-figure-callout-headline";

    return (
      <figure className="case-figure-split h-full min-h-0">
        {title ? <TitleTag className={titleClass}>{title}</TitleTag> : null}
        <div className="case-figure-split__content min-h-0">
          {caption ? <p className={body}>{caption}</p> : null}
          <div className="case-figure-media w-full min-h-0 flex-1">{image}</div>
        </div>
      </figure>
    );
  }

  if (callout && calloutFrame && !title && !caption) {
    return (
      <figure className={layout === "pair" ? "min-w-0 h-full" : "w-full"}>
        <FigureCaptionCallout
          media={image}
          mediaOnly
          copyBelowMedia={calloutCopyBelowMedia}
        />
      </figure>
    );
  }

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

    const titleNode = title ? (
      <TitleTag
        className={cn(
          titleClass,
          calloutTitleAs !== "h5" && "case-figure-caption-callout__title",
        )}
      >
        {title}
      </TitleTag>
    ) : null;

    if (layout === "pair" && calloutFrame) {
      return (
        <figure className="case-figure-pair min-w-0 h-full w-full">
          <FigureCaptionCallout
            media={image}
            titleNode={titleNode}
            caption={caption}
            copyBelowMedia={calloutCopyBelowMedia}
          />
        </figure>
      );
    }

    return (
      <figure className="w-full">
        {calloutFrame ? (
          <FigureCaptionCallout
            media={image}
            titleNode={titleNode}
            caption={caption}
            copyBelowMedia={calloutCopyBelowMedia}
          />
        ) : (
          <div className="flex w-full flex-col gap-04">
            {titleNode}
            {caption ? <p className={body}>{caption}</p> : null}
            <div className="w-full">{image}</div>
          </div>
        )}
      </figure>
    );
  }

  return (
    <figure className={layout === "pair" ? "min-w-0" : "w-full"}>
      <div className="overflow-hidden">{image}</div>
      {caption ? (
        <figcaption className="case-caption mt-04">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
(Figure as any)[CASE_FIGURE_MARKER] = true;
