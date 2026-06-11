import { cn } from "@/lib/utils";

/** Arrow icon — matches gentle.systems nav pills (right on nav, left on back). */
export function NavPillArrow({
  direction = "right",
  className,
}: {
  direction?: "left" | "right";
  className?: string;
}) {
  return (
    <svg
      className={cn(
        "nav-pill__arrow",
        direction === "left" && "nav-pill__arrow--left",
        className,
      )}
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden
    >
      <path
        d={
          direction === "left"
            ? "M0 5.00928L4.92701 10L5.83942 9.07236L2.31752 5.67718H10V4.34137H2.31752L5.83942 0.927644L4.92701 0L0 5.00928Z"
            : "M10 5.00928L5.07299 10L4.16058 9.07236L7.68248 5.67718H0V4.34137H7.68248L4.16058 0.927644L5.07299 0L10 5.00928Z"
        }
        fill="currentColor"
      />
    </svg>
  );
}
