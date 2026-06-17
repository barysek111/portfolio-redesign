import { CalloutStack } from "@/components/project/CalloutStack";
import { usePowermatchContent } from "@/lib/powermatchContentContext";
import { cn } from "@/lib/utils";
import {
  contentBlockLabel,
  heroIntroBody,
  figureRow12,
  figureRow12Cell4,
  halfColumns,
  halfColumnsContent,
  halfColumnsLabel,
  subsectionTitle,
} from "@/components/project/constants";
import {
  ContentBlock,
  Figure,
  MajorSection,
  NumberedCalloutSection,
  Prose,
} from "../primitives";
import { numberedRowsFromItems, parseLabeledItem, toSentenceCase } from "../utils";

export function TestSection() {
  const c = usePowermatchContent();
  const s = c.test;
  const ut = s.usabilityTesting;
  return (
    <MajorSection id="test" title={s.sectionTitle} icon={s.sectionIcon}>
      <ContentBlock
        label={s.definingNextSteps.heading}
        emphasized
        chapterIntro
        chapterId="test"
      >
        <Prose>{s.definingNextSteps.body}</Prose>
      </ContentBlock>
      <div className="flex w-full flex-col gap-12">
        <div className={halfColumns}>
          <h3 className={cn(contentBlockLabel, halfColumnsLabel)}>
            {toSentenceCase(ut.heading)}
          </h3>
          <div className={cn(halfColumnsContent, "flex flex-col gap-07")}>
            <h4 className={heroIntroBody}>{ut.intro}</h4>
            <CalloutStack
              items={ut.scenarios.map((sc) => ({
                key: sc.heading,
                title: sc.heading,
                text: sc.body,
              }))}
            />
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <NumberedCalloutSection
            heading={ut.trackedMetrics.heading}
            headingAs="h3"
            headingTone="subsection"
            layout="split"
            splitTemplate="half"
            cardLayout="callout-stack"
            rows={numberedRowsFromItems(ut.trackedMetrics.items)}
            parseTitles
          />
          <NumberedCalloutSection
            heading={ut.successCriteria.heading}
            headingAs="h3"
            headingTone="subsection"
            layout="split"
            splitTemplate="half"
            cardLayout="callout-stack"
            rows={numberedRowsFromItems(ut.successCriteria.items, true)}
          />
        </div>
        <div className={halfColumns}>
          <h3 className={cn(subsectionTitle, halfColumnsLabel)}>{ut.conclusion.heading}</h3>
          <div className={halfColumnsContent}>
            <Prose>{ut.conclusion.body}</Prose>
          </div>
        </div>
      </div>
      <div className="flex w-full min-w-0 flex-col gap-10">
        <h3 className={contentBlockLabel}>
          {toSentenceCase(s.priorityRevisions.heading)}
        </h3>
        <div className={figureRow12}>
          {s.priorityRevisions.images.map((img, index) => {
            const item = s.priorityRevisions.items[index];
            const { title, body: itemBody } = parseLabeledItem(item ?? "");
            return (
              <div key={img} className={figureRow12Cell4}>
                <Figure
                  src={img}
                  layout="pair"
                  callout
                  title={title}
                  caption={itemBody}
                  calloutTitleAs="h5"
                  calloutCopyBelowMedia
                />
              </div>
            );
          })}
        </div>
      </div>
    </MajorSection>
  );
}
