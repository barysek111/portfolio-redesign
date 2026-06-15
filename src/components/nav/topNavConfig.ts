import type { TopNavBrand, TopNavItem } from "@/components/nav/PortfolioTopNav";

/** Site-wide top nav — 12-column grid (Work = 7 cols). */
export const topNavBrand: TopNavBrand = {
  label: "Work",
  href: "/",
  desktopSpan: 7,
  mobileSpan: 6,
  routerLink: true,
};

export const topNavItems: TopNavItem[] = [
  {
    label: "About",
    href: "/about",
    desktopSpan: 3,
    desktopOnly: true,
    routerLink: true,
  },
  {
    label: "Work with me",
    href: "/work-with-me",
    desktopSpan: 2,
    mobileSpan: 6,
    routerLink: true,
  },
];
