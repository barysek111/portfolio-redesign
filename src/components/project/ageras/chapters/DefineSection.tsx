import { useAgerasContent } from "@/lib/agerasContentContext";
import {
  ContentBlock,
  FigureRow,
  MajorSection,
  Prose,
} from "@/components/project/cococare/primitives";
import { Figure } from "../Figure";

export function DefineSection() {
  const c = useAgerasContent();
  const s = c.define;
  const [regionImg, dkImg, nlImg, loginImg] = s.sitemapsAndFlows.images;
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
      <ContentBlock label={s.sitemapsAndFlows.heading}>
        <Prose>{s.sitemapsAndFlows.body}</Prose>
        <Figure src={regionImg} callout />
        <FigureRow>
          <Figure src={dkImg} layout="pair" callout />
          <Figure src={nlImg} layout="pair" callout />
        </FigureRow>
        <Figure src={loginImg} callout />
      </ContentBlock>
      <ContentBlock label={s.visualExploration.heading}>
        <Prose>{s.visualExploration.body}</Prose>
        <Figure src={s.visualExploration.image} callout />
      </ContentBlock>
    </MajorSection>
  );
}
