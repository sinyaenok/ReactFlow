import { useState, useCallback } from "react";
import ReactFlow, {
  Controls, //컨트롤러
  Background, //배경
  applyEdgeChanges, //엣지를 이동하는 함수
  applyNodeChanges, //노드를 이동하는 함수
  addEdge, //엣지를 새로 연결시키는 함수
} from "reactflow";
import "reactflow/dist/style.css";

//내부 import
import TextUpdaterNode from "./TextUpdaterNode";
import "./text-updater-node.css";

const rfStyle = {
  backgroundColor: "#B8CEFF",
};
const nodeTypes = { textUpdater: TextUpdaterNode };
/**노드 */
const initialNodes = [
  {
    id: "node-1",
    type: "textUpdater",
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
  {
    id: "node-2",
    type: "output",
    targetPosition: "top",
    position: { x: 0, y: 200 },
    data: { label: "node 2" },
  },
  {
    id: "node-3",
    type: "output",
    targetPosition: "top",
    position: { x: 200, y: 200 },
    data: { label: "node 3" },
  },
];

/**엣지 */
const initialEdges = [
  {
    id: "edge-1",
    source: "node-1",
    target: "node-2",
    sourceHandle: "a",
  },
  {
    id: "edge-2",
    source: "node-1",
    target: "node-3",
    sourceHandle: "b",
  },
];
const Flow = () => {
  // <--상수-->
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  // 'React Flow' 상위 크기를 사용. 따라서 너비와 높이가 필요함
  const flowHeight = { height: "100vh" };

  // <-- 함수 -->
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div style={flowHeight}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
        style={rfStyle}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Flow;
