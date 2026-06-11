import { usePowermatchContent } from "@/lib/powermatchContentContext";
import { figureRow12, figureRow12Cell } from "../constants";
import {
  ContentBlock,
  Figure,
  FigureRow,
  MajorSection,
  Prose,
} from "../primitives";

export function IdeateSection() {
  const c = usePowermatchContent();
  const s = c.ideate;
  return (
    <MajorSection id="ideate" title={s.sectionTitle} icon={s.sectionIcon}>
      <ContentBlock
        label={s.fromStructureToConcepts.heading}
        emphasized
        chapterIntro
        chapterId="ideate"
      >
        <Prose>{s.fromStructureToConcepts.body}</Prose>
      </ContentBlock>
      <ContentBlock label={s.sitemap.heading}>
        <Prose>{s.sitemap.body}</Prose>
        <FigureRow>
          {s.sitemap.items.map((item) => (
            <Figure
              key={item.image}
              src={item.image}
              title={item.title}
              callout
              calloutTitleAs="h5"
            />
          ))}
        </FigureRow>
      </ContentBlock>
      <ContentBlock label={s.informationArchitecture.heading}>
        <Prose>{s.informationArchitecture.body}</Prose>
        <div className={figureRow12}>
          {s.informationArchitecture.images.map((img) => (
            <div key={img} className={figureRow12Cell}>
              <Figure src={img} callout />
            </div>
          ))}
        </div>
      </ContentBlock>
      <ContentBlock label={s.userFlows.heading}>
        <Prose>{s.userFlows.body}</Prose>
        <FigureRow>
          {s.userFlows.images.map((img) => (
            <Figure key={img} src={img} layout="pair" />
          ))}
        </FigureRow>
      </ContentBlock>
      <ContentBlock label={s.wireframes.heading}>
        <Prose>{s.wireframes.body}</Prose>
        <div className="case-prose-follow-full flex flex-col">
          {s.wireframes.images.map((img) => (
            <Figure key={img} src={img} callout />
          ))}
        </div>
      </ContentBlock>
    </MajorSection>
  );
}
