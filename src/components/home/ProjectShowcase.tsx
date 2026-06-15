import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/Button";
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
    <div className="project-showcase-col-9 flex min-w-0 flex-col gap-03">
      <Button variant="dual" left={meta} right={year} />
      <div className="project-showcase-media-frame project-showcase-hover-zone">
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
    <div className="project-showcase-col-3 project-showcase-info flex min-w-0 flex-col">
      <Button variant="arrow-always" className="project-showcase-explore-btn project-showcase-info__explore">Explore</Button>
      <div className="project-showcase-info__copy-group project-showcase-hover-zone flex flex-col gap-06">
        <p className="project-showcase__copy project-showcase-info__body text-body">{copy}</p>
        <div className="project-showcase-info__role flex flex-col">
          <Button variant="static" className="project-showcase-myrole">My Role</Button>
          <p className="project-showcase__copy text-s">{lines.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}

export function ProjectShowcase({ footer }: { footer?: ReactNode }) {
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
        {footer}
      </div>
    </section>
  );
}
