import { createContext, useContext, type ReactNode } from "react";
import type { cocoCareContent } from "@/lib/cocoCareContent";

export type CocoCareContent = typeof cocoCareContent;

const CocoCareContentContext = createContext<CocoCareContent | null>(null);

export function CocoCareContentProvider({
  content,
  children,
}: {
  content: CocoCareContent;
  children: ReactNode;
}) {
  return (
    <CocoCareContentContext.Provider value={content}>
      {children}
    </CocoCareContentContext.Provider>
  );
}

export function useCocoCareContent(): CocoCareContent {
  const content = useContext(CocoCareContentContext);
  if (!content) {
    throw new Error("useCocoCareContent must be used within CocoCareContentProvider");
  }
  return content;
}
