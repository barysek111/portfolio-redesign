/**
 * Ageras-specific Figure — identical rendering to cococare/primitives Figure,
 * but resolves image paths via the ageras asset helper (/ageras/).
 * No sticky-note boards or project-goals diagrams (Coco Care-only features).
 */
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { asset, figureAlt } from "./utils";
import {
  blockTitle,
  contentBlockLabel,
  body,
  screenTitle,
} from "./constants";

type FigureLayout = "full" | "pair";

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
  caption,
  title,
  alt,
  layout = "full",
  callout = false,
  calloutFrame = true,
  calloutTitleAs = "p",
  calloutCopyBelowMedia = false,
}: {
  src: string;
  caption?: string;
  title?: string;
  alt?: string;
  layout?: FigureLayout;
  callout?: boolean;
  calloutFrame?: boolean;
  calloutTitleAs?: "p" | "h2" | "h3" | "h5";
  calloutCopyBelowMedia?: boolean;
}) {
  const imageAlt = figureAlt(src, alt ?? caption ?? title);
  const image = (
    <img
      src={asset(src)}
      alt={imageAlt}
      className="block h-auto w-full max-w-none"
      loading="lazy"
      decoding="async"
    />
  );

  const TitleTag = calloutTitleAs;
  const titleClass =
    calloutTitleAs === "h2"
      ? contentBlockLabel
      : calloutTitleAs === "h5"
        ? `${screenTitle} case-figure-callout-headline`
        : calloutTitleAs === "h3"
          ? `${blockTitle} case-figure-callout-headline`
          : "case-figure-callout-headline";

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
