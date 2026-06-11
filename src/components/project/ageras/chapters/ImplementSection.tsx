import { useAgerasContent } from "@/lib/agerasContentContext";
import {
  ContentBlock,
  MajorSection,
  Prose,
} from "@/components/project/cococare/primitives";

export function ImplementSection() {
  const c = useAgerasContent();
  const s = c.implement;
  return (
    <MajorSection id="implement" title={s.sectionTitle}>
      <ContentBlock
        label={s.smoothImplementation.heading}
        emphasized
        chapterIntro
        chapterId="launch"
      >
        <Prose>{s.smoothImplementation.body}</Prose>
      </ContentBlock>
      <ContentBlock label={s.implementationAndHandover.heading}>
        {s.implementationAndHandover.paragraphs.map((p) => (
          <Prose key={p.slice(0, 40)}>{p}</Prose>
        ))}
      </ContentBlock>
      <ContentBlock label={s.learnings.heading}>
        <Prose>{s.learnings.body}</Prose>
      </ContentBlock>
    </MajorSection>
  );
}
