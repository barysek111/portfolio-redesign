import { createContext, useContext, type ReactNode } from "react";
import type { powermatchContent } from "@/lib/powermatchContent";

export type PowermatchContent = typeof powermatchContent;

const PowermatchContentContext = createContext<PowermatchContent | null>(null);

export function PowermatchContentProvider({
  content,
  children,
}: {
  content: PowermatchContent;
  children: ReactNode;
}) {
  return (
    <PowermatchContentContext.Provider value={content}>
      {children}
    </PowermatchContentContext.Provider>
  );
}

export function usePowermatchContent(): PowermatchContent {
  const content = useContext(PowermatchContentContext);
  if (!content) {
    throw new Error("usePowermatchContent must be used within PowermatchContentProvider");
  }
  return content;
}
