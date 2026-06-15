export function EditorialList({
  label,
  items,
}: {
  label: string;
  items: ReadonlyArray<{ title: string; sub: string }>;
}) {
  return (
    <div className="case-editorial-split">
      <h2 className="content-block-label">{label}</h2>
      <div className="flex flex-col gap-04">
        {items.map((item) => (
          <div key={item.title}>
            <p className="text-h4 m-0 text-foreground">{item.title}</p>
            <p className="text-h4 m-0 text-muted-foreground">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
