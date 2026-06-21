import { usePlintoContent } from "@/lib/plintoContentContext";
import { heroIntroBody } from "@/components/project/constants";
import {
  ContentBlock,
  MajorSection,
  NumberedCalloutSection,
  Prose,
} from "../primitives";

export function ReflectionSection() {
  const c = usePlintoContent();
  const s = c.reflection;
  return (
    <MajorSection id="reflection" title={s.sectionTitle} icon={s.sectionIcon}>
      <ContentBlock
        label={s.reflectionIntro.heading}
        emphasized
        chapterIntro
        chapterId="test"
      >
        <Prose>{s.reflectionIntro.body}</Prose>
      </ContentBlock>
      <NumberedCalloutSection
        heading={s.whatIWouldTest.heading}
        rows={s.whatIWouldTest.scenarios.map((sc) => ({ number: sc.number, text: sc.text }))}
        layout="split"
        splitTemplate="half"
        cardLayout="stack"
        parseTitles
        rowsGap="06"
      />
      <ContentBlock label={s.whatComesNext.heading}>
        <h4 className={heroIntroBody}>{s.whatComesNext.body}</h4>
      </ContentBlock>
    </MajorSection>
  );
}
