import {
  AgerasContentProvider,
  type AgerasContent,
} from "@/lib/agerasContentContext";
import { DefineSection } from "./ageras/chapters/DefineSection";
import { ImplementSection } from "./ageras/chapters/ImplementSection";
import { PrototypeSection } from "./ageras/chapters/PrototypeSection";
import { ResearchSection } from "./ageras/chapters/ResearchSection";
import { SystemSection } from "./ageras/chapters/SystemSection";
import { ProjectHero } from "./ageras/ProjectHero";
import { CaseStudyShell } from "@/components/project/CaseStudyShell";
import { CaseChapterNav } from "@/components/project/CaseChapterNav";

const chapters = [
  { id: "research", label: "Research" },
  { id: "define", label: "Define" },
  { id: "system", label: "System" },
  { id: "prototype", label: "Prototype" },
  { id: "implement", label: "Implement" },
];

export function AgerasProjectPage({ content }: { content: AgerasContent }) {
  return (
    <AgerasContentProvider content={content}>
      <CaseStudyShell>
        <ProjectHero />
        <CaseChapterNav chapters={chapters} />
        <article className="min-w-0 w-full">
          <ResearchSection />
          <DefineSection />
          <SystemSection />
          <PrototypeSection />
          <ImplementSection />
        </article>
      </CaseStudyShell>
    </AgerasContentProvider>
  );
}
