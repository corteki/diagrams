import { Position } from "./Position";
import { Positionable } from "./Positionable";

export class BoxPlacement implements Positionable {
  offset: Position | null = null;

  constructor(public position: Position) {}

  setPosition(position: Position) {
    if (this.offset) {
      this.position = {
        x: position.x - this.offset.x,
        y: position.y - this.offset.y,
      };
    }
  }

  setOffset(position: Position) {
    if (this.position) {
      this.offset = {
        x: position.x - this.position.x,
        y: position.y - this.position.y,
      };
    }
  }
}
