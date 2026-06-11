import { cn } from "@/lib/utils";
import { body, screenTitle } from "@/components/project/cococare/constants";

const METRIC_VALUE_RE = /≥?\d+(?:\.\d+)?%/;

function StackCalloutBody({
  text,
  highlightMetricValues = false,
}: {
  text: string;
  highlightMetricValues?: boolean;
}) {
  if (!highlightMetricValues) {
    return <p className={body}>{text}</p>;
  }

  return (
    <p className={body}>
      {text.split(/(≥?\d+(?:\.\d+)?%)/).map((part, index) =>
        METRIC_VALUE_RE.test(part) ? (
          <span key={index} className="case-callout-stat">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </p>
  );
}

export type CalloutStackItem = {
  key: string;
  text: string;
  title?: string;
};

type CalloutStackProps = {
  items: readonly CalloutStackItem[];
  highlightMetricValues?: boolean;
  className?: string;
};

/** Full-width stacked callout cards — title + body, no index numbers. */
export function CalloutStack({
  items,
  highlightMetricValues = false,
  className,
}: CalloutStackProps) {
  return (
    <div className={cn("case-callout-stack", className)}>
      {items.map((item) => (
        <div key={item.key} className="case-callout case-numbered-item">
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

export { StackCalloutBody };
