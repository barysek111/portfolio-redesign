import { PortfolioTopNav } from "@/components/nav/PortfolioTopNav";
import { topNavBrand, topNavItems } from "@/components/nav/topNavConfig";
import { spacing } from "@/lib/designSystem";

/** Site-wide top navigation — same on homepage and case studies. */
export function SiteTopNav() {
  return (
    <PortfolioTopNav
      shellClassName={spacing.caseStudyShell}
      brand={topNavBrand}
      items={topNavItems}
    />
  );
}
