/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */
import React from 'react';
import classNames from 'classnames';
import { useColorMode } from '@hooks/UseColorMode';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string | React.ReactElement;
  variant?: Variant;
  customClass?: string;
}

const Text = (props: TextProps) => {
  const { colorMode } = useColorMode();
  const { text, variant = 'p', customClass } = props;

  const getTextVariant = () => {
    switch (variant) {
      case 'h1':
        return 'text-3xl font-bold';
      case 'h2':
        return 'text-2xl font-bold';
      case 'h3':
        return 'text-xl font-bold';
      case 'h4':
        return 'text-lg font-bold';
      case 'h5':
        return 'text-md font-bold';
      case 'h6':
        return 'text-sm font-bold';
      case 'p':
        return 'text-base';
      default:
        return 'text-base';
    }
  };

  const textClass = classNames(getTextVariant(), customClass);
  return (
    <div className={textClass} data-theme={colorMode}>
      {text}
    </div>
  );
};

export default Text;
