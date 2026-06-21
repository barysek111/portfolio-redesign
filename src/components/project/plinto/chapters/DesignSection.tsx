import { usePlintoContent } from "@/lib/plintoContentContext";
import { figureRow12 } from "@/components/project/constants";
import {
  ContentBlock,
  Figure,
  MajorSection,
  Prose,
} from "../primitives";

const figureRow12Cell4StackTablet =
  "case-figure-row__cell lg:col-span-4 max-lg:col-span-12 min-w-0";

export function DesignSection() {
  const c = usePlintoContent();
  const s = c.design;
  return (
    <MajorSection id="design" title={s.sectionTitle} icon={s.sectionIcon}>
      <ContentBlock
        label={s.translatingConcepts.heading}
        emphasized
        chapterIntro
        chapterId="prototype"
      >
        <Prose>{s.translatingConcepts.body}</Prose>
      </ContentBlock>
      <ContentBlock label={s.wireframes.heading}>
        <Prose>{s.wireframes.body}</Prose>
        <div className="case-prose-follow-full flex w-full flex-col">
          <div className={`${figureRow12} md:grid-cols-12`}>
            {s.wireframes.screens.map((screen) => (
              <div key={screen.heading} className={figureRow12Cell4StackTablet}>
                <Figure
                  src={screen.image}
                  title={screen.heading}
                  caption={screen.caption}
                  callout
                  calloutTitleAs="h5"
                />
              </div>
            ))}
          </div>
        </div>
      </ContentBlock>
      <ContentBlock label={s.interactionModel.heading}>
        <Prose>{s.interactionModel.body}</Prose>
      </ContentBlock>
    </MajorSection>
  );
}
