import { Button } from "@/components/ui/Button";

export type ChapterEntry = { id: string; label: string };

export function CaseChapterNav({ chapters }: { chapters: ChapterEntry[] }) {
  return (
    <nav aria-label="Chapter navigation" className="flex flex-col">
      <p className="text-h5 m-0 pl-04 text-muted-foreground">In this project</p>
      <div className="flex flex-col gap-03 mt-04">
        {chapters.map((ch) => (
          <Button key={ch.id} variant="arrow" href={`#${ch.id}`}>
            {ch.label}
          </Button>
        ))}
      </div>
    </nav>
  );
}
