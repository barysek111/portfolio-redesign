import { useEatGrimContent } from "@/lib/eatGrimContentContext";
import {
  ContentBlock,
  MajorSection,
  Prose,
} from "@/components/project/cococare/primitives";
import { figureRow12, figureRow12Cell, halfColumns, halfColumnsContent, halfColumnsLabel, subsectionTitle } from "../constants";
import { cn } from "@/lib/utils";
import { toSentenceCase } from "../utils";
import { Figure } from "../Figure";

export function LaunchSection() {
  const c = useEatGrimContent();
  const s = c.launch;
  return (
    <MajorSection id="launch" title={s.sectionTitle}>
      <ContentBlock
        label={s.growingMovement.heading}
        emphasized
        chapterIntro
        chapterId="launch"
      >
        <Prose>{s.growingMovement.body}</Prose>
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
            {toSentenceCase(s.results.heading)}
          </h2>
          <div className={halfColumnsContent}>
            <Prose>{s.results.body}</Prose>
          </div>
        </div>
      </div>
      <div className={`${figureRow12} md:grid-cols-2`}>
        {s.results.images.map((img) => (
          <div key={img} className={figureRow12Cell}>
            <Figure src={img} layout="pair" callout />
          </div>
        ))}
      </div>
    </MajorSection>
  );
}
