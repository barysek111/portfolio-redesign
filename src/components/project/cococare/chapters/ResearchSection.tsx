import { InterviewCalloutsSection } from "@/components/project/CaseStickyNotes";
import { useCocoCareContent } from "@/lib/cocoCareContentContext";
import {
  ContentBlock,
  MajorSection,
  PersonaFigureRow,
  Prose,
} from "../primitives";

export function ResearchSection() {
  const c = useCocoCareContent();
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
      <ContentBlock label={s.stakeholderInterviews.heading}>
        <div className="flex w-full flex-col gap-[75px]">
          <Prose>{s.stakeholderInterviews.body}</Prose>
          <InterviewCalloutsSection />
        </div>
      </ContentBlock>
      <ContentBlock label={s.userPersonas.heading}>
        <Prose>{s.userPersonas.body}</Prose>
        <PersonaFigureRow slots={s.userPersonas.slots} />
      </ContentBlock>
    </MajorSection>
  );
}
