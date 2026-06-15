import { cn } from "@/lib/utils";
import { screenTitle } from "@/components/project/constants";
import { displayCalloutNumber } from "@/components/project/utils";

export type NumberedCalloutGridItem = {
  key: string;
  number: string;
  text: string;
  title?: string;
};

type NumberedCalloutGridProps = {
  items: readonly NumberedCalloutGridItem[];
  /** Interview Questions: 3 columns; optional 2-col variant */
  columns?: 2 | 3;
  className?: string;
};

/** Square numbered cards in a grid — matches Interview Questions. */
export function NumberedCalloutGrid({
  items,
  columns = 3,
  className,
}: NumberedCalloutGridProps) {
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
          className="case-interview-callout case-interview-callout--square case-interview-callout--numbered"
        >
          <span className="case-index">{displayCalloutNumber(item.number)}</span>
          <div className="case-interview-callout__copy mt-auto min-w-0 w-full">
            {item.title ? (
              <h5 className={screenTitle}>{item.title}</h5>
            ) : null}
            <p className="text-s">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
