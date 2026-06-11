import { createFileRoute } from "@tanstack/react-router";
import { powermatchContent } from "@/lib/powermatchContent";
import { PowermatchProjectPage } from "@/components/project/PowermatchPage";

export const Route = createFileRoute("/powermatch")({
  component: PowermatchPublishedPage,
});

function PowermatchPublishedPage() {
  return <PowermatchProjectPage content={powermatchContent} />;
}
