import {
  WeldContentProvider,
  type WeldContent,
} from "@/lib/weldContentContext";
import { DefineSection } from "./weld/chapters/DefineSection";
import { ImplementSection } from "./weld/chapters/ImplementSection";
import { ResearchSection } from "./weld/chapters/ResearchSection";
import { ProjectHero } from "./weld/ProjectHero";
import { CaseStudyShell } from "@/components/project/CaseStudyShell";
import { CaseChapterNav } from "@/components/project/CaseChapterNav";

const chapters = [
  { id: "research", label: "Research" },
  { id: "define", label: "Define" },
  { id: "implement", label: "Implement" },
];

export function WeldProjectPage({ content }: { content: WeldContent }) {
  return (
    <WeldContentProvider content={content}>
      <CaseStudyShell>
        <ProjectHero />
        <CaseChapterNav chapters={chapters} />
        <article className="min-w-0 w-full">
          <ResearchSection />
          <DefineSection />
          <ImplementSection />
        </article>
      </CaseStudyShell>
    </WeldContentProvider>
  );
}
