import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ContentPillProps = {
  children: ReactNode;
  /** Additional layout classes (e.g. justify-between, justify-center). */
  className?: string;
  /** Disables hover/cursor — for label-only pills (Focus, Tools, My Role). */
  isStatic?: boolean;
};

/**
 * Shared pill shell for content sections (showcase, how-i-work).
 * Padding: 8px 12px (--spacing-03 / --spacing-04) via .nav-pill base CSS.
 * Not used for the top navigation — that lives in PortfolioTopNav.
 */
export function ContentPill({ children, className, isStatic }: ContentPillProps) {
  return (
    <div
      className={cn(
        "nav-pill",
        isStatic && "nav-pill--static",
        className,
      )}
    >
      {children}
    </div>
  );
}
