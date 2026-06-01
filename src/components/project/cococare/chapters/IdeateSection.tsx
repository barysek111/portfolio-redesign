import { useCocoCareContent } from "@/lib/cocoCareContentContext";
import {
  ContentBlock,
  Figure,
  FigureRow,
  MajorSection,
  Prose,
} from "../primitives";

export function IdeateSection() {
  const c = useCocoCareContent();
  const s = c.ideate;
  return (
    <MajorSection id="ideate" title={s.sectionTitle} icon={s.sectionIcon}>
      <ContentBlock
        label={s.fromStructureToConcepts.heading.replace(/\uFEFF/g, "")}
        emphasized
        chapterIntro
        chapterId="ideate"
      >
        <Prose>{s.fromStructureToConcepts.body}</Prose>
      </ContentBlock>
      <ContentBlock label={s.sitemap.heading}>
        <Prose>{s.sitemap.body}</Prose>
        <Figure src={s.sitemap.image} />
      </ContentBlock>
      <ContentBlock label={s.informationArchitecture.heading}>
        <Prose>{s.informationArchitecture.body}</Prose>
        <FigureRow>
          {s.informationArchitecture.images.map((img) => (
            <Figure key={img} src={img} layout="pair" />
          ))}
        </FigureRow>
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
        <div className="space-y-8">
          {s.wireframes.images.map((img) => (
            <Figure key={img} src={img} />
          ))}
        </div>
      </ContentBlock>
    </MajorSection>
  );
}
