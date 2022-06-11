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
  // eslint-disable-next-line react/require-default-props
  customClass?: string;
}

const NextLink = (props: NextLinkProps) => {
  const { href, label, customClass, ...rest } = props;
  const linkClass = classNames(
    'text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150',
    customClass
  );
  return (
    <Link href={href}>
      <a {...rest} className={linkClass}>
        {label}
      </a>
    </Link>
  );
};

export default NextLink;
