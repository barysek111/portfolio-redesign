import { usePlintoContent } from "@/lib/plintoContentContext";
import { asset } from "./utils";
import { ProjectHero as SharedProjectHero } from "@/components/project/ProjectHero";

export function ProjectHero() {
  const c = usePlintoContent();
  return <SharedProjectHero data={c} assetUrl={asset} />;
}
