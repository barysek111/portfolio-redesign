import { createContext, useContext, type ReactNode } from "react";
import type { eatGrimContent } from "@/lib/eatGrimContent";

export type EatGrimContent = typeof eatGrimContent;

const EatGrimContentContext = createContext<EatGrimContent | null>(null);

export function EatGrimContentProvider({
  content,
  children,
}: {
  content: EatGrimContent;
  children: ReactNode;
}) {
  return (
    <EatGrimContentContext.Provider value={content}>
      {children}
    </EatGrimContentContext.Provider>
  );
}

export function useEatGrimContent(): EatGrimContent {
  const content = useContext(EatGrimContentContext);
  if (!content) {
    throw new Error("useEatGrimContent must be used within EatGrimContentProvider");
  }
  return content;
}
