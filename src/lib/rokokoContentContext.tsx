import { createContext, useContext, type ReactNode } from "react";
import type { rokokoContent } from "@/lib/rokokoContent";

export type RokokoContent = typeof rokokoContent;

const RokokoContentContext = createContext<RokokoContent | null>(null);

export function RokokoContentProvider({
  content,
  children,
}: {
  content: RokokoContent;
  children: ReactNode;
}) {
  return (
    <RokokoContentContext.Provider value={content}>
      {children}
    </RokokoContentContext.Provider>
  );
}

export function useRokokoContent(): RokokoContent {
  const content = useContext(RokokoContentContext);
  if (!content) {
    throw new Error("useRokokoContent must be used within RokokoContentProvider");
  }
  return content;
}
