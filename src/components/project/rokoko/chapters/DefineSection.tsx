import { useRokokoContent } from "@/lib/rokokoContentContext";
import {
  ContentBlock,
  MajorSection,
  Prose,
} from "@/components/project/cococare/primitives";
import { Figure } from "../Figure";

export function DefineSection() {
  const c = useRokokoContent();
  const s = c.define;
  return (
    <MajorSection id="define" title={s.sectionTitle}>
      <ContentBlock
        label={s.websiteFoundations.heading}
        emphasized
        chapterIntro
        chapterId="define"
      >
        <Prose>{s.websiteFoundations.body}</Prose>
      </ContentBlock>
      <ContentBlock label={s.sitemap.heading}>
        <Prose>{s.sitemap.body}</Prose>
        <Figure src={s.sitemap.image} callout />
      </ContentBlock>
      <ContentBlock label={s.wireframes.heading}>
        <Prose>{s.wireframes.body}</Prose>
        <Figure src={s.wireframes.image} callout />
      </ContentBlock>
      <ContentBlock label={s.componentsList.heading}>
        <Prose>{s.componentsList.body}</Prose>
        <Figure src={s.componentsList.image} callout />
      </ContentBlock>
    </MajorSection>
  );
}
