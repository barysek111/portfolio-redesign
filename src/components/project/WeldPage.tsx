import {
  WeldContentProvider,
  type WeldContent,
} from "@/lib/weldContentContext";
import { DefineSection } from "./weld/chapters/DefineSection";
import { ImplementSection } from "./weld/chapters/ImplementSection";
import { ResearchSection } from "./weld/chapters/ResearchSection";
import { ProjectHero } from "./weld/ProjectHero";
import { SiteTopNav } from "@/components/nav/SiteTopNav";

export function WeldProjectPage({ content }: { content: WeldContent }) {
  return (
    <WeldContentProvider content={content}>
      <main className="case-study min-h-screen antialiased">
        <SiteTopNav />
        <div className="case-page-shell page-shell pb-12">
          <ProjectHero />
          <div className="mt-12">
            <article className="min-w-0 w-full">
              <ResearchSection />
              <DefineSection />
              <ImplementSection />
            </article>
          </div>
        </div>
      </main>
    </WeldContentProvider>
  );
}
