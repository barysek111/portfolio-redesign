import { createFileRoute } from "@tanstack/react-router";
import { rokokoContent } from "@/lib/rokokoContent";
import { RokokoProjectPage } from "@/components/project/RokokoPage";

export const Route = createFileRoute("/rokokoweb")({
  component: RokokoPublishedPage,
});

function RokokoPublishedPage() {
  return <RokokoProjectPage content={rokokoContent} />;
}
