import { Position } from "./Position";

export class BoxCollider {
  private position: Position | null = null;
  constructor(public width: number, public height: number) {}

  update(position: Position): void {
    this.position = position;
  }

  hasHit({ x, y }: Position) {
    if (!this.position) {
      return false;
    }

    if (
      x >= this.position.x &&
      x <= this.position.x + this.width &&
      y >= this.position.y &&
      y <= this.position.y + this.height
    ) {
      return true;
    }

    return false;
  }
}
