import { createFileRoute } from "@tanstack/react-router";
import { agerasContent } from "@/lib/agerasContent";
import { AgerasProjectPage } from "@/components/project/AgerasPage";

export const Route = createFileRoute("/ageras")({
  component: AgerasPublishedPage,
});

function AgerasPublishedPage() {
  return <AgerasProjectPage content={agerasContent} />;
}
