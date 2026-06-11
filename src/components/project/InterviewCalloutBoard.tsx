import { NumberedCalloutGrid } from "@/components/project/NumberedCalloutGrid";
import { CalloutStack } from "@/components/project/CalloutStack";

type InterviewCalloutLayout = "grid-3" | "stack-hero";

type InterviewCalloutBoardProps = {
  title: string;
  items: readonly string[];
  layout?: InterviewCalloutLayout;
  headlines?: readonly string[];
};

export function InterviewCalloutBoard({
  title,
  items,
  layout = "grid-3",
  headlines,
}: InterviewCalloutBoardProps) {
  const isStackHero = layout === "stack-hero";

  return (
    <div className="case-interview-callouts">
      <h3 className="case-block-title">{title}</h3>
      {isStackHero ? (
        <CalloutStack
          items={items.map((text, index) => ({
            key: headlines?.[index]
              ? `${headlines[index]}-${text}`
              : text,
            text,
            title: headlines?.[index],
          }))}
        />
      ) : (
        <NumberedCalloutGrid
          items={items.map((text, index) => ({
            key: text,
            number: String(index + 1),
            text,
          }))}
          columns={3}
        />
      )}
    </div>
  );
}
