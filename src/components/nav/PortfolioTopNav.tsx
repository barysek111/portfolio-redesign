import { Link } from "@tanstack/react-router";
import { NavPillArrow } from "@/components/nav/NavPillArrow";
import { spacing } from "@/lib/designSystem";
import { cn } from "@/lib/utils";

export type TopNavItem = {
  label: string;
  href: string;
  /** Grid column span on md+ (12-col grid; Work brand = 6 / 50%) */
  desktopSpan: number;
  /** Grid column span below md; defaults to desktopSpan */
  mobileSpan?: number;
  /** Skip on viewports below md */
  desktopOnly?: boolean;
  /** Skip on md and up */
  mobileOnly?: boolean;
  /** Use TanStack Router Link (internal routes) */
  routerLink?: boolean;
};

export type TopNavBrand = TopNavItem;

type PortfolioTopNavProps = {
  brand?: TopNavBrand;
  items: TopNavItem[];
  /** Extra class on header (e.g. case-study context) */
  className?: string;
  /** Matches page content shell width (no side padding on nav) */
  shellClassName?: string;
};


function NavAnchor({
  item,
  className,
  showArrow = true,
}: {
  item: TopNavItem;
  className: string;
  showArrow?: boolean;
}) {
  const inner = (
    <>
      <span className="nav-pill__label">{item.label}</span>
      {showArrow ? <NavPillArrow /> : null}
    </>
  );
  if (item.routerLink) {
    return (
      <Link to={item.href} className={className}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={item.href} className={className}>
      {inner}
    </a>
  );
}

function gridSpanClass(span: number, breakpoint: "mobile" | "desktop") {
  return breakpoint === "mobile"
    ? `nav-pill-span-mobile-${span}`
    : `nav-pill-span-desktop-${span}`;
}

export function PortfolioTopNav({
  brand,
  items,
  className,
  shellClassName = spacing.caseStudyShell,
}: PortfolioTopNavProps) {
  const pillBase = "nav-pill";

  return (
    <header
      className={cn(
        "site-nav fixed inset-x-0 top-0 z-50 bg-transparent",
        className,
      )}
    >
      <div className={cn("w-full", shellClassName)}>
        <div className="nav-top-grid relative z-10 grid w-full pb-04 pt-03 md:pb-07 md:pt-07">
          {brand ? (
            <NavAnchor
              item={brand}
              showArrow={false}
              className={cn(
                pillBase,
                gridSpanClass(brand.mobileSpan ?? brand.desktopSpan, "mobile"),
                gridSpanClass(brand.desktopSpan, "desktop"),
                brand.desktopOnly && "max-md:hidden",
                brand.mobileOnly && "md:hidden",
              )}
            />
          ) : null}

          {items.map((item) => {
            const mobileSpan = item.mobileSpan ?? item.desktopSpan;
            return (
              <NavAnchor
                key={`${item.href}-${item.label}`}
                item={item}
                className={cn(
                  pillBase,
                  gridSpanClass(mobileSpan, "mobile"),
                  gridSpanClass(item.desktopSpan, "desktop"),
                  item.desktopOnly && "max-md:hidden",
                  item.mobileOnly && "md:hidden",
                )}
              />
            );
          })}
        </div>
      </div>
    </header>
  );
}
