import { useAgerasContent } from "@/lib/agerasContentContext";
import {
  ContentBlock,
  MajorSection,
  NumberedCalloutSection,
  Prose,
} from "@/components/project/cococare/primitives";
import { Figure } from "../Figure";

export function ResearchSection() {
  const c = useAgerasContent();
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
      <ContentBlock label={s.designAudit.heading}>
        <Prose>{s.designAudit.body}</Prose>
      </ContentBlock>
      <NumberedCalloutSection
        heading={s.designGoals.heading}
        rows={s.designGoals.items}
        parseTitles
        layout="split"
        splitTemplate="half"
        cardLayout="callout-stack"
      />
    </MajorSection>
  );
}
