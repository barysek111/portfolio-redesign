import { createFileRoute } from "@tanstack/react-router";
import { plintoContent } from "@/lib/plintoContent";
import { PlintoProjectPage } from "@/components/project/PlintoPage";

export const Route = createFileRoute("/plinto")({
  component: PlintoPublishedPage,
});

function PlintoPublishedPage() {
  return <PlintoProjectPage content={plintoContent} />;
}
