import { cn } from "@/lib/utils";
import { screenTitle } from "@/components/project/constants";
import { StackCalloutBody } from "@/components/project/CalloutStack";
import { displayCalloutNumber } from "@/components/project/utils";

export type NumberedCalloutStackItem = {
  key: string;
  number: string;
  text: string;
  title?: string;
};

type NumberedCalloutStackProps = {
  items: readonly NumberedCalloutStackItem[];
  highlightMetricValues?: boolean;
  className?: string;
};

/** Full-width stacked cards with index numbers — Define goals, hero challenge. */
export function NumberedCalloutStack({
  items,
  highlightMetricValues = false,
  className,
}: NumberedCalloutStackProps) {
  return (
    <div className={cn("case-hero-numbered-callouts", className)}>
      {items.map((item) => (
        <div key={item.key} className="case-callout case-numbered-item">
          <span className="case-index">{displayCalloutNumber(item.number)}</span>
          <div className="case-numbered-item-content min-w-0">
            {item.title ? (
              <h5 className={screenTitle}>{item.title}</h5>
            ) : null}
            <StackCalloutBody
              text={item.text}
              highlightMetricValues={highlightMetricValues}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
