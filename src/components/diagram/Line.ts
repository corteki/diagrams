import { Position } from "./Position";
import { SceneObject } from "./SceneObject";
import { SceneObjectConnection } from "./SceneObjectConnection";

export class Line implements SceneObjectConnection {
  constructor(
    public from: SceneObject | null,
    public to: SceneObject | null,
    private context: CanvasRenderingContext2D
  ) {}

  draw(): void {
    const [from, to] = this.getCenterPositions();
    this.context.beginPath();
    this.context.moveTo(from.x, from.y);
    this.context.lineTo(to.x, to.y);
    this.context.stroke();
  }

  private getCenterPositions() {
    if (
      this.from?.placement?.position &&
      this.from?.collider?.width &&
      this.to?.placement?.position &&
      this.to?.collider?.width
    ) {
      const DIVISION = 2;
      const fromCenterPosition: Position = {
        x: this.from.placement.position.x + this.from.collider.width / DIVISION,
        y:
          this.from.placement.position.y + this.from.collider.height / DIVISION,
      };
      const toCenterPosition: Position = {
        x: this.to.placement.position.x + this.to.collider.width / DIVISION,
        y: this.to.placement.position.y + this.to.collider.height / DIVISION,
      };

      return [fromCenterPosition, toCenterPosition];
    }

    return [];
  }
}
