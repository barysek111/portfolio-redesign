export const asset = (file: string) =>
  `/plinto/${file.split("/").map((segment) => encodeURIComponent(segment)).join("/")}`;

export function figureAlt(src: string, label?: string) {
  if (label) return label;
  const name = src
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return `Plinto case study: ${name}`;
}

export {
  displayCalloutNumber,
  numberedRowsFromItems,
  packTagItems,
  parseLabeledItem,
  parseSectionTitle,
  toSentenceCase,
} from "@/components/project/utils";
