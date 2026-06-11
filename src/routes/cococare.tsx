import { createFileRoute } from "@tanstack/react-router";
import { cocoCareContent } from "@/lib/cocoCareContent";
import { CocoCareProjectPage } from "@/components/project/CocoCarePage";

export const Route = createFileRoute("/cococare")({
  component: CocoCarePublishedPage,
});

function CocoCarePublishedPage() {
  return <CocoCareProjectPage content={cocoCareContent} />;
}
