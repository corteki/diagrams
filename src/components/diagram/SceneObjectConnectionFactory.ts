import { Connection } from "./Connection";
import { Line } from "./Line";
import { SceneObject } from "./SceneObject";
import { SceneObjectConnection } from "./SceneObjectConnection";

export class SceneObjectConnectionFactory {
  constructor(
    private context: CanvasRenderingContext2D,
    private sceneObjects: SceneObject[]
  ) {}

  create(connection: Connection): SceneObjectConnection | null {
    switch (connection.type) {
      case "line": {
        const from =
          this.sceneObjects.find(
            (sceneObject) => sceneObject.id === connection.from
          ) ?? null;

        const to =
          this.sceneObjects.find(
            (sceneObject) => sceneObject.id === connection.to
          ) ?? null;

        return new Line(from, to, this.context);
      }
      default: {
        throw new Error(`type ${connection.type} was not recognized`);
      }
    }
  }
}
