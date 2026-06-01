import {
  CocoCareContentProvider,
  type CocoCareContent,
} from "@/lib/cocoCareContentContext";
import { DefineSection } from "./cococare/chapters/DefineSection";
import { IdeateSection } from "./cococare/chapters/IdeateSection";
import { PrototypeSection } from "./cococare/chapters/PrototypeSection";
import { ResearchSection } from "./cococare/chapters/ResearchSection";
import { TestSection } from "./cococare/chapters/TestSection";
import { ProjectFooterCta } from "./cococare/ProjectFooterCta";
import { ProjectHero } from "./cococare/ProjectHero";
import { ProjectNav } from "./cococare/ProjectNav";

export function CocoCareProjectPage({ content }: { content: CocoCareContent }) {
  return (
    <CocoCareContentProvider content={content}>
      <main className="case-study min-h-screen antialiased">
        <ProjectNav />
        <div className="mx-auto w-full max-w-[1280px] px-4 pb-24 pt-24 md:px-6 md:pb-32 md:pt-32">
          <ProjectHero />
          <div className="mt-[120px]">
            <article className="min-w-0 w-full">
              <ResearchSection />
              <DefineSection />
              <IdeateSection />
              <PrototypeSection />
              <TestSection />
              <ProjectFooterCta />
            </article>
          </div>
        </div>
      </main>
    </CocoCareContentProvider>
  );
}
