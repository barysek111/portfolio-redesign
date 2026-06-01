import { StickyNoteEqualizedStack } from "@/components/project/CaseStickyNotes";
import { useCocoCareContent } from "@/lib/cocoCareContentContext";
import { body, heroIntroBody } from "../constants";
import {
  ContentBlock,
  Figure,
  MajorSection,
  NumberedCalloutSection,
  Prose,
} from "../primitives";

export function DefineSection() {
  const c = useCocoCareContent();
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
      <ContentBlock label={s.problemStatement.heading}>
        <h4 className={heroIntroBody}>{s.problemStatement.body}</h4>
      </ContentBlock>
      <NumberedCalloutSection
        heading={s.howMightWe.heading}
        rows={s.howMightWe.questions}
        layout="split"
        splitTemplate="half"
      />
      {s.userNeeds.items.map((item) => (
        <Figure
          key={item.image}
          src={item.image}
          layout="pair"
          title={item.title}
          caption={item.caption}
          callout
          calloutTitleAs="h2"
        />
      ))}
      <StickyNoteEqualizedStack>
        {s.successMetrics.items.map((item) => (
          <Figure
            key={item.image}
            src={item.image}
            layout="pair"
            title={item.title}
            caption={item.caption}
            callout
            calloutTitleAs="h2"
          />
        ))}
      </StickyNoteEqualizedStack>
      <ContentBlock label={s.projectGoals.title}>
        <p className={body}>{s.projectGoals.caption}</p>
        <Figure src={s.projectGoals.image} />
      </ContentBlock>
    </MajorSection>
  );
}
