import { SceneEvent } from "./SceneEvent";

export interface Lifecycle {
  draw(): void;
  update(event: SceneEvent): void;
  clear(): void;
}
