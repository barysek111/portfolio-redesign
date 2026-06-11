import type { ShowcaseMedia, ShowcaseMediaItem } from "@/components/home/projectShowcaseEntries";

function MediaImg({ item, className }: { item: ShowcaseMedia; className?: string }) {
  return (
    <img
      src={item.src}
      alt={item.alt}
      className={`project-showcase__img${className ? ` ${className}` : ""}`}
      width={item.width}
      height={item.height}
      loading="lazy"
      decoding="async"
    />
  );
}

export function ProjectShowcaseMedia({
  mediaItems,
  mediaLeft,
  mediaRight,
}: {
  mediaItems?: readonly ShowcaseMediaItem[];
  mediaLeft?: ShowcaseMedia;
  mediaRight?: ShowcaseMedia;
}) {
  if (mediaItems) {
    return (
      <div className="project-showcase__media-pair flex w-full min-w-0 items-start gap-03">
        {mediaItems.map((item) => (
          <div
            key={item.src}
            className="project-showcase__frame min-w-0"
            style={{ flex: item.span }}
          >
            <MediaImg item={item} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="project-showcase__media-pair flex w-full min-w-0 items-start gap-03">
      <div className="project-showcase__frame min-w-0 flex-[2]">
        {mediaLeft && <MediaImg item={mediaLeft} />}
      </div>
      <div className="project-showcase__frame min-w-0 flex-[6]">
        {mediaRight && <MediaImg item={mediaRight} />}
      </div>
    </div>
  );
}
