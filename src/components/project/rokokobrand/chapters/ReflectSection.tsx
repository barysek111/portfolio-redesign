import { useRokokoBrandContent } from "@/lib/rokokoBrandContentContext";
import {
  ContentBlock,
  MajorSection,
  Prose,
} from "@/components/project/primitives";
import { heroIntroBody, halfColumns, halfColumnsContent, halfColumnsLabel, subsectionTitle } from "@/components/project/constants";
import { cn } from "@/lib/utils";
import { toSentenceCase } from "../utils";

export function ReflectSection() {
  const c = useRokokoBrandContent();
  const s = c.reflect;
  return (
    <MajorSection id="reflect" title={s.sectionTitle}>
      <ContentBlock
        label={s.reflectIntro.heading}
        emphasized
        chapterIntro
        chapterId="test"
      >
        <Prose>{s.reflectIntro.body}</Prose>
      </ContentBlock>
      <div className="flex w-full flex-col gap-12">
        <div className={halfColumns}>
          <h3 className={cn(subsectionTitle, halfColumnsLabel)}>
            {toSentenceCase(s.lastingImpact.heading)}
          </h3>
          <div className={halfColumnsContent}>
            <h4 className={heroIntroBody}>{s.lastingImpact.body}</h4>
          </div>
        </div>
        <div className={halfColumns}>
          <h3 className={cn(subsectionTitle, halfColumnsLabel)}>
            {toSentenceCase(s.whatILearnt.heading)}
          </h3>
          <div className={halfColumnsContent}>
            <Prose>{s.whatILearnt.body}</Prose>
          </div>
        </div>
      </div>
    </MajorSection>
  );
}
