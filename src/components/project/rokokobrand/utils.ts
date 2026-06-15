export const asset = (file: string) => `/rokoko-brand/${file}`;

export function figureAlt(src: string, label?: string) {
  if (label) return label;
  const name = src
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return `Rokoko Brand case study: ${name}`;
}

export {
  displayCalloutNumber,
  numberedRowsFromItems,
  packTagItems,
  parseLabeledItem,
  parseSectionTitle,
  toSentenceCase,
} from "@/components/project/utils";
