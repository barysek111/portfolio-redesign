import { useCocoCareContent } from "@/lib/cocoCareContentContext";
import { body, h2, metaLabel } from "./constants";

export function ProjectFooterCta() {
  const c = useCocoCareContent();
  const f = c.footerCta;
  return (
    <footer className="mt-20 pt-12 md:mt-24 md:pt-16">
      <h2 className={`${h2} max-w-[52ch]`}>{f.heading}</h2>
      <p className={`mt-6 ${body}`}>{f.links}</p>
      <p className={`mt-10 ${metaLabel}`}>{f.copyright}</p>
    </footer>
  );
}
