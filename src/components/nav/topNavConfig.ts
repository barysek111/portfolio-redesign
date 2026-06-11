import type { TopNavBrand, TopNavItem } from "@/components/nav/PortfolioTopNav";

/** Site-wide top nav — 12-column grid (Work = 6 cols / 50%). */
export const topNavBrand: TopNavBrand = {
  label: "Work",
  href: "/",
  desktopSpan: 6,
  mobileSpan: 6,
  routerLink: true,
};

export const topNavItems: TopNavItem[] = [
  {
    label: "Services",
    href: "/#services",
    desktopSpan: 2,
    desktopOnly: true,
  },
  {
    label: "About",
    href: "/#about",
    desktopSpan: 2,
    desktopOnly: true,
  },
  {
    label: "Work with me",
    href: "/#contact",
    desktopSpan: 2,
    mobileSpan: 6,
  },
];
