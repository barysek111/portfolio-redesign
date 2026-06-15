import {
  PowermatchContentProvider,
  type PowermatchContent,
} from "@/lib/powermatchContentContext";
import { DefineSection } from "./powermatch/chapters/DefineSection";
import { IdeateSection } from "./powermatch/chapters/IdeateSection";
import { PrototypeSection } from "./powermatch/chapters/PrototypeSection";
import { ResearchSection } from "./powermatch/chapters/ResearchSection";
import { ProjectHero } from "./powermatch/ProjectHero";
import { CaseStudyShell } from "@/components/project/CaseStudyShell";
import { CaseChapterNav } from "@/components/project/CaseChapterNav";

const chapters = [
  { id: "research", label: "Research" },
  { id: "define", label: "Define" },
  { id: "ideate", label: "Ideate" },
  { id: "prototype", label: "Prototype" },
];

export function PowermatchProjectPage({ content }: { content: PowermatchContent }) {
  return (
    <PowermatchContentProvider content={content}>
      <CaseStudyShell>
        <ProjectHero />
        <CaseChapterNav chapters={chapters} />
        <article className="min-w-0 w-full">
          <ResearchSection />
          <DefineSection />
          <IdeateSection />
          <PrototypeSection />
        </article>
      </CaseStudyShell>
    </PowermatchContentProvider>
  );
}
