/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */
import classNames from 'classnames';
import { useColorMode } from '@hooks/UseColorMode';
import { ButtonHTMLAttributes, ReactElement } from 'react';

type Variant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'ghost'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string | ReactElement;
  variant?: Variant;
  outline?: boolean;
  customClass?: string;
}

const Button = (props: ButtonProps) => {
  const { colorMode } = useColorMode();
  const { label, variant = 'primary', outline, customClass } = props;

  const buttonClass = classNames(
    'btn rounded-xl tracking-wide px-8 py-2',
    `btn-${variant}`,
    outline && 'btn-outline',
    customClass
  );
  return (
    <button className={buttonClass} type="button" data-theme={colorMode}>
      {label}
    </button>
  );
};

export default Button;
