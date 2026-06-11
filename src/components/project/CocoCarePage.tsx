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
import { ProjectNav } from "./cococare/ProjectNav";

export function CocoCareProjectPage({ content }: { content: CocoCareContent }) {
  return (
    <CocoCareContentProvider content={content}>
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
              <TestSection />
            </article>
          </div>
        </div>
      </main>
    </CocoCareContentProvider>
  );
}
