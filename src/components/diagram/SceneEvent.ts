import { Position } from "./Position";

export type SceneEvent = {
  type: "click" | "release" | "move";
  position?: Position;
};
