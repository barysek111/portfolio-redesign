import { useRokokoBrandContent } from "@/lib/rokokoBrandContentContext";
import { asset } from "./utils";
import { ProjectHero as SharedProjectHero } from "@/components/project/ProjectHero";

export function ProjectHero() {
  const c = useRokokoBrandContent();
  return <SharedProjectHero data={c} assetUrl={asset} />;
}
