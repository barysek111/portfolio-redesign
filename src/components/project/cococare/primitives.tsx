export {
  ContentBlock,
  EditorialSplit,
  FigureRow,
  MajorSection,
  NumberedCalloutSection,
  Prose,
} from "@/components/project/primitives";
export { Figure } from "./Figure";

// PersonaFigureRow uses coco-care-specific asset() and persona metadata — stays here.
import {
  useEffect,
  useState,
} from "react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { personaAltBySrc, personaSizeBySrc } from "./constants";
import { asset, figureAlt } from "./utils";

export function PersonaFigureRow({ images }: { images: readonly string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedIndices, setLoadedIndices] = useState(() => new Set([0]));
  const reduceMotion = useReducedMotion();
  const lastIndex = images.length - 1;
  const atLast = activeIndex >= lastIndex;
  const crossfadeDuration = reduceMotion ? 0 : 0.9;

  useEffect(() => {
    images.forEach((src, index) => {
      if (index === 0) return;
      const preload = new Image();
      preload.src = asset(src);
      preload.onload = () => {
        setLoadedIndices((prev) => {
          if (prev.has(index)) return prev;
          const next = new Set(prev);
          next.add(index);
          return next;
        });
      };
    });
  }, [images]);

  useEffect(() => {
    setLoadedIndices((prev) => {
      if (prev.has(activeIndex)) return prev;
      const next = new Set(prev);
      next.add(activeIndex);
      return next;
    });
  }, [activeIndex]);

  const handleNav = () => {
    setActiveIndex((current) => (current >= lastIndex ? current - 1 : current + 1));
  };

  return (
    <div className="case-persona-carousel w-full">
      <div className="case-callout case-persona-callout case-persona-carousel__frame">
        {images.length > 1 ? (
          <div className="case-persona-carousel__nav-row">
            {atLast ? (
              <Button variant="arrow" direction="left" onClick={handleNav} type="button">Previous</Button>
            ) : (
              <Button variant="arrow" onClick={handleNav} type="button">Next</Button>
            )}
          </div>
        ) : null}
        <div className="case-persona-carousel__stage">
          {images.map((src, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.figure
                key={src}
                className="case-persona-carousel__slide m-0 min-w-0"
                initial={false}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: crossfadeDuration,
                  ease: [0.45, 0, 0.55, 1],
                }}
                aria-hidden={!isActive}
                style={{
                  pointerEvents: isActive ? "auto" : "none",
                  zIndex: isActive ? 2 : 1,
                }}
              >
                {loadedIndices.has(index) ? (
                  <img
                    src={asset(src)}
                    alt={personaAltBySrc[src] ?? figureAlt(src, `Persona ${index + 1}`)}
                    className="case-persona-callout__img"
                    width={personaSizeBySrc[src]?.width}
                    height={personaSizeBySrc[src]?.height}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                ) : (
                  <div
                    className="case-persona-callout__img case-persona-callout__placeholder"
                    style={{
                      aspectRatio: personaSizeBySrc[src]
                        ? `${personaSizeBySrc[src].width} / ${personaSizeBySrc[src].height}`
                        : "975 / 1234",
                    }}
                    aria-hidden
                  />
                )}
              </motion.figure>
            );
          })}
        </div>
      </div>
    </div>
  );
}
