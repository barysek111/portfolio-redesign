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
        <div className="case-hero-numbered-callouts">
          {items.map((text, index) => (
            <div key={text} className="case-callout case-numbered-item">
              <div className="case-numbered-item-content min-w-0">
                {headlines?.[index] ? (
                  <h5 className="case-screen-title">{headlines[index]}</h5>
                ) : null}
                <p className="text-body-s">{text}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="case-interview-callouts__row case-interview-callouts__row--3">
          {items.map((text, index) => (
            <div
              key={text}
              className="case-interview-callout case-interview-callout--square case-interview-callout--numbered"
            >
              <h2 className="case-index">{index + 1}</h2>
              <p className="text-body-s">{text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
