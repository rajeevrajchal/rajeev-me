/* eslint-disable consistent-return */
import classNames from 'classnames';
import React from 'react';
import ReactFlow, { FitViewOptions } from 'react-flow-renderer';

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
    className={classNames(customClass)}
    snapToGrid
    snapGrid={[20, 20]}
    defaultZoom={1.5}
  />
);

export default RFlow;
