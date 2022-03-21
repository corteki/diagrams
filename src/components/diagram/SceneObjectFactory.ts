import { Box } from "./Box";
import { BoxCollider } from "./BoxCollider";
import { BoxPlacement } from "./BoxPlacement";
import { Color } from "./Color";
import { Node } from "./Node";
import { SceneObject } from "./SceneObject";

const DEFAULT_DIMENSION = 100;
const DEFAULT_PLACEMENT = { x: 0, y: 0 };
const DEFAULT_RGB_VALUE = 0;

export class SceneObjectFactory {
  constructor(private context: CanvasRenderingContext2D) {}

  create(node: Node): SceneObject {
    switch (node.type) {
      case "box": {
        const color = new Color(
          node.color?.r ?? DEFAULT_RGB_VALUE,
          node.color?.g ?? DEFAULT_RGB_VALUE,
          node.color?.b ?? DEFAULT_RGB_VALUE
        );
        const placement = new BoxPlacement(node.position ?? DEFAULT_PLACEMENT);
        const collider = new BoxCollider(
          node.width ?? DEFAULT_DIMENSION,
          node.height ?? DEFAULT_DIMENSION
        );
        return new Box(node.id, placement, collider, this.context, color);
      }
      default: {
        throw new Error(`type ${node.type} was not recognized`);
      }
    }
  }
}
