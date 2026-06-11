import { useRokokoContent } from "@/lib/rokokoContentContext";
import { asset } from "./utils";
import { ProjectHero as SharedProjectHero } from "@/components/project/ProjectHero";

export function ProjectHero() {
  const c = useRokokoContent();
  return <SharedProjectHero data={c} assetUrl={asset} />;
}
