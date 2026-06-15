import { ContactGrid } from "@/components/shared/ContactGrid";

export function SiteFooter() {
  return (
    <footer className="dark w-full" style={{ background: "var(--background)" }}>
      <div className="page-shell py-12">
        <ContactGrid />
        <p className="text-xs m-0 text-muted-foreground mt-09">© Barbora Gadlinova 2026</p>
      </div>
    </footer>
  );
}
