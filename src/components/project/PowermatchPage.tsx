import {
  PowermatchContentProvider,
  type PowermatchContent,
} from "@/lib/powermatchContentContext";
import { DefineSection } from "./powermatch/chapters/DefineSection";
import { IdeateSection } from "./powermatch/chapters/IdeateSection";
import { PrototypeSection } from "./powermatch/chapters/PrototypeSection";
import { ResearchSection } from "./powermatch/chapters/ResearchSection";
import { ProjectHero } from "./powermatch/ProjectHero";
import { ProjectNav } from "./powermatch/ProjectNav";

export function PowermatchProjectPage({ content }: { content: PowermatchContent }) {
  return (
    <PowermatchContentProvider content={content}>
      <main className="case-study min-h-screen antialiased">
        <ProjectNav />
        <div className="case-page-shell page-shell pb-12">
          <ProjectHero />
          <div className="mt-12">
            <article className="min-w-0 w-full">
              <ResearchSection />
              <DefineSection />
              <IdeateSection />
              <PrototypeSection />
            </article>
          </div>
        </div>
      </main>
    </PowermatchContentProvider>
  );
}
