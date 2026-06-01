import { Link } from "@tanstack/react-router";
import { useCocoCareContent } from "@/lib/cocoCareContentContext";
import {
  h3,
  heroIntroBody,
  heroIntroSplit,
  heroLead,
  metaItemLabel,
  metaLabel,
} from "./constants";
import { NumberedCalloutRows } from "./primitives";
import { asset, numberedRowsFromItems, packTagItems, toSentenceCase } from "./utils";

function MetaItem({
  label,
  value,
  items,
  align = "start",
  colSpan,
  plain = false,
}: {
  label: string;
  value?: string;
  items?: readonly string[];
  align?: "start" | "end";
  colSpan?: 2;
  plain?: boolean;
}) {
  const tagsClass = align === "end" ? "case-meta-tags justify-end" : "case-meta-tags";
  const ddClass = align === "end" ? "mt-2 flex justify-end" : "mt-2";

  return (
    <div
      className={`${plain ? "" : "min-w-0"} ${colSpan === 2 ? "col-span-2" : ""} ${align === "end" ? "w-full" : ""}`}
    >
      <dt className={metaItemLabel}>{label}</dt>
      {items ? (
        plain ? (
          <dd className="mt-2">
            <ul className="case-meta-plain-list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </dd>
        ) : (
          <dd className={ddClass}>
            <ul className={tagsClass}>
              {items.map((item) => (
                <li key={item}>
                  <span className="case-meta-tag">{item}</span>
                </li>
              ))}
            </ul>
          </dd>
        )
      ) : (
        <dd className={ddClass}>
          <span className="case-meta-tag">{value}</span>
        </dd>
      )}
    </div>
  );
}

export function ProjectHero() {
  const c = useCocoCareContent();
  const { hero, projectBackground, theChallenge } = c;
  return (
    <header className="flex flex-col gap-[80px]">
      <Link
        to="/"
        className={`case-back-link ${metaLabel} inline-flex items-center gap-2 hover:text-foreground`}
      >
        <span aria-hidden>←</span> {hero.backLink}
      </Link>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-[calc(3rem+92px)]">
        <div className="min-w-0 w-full flex-1">
          <h1 className={`${heroLead} mb-5 mt-0`}>
            <span className="sr-only">{hero.title}: </span>
            {hero.subtitle}
          </h1>
          <ul className="case-meta-tags">
            <li>
              <span className="case-meta-tag case-meta-tag--filled">Shipped</span>
            </li>
            <li>
              <span className="case-meta-tag">
                {hero.metadata.client.label}: {hero.metadata.client.value}
              </span>
            </li>
            <li>
              <span className="case-meta-tag">{hero.metadata.year.value}</span>
            </li>
            {packTagItems(hero.metadata.field.items, 640).map((item) => (
              <li key={item}>
                <span className="case-meta-tag">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <dl className="case-hero-meta grid w-fit shrink-0 grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2 sm:gap-y-4 lg:grid-cols-2 max-lg:w-full lg:ml-auto">
          <MetaItem label={hero.metadata.role.label} items={hero.metadata.role.items} plain />
          <MetaItem label={hero.metadata.tools.label} items={hero.metadata.tools.items} plain />
        </dl>
      </div>
      <figure className="overflow-hidden">
        <img
          src={asset(hero.heroImage)}
          alt="Coco Care hero showing the patient mobile app and physiotherapist web portal"
          className="block h-auto w-full max-w-none"
        />
      </figure>
      <div className="flex w-full min-w-0 flex-col gap-[80px]">
        <div id="background" className={`${heroIntroSplit} scroll-mt-28`}>
          <h3 className={h3}>{toSentenceCase(projectBackground.heading)}</h3>
          <h4 className={`${heroIntroBody} m-0`}>{projectBackground.body}</h4>
        </div>
        <div id="challenge" className={`${heroIntroSplit} scroll-mt-28`}>
          <h3 className={h3}>{toSentenceCase(theChallenge.heading)}</h3>
          <div className="flex min-w-0 flex-col gap-[30px]">
            <h4 className={`${heroIntroBody} m-0`}>{theChallenge.intro}</h4>
            <NumberedCalloutRows
              variant="hero"
              rows={numberedRowsFromItems(theChallenge.bullets)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
