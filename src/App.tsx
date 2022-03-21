import { Diagram } from "./components";
import { Connection } from "./components/diagram/Connection";
import { Node } from "./components/diagram/Node";

const NODES: Node[] = [
  {
    id: "b-1",
    type: "box",
    position: { x: 100, y: 100 },
    width: 150,
    height: 30,
    text: "Some very long description that's obviously longer than the width that I defined above and even longer wooooooooo.",
    color: { r: 200, g: 20, b: 100 },
    padding: 20,
  },
  {
    id: "b-2",
    type: "box",
    position: { x: 300, y: 200 },
    width: 30,
    height: 30,
    color: { r: 50, g: 50, b: 120 },
    padding: 20,
  },
  {
    id: "b-3",
    type: "box",
    position: { x: 150, y: 160 },
    width: 190,
    height: 30,
    color: { r: 50, g: 100, b: 120 },
    padding: 20,
  },
];

const CONNECTIONS: Connection[] = [
  {
    id: "l-1",
    type: "line",
    from: "b-3",
    to: "b-2",
  },
  {
    id: "l-2",
    type: "line",
    from: "b-1",
    to: "b-3",
  },
  {
    id: "l-3",
    type: "line",
    from: "b-1",
    to: "b-2",
  },
];

const DIAGRAM_DIMENSIONS = {
  width: 1000,
  height: 500,
};

function App() {
  return (
    <Diagram nodes={NODES} connections={CONNECTIONS} {...DIAGRAM_DIMENSIONS} />
  );
}

export default App;
