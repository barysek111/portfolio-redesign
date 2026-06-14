import {
  AgerasContentProvider,
  type AgerasContent,
} from "@/lib/agerasContentContext";
import { DefineSection } from "./ageras/chapters/DefineSection";
import { ImplementSection } from "./ageras/chapters/ImplementSection";
import { PrototypeSection } from "./ageras/chapters/PrototypeSection";
import { ResearchSection } from "./ageras/chapters/ResearchSection";
import { SystemSection } from "./ageras/chapters/SystemSection";
import { ProjectHero } from "./ageras/ProjectHero";
import { SiteTopNav } from "@/components/nav/SiteTopNav";

export function AgerasProjectPage({ content }: { content: AgerasContent }) {
  return (
    <AgerasContentProvider content={content}>
      <main className="case-study min-h-screen antialiased">
        <SiteTopNav />
        <div className="case-page-shell page-shell pb-12">
          <ProjectHero />
          <div className="mt-12">
            <article className="min-w-0 w-full">
              <ResearchSection />
              <DefineSection />
              <SystemSection />
              <PrototypeSection />
              <ImplementSection />
            </article>
          </div>
        </div>
      </main>
    </AgerasContentProvider>
  );
}
