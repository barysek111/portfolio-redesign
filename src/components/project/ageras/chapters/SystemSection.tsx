import { useAgerasContent } from "@/lib/agerasContentContext";
import {
  ContentBlock,
  FigureRow,
  MajorSection,
  Prose,
} from "@/components/project/cococare/primitives";
import { Figure } from "../Figure";

export function SystemSection() {
  const c = useAgerasContent();
  const s = c.system;
  const [docImg1, docImg2] = s.documentation.images;
  const [blocksImg1, blocksImg2] = s.keyBuildingBlocks.images;
  const [modalsImg1, modalsImg2, modalsImg3] = s.modalsAndDropdowns.images;
  const [libImg1, libImg2, libImg3] = s.imageLibrary.images;
  return (
    <MajorSection id="system" title={s.sectionTitle}>
      <ContentBlock
        label={s.buildingIntro.heading}
        emphasized
        chapterIntro
        chapterId="ideate"
      >
        <Prose>{s.buildingIntro.body}</Prose>
      </ContentBlock>
      <ContentBlock label={s.documentation.heading}>
        <Prose>{s.documentation.body}</Prose>
        <FigureRow>
          <Figure src={docImg1} layout="pair" callout />
          <Figure src={docImg2} layout="pair" callout />
        </FigureRow>
      </ContentBlock>
      <ContentBlock label={s.globalRules.heading}>
        <Prose>{s.globalRules.body}</Prose>
        <Figure src={s.globalRules.image} callout />
      </ContentBlock>
      <ContentBlock label={s.keyBuildingBlocks.heading}>
        <Prose>{s.keyBuildingBlocks.body}</Prose>
        <FigureRow>
          <Figure src={blocksImg1} layout="pair" callout />
          <Figure src={blocksImg2} layout="pair" callout />
        </FigureRow>
      </ContentBlock>
      <ContentBlock label={s.navigation.heading}>
        <Prose>{s.navigation.body}</Prose>
        <Figure src={s.navigation.image} callout />
      </ContentBlock>
      <ContentBlock label={s.modalsAndDropdowns.heading}>
        <Prose>{s.modalsAndDropdowns.body}</Prose>
        <FigureRow>
          <Figure src={modalsImg1} layout="pair" callout />
          <Figure src={modalsImg2} layout="pair" callout />
        </FigureRow>
        <Figure src={modalsImg3} callout />
      </ContentBlock>
      <ContentBlock label={s.sectionComponents.heading}>
        <Prose>{s.sectionComponents.body}</Prose>
        <Figure src={s.sectionComponents.image} callout />
      </ContentBlock>
      <ContentBlock label={s.iconography.heading}>
        <Prose>{s.iconography.body}</Prose>
        <Figure src={s.iconography.image} callout />
      </ContentBlock>
      <ContentBlock label={s.imageLibrary.heading}>
        <Prose>{s.imageLibrary.body}</Prose>
        <FigureRow>
          <Figure src={libImg1} layout="pair" callout />
          <Figure src={libImg2} layout="pair" callout />
        </FigureRow>
        <Figure src={libImg3} callout />
      </ContentBlock>
    </MajorSection>
  );
}
