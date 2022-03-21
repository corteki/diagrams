import { MouseEvent } from "react";
import { Scene } from "./Scene";

export class MouseController {
  constructor(private scene: Scene) {
    this.scene.draw();
  }

  onClick = ({ clientX, clientY }: MouseEvent<HTMLCanvasElement>) => {
    this.scene.draw();
    this.scene.update({ type: "click", position: { x: clientX, y: clientY } });
  };

  onRelease = (e: MouseEvent<HTMLCanvasElement>) => {
    this.scene.draw();
    this.scene.update({ type: "release" });
  };

  onLeave = (e: MouseEvent<HTMLCanvasElement>) => {
    this.scene.draw();
    this.scene.update({ type: "release" });
  };

  onMove = ({ clientX, clientY }: MouseEvent<HTMLCanvasElement>) => {
    this.scene.clear();
    this.scene.draw();
    this.scene.update({ type: "move", position: { x: clientX, y: clientY } });
  };
}
