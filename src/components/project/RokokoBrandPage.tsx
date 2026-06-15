import {
  RokokoBrandContentProvider,
  type RokokoBrandContent,
} from "@/lib/rokokoBrandContentContext";
import { DefineSection } from "./rokokobrand/chapters/DefineSection";
import { ImplementSection } from "./rokokobrand/chapters/ImplementSection";
import { ReflectSection } from "./rokokobrand/chapters/ReflectSection";
import { ResearchSection } from "./rokokobrand/chapters/ResearchSection";
import { ProjectHero } from "./rokokobrand/ProjectHero";
import { CaseStudyShell } from "@/components/project/CaseStudyShell";
import { CaseChapterNav } from "@/components/project/CaseChapterNav";

const chapters = [
  { id: "research", label: "Research" },
  { id: "define", label: "Define" },
  { id: "implement", label: "Implement" },
  { id: "reflect", label: "Reflect" },
];

export function RokokoBrandProjectPage({ content }: { content: RokokoBrandContent }) {
  return (
    <RokokoBrandContentProvider content={content}>
      <CaseStudyShell>
        <ProjectHero />
        <CaseChapterNav chapters={chapters} />
        <article className="min-w-0 w-full">
          <ResearchSection />
          <DefineSection />
          <ImplementSection />
          <ReflectSection />
        </article>
      </CaseStudyShell>
    </RokokoBrandContentProvider>
  );
}
