import { usePlintoContent } from "@/lib/plintoContentContext";
import { screenTitle, body } from "@/components/project/constants";
import { CASE_FIGURE_MARKER } from "@/components/project/Figure";
import { cn } from "@/lib/utils";
import {
  ContentBlock,
  Figure,
  MajorSection,
  Prose,
} from "../primitives";

type Screen = {
  image: string;
  heading: string;
  caption: string;
};

function PrototypeScreen({ screen }: { screen: Screen }) {
  if (screen.image) {
    return (
      <Figure
        src={screen.image}
        title={screen.heading}
        caption={screen.caption}
        callout
        calloutTitleAs="h5"
      />
    );
  }

  return (
    <figure className="w-full">
      <div className="case-figure-caption-callout w-full min-h-0 flex-1">
        <h5 className={cn(screenTitle, "case-figure-caption-callout__title")}>
          {screen.heading}
        </h5>
        <p className={cn("case-figure-caption-callout__text", body)}>{screen.caption}</p>
        <div
          className="case-figure-placeholder"
          aria-label={`Placeholder for ${screen.heading}`}
        />
      </div>
    </figure>
  );
}
(PrototypeScreen as any)[CASE_FIGURE_MARKER] = true;

export function PrototypeSection() {
  const c = usePlintoContent();
  const s = c.prototype;
  return (
    <MajorSection id="prototype" title={s.sectionTitle} icon={s.sectionIcon}>
      <ContentBlock
        label={s.translatingConcepts.heading}
        emphasized
        chapterIntro
        chapterId="prototype"
      >
        <Prose>{s.translatingConcepts.body}</Prose>
      </ContentBlock>
      <div className="case-prose-follow-full flex w-full flex-col">
        <ContentBlock label={s.desktop.sectionLabel}>
          <Prose>{s.desktop.fullScreens.intro}</Prose>
          {s.desktop.fullScreens.screens.map((screen) => (
            <PrototypeScreen key={screen.heading} screen={screen} />
          ))}
        </ContentBlock>
        <div className="case-prototype-chat-detail">
          <ContentBlock label={s.desktop.chatDetail.heading}>
            {s.desktop.chatDetail.screens.map((screen) => (
              <PrototypeScreen key={screen.heading} screen={screen} />
            ))}
          </ContentBlock>
        </div>
      </div>
    </MajorSection>
  );
}
