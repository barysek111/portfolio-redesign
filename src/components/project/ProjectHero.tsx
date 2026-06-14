import { Button } from "@/components/ui/Pill";
import { NumberedCalloutStack } from "@/components/project/NumberedCalloutStack";
import {
  contentBlockLabel,
  heroIntroBody,
  heroIntroSplit,
  heroLead,
  metaItemLabel,
} from "@/components/project/cococare/constants";
import {
  numberedRowsFromItems,
  packTagItems,
  toSentenceCase,
} from "@/components/project/cococare/utils";

export interface CaseStudyHeroData {
  hero: {
    backLink: string;
    title: string;
    subtitle: string;
    heroImage: string;
    heroImageAlt: string;
    metadata: {
      client: { label: string; value: string };
      year: { value: string };
      field: { items: readonly string[] };
      role: { label: string; items: readonly string[] };
      tools: { label: string; items: readonly string[] };
    };
  };
  projectBackground: { heading: string; body: string };
  theChallenge: {
    heading: string;
    intro: string;
    bullets: readonly string[];
  };
}

function MetaItem({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div>
      <dt className={metaItemLabel}>{label}</dt>
      <dd className="mt-03">
        <ul className="case-meta-plain-list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </dd>
    </div>
  );
}

export function ProjectHero({
  data,
  assetUrl,
}: {
  data: CaseStudyHeroData;
  assetUrl: (file: string) => string;
}) {
  const { hero, projectBackground, theChallenge } = data;
  return (
    <header className="flex flex-col gap-11 overflow-visible">
      <Button variant="arrow" direction="left" to="/" className="case-back-link">
        {hero.backLink}
      </Button>
      <div className="flex flex-col gap-07 lg:flex-row lg:items-start lg:gap-13">
        <div className="flex min-w-0 w-full flex-1 flex-col gap-09">
          <h1 className={`${heroLead} mt-0 max-w-[80%]`}>
            <span className="sr-only">{hero.title}: </span>
            {hero.subtitle}
          </h1>
          <ul className="meta-pills meta-pills--hero-lead">
            <li>
              <Button variant="staticdark">Shipped</Button>
            </li>
            <li>
              <Button variant="static">{hero.metadata.client.label}: {hero.metadata.client.value}</Button>
            </li>
            <li>
              <Button variant="static">{hero.metadata.year.value}</Button>
            </li>
            {packTagItems(hero.metadata.field.items, 640).map((item) => (
              <li key={item}>
                <Button variant="static">{item}</Button>
              </li>
            ))}
          </ul>
        </div>
        <dl className="case-hero-meta grid w-fit shrink-0 grid-cols-1 gap-x-08 gap-y-04 sm:grid-cols-2 sm:gap-y-05 lg:grid-cols-2 max-lg:w-full lg:ml-auto">
          <MetaItem label={hero.metadata.role.label} items={hero.metadata.role.items} />
          <MetaItem label={hero.metadata.tools.label} items={hero.metadata.tools.items} />
        </dl>
      </div>
      <figure className="overflow-hidden">
        <img
          src={assetUrl(hero.heroImage)}
          alt={hero.heroImageAlt}
          className="block h-auto w-full max-w-none"
        />
      </figure>
      <div className="flex w-full min-w-0 flex-col gap-11">
        <div id="background" className={`${heroIntroSplit} scroll-mt-12`}>
          <h2 className={contentBlockLabel}>
            {toSentenceCase(projectBackground.heading)}
          </h2>
          <h3 className={`${heroIntroBody} m-0`}>{projectBackground.body}</h3>
        </div>
        <div id="challenge" className={`${heroIntroSplit} scroll-mt-12`}>
          <h2 className={contentBlockLabel}>{toSentenceCase(theChallenge.heading)}</h2>
          <div className="flex min-w-0 flex-col gap-07">
            <h3 className={`${heroIntroBody} m-0`}>{theChallenge.intro}</h3>
            <NumberedCalloutStack
              items={numberedRowsFromItems(theChallenge.bullets).map((row) => ({
                key: `${row.number}-${row.text}`,
                number: row.number,
                text: row.text,
              }))}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
