import { usePlintoContent } from "@/lib/plintoContentContext";
import { body } from "@/components/project/constants";
import {
  ContentBlock,
  MajorSection,
  NumberedCalloutSection,
  Prose,
} from "../primitives";

export function DefineSection() {
  const c = usePlintoContent();
  const s = c.define;
  return (
    <MajorSection id="define" title={s.sectionTitle} icon={s.sectionIcon}>
      <ContentBlock
        label={s.definingNextSteps.heading}
        emphasized
        chapterIntro
        chapterId="define"
      >
        <Prose>{s.definingNextSteps.body}</Prose>
      </ContentBlock>
      <NumberedCalloutSection
        heading={s.threeStates.heading}
        rows={s.threeStates.questions}
        layout="split"
        splitTemplate="half"
        cardLayout="stack"
        parseTitles
      />
      <NumberedCalloutSection
        heading={s.designPrinciples.heading}
        rows={s.designPrinciples.items}
        layout="split"
        splitTemplate="half"
        cardLayout="stack"
        parseTitles
      />
      <ContentBlock label={s.scopeDecision.heading}>
        <p className={body}>{s.scopeDecision.body}</p>
      </ContentBlock>
    </MajorSection>
  );
}
