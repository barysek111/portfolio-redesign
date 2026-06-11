type MyRoleProps = {
  lines: readonly string[];
};

/** Role list under the showcase “My Role” column (stacked lines, no bullets). */
export function MyRole({ lines }: MyRoleProps) {
  return (
    <p className="project-showcase__copy whitespace-pre-line text-body">
      {lines.join("\n")}
    </p>
  );
}
