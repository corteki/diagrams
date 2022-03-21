import { BoxPlacement } from "./BoxPlacement";
import { BoxCollider } from "./BoxCollider";
import { Color } from "./Color";
import { Position } from "./Position";
import { SceneObject } from "./SceneObject";

export class Box implements SceneObject {
  constructor(
    public id: string,
    public placement: BoxPlacement,
    public collider: BoxCollider,
    private context: CanvasRenderingContext2D,
    private color: Color
  ) {}

  draw(): void {
    this.collider.update(this.placement.position);
    this.context.fillStyle = this.color.toRGB();
    this.context.fillRect(
      this.placement.position.x,
      this.placement.position.y,
      this.collider.width,
      this.collider.height
    );
  }

  update(position: Position): void {
    this.placement.setPosition(position);
    this.draw();
  }
}
