import { useRokokoContent } from "@/lib/rokokoContentContext";
import {
  ContentBlock,
  FigureRow,
  MajorSection,
  NumberedCalloutSection,
  Prose,
} from "@/components/project/cococare/primitives";
import { figureRow12, figureRow12Cell4 } from "../constants";
import { Figure } from "../Figure";

export function ResearchSection() {
  const c = useRokokoContent();
  const s = c.research;
  const [chartImg, ss1, ss2] = s.competitorBenchmarking.images;
  const [needs, features] = s.userNeeds.images;
  const [p1, p2, p3] = s.userPersonas.images;
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
      <ContentBlock label={s.competitorBenchmarking.heading}>
        <Prose>{s.competitorBenchmarking.body}</Prose>
        <Figure src={chartImg} callout />
        <FigureRow>
          <Figure src={ss1} layout="pair" callout />
          <Figure src={ss2} layout="pair" callout />
        </FigureRow>
      </ContentBlock>
      <NumberedCalloutSection
        heading={s.heuristicEvaluation.heading}
        rows={s.heuristicEvaluation.items}
        parseTitles
        layout="split"
        splitTemplate="half"
        cardLayout="callout-stack"
      />
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
      <ContentBlock label={s.userNeeds.heading}>
        <Prose>{s.userNeeds.body}</Prose>
        <FigureRow>
          <Figure src={needs} layout="pair" callout />
          <Figure src={features} layout="pair" callout />
        </FigureRow>
      </ContentBlock>
    </MajorSection>
  );
}
