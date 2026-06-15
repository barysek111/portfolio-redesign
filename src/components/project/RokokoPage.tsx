import {
  RokokoContentProvider,
  type RokokoContent,
} from "@/lib/rokokoContentContext";
import { DefineSection } from "./rokoko/chapters/DefineSection";
import { IdeateSection } from "./rokoko/chapters/IdeateSection";
import { ImplementSection } from "./rokoko/chapters/ImplementSection";
import { ResearchSection } from "./rokoko/chapters/ResearchSection";
import { ProjectHero } from "./rokoko/ProjectHero";
import { CaseStudyShell } from "@/components/project/CaseStudyShell";
import { CaseChapterNav } from "@/components/project/CaseChapterNav";

const chapters = [
  { id: "research", label: "Research" },
  { id: "define", label: "Define" },
  { id: "ideate", label: "Ideate" },
  { id: "implement", label: "Implement" },
];

export function RokokoProjectPage({ content }: { content: RokokoContent }) {
  return (
    <RokokoContentProvider content={content}>
      <CaseStudyShell>
        <ProjectHero />
        <CaseChapterNav chapters={chapters} />
        <article className="min-w-0 w-full">
          <ResearchSection />
          <DefineSection />
          <IdeateSection />
          <ImplementSection />
        </article>
      </CaseStudyShell>
    </RokokoContentProvider>
  );
}
