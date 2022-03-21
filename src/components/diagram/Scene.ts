import { Connection } from "./Connection";
import { Lifecycle } from "./Lifecycle";
import { Node } from "./Node";
import { SceneEvent } from "./SceneEvent";
import { SceneObject } from "./SceneObject";
import { SceneObjectConnection } from "./SceneObjectConnection";
import { SceneObjectConnectionFactory } from "./SceneObjectConnectionFactory";
import { SceneObjectFactory } from "./SceneObjectFactory";

export class Scene implements Lifecycle {
  private target: SceneObject | null = null;
  private sceneObjects: SceneObject[] = [];
  private sceneObjectConnections: SceneObjectConnection[] = [];

  constructor(
    nodes: Node[],
    connections: Connection[],
    private context: CanvasRenderingContext2D | null
  ) {
    if (this.context) {
      const sceneObjectFactory = new SceneObjectFactory(this.context);
      this.sceneObjects = nodes.map((node) => sceneObjectFactory.create(node));
      const sceneObjectConnectionFactory = new SceneObjectConnectionFactory(
        this.context,
        this.sceneObjects
      );
      this.sceneObjectConnections = connections.map((connection) =>
        sceneObjectConnectionFactory.create(connection)
      );
    }
  }

  draw() {
    this.sceneObjectConnections.forEach((sceneObjectConnection) =>
      sceneObjectConnection.draw()
    );
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
      const bounds = this.context.canvas.getBoundingClientRect();
      this.context.clearRect(
        bounds.top,
        bounds.left,
        this.context.canvas.width,
        this.context.canvas.height
      );
    }
  }
}
