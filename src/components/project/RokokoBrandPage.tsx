import {
  RokokoBrandContentProvider,
  type RokokoBrandContent,
} from "@/lib/rokokoBrandContentContext";
import { DefineSection } from "./rokokobrand/chapters/DefineSection";
import { ImplementSection } from "./rokokobrand/chapters/ImplementSection";
import { ReflectSection } from "./rokokobrand/chapters/ReflectSection";
import { ResearchSection } from "./rokokobrand/chapters/ResearchSection";
import { ProjectHero } from "./rokokobrand/ProjectHero";
import { ProjectNav } from "./rokokobrand/ProjectNav";

export function RokokoBrandProjectPage({ content }: { content: RokokoBrandContent }) {
  return (
    <RokokoBrandContentProvider content={content}>
      <main className="case-study min-h-screen antialiased">
        <ProjectNav />
        <div className="case-page-shell page-shell pb-12">
          <ProjectHero />
          <div className="mt-12">
            <article className="min-w-0 w-full">
              <ResearchSection />
              <DefineSection />
              <ImplementSection />
              <ReflectSection />
            </article>
          </div>
        </div>
      </main>
    </RokokoBrandContentProvider>
  );
}
