/* eslint-disable react/require-default-props */
import classNames from 'classnames';
import React from 'react';

type Size = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
interface SpacerProps {
  size?: Size;
  orientation?: 'top' | 'bottom';
}
const Spacer = (props: SpacerProps) => {
  const { size = 'lg', orientation = 'top' } = props;
  return (
    <div
      className={classNames(
        size === 'sm' && orientation === 'top' ? 'mt-8' : 'mb-8',
        size === 'md' && orientation === 'top' ? 'mt-12' : 'mb-12',
        size === 'lg' && orientation === 'top' ? 'mt-16' : 'mb-16',
        size === 'xl' && orientation === 'top' ? 'mt-20' : 'mb-20',
        size === '2xl' && orientation === 'top' ? 'mt-24' : 'mb-24'
      )}
    />
  );
};

export default Spacer;
