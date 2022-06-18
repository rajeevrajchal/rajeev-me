/* eslint-disable react/require-default-props */
import classNames from 'classnames';
import React from 'react';

type Size = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
interface SpacerProps {
  size?: Size;
}
const Spacer = (props: SpacerProps) => {
  const { size = 'lg' } = props;
  return (
    <div
      className={classNames(
        size === 'sm' && 'mt-8',
        size === 'md' && 'mt-12',
        size === 'lg' && 'mt-16',
        size === 'xl' && 'mt-20',
        size === '2xl' && 'mt-24'
      )}
    />
  );
};

export default Spacer;
