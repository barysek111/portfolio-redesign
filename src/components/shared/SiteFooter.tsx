import { ContactGrid } from "@/components/shared/ContactGrid";

export function SiteFooter() {
  return (
    <footer className="dark w-full" style={{ background: "var(--background)" }}>
      <div className="page-shell py-12">
        <ContactGrid />
        <div className="btn btn--static w-full justify-center mt-09" style={{ background: "transparent", color: "rgba(255,255,255,0.2)", border: "1px dashed rgba(255,255,255,0.2)" }}>
          <span className="btn__label">© Barbora Gadlinova 2026</span>
        </div>
      </div>
    </footer>
  );
}
