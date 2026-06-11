import { useEatGrimContent } from "@/lib/eatGrimContentContext";
import { asset } from "./utils";
import { ProjectHero as SharedProjectHero } from "@/components/project/ProjectHero";

export function ProjectHero() {
  const c = useEatGrimContent();
  return <SharedProjectHero data={c} assetUrl={asset} />;
}
