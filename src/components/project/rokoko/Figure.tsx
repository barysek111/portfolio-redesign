import { Figure as SharedFigure, type FigureProps, CASE_FIGURE_MARKER } from "@/components/project/Figure";
import { asset, figureAlt } from "./utils";

export function Figure(props: FigureProps) {
  return <SharedFigure {...props} assetFn={asset} altFn={figureAlt} />;
}
(Figure as any)[CASE_FIGURE_MARKER] = true;
