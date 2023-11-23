//React-Flow 라이브러리 기본 import
import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
  },
];

const Flow = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ReactFlow nodes={nodes}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Flow;
