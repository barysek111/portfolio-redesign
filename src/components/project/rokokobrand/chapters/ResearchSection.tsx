import { useRokokoBrandContent } from "@/lib/rokokoBrandContentContext";
import {
  ContentBlock,
  MajorSection,
  NumberedCalloutSection,
  Prose,
} from "@/components/project/primitives";

export function ResearchSection() {
  const c = useRokokoBrandContent();
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
      <NumberedCalloutSection
        heading={s.activities.heading}
        rows={s.activities.items}
        parseTitles
        layout="split"
        splitTemplate="half"
        cardLayout="callout-stack"
      />
    </MajorSection>
  );
}
