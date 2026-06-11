type ExploreProps = {
  copy: string;
};

/** Project summary under the showcase “Explore” column. */
export function Explore({ copy }: ExploreProps) {
  return <p className="project-showcase__copy text-body">{copy}</p>;
}
