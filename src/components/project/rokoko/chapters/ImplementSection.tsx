import { useRokokoContent } from "@/lib/rokokoContentContext";
import {
  ContentBlock,
  FigureRow,
  MajorSection,
  Prose,
} from "@/components/project/primitives";
import { heroIntroBody, subsectionTitle } from "@/components/project/constants";
import { Figure } from "../Figure";

export function ImplementSection() {
  const c = useRokokoContent();
  const s = c.implement;
  const hifi = s.highFidelityScreens;
  const [ds1, ds2] = s.designSystem.images;
  return (
    <MajorSection id="implement" title={s.sectionTitle}>
      <ContentBlock
        label={s.fromSystemToScreens.heading}
        emphasized
        chapterIntro
        chapterId="launch"
      >
        <Prose>{s.fromSystemToScreens.body}</Prose>
      </ContentBlock>
      <ContentBlock label={s.designSystem.heading}>
        <FigureRow>
          <Figure src={ds1} layout="pair" callout />
          <Figure src={ds2} layout="pair" callout />
        </FigureRow>
      </ContentBlock>
      <ContentBlock label={hifi.heading}>
        <div className="case-prose-follow-full flex w-full flex-col">
          <div className="case-prose-follow-half flex w-full flex-col">
            <h4 className={subsectionTitle}>{hifi.marketingWebsite.sectionLabel}</h4>
            <Prose>{hifi.marketingWebsite.body}</Prose>
            <div className="case-prose-follow-full flex flex-col">
              {hifi.marketingWebsite.images.map((img) => (
                <Figure key={img} src={img} callout />
              ))}
            </div>
          </div>
          <div className="case-prose-follow-half flex w-full flex-col">
            <h4 className={subsectionTitle}>{hifi.knowledgeBase.sectionLabel}</h4>
            <Prose>{hifi.knowledgeBase.body}</Prose>
            <div className="case-prose-follow-full flex flex-col">
              {hifi.knowledgeBase.images.map((img) => (
                <Figure key={img} src={img} callout />
              ))}
            </div>
          </div>
          <div className="case-prose-follow-half flex w-full flex-col">
            <h4 className={subsectionTitle}>{hifi.webshop.sectionLabel}</h4>
            <Prose>{hifi.webshop.body}</Prose>
            <div className="case-prose-follow-full flex flex-col">
              {hifi.webshop.images.map((img) => (
                <Figure key={img} src={img} callout />
              ))}
            </div>
          </div>
        </div>
      </ContentBlock>
    </MajorSection>
  );
}
