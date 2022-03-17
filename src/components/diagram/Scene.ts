import { Lifecycle } from "./Lifecycle";
import { Node } from "./Node";
import { SceneEvent } from "./SceneEvent";
import { SceneObject } from "./SceneObject";
import { SceneObjectFactory } from "./SceneObjectFactory";

export class Scene implements Lifecycle {
  private target: SceneObject | null = null;
  private sceneObjects: SceneObject[] = [];
  constructor(nodes: Node[], private context: CanvasRenderingContext2D | null) {
    if (this.context) {
      const factory = new SceneObjectFactory(this.context);
      this.sceneObjects = nodes.map((node) => factory.createSceneObject(node));
    }
  }

  start(): void {
    this.sceneObjects.forEach((sceneObject) => sceneObject.draw());
  }

  update(event: SceneEvent): void {
    this.sceneObjects.forEach((sceneObject) => {
      sceneObject.draw();
      switch (event.type) {
        case "click": {
          if (event.position && sceneObject.collider?.hasHit(event.position)) {
            this.target = sceneObject;
            this.target.placement?.setOffset(event.position);
            this.target.update(event.position);
          }
          break;
        }
        case "release": {
          this.target = null;
          break;
        }
        case "move": {
          if (event.position && this.target) {
            this.target.update(event.position);
          }
          break;
        }
        default: {
          throw new Error("Unknown event type");
        }
      }
    });
  }

  clear(): void {
    if (this.context) {
      this.context.clearRect(
        0,
        0,
        this.context.canvas.width,
        this.context.canvas.height
      );
    }
  }
}
