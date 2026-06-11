import { InterviewCalloutsSection } from "@/components/project/CaseStickyNotes";
import { useCocoCareContent } from "@/lib/cocoCareContentContext";
import { heroIntroBody, subsectionStack64 } from "../constants";
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
        <div className={subsectionStack64}>
          <h4 className={heroIntroBody}>{s.stakeholderInterviews.body}</h4>
          <InterviewCalloutsSection />
        </div>
      </ContentBlock>
      <ContentBlock label={s.userPersonas.heading}>
        <div className="case-prose-follow-half w-full">
          <Prose>{s.userPersonas.body}</Prose>
          <PersonaFigureRow images={s.userPersonas.images} />
        </div>
      </ContentBlock>
    </MajorSection>
  );
}
