import type { ReactElement, SVGProps } from "react";
import type { WireEllipse, WireSegment } from "@/components/project/caseChapterIconArt";
import {
  chapterIconVariantRows,
  chapterIntroIconArt,
  defaultChapterArt,
  type IconArt,
} from "@/components/project/caseChapterIconVariants";

const VB = "0 0 64 64";

function WireEllipses({ ellipses }: { ellipses: WireEllipse[] }) {
  return (
    <g>
      {ellipses.map((e, i) => (
        <ellipse
          key={i}
          cx={e.cx}
          cy={e.cy}
          rx={e.rx}
          ry={e.ry}
          transform={`rotate(${e.rot} ${e.cx} ${e.cy})`}
          stroke="currentColor"
          strokeWidth={e.sw}
          opacity={e.o}
        />
      ))}
    </g>
  );
}

function WireSegments({ segments }: { segments: WireSegment[] }) {
  return (
    <g>
      {segments.map((s, i) => (
        <line
          key={i}
          x1={s.x1}
          y1={s.y1}
          x2={s.x2}
          y2={s.y2}
          stroke="currentColor"
          strokeWidth={s.sw}
          opacity={s.o}
        />
      ))}
    </g>
  );
}

function StippleLayer({ dots }: { dots: { x: number; y: number; r: number; o: number }[] }) {
  return (
    <g>
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="currentColor" opacity={d.o} />
      ))}
    </g>
  );
}

function IconSvg({ className, children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox={VB}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
}

function ChapterIconFromArt({ art, ...props }: { art: IconArt } & SVGProps<SVGSVGElement>) {
  return (
    <IconSvg {...props}>
      {art.kind === "wire" ? <WireEllipses ellipses={art.ellipses} /> : null}
      {art.kind === "prototype" ? (
        <>
          <WireSegments segments={art.outlines} />
          <WireEllipses ellipses={art.ellipses} />
        </>
      ) : null}
      {art.kind === "stipple" ? <StippleLayer dots={art.dots} /> : null}
      {art.kind === "launch" ? (
        <>
          <path d={art.apex} fill="currentColor" />
          <StippleLayer dots={art.dots} />
        </>
      ) : null}
    </IconSvg>
  );
}

function makeIcon(art: IconArt) {
  return function ChapterIcon(props: SVGProps<SVGSVGElement>) {
    return <ChapterIconFromArt art={art} {...props} />;
  };
}

export const ChapterIconResearch = makeIcon(defaultChapterArt.research);
export const ChapterIconDefine = makeIcon(defaultChapterArt.define);
export const ChapterIconIdeate = makeIcon(defaultChapterArt.ideate);
export const ChapterIconPrototype = makeIcon(defaultChapterArt.prototype);
export const ChapterIconTest = makeIcon(defaultChapterArt.test);
export const ChapterIconLaunch = makeIcon(defaultChapterArt.launch);

export type ChapterIntroId = keyof typeof chapterIntroIconArt;

export function ChapterIntroIcon({
  chapterId,
  className,
}: {
  chapterId: ChapterIntroId;
  className?: string;
}) {
  return (
    <ChapterIconFromArt
      art={chapterIntroIconArt[chapterId]}
      className={className}
      aria-hidden
    />
  );
}

function IconCell({
  label,
  art,
}: {
  label: string;
  art: IconArt;
}) {
  return (
    <div className="case-chapter-icon-cell">
      <ChapterIconFromArt art={art} className="case-chapter-icon" />
      <span className="case-chapter-icon-label">{label}</span>
    </div>
  );
}

/** 6 rows × 3 variants — style picker under Research heading */
export function ChapterIconPreviewRow() {
  return (
    <div className="case-chapter-icon-matrix" aria-label="Chapter icon variant picker">
      {chapterIconVariantRows.map((row) => (
        <div key={row.chapter} className="case-chapter-icon-matrix-row">
          <p className="case-chapter-icon-row-title">{row.chapter}</p>
          <div className="case-chapter-icon-preview">
            {row.variants.map((art, index) => (
              <IconCell key={index} label={`V${index + 1}`} art={art} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export const caseChapterIcons = {
  research: ChapterIconResearch,
  define: ChapterIconDefine,
  ideate: ChapterIconIdeate,
  prototype: ChapterIconPrototype,
  test: ChapterIconTest,
  launch: ChapterIconLaunch,
} as const;

export const chapterIconAssetPaths = {
  research: "/coco-care/chapter-icons/icon-1.svg",
  define: "/coco-care/chapter-icons/icon-2.svg",
  ideate: "/coco-care/chapter-icons/icon-3.svg",
  prototype: "/coco-care/chapter-icons/icon-4.svg",
  test: "/coco-care/chapter-icons/icon-5.svg",
  launch: "/coco-care/chapter-icons/icon-6.svg",
} as const;
