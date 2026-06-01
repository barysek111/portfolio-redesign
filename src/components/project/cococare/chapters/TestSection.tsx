import { useCocoCareContent } from "@/lib/cocoCareContentContext";
import {
  body,
  contentBlockLabel,
  halfColumns,
  screenTitle,
  subsectionTitle,
} from "../constants";
import {
  ContentBlock,
  Figure,
  MajorSection,
  NumberedCalloutSection,
  Prose,
} from "../primitives";
import { numberedRowsFromItems, parseLabeledItem, toSentenceCase } from "../utils";

export function TestSection() {
  const c = useCocoCareContent();
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
      <div className="flex w-full flex-col gap-[6.25rem]">
        <div className={halfColumns}>
          <h2 className={contentBlockLabel}>{toSentenceCase(ut.heading)}</h2>
          <div className="flex min-w-0 flex-col gap-6">
            <Prose>{ut.intro}</Prose>
            {ut.scenarios.map((sc) => (
              <div key={sc.heading} className="flex flex-col gap-2">
                <h5 className={screenTitle}>{sc.heading}</h5>
                <Prose>{sc.body}</Prose>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[6.25rem]">
          <NumberedCalloutSection
            heading={ut.trackedMetrics.heading}
            headingAs="h3"
            headingTone="subsection"
            columns={2}
            rowsVariant="hero"
            rows={numberedRowsFromItems(ut.trackedMetrics.items)}
            parseTitles
          />
          <NumberedCalloutSection
            heading={ut.successCriteria.heading}
            headingAs="h3"
            headingTone="subsection"
            columns={2}
            rowsVariant="hero"
            rows={numberedRowsFromItems(ut.successCriteria.items, true)}
          />
        </div>
        <div className={halfColumns}>
          <h3 className={subsectionTitle}>{ut.conclusion.heading}</h3>
          <Prose>{ut.conclusion.body}</Prose>
        </div>
      </div>
      <ContentBlock label={s.priorityRevisions.heading}>
        <div className="flex flex-col gap-6 pb-8">
          {s.priorityRevisions.items.map((item) => {
            const { title, body: itemBody } = parseLabeledItem(item);
            return (
              <div key={item.slice(0, 40)} className="flex flex-col gap-2">
                {title ? <h5 className={screenTitle}>{title}</h5> : null}
                <p className={body}>{itemBody}</p>
              </div>
            );
          })}
        </div>
        <div className="grid w-full gap-8 md:grid-cols-3">
          {s.priorityRevisions.images.map((img) => (
            <Figure key={img} src={img} layout="pair" />
          ))}
        </div>
      </ContentBlock>
    </MajorSection>
  );
}
