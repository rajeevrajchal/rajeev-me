/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { useRouter } from 'next/router';

import Logo from '@components/Logo';
import NextLink from '@components/shared/Link';

import { menu, NavLink } from '@utils/AppMenu';
import { AppRoute } from 'constants/AppRoute';

const LandingNav = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="px-6 md:px-54 xl:px-64 2xl:px-74 py-2 flex items-center justify-between  overflow-hidden">
      <div
        onClick={() => router.push(AppRoute.HOME)}
        className="cursor-pointer"
      >
        <Logo />
      </div>
      <BiMenuAltRight size={40} color="#4e85ff" className=" block md:hidden" />
      <ul className="hidden md:flex items-center gap-12 ">
        {menu.map((nav: NavLink) => (
          <li>
            <NextLink
              href={nav.link}
              label={nav.label}
              active={pathname === nav.link}
              customClass="capitalize"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LandingNav;
