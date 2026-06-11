import { createContext, useContext, type ReactNode } from "react";
import type { weldContent } from "@/lib/weldContent";

export type WeldContent = typeof weldContent;

const WeldContentContext = createContext<WeldContent | null>(null);

export function WeldContentProvider({
  content,
  children,
}: {
  content: WeldContent;
  children: ReactNode;
}) {
  return (
    <WeldContentContext.Provider value={content}>
      {children}
    </WeldContentContext.Provider>
  );
}

export function useWeldContent(): WeldContent {
  const content = useContext(WeldContentContext);
  if (!content) {
    throw new Error("useWeldContent must be used within WeldContentProvider");
  }
  return content;
}
