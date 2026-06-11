import { useRokokoContent } from "@/lib/rokokoContentContext";
import {
  ContentBlock,
  FigureRow,
  MajorSection,
  Prose,
} from "@/components/project/cococare/primitives";
import { Figure } from "../Figure";

export function IdeateSection() {
  const c = useRokokoContent();
  const s = c.ideate;
  const [moodboard, toolkit, brainstorm] = s.explorationImages;
  return (
    <MajorSection id="ideate" title={s.sectionTitle}>
      <ContentBlock
        label={s.fromSystemsToScreens.heading}
        emphasized
        chapterIntro
        chapterId="ideate"
      >
        <Prose>{s.fromSystemsToScreens.body}</Prose>
      </ContentBlock>
      <FigureRow>
        <Figure src={moodboard} layout="pair" callout />
        <Figure src={toolkit} layout="pair" callout />
        <Figure src={brainstorm} layout="pair" callout />
      </FigureRow>
    </MajorSection>
  );
}
