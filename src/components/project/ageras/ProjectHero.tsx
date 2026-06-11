import { useAgerasContent } from "@/lib/agerasContentContext";
import { asset } from "./utils";
import { ProjectHero as SharedProjectHero } from "@/components/project/ProjectHero";

export function ProjectHero() {
  const c = useAgerasContent();
  return <SharedProjectHero data={c} assetUrl={asset} />;
}
