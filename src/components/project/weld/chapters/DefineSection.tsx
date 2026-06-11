import { useWeldContent } from "@/lib/weldContentContext";
import {
  ContentBlock,
  FigureRow,
  MajorSection,
  Prose,
} from "@/components/project/cococare/primitives";
import { figureRow12, figureRow12Cell, figureRow12Cell4, subsectionTitle } from "../constants";
import { Figure } from "../Figure";

export function DefineSection() {
  const c = useWeldContent();
  const s = c.define;
  const ws = s.websiteScreens;
  const bv = s.brandVisualLanguage;
  const [sitemap, wf1, wf2] = s.keyScreensFlows.images;
  const [nav1, nav2] = ws.navigation.images;
  const [pages1, pages2] = ws.fullPages.images;
  const [comp1, comp2] = ws.components.images;
  const [brand1, brand2, brand3] = bv.brandElements.images;
  return (
    <MajorSection id="define" title={s.sectionTitle}>
      <ContentBlock
        label={s.buildingSystem.heading}
        emphasized
        chapterIntro
        chapterId="define"
      >
        <Prose>{s.buildingSystem.body}</Prose>
      </ContentBlock>

      <ContentBlock label={s.keyScreensFlows.heading}>
        <Prose>{s.keyScreensFlows.body}</Prose>
        <div className="case-prose-follow-full flex flex-col">
          <Figure src={sitemap} callout />
          <FigureRow>
            <Figure src={wf1} layout="pair" callout />
            <Figure src={wf2} layout="pair" callout />
          </FigureRow>
        </div>
      </ContentBlock>

      <ContentBlock label={ws.heading}>
        <Prose>{s.websiteScreens.body}</Prose>
        <div className="case-prose-follow-full flex w-full flex-col">
          <div className="case-prose-follow-half flex w-full flex-col">
            <h3 className={subsectionTitle}>{ws.navigation.label}</h3>
            <FigureRow>
              <Figure src={nav1} layout="pair" callout />
              <Figure src={nav2} layout="pair" callout />
            </FigureRow>
          </div>
          <div className="case-prose-follow-half flex w-full flex-col">
            <h3 className={subsectionTitle}>{ws.fullPages.label}</h3>
            <div className="case-prose-follow-full flex flex-col">
              <Figure src={pages1} callout />
              <Figure src={pages2} callout />
            </div>
          </div>
          <div className="case-prose-follow-half flex w-full flex-col">
            <h3 className={subsectionTitle}>{ws.components.label}</h3>
            <div className="case-prose-follow-full flex flex-col">
              <Figure src={comp1} callout />
              <Figure src={comp2} callout />
            </div>
          </div>
        </div>
      </ContentBlock>

      <ContentBlock label={bv.heading}>
        <Prose>{bv.body}</Prose>
        <div className="case-prose-follow-full flex w-full flex-col">
          <div className="case-prose-follow-half flex w-full flex-col">
            <h3 className={subsectionTitle}>{bv.brandElements.label}</h3>
            <div className="case-prose-follow-full flex flex-col">
              <Figure src={brand1} callout />
              <FigureRow>
                <Figure src={brand2} layout="pair" callout />
                <Figure src={brand3} layout="pair" callout />
              </FigureRow>
            </div>
          </div>
          <div className="case-prose-follow-half flex w-full flex-col">
            <h3 className={subsectionTitle}>{bv.iconPack.label}</h3>
            <Figure src={bv.iconPack.image} callout />
          </div>
          <div className="case-prose-follow-half flex w-full flex-col">
            <h3 className={subsectionTitle}>{bv.infographics.label}</h3>
            <div className={`${figureRow12} md:grid-cols-3`}>
              {bv.infographics.images.map((img) => (
                <div key={img} className={figureRow12Cell4}>
                  <Figure src={img} layout="pair" callout />
                </div>
              ))}
            </div>
          </div>
          <div className="case-prose-follow-half flex w-full flex-col">
            <h3 className={subsectionTitle}>{bv.metaImages.label}</h3>
            <Figure src={bv.metaImages.image} callout />
          </div>
        </div>
      </ContentBlock>
    </MajorSection>
  );
}
