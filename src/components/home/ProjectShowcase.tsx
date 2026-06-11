import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ContentPill } from "@/components/home/ContentPill";
import { NavPillArrow } from "@/components/nav/NavPillArrow";
import { PROJECT_SHOWCASE_ENTRIES, type ShowcaseMedia, type ShowcaseMediaItem } from "@/components/home/projectShowcaseEntries";
import { ProjectShowcaseMedia } from "@/components/home/ProjectShowcaseMedia";

function ProjectDivTitle({
  meta,
  year,
  mediaItems,
  mediaLeft,
  mediaRight,
}: {
  meta: string;
  year: string;
  mediaItems?: readonly ShowcaseMediaItem[];
  mediaLeft?: ShowcaseMedia;
  mediaRight?: ShowcaseMedia;
}) {
  return (
    <div className="project-showcase-col-9 project-showcase-hover-zone flex min-w-0 flex-col gap-03">
      <ContentPill className="justify-between">
        <span className="nav-pill__label min-w-0 truncate">{meta}</span>
        <span className="nav-pill__label shrink-0 tabular-nums">{year}</span>
      </ContentPill>
      <div className="project-showcase-media-frame">
        <ProjectShowcaseMedia mediaItems={mediaItems} mediaLeft={mediaLeft} mediaRight={mediaRight} />
      </div>
    </div>
  );
}

/**
 * 3-column right column: Explore block stacked above My Role block.
 * Role items rendered as comma-separated inline text.
 */
function ProjectDivRight({
  copy,
  lines,
}: {
  copy: string;
  lines: readonly string[];
}) {
  return (
    <div className="project-showcase-col-3 flex min-w-0 flex-col gap-09">
      {/* Explore */}
      <div className="project-showcase-hover-zone flex flex-col gap-03">
        <ContentPill className="project-showcase-explore-pill justify-between">
          <span className="nav-pill__label">Explore</span>
          <NavPillArrow />
        </ContentPill>
        <p className="project-showcase__copy text-body">{copy}</p>
      </div>

      {/* My Role */}
      <div className="flex flex-col gap-03">
        <ContentPill isStatic className="justify-center">
          <span className="nav-pill__label">My Role</span>
        </ContentPill>
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

      <div className="project-showcase__list flex w-full flex-col gap-13">
        {PROJECT_SHOWCASE_ENTRIES.map((entry, index) => (
          <motion.div
            key={`${entry.meta}-${entry.year}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index === 0 ? 0 : 0.05 }}
          >
            {entry.routerLink ? (
              <Link
                to={entry.href}
                className="project-showcase__entry-group nav-top-grid grid w-full text-inherit no-underline"
              >
                <ProjectDivTitle meta={entry.meta} year={entry.year} mediaItems={entry.mediaItems} mediaLeft={entry.mediaLeft} mediaRight={entry.mediaRight} />
                <ProjectDivRight copy={entry.exploreCopy} lines={entry.roleLines} />
              </Link>
            ) : (
              <a
                href={entry.href}
                className="project-showcase__entry-group nav-top-grid grid w-full text-inherit no-underline"
              >
                <ProjectDivTitle meta={entry.meta} year={entry.year} mediaItems={entry.mediaItems} mediaLeft={entry.mediaLeft} mediaRight={entry.mediaRight} />
                <ProjectDivRight copy={entry.exploreCopy} lines={entry.roleLines} />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
