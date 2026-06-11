export const asset = (file: string) => `/rokoko/${file}`;

export function figureAlt(src: string, label?: string) {
  if (label) return label;
  const name = src
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return `Rokoko case study: ${name}`;
}

export {
  displayCalloutNumber,
  numberedRowsFromItems,
  packTagItems,
  parseLabeledItem,
  parseSectionTitle,
  toSentenceCase,
} from "@/components/project/cococare/utils";
