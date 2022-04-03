/* eslint-disable import/extensions */
import React from 'react';
import Link from 'next/link';

import Avatar from './Avatar';

export type NavLink = {
  label: string;
  link: string;
};
interface NavProps {
  menu: NavLink[];
  customContent: React.ReactElement;
}
const Nav = (props: NavProps) => {
  const { menu, customContent } = props;

  return (
    <div className="navbar px-8 lg:px-60">
      <Link href="/">
        <div className="navbar-start gap-4 cursor-pointer">
          <Avatar
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHM5hE4oZzyXg/profile-displayphoto-shrink_400_400/0/1638156536819?e=1654732800&v=beta&t=lBbHXS58PNAiBzWWGFfYlI4W4rEOlWMpkFOMQAHXOiU"
            alt="rajeev rajchal"
            width="w-14"
          />
          <h3 className="text-bold font-bold leading-4 text-2xl">
            Rajeev Rajchal
          </h3>
        </div>
      </Link>
      <div className="navbar-end">
        <ul className="menu menu-horizontal p-0 gap-4 items-center">
          {menu.map((item: NavLink) => (
            <li className="hover:bg-none">
              <Link href={item.link} passHref>
                <a>{item.label}</a>
              </Link>
            </li>
          ))}
          <div className="hover:bg-none ">{customContent}</div>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
