import { Position } from "./Position";

export interface Positionable {
  position: Position;
  setPosition(position: Position): void;
  setOffset(position: Position): void;
}
