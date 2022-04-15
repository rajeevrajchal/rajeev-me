/* eslint-disable import/extensions */
import React from 'react';
import Link from 'next/link';
import { AlignJustify } from 'react-feather';

export type NavLink = {
  label: string;
  link: string;
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
      className="h-[10vh] flex px-8 lg:px-96 fixed top-0 left-0 w-[100%]"
      data-theme={colorMode}
    >
      <div className="flex items-center justify-between w-full ">
        <div className="flex-1">
          <Link href="/">
            <a className="text-bold font-bold text-2xl ">Rajeev Rajchal</a>
          </Link>
        </div>
        <div>
          <ul className="menu menu-horizontal p-0 gap-4 items-center border-none hidden lg:flex">
            {menu.map((item: NavLink) => (
              <li className="hover:bg-inherit text-lg font-bold">
                <Link href={item.link} passHref>
                  <a>{item.label}</a>
                </Link>
              </li>
            ))}
            <div className="hover:bg-none ">{customContent}</div>
          </ul>
          <span className="cursor-pointer lg:hidden">
            <AlignJustify />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
