import { createFileRoute } from "@tanstack/react-router";
import { weldContent } from "@/lib/weldContent";
import { WeldProjectPage } from "@/components/project/WeldPage";

export const Route = createFileRoute("/weld")({
  component: WeldPublishedPage,
});

function WeldPublishedPage() {
  return <WeldProjectPage content={weldContent} />;
}
