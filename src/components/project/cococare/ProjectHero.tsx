import { useCocoCareContent } from "@/lib/cocoCareContentContext";
import { asset } from "./utils";
import { ProjectHero as SharedProjectHero } from "@/components/project/ProjectHero";

export function ProjectHero() {
  const c = useCocoCareContent();
  return <SharedProjectHero data={c} assetUrl={asset} />;
}
