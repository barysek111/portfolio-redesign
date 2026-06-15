import { Button } from "@/components/ui/Button";
import { NumberedCalloutStack } from "@/components/project/NumberedCalloutStack";
import {
  contentBlockLabel,
  heroIntroBody,
  heroIntroSplit,
  heroLead,
} from "@/components/project/constants";
import {
  numberedRowsFromItems,
  toSentenceCase,
} from "@/components/project/utils";

export interface CaseStudyHeroData {
  hero: {
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

export function ProjectHero({
  data,
  assetUrl,
}: {
  data: CaseStudyHeroData;
  assetUrl: (file: string) => string;
}) {
  const { hero, projectBackground, theChallenge } = data;
  return (
    <header className="flex flex-col gap-12 overflow-visible">
      {/* Centered title + pills */}
      <div className="flex flex-col items-center gap-05 py-11">
        <h1 className={`${heroLead} mt-0 text-center md:max-w-[66.67%]`}>{hero.title}</h1>
        <div className="flex flex-wrap justify-center gap-03 [&>.btn]:w-fit">
          <Button variant="staticdark">Shipped</Button>
          <Button variant="static">{hero.metadata.client.label}: {hero.metadata.client.value}</Button>
          <Button variant="static">{hero.metadata.year.value}</Button>
          {hero.metadata.field.items.map((item) => (
            <Button key={item} variant="static">{item}</Button>
          ))}
        </div>
      </div>

      {/* 3-column info bar */}
      <div className="grid grid-cols-1 gap-03 items-start md:grid-cols-12 md:gap-x-03 md:gap-y-0">
        <div className="md:col-span-6 lg:col-span-8 flex flex-col">
          <Button variant="static" className="justify-start w-fit">About</Button>
          <div className="pt-04 pl-04 pb-04 pr-05 md:max-w-[87.5%]">
            <p className={`${heroIntroBody} m-0`}>{hero.subtitle}</p>
          </div>
        </div>
        <div className="md:col-span-3 lg:col-span-2 flex flex-col">
          <Button variant="static" className="justify-start">{hero.metadata.tools.label}</Button>
          <div className="pt-04 pl-04 pb-04 pr-05">
            {hero.metadata.tools.items.map((item) => (
              <p key={item} className="m-0">{item}</p>
            ))}
          </div>
        </div>
        <div className="md:col-span-3 lg:col-span-2 flex flex-col">
          <Button variant="static" className="justify-start">{hero.metadata.role.label}</Button>
          <div className="pt-04 pl-04 pb-04 pr-05">
            <p className="m-0">{hero.metadata.role.items.join(', ')}</p>
          </div>
        </div>
      </div>

      <figure className="overflow-hidden">
        <img
          src={assetUrl(hero.heroImage)}
          alt={hero.heroImageAlt}
          className="block h-auto w-full max-w-none"
        />
      </figure>

      <div className="flex w-full min-w-0 flex-col gap-12">
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
