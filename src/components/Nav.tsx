/* eslint-disable import/extensions */
import React from 'react';
import Link from 'next/link';
import { AlignJustify } from 'react-feather';
import Button from './Button';

export type NavLink = {
  label: string;
  link: string;
  type?: 'link' | 'button';
};
interface NavProps {
  menu: NavLink[];
  colorMode: string;
  customContent: React.ReactElement;
}
const Nav = (props: NavProps) => {
  const { menu, customContent, colorMode } = props;

  return (
    <div
      className="h-[10vh] flex px-8 lg:px-96 fixed top-0 left-0 w-[100%] bg-base-100"
      data-theme={colorMode}
    >
      <div className="flex items-center justify-between w-full ">
        <div className="flex-1">
          <Link href="/">
            <a className="text-bold font-bold text-2xl ">Rajeev Rajchal</a>
          </Link>
        </div>
        <div className="flex items-start gap-8">
          <ul className="menu menu-horizontal p-0 gap-4 items-center border-none hidden lg:flex">
            {menu.map((item: NavLink) => (
              <>
                {item.type === 'button' ? (
                  <Button
                    label={item.label}
                    outline
                    variant="info"
                    key={item.label}
                  />
                ) : (
                  <li className="hover:bg-inherit text-lg" key={item.label}>
                    <Link href={item.link} passHref>
                      <a>{item.label}</a>
                    </Link>
                  </li>
                )}
              </>
            ))}
            <div className="hover:bg-none ">{customContent}</div>
          </ul>
          <div className="cursor-pointer lg:hidden">
            <AlignJustify />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
