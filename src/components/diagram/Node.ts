import { Position } from "./Position";

export interface Node {
  id: string;
  type: "box" | "circle" | "triangle" | "line";
  padding: number;
  position: Position;
  width: number;
  height: number;
  color: { r: number; g: number; b: number };
  text?: string;
}
