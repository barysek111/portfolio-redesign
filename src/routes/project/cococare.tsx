import { createFileRoute } from "@tanstack/react-router";
import { cocoCareContent } from "@/lib/cocoCareContent";
import { CocoCareProjectPage } from "@/components/project/CocoCarePage";

const caseStudyFontPreload = {
  rel: "preload" as const,
  href: "/fonts/NHaasGroteskTXPro-55Rg.otf",
  as: "font" as const,
  type: "font/otf",
  crossOrigin: "anonymous" as const,
};

export const Route = createFileRoute("/project/cococare")({
  head: () => ({ links: [caseStudyFontPreload] }),
  component: CocoCarePublishedPage,
});

function CocoCarePublishedPage() {
  return <CocoCareProjectPage content={cocoCareContent} />;
}
