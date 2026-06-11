import { useWeldContent } from "@/lib/weldContentContext";
import {
  ContentBlock,
  MajorSection,
  Prose,
} from "@/components/project/cococare/primitives";
import { halfColumns, halfColumnsContent, halfColumnsLabel, subsectionTitle } from "../constants";
import { cn } from "@/lib/utils";
import { toSentenceCase } from "../utils";

export function ImplementSection() {
  const c = useWeldContent();
  const s = c.implementation;
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
      <div className="flex w-full flex-col gap-12">
        <div className={halfColumns}>
          <h2 className={cn(subsectionTitle, halfColumnsLabel)}>
            {toSentenceCase(s.handover.heading)}
          </h2>
          <div className={halfColumnsContent}>
            <Prose>{s.handover.body}</Prose>
          </div>
        </div>
        <div className={halfColumns}>
          <h2 className={cn(subsectionTitle, halfColumnsLabel)}>
            {toSentenceCase(s.learnings.heading)}
          </h2>
          <div className={halfColumnsContent}>
            <Prose>{s.learnings.body}</Prose>
          </div>
        </div>
      </div>
    </MajorSection>
  );
}
