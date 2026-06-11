import { createFileRoute } from "@tanstack/react-router";
import { rokokoBrandContent } from "@/lib/rokokoBrandContent";
import { RokokoBrandProjectPage } from "@/components/project/RokokoBrandPage";

export const Route = createFileRoute("/rokokobrand")({
  component: RokokoBrandPublishedPage,
});

function RokokoBrandPublishedPage() {
  return <RokokoBrandProjectPage content={rokokoBrandContent} />;
}
