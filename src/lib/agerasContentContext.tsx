import { createContext, useContext, type ReactNode } from "react";
import type { agerasContent } from "@/lib/agerasContent";

export type AgerasContent = typeof agerasContent;

const AgerasContentContext = createContext<AgerasContent | null>(null);

export function AgerasContentProvider({
  content,
  children,
}: {
  content: AgerasContent;
  children: ReactNode;
}) {
  return (
    <AgerasContentContext.Provider value={content}>
      {children}
    </AgerasContentContext.Provider>
  );
}

export function useAgerasContent(): AgerasContent {
  const content = useContext(AgerasContentContext);
  if (!content) {
    throw new Error("useAgerasContent must be used within AgerasContentProvider");
  }
  return content;
}
