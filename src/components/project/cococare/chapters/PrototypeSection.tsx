import { useCocoCareContent } from "@/lib/cocoCareContentContext";
import { screenTitle, subsectionTitle } from "../constants";
import {
  ContentBlock,
  EditorialSplit,
  Figure,
  MajorSection,
  Prose,
} from "../primitives";

export function PrototypeSection() {
  const c = useCocoCareContent();
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
        <Prose>{s.designSystem.body}</Prose>
        <div className="space-y-8">
          {s.designSystem.images.map((img) => (
            <Figure key={img} src={img} />
          ))}
        </div>
      </ContentBlock>
      <EditorialSplit label={s.highFidelity.heading}>
        <Prose>{s.highFidelity.intro}</Prose>
        <div className="pt-8">
          <h3 className={`${subsectionTitle} mb-4`}>
            {s.highFidelity.mobileApp.sectionLabel}
          </h3>
          <div className="space-y-10">
            {s.highFidelity.mobileApp.screens.map((screen, i) => (
              <div key={i} className={i > 0 ? "pt-10" : ""}>
                {"heading" in screen && screen.heading ? (
                  <h5 className={`${screenTitle} mb-3`}>{screen.heading}</h5>
                ) : null}
                <Figure src={screen.image} />
              </div>
            ))}
          </div>
        </div>
        <div className="pt-8">
          <h3 className={`${subsectionTitle} mb-4`}>
            {s.highFidelity.desktopPortal.sectionLabel}
          </h3>
          <div className="space-y-10">
            {s.highFidelity.desktopPortal.screens.map((screen, i) => (
              <div key={i} className={i > 0 ? "pt-10" : ""}>
                <Figure
                  src={screen.image}
                  title={"heading" in screen ? screen.heading : undefined}
                  caption={"caption" in screen ? screen.caption : undefined}
                  callout={Boolean(
                    ("heading" in screen && screen.heading) ||
                      ("caption" in screen && screen.caption),
                  )}
                  calloutTitleAs="h5"
                />
              </div>
            ))}
          </div>
        </div>
      </EditorialSplit>
    </MajorSection>
  );
}
