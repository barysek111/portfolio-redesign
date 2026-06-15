import { usePowermatchContent } from "@/lib/powermatchContentContext";
import { heroIntroBody } from "@/components/project/constants";
import {
  ContentBlock,
  Figure,
  MajorSection,
  Prose,
} from "../primitives";

export function ResearchSection() {
  const c = usePowermatchContent();
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
        <h4 className={heroIntroBody}>{s.stakeholderInterviews.body}</h4>
      </ContentBlock>
      <ContentBlock label={s.userPersonas.heading}>
        <Prose>{s.userPersonas.body}</Prose>
        {s.userPersonas.images.length > 0 && (
          <div className="case-prose-follow-full w-full">
            {s.userPersonas.images.map((img) => (
              <Figure key={img} src={img} callout />
            ))}
          </div>
        )}
      </ContentBlock>
    </MajorSection>
  );
}
