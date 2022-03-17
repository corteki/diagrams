import { MutableRefObject, useEffect, useState } from "react";

export function useDiagramContext(
  canvasRef: MutableRefObject<HTMLCanvasElement | null>
) {
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      setContext(canvas.getContext("2d"));
    }
  }, [canvasRef]);

  return context;
}
