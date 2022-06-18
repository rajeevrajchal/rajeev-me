/* eslint-disable react/require-default-props */
import { PropsWithChildren, ReactElement } from 'react';
import Link, { LinkProps } from 'next/link';
import classNames from 'classnames';

type HrefType =
  | {
      pathname: string;
      query: {
        slug: string;
      };
    }
  | string;

interface NextLinkProps extends PropsWithChildren<LinkProps> {
  href: HrefType;
  label: string | ReactElement;
  active?: boolean;
  // eslint-disable-next-line react/require-default-props
  customClass?: string;
}

const NextLink = (props: NextLinkProps) => {
  const { href, label, customClass, active, ...rest } = props;
  const linkClass = classNames(
    'leading-6 font-medium focus:outline-none focus:text-[#4e85ff] transition ease-in-out duration-150',
    customClass,
    active ? 'text-[#4e85ff] hover:text-base' : 'text-base hover:text-[#4e85ff]'
  );
  return (
    <Link href={href} passHref>
      <a {...rest} className={linkClass}>
        {label}
      </a>
    </Link>
  );
};

export default NextLink;
