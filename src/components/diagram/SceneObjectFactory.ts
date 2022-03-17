import { Box } from "./Box";
import { BoxCollider } from "./BoxCollider";
import { BoxPlacement } from "./BoxPlacement";
import { Color } from "./Color";
import { Node } from "./Node";
import { SceneObject } from "./SceneObject";

export class SceneObjectFactory {
  constructor(private context: CanvasRenderingContext2D) {}

  createSceneObject(node: Node): SceneObject {
    const color = new Color(node.color.r, node.color.g, node.color.b);
    const placement = new BoxPlacement(node.position);
    const collider = new BoxCollider(node.width, node.height);
    switch (node.type) {
      case "box": {
        return new Box(this.context, color, placement, collider);
      }
      default: {
        throw new Error(`type ${node.type} was not recognized`);
      }
    }
  }
}
