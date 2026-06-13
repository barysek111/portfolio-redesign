import { Figure as SharedFigure, type FigureProps } from "@/components/project/Figure";
import { asset, figureAlt } from "./utils";

export function Figure(props: FigureProps) {
  return <SharedFigure {...props} assetFn={asset} altFn={figureAlt} />;
}
