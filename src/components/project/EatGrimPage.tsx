import {
  EatGrimContentProvider,
  type EatGrimContent,
} from "@/lib/eatGrimContentContext";
import { DefineSection } from "./eatgrim/chapters/DefineSection";
import { DesignSection } from "./eatgrim/chapters/DesignSection";
import { LaunchSection } from "./eatgrim/chapters/LaunchSection";
import { ResearchSection } from "./eatgrim/chapters/ResearchSection";
import { ProjectHero } from "./eatgrim/ProjectHero";
import { CaseStudyShell } from "@/components/project/CaseStudyShell";
import { CaseChapterNav } from "@/components/project/CaseChapterNav";

const chapters = [
  { id: "research", label: "Research" },
  { id: "define", label: "Define" },
  { id: "design", label: "Design" },
  { id: "launch", label: "Launch" },
];

export function EatGrimProjectPage({ content }: { content: EatGrimContent }) {
  return (
    <EatGrimContentProvider content={content}>
      <CaseStudyShell>
        <ProjectHero />
        <CaseChapterNav chapters={chapters} />
        <article className="min-w-0 w-full">
          <ResearchSection />
          <DefineSection />
          <DesignSection />
          <LaunchSection />
        </article>
      </CaseStudyShell>
    </EatGrimContentProvider>
  );
}
