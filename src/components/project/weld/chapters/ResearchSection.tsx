import { useWeldContent } from "@/lib/weldContentContext";
import {
  ContentBlock,
  MajorSection,
  NumberedCalloutSection,
  Prose,
} from "@/components/project/cococare/primitives";

export function ResearchSection() {
  const c = useWeldContent();
  const s = c.research;
  return (
    <MajorSection id="research" title={s.sectionTitle}>
      <ContentBlock
        label={s.visualLandscape.heading}
        emphasized
        chapterIntro
        chapterId="research"
      >
        <Prose>{s.visualLandscape.body}</Prose>
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
