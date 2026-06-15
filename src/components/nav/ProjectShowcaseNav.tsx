import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export type ProjectShowcaseNavProps = {
  /** First pill (8 columns) — project title, left-aligned. */
  meta: string;
  /** Shown on the right end of the first pill (e.g. year). */
  year: string;
  /** Second pill (2 columns), e.g. role label. */
  secondaryLabel: string;
  exploreLabel?: string;
  /** Whole bar links here (hover applies to all pills). */
  href: string;
  routerLink?: boolean;
  className?: string;
};

/** One row: 8 + 2 + 2 on the 12-column showcase grid (all breakpoints). */
export const projectShowcaseSpan8 = "project-showcase-span-8";
export const projectShowcaseSpan2 = "project-showcase-span-2";

/**
 * In-page project bar — one link; hovering any segment highlights all pills (Gentle /work).
 */
export function ProjectShowcaseNav({
  meta,
  year,
  secondaryLabel,
  exploreLabel = "Explore",
  href,
  routerLink = false,
  className,
}: ProjectShowcaseNavProps) {
  const shellClass = cn(
    "project-showcase-nav nav-top-grid grid w-full text-inherit no-underline",
    className,
  );

  const inner = (
    <>
      <Button variant="dual" left={meta} right={year} className={projectShowcaseSpan8} />
      <Button variant="static" className={projectShowcaseSpan2}>{secondaryLabel}</Button>
      <Button variant="arrow" className={cn(projectShowcaseSpan2, "project-showcase-nav__explore")}>{exploreLabel}</Button>
    </>
  );

  if (routerLink) {
    return (
      <Link to={href} className={shellClass}>
        {inner}
      </Link>
    );
  }

  return (
    <a href={href} className={shellClass}>
      {inner}
    </a>
  );
}
