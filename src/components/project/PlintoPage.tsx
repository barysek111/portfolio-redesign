import {
  PlintoContentProvider,
  type PlintoContent,
} from "@/lib/plintoContentContext";
import { ResearchSection } from "./plinto/chapters/ResearchSection";
import { DefineSection } from "./plinto/chapters/DefineSection";
import { DesignSection } from "./plinto/chapters/DesignSection";
import { PrototypeSection } from "./plinto/chapters/PrototypeSection";
import { ReflectionSection } from "./plinto/chapters/ReflectionSection";
import { ProjectHero } from "./plinto/ProjectHero";
import { CaseStudyShell } from "@/components/project/CaseStudyShell";
import { CaseChapterNav } from "@/components/project/CaseChapterNav";

const chapters = [
  { id: "research", label: "Research" },
  { id: "define", label: "Define" },
  { id: "design", label: "Design" },
  { id: "prototype", label: "Prototype" },
  { id: "reflection", label: "Reflection" },
];

export function PlintoProjectPage({ content }: { content: PlintoContent }) {
  return (
    <PlintoContentProvider content={content}>
      <CaseStudyShell>
        <ProjectHero />
        <CaseChapterNav chapters={chapters} />
        <article className="min-w-0 w-full">
          <ResearchSection />
          <DefineSection />
          <DesignSection />
          <PrototypeSection />
          <ReflectionSection />
        </article>
      </CaseStudyShell>
    </PlintoContentProvider>
  );
}
