/* eslint-disable consistent-return */
import classNames from 'classnames';
import React from 'react';
import ReactFlow, {
  Controls,
  FitViewOptions,
  MiniMap,
} from 'react-flow-renderer';

const fitViewOptions: FitViewOptions = {
  maxZoom: 1,
  minZoom: 1,
};
const RFlow = ({ nodes, edges, customClass }) => (
  <ReactFlow
    nodes={nodes}
    edges={edges}
    fitView
    fitViewOptions={fitViewOptions}
    className={classNames(customClass, 'h-64')}
    snapToGrid
    snapGrid={[20, 20]}
    defaultZoom={1.5}
  >
    <MiniMap className="h-20 w-20 rounded-md" />
    <Controls className="bg-white rounded-sm" />
  </ReactFlow>
);

export default RFlow;
