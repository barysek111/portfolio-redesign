import {
  RokokoContentProvider,
  type RokokoContent,
} from "@/lib/rokokoContentContext";
import { DefineSection } from "./rokoko/chapters/DefineSection";
import { IdeateSection } from "./rokoko/chapters/IdeateSection";
import { ImplementSection } from "./rokoko/chapters/ImplementSection";
import { ResearchSection } from "./rokoko/chapters/ResearchSection";
import { ProjectHero } from "./rokoko/ProjectHero";
import { ProjectNav } from "./rokoko/ProjectNav";

export function RokokoProjectPage({ content }: { content: RokokoContent }) {
  return (
    <RokokoContentProvider content={content}>
      <main className="case-study min-h-screen antialiased">
        <ProjectNav />
        <div className="case-page-shell page-shell pb-12">
          <ProjectHero />
          <div className="mt-12">
            <article className="min-w-0 w-full">
              <ResearchSection />
              <DefineSection />
              <IdeateSection />
              <ImplementSection />
            </article>
          </div>
        </div>
      </main>
    </RokokoContentProvider>
  );
}
