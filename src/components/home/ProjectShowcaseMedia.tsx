import type { ShowcaseMedia, ImgLayout } from "@/components/home/projectShowcaseEntries";

function MediaImg({ item }: { item: ShowcaseMedia }) {
  return (
    <img
      src={item.src}
      alt={item.alt}
      className="project-showcase__img"
      width={item.width}
      height={item.height}
      loading="lazy"
      decoding="async"
    />
  );
}

export function ProjectShowcaseMedia({
  layout,
  images,
}: {
  layout: ImgLayout;
  images: readonly ShowcaseMedia[];
}) {
  const spans = layout.split(" ").map(Number);
  return (
    <div className="project-showcase__media-pair flex w-full min-w-0 items-start gap-03">
      {images.map((item, i) => (
        <div
          key={item.src}
          className="project-showcase__frame min-w-0"
          style={{ flex: spans[i] ?? 1 }}
        >
          <MediaImg item={item} />
        </div>
      ))}
    </div>
  );
}
