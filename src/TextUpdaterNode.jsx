import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 60 };

const TextUpdaterNode = ({ data, isConnectable }) => {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">Text : </label>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
      </div>

      <Handle
        id="a"
        type="source"
        position={Position.Bottom}
        style={handleStyle}
      />
      <Handle id="b" type="source" position={Position.Bottom} />
    </div>
  );
};

export default TextUpdaterNode;
