import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/Pill";
import { PROJECT_SHOWCASE_ENTRIES, type ShowcaseMedia, type ImgLayout } from "@/components/home/projectShowcaseEntries";
import { ProjectShowcaseMedia } from "@/components/home/ProjectShowcaseMedia";

export function ProjectShowcaseImages({
  meta,
  year,
  layout,
  images,
}: {
  meta: string;
  year: string;
  layout: ImgLayout;
  images: readonly ShowcaseMedia[];
}) {
  return (
    <div className="project-showcase-col-9 project-showcase-hover-zone flex min-w-0 flex-col gap-03">
      <Button variant="dual" left={meta} right={year} />
      <div className="project-showcase-media-frame">
        <ProjectShowcaseMedia layout={layout} images={images} />
      </div>
    </div>
  );
}

export function ProjectShowcaseInfo({
  copy,
  lines,
}: {
  copy: string;
  lines: readonly string[];
}) {
  return (
    <div className="project-showcase-col-3 flex min-w-0 flex-col gap-09">
      <div className="project-showcase-hover-zone flex flex-col">
        <Button variant="arrow" className="project-showcase-explore-pill">Explore</Button>
        <p className="project-showcase__copy text-body">{copy}</p>
      </div>

      <div className="flex flex-col">
        <Button variant="static">My Role</Button>
        <p className="project-showcase__copy text-s">
          {lines.join(", ")}
        </p>
      </div>
    </div>
  );
}

export function ProjectShowcase() {
  return (
    <section id="showcase" className="project-showcase pt-09 md:pt-12" aria-labelledby="showcase-heading">
      <h2 id="showcase-heading" className="sr-only">
        Featured projects
      </h2>

      <div className="flex w-full flex-col gap-13">
        {PROJECT_SHOWCASE_ENTRIES.map((entry) => (
          <div key={`${entry.meta}-${entry.year}`} className="project-showcase__entry-group relative">
            {entry.routerLink
              ? <Link to={entry.href} className="absolute inset-0" aria-label={entry.meta} />
              : <a href={entry.href} className="absolute inset-0" aria-label={entry.meta} />
            }
            <ProjectShowcaseImages
              meta={entry.meta}
              year={entry.year}
              layout={entry.layout}
              images={entry.images}
            />
            <ProjectShowcaseInfo
              copy={entry.exploreCopy}
              lines={entry.roleLines}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
