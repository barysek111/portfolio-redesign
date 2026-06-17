import type { ShowcaseMedia } from "@/components/home/projectShowcaseEntries";

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

export function ProjectShowcaseMedia({ images }: { images: readonly ShowcaseMedia[] }) {
  const slots: (ShowcaseMedia | null)[] = [
    ...images.slice(0, 4),
    ...Array(Math.max(0, 4 - images.length)).fill(null),
  ];

  return (
    <div className="project-showcase__media-grid">
      {slots.map((item, i) =>
        item ? (
          <div key={item.src} className="project-showcase__frame">
            <MediaImg item={item} />
          </div>
        ) : (
          <div key={`blank-${i}`} className="project-showcase__frame project-showcase__frame--blank" />
        )
      )}
    </div>
  );
}
