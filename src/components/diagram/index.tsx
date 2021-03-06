import { useMemo, useRef } from "react";
import { Node } from "./Node";
import { MouseController } from "./MouseController";
import { useDiagramContext } from "./useDiagramContext";
import { Scene } from "./Scene";
import { Connection } from "./Connection";

interface DiagramProps {
  nodes: Node[];
  connections: Connection[];
  width: number;
  height: number;
}

export const Diagram = ({
  nodes,
  connections,
  ...dimensions
}: DiagramProps) => {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const context = useDiagramContext(ref);
  const scene = useMemo(
    () => new Scene(nodes, connections, context),
    [context, nodes, connections]
  );
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
