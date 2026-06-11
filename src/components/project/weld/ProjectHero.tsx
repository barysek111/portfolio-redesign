import { useWeldContent } from "@/lib/weldContentContext";
import { asset } from "./utils";
import { ProjectHero as SharedProjectHero } from "@/components/project/ProjectHero";

export function ProjectHero() {
  const c = useWeldContent();
  return <SharedProjectHero data={c} assetUrl={asset} />;
}
