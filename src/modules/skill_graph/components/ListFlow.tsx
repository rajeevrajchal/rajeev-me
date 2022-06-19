import RFlow from '@components/RFlow';
import SectionTitle from '@components/shared/SectionTitle';
import React from 'react';
import { Edge, Node } from 'react-flow-renderer';

type ListNode = {
  label: string;
  initialNodes: Node[];
  initialEdges: Edge[];
};

const list: ListNode[] = [
  {
    label: 'Frontend',
    initialNodes: [
      {
        id: '1',
        data: { label: 'Frontend' },
        position: { x: 0, y: 0 },
        type: 'input',
      },
      {
        id: '2',
        data: { label: 'React' },
        position: { x: -200, y: 150 },
        type: 'output',
      },
      {
        id: '3',
        data: { label: 'Next JS', color: 'red' },
        position: { x: 0, y: 150 },
        type: 'output',
      },
      {
        id: '4',
        data: { label: 'Gatsby' },
        position: { x: 200, y: 150 },
        type: 'output',
      },
      {
        id: '5',
        data: { label: 'HTML' },
        position: { x: -200, y: -150 },
        type: 'output',
      },
      {
        id: '6',
        data: { label: 'CSS' },
        position: { x: 0, y: -150 },
        type: 'output',
      },
      {
        id: '7',
        data: { label: 'JS' },
        position: { x: 200, y: -150 },
        type: 'output',
      },
      {
        id: '8',
        data: { label: 'React Native' },
        position: { x: 250, y: 50 },
        type: 'output',
      },
    ],
    initialEdges: [
      {
        id: 'f-1',
        source: '1',
        target: '2',
        animated: false,
        type: 'default',
        label: 'Intermediate',
      },
      {
        id: 'f-2',
        source: '1',
        target: '3',
        animated: false,
        type: 'default',
        label: 'Intermediate',
      },
      {
        id: 'f-3',
        source: '1',
        target: '4',
        animated: false,
        type: 'default',
        label: 'Beginner',
      },
      {
        id: 'f-4',
        source: '1',
        target: '5',
        animated: false,
        type: 'default',
        label: 'Experience',
      },
      {
        id: 'f-5',
        source: '1',
        target: '6',
        animated: false,
        type: 'default',
        label: 'Experience',
      },
      {
        id: 'f-6',
        source: '1',
        target: '7',
        animated: false,
        type: 'default',
        label: 'Experience',
      },
      {
        id: 'f-6',
        source: '1',
        target: '8',
        animated: false,
        type: 'default',
        label: 'Intermeidate',
      },
    ],
  },
  {
    label: 'UI Libries',
    initialNodes: [
      {
        id: '1',
        data: { label: 'UI Libries' },
        position: { x: 0, y: 0 },
        type: 'input',
      },
      {
        id: '2',
        data: { label: 'Tailwind CSS' },
        position: { x: -200, y: 85 },
        type: 'output',
      },
      {
        id: '3',
        data: { label: 'Chakra UI', color: 'red' },
        position: { x: 0, y: 100 },
        type: 'output',
      },
      {
        id: '4',
        data: { label: 'Material UI' },
        position: { x: 200, y: 85 },
        type: 'output',
      },
    ],
    initialEdges: [
      {
        id: 'ui-1',
        source: '1',
        target: '2',
        animated: false,
        type: 'default',
        label: 'Intermediate',
      },
      {
        id: 'ui-2',
        source: '1',
        target: '3',
        animated: false,
        type: 'default',
        label: 'Intermediate',
      },
      {
        id: 'ui-3',
        source: '1',
        target: '4',
        animated: false,
        type: 'default',
        label: 'Intermediate',
      },
    ],
  },
  {
    label: 'Backend',
    initialNodes: [
      {
        id: '1',
        data: { label: 'Backend (GraphQL / Rest API)' },
        position: { x: 0, y: 0 },
        type: 'input',
      },
      {
        id: '2',
        data: { label: 'Node Js' },
        position: { x: -200, y: 85 },
      },
      {
        id: '3',
        data: { label: 'Express', color: 'red' },
        position: { x: -300, y: 160 },
        type: 'output',
      },
      {
        id: '4',
        data: { label: 'Laravel' },
        position: { x: 200, y: 85 },
        type: 'output',
      },
      {
        id: '5',
        data: { label: 'Nest' },
        position: { x: -100, y: 160 },
        type: 'output',
      },
    ],
    initialEdges: [
      {
        id: 'b-1',
        source: '1',
        target: '2',
        animated: false,
        label: 'Intermediate',
        type: 'default',
      },
      {
        id: 'b-1-1',
        source: '2',
        target: '3',
        animated: false,
        label: 'Intermediate',
        type: 'default',
      },
      {
        id: 'b-1-2',
        source: '2',
        target: '5',
        animated: false,
        label: 'Beginner',
        type: 'default',
      },
      {
        id: 'b-3',
        source: '1',
        target: '4',
        animated: false,
        type: 'default',
        label: 'Intermediate',
      },
    ],
  },
  {
    label: 'Database',
    initialNodes: [
      {
        id: '1',
        data: { label: 'Database' },
        position: { x: 0, y: 0 },
        type: 'input',
      },
      {
        id: '2',
        data: { label: 'Firebase' },
        position: { x: -200, y: 85 },
        type: 'output',
      },
      {
        id: '3',
        data: { label: 'Supabase', color: 'red' },
        position: { x: 0, y: 100 },
        type: 'output',
      },
      {
        id: '4',
        data: { label: 'MongoDB' },
        position: { x: 200, y: 85 },
        type: 'output',
      },
      {
        id: '5',
        data: { label: 'SQL/Posgres' },
        position: { x: 200, y: 85 },
        type: 'output',
      },
    ],
    initialEdges: [
      {
        id: 'd-1',
        source: '1',
        target: '2',
        animated: false,
        type: 'default',
        label: 'Intermediate',
      },
      {
        id: 'd-2',
        source: '1',
        target: '3',
        animated: false,
        type: 'default',
        label: 'Intermediate',
      },
      {
        id: 'd-3',
        source: '1',
        target: '4',
        animated: false,
        type: 'default',
        label: 'Intermediate',
      },
    ],
  },
];

const ListFlow = () => (
  <div className="flex flex-col gap-24 md:gap-16 ">
    {list.map((listItem: ListNode) => (
      <div key={listItem.label} className="flex flex-col  gap-2">
        <SectionTitle label={listItem.label} noLine />
        <RFlow
          nodes={listItem.initialNodes}
          edges={listItem.initialEdges}
          style={{
            height: listItem.label === 'Frontend' ? '30rem' : '20rem',
          }}
        />
      </div>
    ))}
  </div>
);

export default ListFlow;
