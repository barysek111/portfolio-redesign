import { usePowermatchContent } from "@/lib/powermatchContentContext";
import { asset } from "./utils";
import { ProjectHero as SharedProjectHero } from "@/components/project/ProjectHero";

export function ProjectHero() {
  const c = usePowermatchContent();
  return <SharedProjectHero data={c} assetUrl={asset} />;
}
