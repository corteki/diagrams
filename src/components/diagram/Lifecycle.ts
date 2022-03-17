import { SceneEvent } from "./SceneEvent";

export interface Lifecycle {
  start(): void;
  update(event: SceneEvent): void;
  clear(): void;
}
