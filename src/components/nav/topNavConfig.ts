import type { TopNavBrand, TopNavItem } from "@/components/nav/PortfolioTopNav";

/** Site-wide top nav — 12-column grid. Mobile: 3 equal pills (4+4+4). Desktop: 7+3+2. */
export const topNavBrand: TopNavBrand = {
  label: "Work",
  href: "/",
  desktopSpan: 7,
  mobileSpan: 4,
  routerLink: true,
};

export const topNavItems: TopNavItem[] = [
  {
    label: "About",
    href: "/about",
    desktopSpan: 3,
    mobileSpan: 4,
    routerLink: true,
  },
  {
    label: "Work with me",
    href: "/work-with-me",
    desktopSpan: 2,
    mobileSpan: 4,
    routerLink: true,
  },
];
