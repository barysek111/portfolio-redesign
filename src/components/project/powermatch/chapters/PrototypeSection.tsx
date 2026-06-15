import { usePowermatchContent } from "@/lib/powermatchContentContext";
import { heroIntroBody, subsectionTitle } from "@/components/project/constants";
import {
  ContentBlock,
  EditorialSplit,
  Figure,
  MajorSection,
  Prose,
} from "../primitives";

export function PrototypeSection() {
  const c = usePowermatchContent();
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
      <ContentBlock label={s.designSystem.heading}>
        <h3 className={heroIntroBody}>{s.designSystem.body}</h3>
        <div className="case-prose-follow-full flex w-full flex-col gap-09">
          {s.designSystem.images.map((img) => (
            <Figure key={img} src={img} callout />
          ))}
        </div>
      </ContentBlock>
      <EditorialSplit label={s.highFidelity.heading}>
        <h3 className={heroIntroBody}>{s.highFidelity.intro}</h3>
        <div className="case-prose-follow-full flex w-full flex-col">
          <div className="case-prose-follow-half flex w-full flex-col">
            <h4 className={subsectionTitle}>
              {s.highFidelity.mobileApp.sectionLabel}
            </h4>
            <div className="case-prose-follow-full flex flex-col">
              {s.highFidelity.mobileApp.screens.map((screen, i) => (
                <Figure
                  key={i}
                  src={screen.image}
                  title={"heading" in screen ? screen.heading : undefined}
                  callout
                  calloutTitleAs="h5"
                />
              ))}
            </div>
          </div>
          <div className="case-prose-follow-half flex w-full flex-col">
            <h4 className={subsectionTitle}>
              {s.highFidelity.desktopPortal.sectionLabel}
            </h4>
            <div className="case-prose-follow-full flex flex-col">
              {s.highFidelity.desktopPortal.screens.map((screen, i) => (
                <Figure
                  key={i}
                  src={screen.image}
                  title={"heading" in screen ? screen.heading : undefined}
                  caption={"caption" in screen ? screen.caption : undefined}
                  callout
                  calloutTitleAs="h5"
                />
              ))}
            </div>
          </div>
        </div>
      </EditorialSplit>
    </MajorSection>
  );
}
