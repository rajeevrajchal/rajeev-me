/* eslint-disable react/require-default-props */
import classNames from 'classnames';
import React from 'react';

type Size = 'sm' | 'md' | 'lg' | 'xl';
interface SpacerProps {
  size?: Size;
}
const Spacer = (props: SpacerProps) => {
  const { size = 'lg' } = props;
  return (
    <div
      className={classNames(
        size === 'sm' && 'mt-8',
        size === 'md' && 'mt-10',
        size === 'lg' && 'mt-12',
        size === 'xl' && 'mt-14'
      )}
    />
  );
};

export default Spacer;
