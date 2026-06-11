import { useEatGrimContent } from "@/lib/eatGrimContentContext";
import {
  ContentBlock,
  FigureRow,
  MajorSection,
  NumberedCalloutSection,
  Prose,
} from "@/components/project/cococare/primitives";
import { figureRow12, figureRow12Cell4 } from "../constants";
import { Figure } from "../Figure";

export function DefineSection() {
  const c = useEatGrimContent();
  const s = c.define;
  const [p1, p2, p3] = s.userPersonas.images;
  const [needs, priorities] = s.customerNeeds.images;
  return (
    <MajorSection id="define" title={s.sectionTitle}>
      <ContentBlock
        label={s.definingNextSteps.heading}
        emphasized
        chapterIntro
        chapterId="define"
      >
        <Prose>{s.definingNextSteps.body}</Prose>
      </ContentBlock>
      <ContentBlock label={s.userPersonas.heading}>
        <Prose>{s.userPersonas.body}</Prose>
        <div className={`${figureRow12} md:grid-cols-3`}>
          <div className={figureRow12Cell4}>
            <Figure src={p1} layout="pair" callout />
          </div>
          <div className={figureRow12Cell4}>
            <Figure src={p2} layout="pair" callout />
          </div>
          <div className={figureRow12Cell4}>
            <Figure src={p3} layout="pair" callout />
          </div>
        </div>
      </ContentBlock>
      <ContentBlock label={s.customerNeeds.heading}>
        <Prose>{s.customerNeeds.body}</Prose>
        <FigureRow>
          <Figure src={needs} layout="pair" callout />
          <Figure src={priorities} layout="pair" callout />
        </FigureRow>
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
