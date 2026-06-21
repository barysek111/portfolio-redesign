import { usePlintoContent } from "@/lib/plintoContentContext";
import { heroIntroBody } from "@/components/project/constants";
import {
  ContentBlock,
  MajorSection,
  Prose,
} from "../primitives";

export function ResearchSection() {
  const c = usePlintoContent();
  const s = c.research;
  return (
    <MajorSection id="research" title={s.sectionTitle} icon={s.sectionIcon}>
      <ContentBlock
        label={s.researchIntro.heading}
        emphasized
        chapterIntro
        chapterId="research"
      >
        <Prose>{s.researchIntro.body}</Prose>
      </ContentBlock>
      <ContentBlock label={s.userContext.heading}>
        <h4 className={heroIntroBody}>{s.userContext.body}</h4>
      </ContentBlock>
      <ContentBlock label={s.competitorAnalysis.heading}>
        <Prose>{s.competitorAnalysis.body}</Prose>
      </ContentBlock>
    </MajorSection>
  );
}
