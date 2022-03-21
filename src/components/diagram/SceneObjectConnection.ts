import { SceneObject } from "./SceneObject";

export interface SceneObjectConnection {
  from: SceneObject | null;
  to: SceneObject | null;
  draw(): void;
}
