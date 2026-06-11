import { createFileRoute } from "@tanstack/react-router";
import { eatGrimContent } from "@/lib/eatGrimContent";
import { EatGrimProjectPage } from "@/components/project/EatGrimPage";

export const Route = createFileRoute("/eatgrim")({
  component: EatGrimPublishedPage,
});

function EatGrimPublishedPage() {
  return <EatGrimProjectPage content={eatGrimContent} />;
}
