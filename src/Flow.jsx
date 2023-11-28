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
  backgroundColor: "yellow",
};
const nodeTypes = { textUpdater: TextUpdaterNode };
/**노드 */
// const initialNodes = [
//   {
//     /* 다양한 노드를 활용하기 위해 고유한 id를 부여함 */
//     id: "1",
//     data: { label: "Hello" },
//     position: { x: 0, y: 0 },
//     type: "input",
//   },
//   {
//     id: "2",
//     data: { label: "World" },
//     position: { x: 100, y: 100 },
//   },
//   {
//     id: "3",
//     data: { label: "New World" },
//     position: { x: 200, y: 200 },
//   },
// ];
const initialNodes = [
  {
    id: "node-1",
    type: "textUpdater",
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
];

/**엣지 */
const initialEdges = [
  {
    id: "1-2", //노드1에서 노드2로 가는 엣지
    source: "1", //시작하는 노드
    target: "2", //끝나는 노드
    label: "to the", //엣지에 이름도 넣어줄 수 있다.
    type: "step",
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
