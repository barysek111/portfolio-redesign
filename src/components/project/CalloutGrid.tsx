import { cn } from "@/lib/utils";
import { screenTitle } from "@/components/project/constants";

export type CalloutGridItem = {
  key: string;
  text: string;
  title?: string;
};

type CalloutGridProps = {
  items: readonly CalloutGridItem[];
  columns?: 2 | 3;
  className?: string;
};

/** Square callout cards in a grid — headline top, body bottom, no index numbers. */
export function CalloutGrid({
  items,
  columns = 3,
  className,
}: CalloutGridProps) {
  return (
    <div
      className={cn(
        "case-interview-callouts__row",
        columns === 3 && "case-interview-callouts__row--3",
        columns === 2 && "case-interview-callouts__row--2",
        className,
      )}
    >
      {items.map((item) => (
        <div
          key={item.key}
          className="case-interview-callout case-interview-callout--square case-callout-grid"
        >
          {item.title ? (
            <h5 className={screenTitle}>{item.title}</h5>
          ) : null}
          <p className="text-s mt-auto">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
