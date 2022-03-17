import { BoxCollider } from "./BoxCollider";
import { Position } from "./Position";
import { Positionable } from "./Positionable";

export interface SceneObject {
  collider: BoxCollider | null;
  placement: Positionable | null;
  draw(): void;
  update(position: Position): void;
}
