import { useEatGrimContent } from "@/lib/eatGrimContentContext";
import {
  ContentBlock,
  MajorSection,
  Prose,
} from "@/components/project/cococare/primitives";
import { Figure } from "../Figure";

export function ResearchSection() {
  const c = useEatGrimContent();
  const s = c.research;
  return (
    <MajorSection id="research" title={s.sectionTitle}>
      <ContentBlock
        label={s.researchIntro.heading}
        emphasized
        chapterIntro
        chapterId="research"
      >
        <Prose>{s.researchIntro.body}</Prose>
      </ContentBlock>
      <ContentBlock label={s.competitiveAnalysis.heading}>
        <Prose>{s.competitiveAnalysis.body}</Prose>
        <Figure src={s.competitiveAnalysis.image} callout />
      </ContentBlock>
      <ContentBlock label={s.stakeholderInsights.heading}>
        <Prose>{s.stakeholderInsights.body}</Prose>
      </ContentBlock>
    </MajorSection>
  );
}
