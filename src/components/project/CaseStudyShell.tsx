import type { ReactNode } from "react";
import { SiteTopNav } from "@/components/nav/SiteTopNav";

export function CaseStudyShell({ children }: { children: ReactNode }) {
  return (
    <main className="case-study min-h-screen overflow-x-hidden antialiased">
      <SiteTopNav />
      <div className="case-page-shell page-shell pb-12 flex flex-col gap-13">
        {children}
      </div>
    </main>
  );
}
