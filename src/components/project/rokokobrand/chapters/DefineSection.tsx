import { useRokokoBrandContent } from "@/lib/rokokoBrandContentContext";
import {
  ContentBlock,
  FigureRow,
  MajorSection,
  Prose,
} from "@/components/project/cococare/primitives";
import { Figure } from "../Figure";

export function DefineSection() {
  const c = useRokokoBrandContent();
  const s = c.define;
  const [logoImg1, logoImg2, logoImg3] = s.logoUsage.images;
  return (
    <MajorSection id="define" title={s.sectionTitle}>
      <ContentBlock
        label={s.buildingBlocks.heading}
        emphasized
        chapterIntro
        chapterId="define"
      >
        <Prose>{s.buildingBlocks.body}</Prose>
      </ContentBlock>
      <ContentBlock label={s.logoUsage.heading}>
        <Prose>{s.logoUsage.body}</Prose>
        <div className="case-prose-follow-full flex flex-col">
          <Figure src={logoImg1} callout />
          <FigureRow>
            <Figure src={logoImg2} layout="pair" callout />
            <Figure src={logoImg3} layout="pair" callout />
          </FigureRow>
        </div>
      </ContentBlock>
      <ContentBlock label={s.logoVariations.heading}>
        <Prose>{s.logoVariations.body}</Prose>
        <Figure src={s.logoVariations.image} callout />
      </ContentBlock>
      <ContentBlock label={s.colorPalette.heading}>
        <Prose>{s.colorPalette.body}</Prose>
        <Figure src={s.colorPalette.image} callout />
      </ContentBlock>
    </MajorSection>
  );
}
