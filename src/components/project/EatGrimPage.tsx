import {
  EatGrimContentProvider,
  type EatGrimContent,
} from "@/lib/eatGrimContentContext";
import { DefineSection } from "./eatgrim/chapters/DefineSection";
import { DesignSection } from "./eatgrim/chapters/DesignSection";
import { LaunchSection } from "./eatgrim/chapters/LaunchSection";
import { ResearchSection } from "./eatgrim/chapters/ResearchSection";
import { ProjectHero } from "./eatgrim/ProjectHero";
import { ProjectNav } from "./eatgrim/ProjectNav";

export function EatGrimProjectPage({ content }: { content: EatGrimContent }) {
  return (
    <EatGrimContentProvider content={content}>
      <main className="case-study min-h-screen antialiased">
        <ProjectNav />
        <div className="case-page-shell page-shell pb-12">
          <ProjectHero />
          <div className="mt-12">
            <article className="min-w-0 w-full">
              <ResearchSection />
              <DefineSection />
              <DesignSection />
              <LaunchSection />
            </article>
          </div>
        </div>
      </main>
    </EatGrimContentProvider>
  );
}
