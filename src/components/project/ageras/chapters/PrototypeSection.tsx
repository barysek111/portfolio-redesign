import { useAgerasContent } from "@/lib/agerasContentContext";
import {
  ContentBlock,
  FigureRow,
  MajorSection,
  Prose,
} from "@/components/project/primitives";
import { Figure } from "../Figure";

export function PrototypeSection() {
  const c = useAgerasContent();
  const s = c.prototype;
  const [lpImg1, lpImg2] = s.mainLandingPages.images;
  return (
    <MajorSection id="prototype" title={s.sectionTitle}>
      <ContentBlock
        label={s.puttingItTogether.heading}
        emphasized
        chapterIntro
        chapterId="prototype"
      >
        <Prose>{s.puttingItTogether.body}</Prose>
      </ContentBlock>
      <ContentBlock label={s.mainLandingPages.heading}>
        <Prose>{s.mainLandingPages.body}</Prose>
        <FigureRow>
          <Figure src={lpImg1} layout="pair" callout />
          <Figure src={lpImg2} layout="pair" callout />
        </FigureRow>
      </ContentBlock>
      <ContentBlock label={s.highFidelityMockups.heading}>
        <Prose>{s.highFidelityMockups.body}</Prose>
        <div className="case-prose-follow-full flex flex-col">
          {s.highFidelityMockups.images.map((img) => (
            <Figure key={img} src={img} callout />
          ))}
        </div>
      </ContentBlock>
    </MajorSection>
  );
}
