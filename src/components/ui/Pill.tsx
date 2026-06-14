import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

function ButtonArrow({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      className={cn("nav-pill__arrow", direction === "left" && "nav-pill__arrow--left")}
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

type ButtonBase = {
  className?: string;
  /** Renders as a TanStack Router <Link>. */
  to?: string;
  /** Renders as an <a>. */
  href?: string;
  /** Renders as a <button> with this type. */
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

type ButtonProps = ButtonBase & (
  | { variant: "default"; children: ReactNode }
  | { variant: "static"; children: ReactNode }
  | { variant: "staticdark"; children: ReactNode }
  | { variant: "arrow"; children: ReactNode; direction?: "left" | "right" }
  | { variant: "dual"; left: ReactNode; right: ReactNode }
);

export function Button(props: ButtonProps) {
  const { variant, className, to, href, type, onClick, disabled } = props;

  let content: ReactNode;

  if (variant === "default" || variant === "static" || variant === "staticdark") {
    content = <span className="nav-pill__label">{props.children}</span>;
  } else if (variant === "arrow") {
    const arrow = <ButtonArrow direction={props.direction} />;
    const label = <span className="nav-pill__label">{props.children}</span>;
    content = props.direction === "left"
      ? <>{arrow}{label}</>
      : <>{label}{arrow}</>;
  } else {
    content = (
      <>
        <span className="nav-pill__label min-w-0 truncate">{props.left}</span>
        <span className="nav-pill__label shrink-0 tabular-nums">{props.right}</span>
      </>
    );
  }

  const cls = cn(
    "nav-pill",
    (variant === "static" || variant === "staticdark") && "justify-center",
    variant === "static" && "nav-pill--static",
    variant === "staticdark" && "nav-pill--staticdark",
    className,
  );

  if (to !== undefined) return <Link to={to} className={cls}>{content}</Link>;
  if (href !== undefined) return <a href={href} className={cls}>{content}</a>;
  if (type !== undefined || onClick !== undefined) {
    return <button type={type ?? "button"} onClick={onClick} disabled={disabled} className={cls}>{content}</button>;
  }
  return <div className={cls}>{content}</div>;
}
