import { Position } from "./Position";

export interface Positionable {
  setPosition(position: Position): void;
  setOffset(position: Position): void;
}
