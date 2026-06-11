import { useEatGrimContent } from "@/lib/eatGrimContentContext";
import {
  ContentBlock,
  FigureRow,
  MajorSection,
  Prose,
} from "@/components/project/cococare/primitives";
import { figureRow12, figureRow12Cell, figureRow12Cell4, subsectionTitle } from "../constants";
import { Figure } from "../Figure";

export function DesignSection() {
  const c = useEatGrimContent();
  const s = c.design;
  const [a10, a9, a8, a14, a12] = s.brandIdentity.assetImages;
  const [pkg1, pkg2, pkg3, pkg4] = s.packaging.images;
  return (
    <MajorSection id="design" title={s.sectionTitle}>
      <ContentBlock
        label={s.buildingBrand.heading}
        emphasized
        chapterIntro
        chapterId="ideate"
      >
        <Prose>{s.buildingBrand.body}</Prose>
      </ContentBlock>

      <ContentBlock label={s.brandIdentity.heading}>
        <Prose>{s.brandIdentity.body}</Prose>
        <div className="case-prose-follow-full flex flex-col">
          <Figure src={s.brandIdentity.overviewImage} callout />
          <div className={`${figureRow12} md:grid-cols-3`}>
            <div className={figureRow12Cell4}>
              <Figure src={a10} layout="pair" callout />
            </div>
            <div className={figureRow12Cell4}>
              <Figure src={a9} layout="pair" callout />
            </div>
            <div className={figureRow12Cell4}>
              <Figure src={a8} layout="pair" callout />
            </div>
            <div className={figureRow12Cell}>
              <Figure src={a14} layout="pair" callout />
            </div>
            <div className={figureRow12Cell}>
              <Figure src={a12} layout="pair" callout />
            </div>
          </div>
        </div>
      </ContentBlock>

      <ContentBlock label={s.packaging.heading}>
        <Prose>{s.packaging.body}</Prose>
        <div className="case-prose-follow-full flex flex-col">
          <FigureRow>
            <Figure src={pkg1} layout="pair" callout />
            <Figure src={pkg2} layout="pair" callout />
          </FigureRow>
          <FigureRow>
            <Figure src={pkg3} layout="pair" callout />
            <Figure src={pkg4} layout="pair" callout />
          </FigureRow>
        </div>
      </ContentBlock>

      <ContentBlock label={s.contentCreation.heading}>
        <Prose>{s.contentCreation.body}</Prose>
        <div className={`${figureRow12} md:grid-cols-2`}>
          {s.contentCreation.images.map((img) => (
            <div key={img} className={figureRow12Cell}>
              <Figure src={img} layout="pair" callout />
            </div>
          ))}
        </div>
      </ContentBlock>

      <ContentBlock label={s.merchandise.heading}>
        <Prose>{s.merchandise.body}</Prose>
        <div className={`${figureRow12} md:grid-cols-3`}>
          {s.merchandise.images.map((img) => (
            <div key={img} className={figureRow12Cell4}>
              <Figure src={img} layout="pair" callout />
            </div>
          ))}
        </div>
      </ContentBlock>

      <ContentBlock label={s.website.heading}>
        <Prose>{s.website.body}</Prose>
        <div className="case-prose-follow-full flex flex-col">
          {s.website.images.map((img) => (
            <Figure key={img} src={img} callout />
          ))}
        </div>
      </ContentBlock>

      <ContentBlock label={s.emailMarketing.heading}>
        <Prose>{s.emailMarketing.body}</Prose>
        <Figure src={s.emailMarketing.image} callout />
      </ContentBlock>
    </MajorSection>
  );
}
