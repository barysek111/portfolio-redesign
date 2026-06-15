import {
  CocoCareContentProvider,
  type CocoCareContent,
} from "@/lib/cocoCareContentContext";
import { DefineSection } from "./cococare/chapters/DefineSection";
import { IdeateSection } from "./cococare/chapters/IdeateSection";
import { PrototypeSection } from "./cococare/chapters/PrototypeSection";
import { ResearchSection } from "./cococare/chapters/ResearchSection";
import { TestSection } from "./cococare/chapters/TestSection";
import { ProjectHero } from "./cococare/ProjectHero";
import { CaseStudyShell } from "@/components/project/CaseStudyShell";
import { CaseChapterNav } from "@/components/project/CaseChapterNav";

const chapters = [
  { id: "research", label: "Research" },
  { id: "define", label: "Define" },
  { id: "ideate", label: "Ideate" },
  { id: "prototype", label: "Prototype" },
  { id: "test", label: "Test" },
];

export function CocoCareProjectPage({ content }: { content: CocoCareContent }) {
  return (
    <CocoCareContentProvider content={content}>
      <CaseStudyShell>
        <ProjectHero />
        <CaseChapterNav chapters={chapters} />
        <article className="min-w-0 w-full">
          <ResearchSection />
          <DefineSection />
          <IdeateSection />
          <PrototypeSection />
          <TestSection />
        </article>
      </CaseStudyShell>
    </CocoCareContentProvider>
  );
}
