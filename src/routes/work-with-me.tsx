import { createFileRoute } from "@tanstack/react-router";
import { SiteTopNav } from "@/components/nav/SiteTopNav";
import { ContactGrid } from "@/components/shared/ContactGrid";

export const Route = createFileRoute("/work-with-me")({
  component: WorkWithMePage,
});

function WorkWithMePage() {
  return (
    <div className="dark min-h-screen flex flex-col" style={{ background: "var(--background)" }}>
      <SiteTopNav />
      <div className="flex-1 flex items-center">
        <div className="page-shell w-full">
          <ContactGrid />
        </div>
      </div>
    </div>
  );
}
