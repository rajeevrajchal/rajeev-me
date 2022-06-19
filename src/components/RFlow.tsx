/* eslint-disable react/require-default-props */
/* eslint-disable consistent-return */
import classNames from 'classnames';
import React from 'react';
import ReactFlow, {
  Controls,
  FitViewOptions,
  MiniMap,
  Node,
  Edge,
} from 'react-flow-renderer';

const fitViewOptions: FitViewOptions = {
  maxZoom: 1,
  minZoom: 1,
};

interface RFlowProps {
  customClass?: string;
  nodes: Node[];
  edges: Edge[];
  style?: React.CSSProperties;
}
const RFlow = ({ nodes, edges, customClass, style }: RFlowProps) => (
  <ReactFlow
    nodes={nodes}
    edges={edges}
    fitView
    fitViewOptions={fitViewOptions}
    className={classNames(customClass, 'h-64')}
    style={
      style || {
        height: '20rem',
      }
    }
    snapToGrid
    snapGrid={[20, 20]}
    defaultZoom={1}
  >
    <MiniMap className="h-20 w-20 rounded-md hidden md:block" />
    <Controls className="bg-white rounded-sm flex md:flex-col" />
  </ReactFlow>
);

export default RFlow;
