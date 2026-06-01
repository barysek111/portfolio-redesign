const PROJECT_GOALS_FILES = new Set([
  "project-goals.svg",
  "projectgoalsdiagram.jpg",
]);

const asset = (file: string) => `/coco-care/${file}`;

export function ProjectGoalsDiagram() {
  return (
    <img
      src={asset("project-goals.svg")}
      alt="Project goals Venn diagram showing business goals, user goals, and technical considerations"
      className="case-project-goals-diagram block h-auto w-full max-w-none"
      loading="lazy"
      decoding="async"
    />
  );
}

export function resolveProjectGoalsDiagram(src: string) {
  if (!PROJECT_GOALS_FILES.has(src)) return null;
  return <ProjectGoalsDiagram />;
}
