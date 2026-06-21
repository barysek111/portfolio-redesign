import { createContext, useContext, type ReactNode } from "react";
import type { plintoContent } from "@/lib/plintoContent";

export type PlintoContent = typeof plintoContent;

const PlintoContentContext = createContext<PlintoContent | null>(null);

export function PlintoContentProvider({
  content,
  children,
}: {
  content: PlintoContent;
  children: ReactNode;
}) {
  return (
    <PlintoContentContext.Provider value={content}>
      {children}
    </PlintoContentContext.Provider>
  );
}

export function usePlintoContent(): PlintoContent {
  const content = useContext(PlintoContentContext);
  if (!content) {
    throw new Error("usePlintoContent must be used within PlintoContentProvider");
  }
  return content;
}
