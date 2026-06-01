export const asset = (file: string) => `/coco-care/${file}`;

export function toSentenceCase(value: string) {
  const cleaned = value.replace(/\uFEFF/g, "").trim();
  if (!cleaned) return cleaned;
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1).toLowerCase();
}

export function figureAlt(src: string, label?: string) {
  if (label) return label;
  const name = src
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return `Coco Care case study: ${name}`;
}

export function parseSectionTitle(title: string) {
  const trimmed = title.trim();
  const match = trimmed.match(/^(\d+)\.\s*(.+?)(?:\s*-\s*(.+))?$/);
  if (!match) {
    return { indexLine: trimmed, subtitle: undefined as string | undefined };
  }

  const [, num, chapterPart, subtitle] = match;
  return {
    indexLine: `${num} ${chapterPart.trim()}`,
    subtitle: subtitle?.trim(),
  };
}

export function parseLabeledItem(text: string) {
  const colon = text.indexOf(":");
  if (colon === -1) {
    return { title: undefined, body: text };
  }
  return {
    title: text.slice(0, colon).trim(),
    body: text.slice(colon + 1).trim(),
  };
}

export function displayCalloutNumber(number: string) {
  const parsed = Number.parseInt(number, 10);
  return Number.isNaN(parsed) ? number : String(parsed);
}

export function numberedRowsFromItems(
  items: readonly string[],
  stripNumericPrefix = false,
) {
  return items.map((text, i) => ({
    number: String(i + 1),
    text: stripNumericPrefix ? text.replace(/^\d+\.\s*/, "") : text,
  }));
}

const META_TAG_GAP_PX = 8;
const META_TAG_COLUMN_WIDTH_PX = 300;

function estimateMetaTagWidth(label: string) {
  return label.length * 6.5 + 28;
}

export function packTagItems(
  items: readonly string[],
  containerWidth = META_TAG_COLUMN_WIDTH_PX,
) {
  if (items.length <= 2) return [...items].sort((a, b) => a.length - b.length);

  const sorted = [...items].sort(
    (a, b) => estimateMetaTagWidth(b) - estimateMetaTagWidth(a),
  );
  const rows: string[][] = [];
  const rowWidths: number[] = [];

  for (const item of sorted) {
    const tagWidth = estimateMetaTagWidth(item);
    let placed = false;

    for (let i = 0; i < rows.length; i++) {
      const gap = rowWidths[i] > 0 ? META_TAG_GAP_PX : 0;
      if (rowWidths[i] + gap + tagWidth <= containerWidth) {
        rows[i].push(item);
        rowWidths[i] += gap + tagWidth;
        placed = true;
        break;
      }
    }

    if (!placed) {
      rows.push([item]);
      rowWidths.push(tagWidth);
    }
  }

  return rows
    .map((row, index) => ({ row, width: rowWidths[index] }))
    .sort((a, b) => b.width - a.width)
    .flatMap(({ row }) => row);
}
