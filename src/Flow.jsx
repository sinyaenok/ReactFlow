import { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Position,
} from "reactflow";

// import "reactflow/dist/style.css";
import "reactflow/dist/base.css";

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
};

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 150 },
    data: { label: "default style 1" },
    ...nodeDefaults,
  },
  {
    id: "2",
    position: { x: 250, y: 0 },
    data: { label: "default style 2" },
    ...nodeDefaults,
  },
  {
    id: "3",
    position: { x: 250, y: 150 },
    data: { label: "default style 3" },
    ...nodeDefaults,
  },
  {
    id: "4",
    position: { x: 250, y: 300 },
    data: { label: "default style 4" },
    ...nodeDefaults,
  },
  {
    id: "5",
    position: { x: 500, y: 150 },
    data: { label: "4" },

    ...nodeDefaults,
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    animated: true,
  },
  {
    id: "e1-4",
    source: "1",
    target: "4",
    animated: true,
  },
];

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

  return (
    <div style={{ height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default Flow;
