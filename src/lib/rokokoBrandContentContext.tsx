import { createContext, useContext, type ReactNode } from "react";
import type { rokokoBrandContent } from "@/lib/rokokoBrandContent";

export type RokokoBrandContent = typeof rokokoBrandContent;

const RokokoBrandContentContext = createContext<RokokoBrandContent | null>(null);

export function RokokoBrandContentProvider({
  content,
  children,
}: {
  content: RokokoBrandContent;
  children: ReactNode;
}) {
  return (
    <RokokoBrandContentContext.Provider value={content}>
      {children}
    </RokokoBrandContentContext.Provider>
  );
}

export function useRokokoBrandContent(): RokokoBrandContent {
  const content = useContext(RokokoBrandContentContext);
  if (!content) {
    throw new Error("useRokokoBrandContent must be used within RokokoBrandContentProvider");
  }
  return content;
}
