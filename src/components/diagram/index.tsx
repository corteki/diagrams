import { useMemo, useRef } from "react";
import { Node } from "./Node";
import { MouseController } from "./MouseController";
import { useDiagramContext } from "./useDiagramContext";
import { Scene } from "./Scene";

interface DiagramProps {
  nodes: Node[];
  width: number;
  height: number;
}

export const Diagram = ({ nodes, ...dimensions }: DiagramProps) => {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const context = useDiagramContext(ref);
  const scene = useMemo(() => new Scene(nodes, context), [context, nodes]);
  const controller = useMemo(() => new MouseController(scene), [scene]);

  return controller ? (
    <canvas
      ref={ref}
      {...dimensions}
      onMouseDown={controller.onClick}
      onMouseMove={controller.onMove}
      onMouseUp={controller.onRelease}
      onMouseLeave={controller.onLeave}
    ></canvas>
  ) : null;
};
