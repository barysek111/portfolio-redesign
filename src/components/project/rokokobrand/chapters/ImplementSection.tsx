import { useRokokoBrandContent } from "@/lib/rokokoBrandContentContext";
import {
  ContentBlock,
  FigureRow,
  MajorSection,
  Prose,
} from "@/components/project/primitives";
import { figureRow12, figureRow12Cell, subsectionTitle } from "@/components/project/constants";
import { Figure } from "../Figure";

export function ImplementSection() {
  const c = useRokokoBrandContent();
  const s = c.implementation;
  const [slide1, slide2] = s.deckTemplate.images;
  const [social1, social2, joblistings, profiles, posts, youtube] = s.socialMedia.images;
  const [pkg1, pkg2, pkg3, pkg4] = s.headrigPackaging.images;
  const [merch1, merch2, merch3, merch4] = s.merchandise.images;
  return (
    <MajorSection id="implement" title={s.sectionTitle}>
      <ContentBlock
        label={s.reachingTouchpoints.heading}
        emphasized
        chapterIntro
        chapterId="launch"
      >
        <Prose>{s.reachingTouchpoints.body}</Prose>
      </ContentBlock>

      <ContentBlock label={s.deckTemplate.heading}>
        <Prose>{s.deckTemplate.body}</Prose>
        <div className="case-prose-follow-full flex flex-col">
          <Figure src={slide1} callout />
          <Figure src={slide2} callout />
        </div>
      </ContentBlock>

      <ContentBlock label={s.socialMedia.heading}>
        <Prose>{s.socialMedia.body}</Prose>
        <div className="case-prose-follow-full flex w-full flex-col">
          <div className="case-prose-follow-half flex w-full flex-col">
            <h4 className={subsectionTitle}>Grid posts & Stories</h4>
            <FigureRow>
              <Figure src={social1} layout="pair" callout />
              <Figure src={social2} layout="pair" callout />
            </FigureRow>
          </div>
          <div className="case-prose-follow-half flex w-full flex-col">
            <h4 className={subsectionTitle}>Job listings & Employee branding</h4>
            <FigureRow>
              <Figure src={joblistings} layout="pair" callout />
              <Figure src={profiles} layout="pair" callout />
            </FigureRow>
          </div>
          <div className="case-prose-follow-half flex w-full flex-col">
            <h4 className={subsectionTitle}>Posts & YouTube thumbnails</h4>
            <FigureRow>
              <Figure src={posts} layout="pair" callout />
              <Figure src={youtube} layout="pair" callout />
            </FigureRow>
          </div>
        </div>
      </ContentBlock>

      <ContentBlock label={s.emailCommunication.heading}>
        <Prose>{s.emailCommunication.body}</Prose>
        <Figure src={s.emailCommunication.image} callout />
      </ContentBlock>

      <ContentBlock label={s.headrigPackaging.heading}>
        <Prose>{s.headrigPackaging.body}</Prose>
        <div className={`${figureRow12} md:grid-cols-2`}>
          <div className={figureRow12Cell}>
            <Figure src={pkg1} layout="pair" callout />
          </div>
          <div className={figureRow12Cell}>
            <Figure src={pkg2} layout="pair" callout />
          </div>
          <div className={figureRow12Cell}>
            <Figure src={pkg3} layout="pair" callout />
          </div>
          <div className={figureRow12Cell}>
            <Figure src={pkg4} layout="pair" callout />
          </div>
        </div>
      </ContentBlock>

      <ContentBlock label={s.merchandise.heading}>
        <Prose>{s.merchandise.body}</Prose>
        <div className={`${figureRow12} md:grid-cols-2`}>
          <div className={figureRow12Cell}>
            <Figure src={merch1} layout="pair" callout />
          </div>
          <div className={figureRow12Cell}>
            <Figure src={merch2} layout="pair" callout />
          </div>
          <div className={figureRow12Cell}>
            <Figure src={merch3} layout="pair" callout />
          </div>
          <div className={figureRow12Cell}>
            <Figure src={merch4} layout="pair" callout />
          </div>
        </div>
      </ContentBlock>
    </MajorSection>
  );
}
