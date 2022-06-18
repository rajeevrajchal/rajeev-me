/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useRouter } from 'next/router';
import { useState } from 'react';
import classNames from 'classnames';

import { BiMenuAltRight } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';

import Logo from '@components/Logo';
import NextLink from '@components/shared/Link';
import Text from '@components/shared/Text';

import { menu, NavLink } from '@utils/AppMenu';
import { AppRoute } from 'constants/AppRoute';
import { SOCIAL_LINKS, SOCIAL_LINKS_TYPE } from 'constants/SocialLink';

const LandingNav = () => {
  const router = useRouter();
  const { pathname } = router;

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="px-6 md:px-54 xl:px-64 2xl:px-74 py-2 flex items-center justify-between  overflow-hidden">
      <div
        onClick={() => router.push(AppRoute.HOME)}
        className="cursor-pointer"
      >
        <Logo />
      </div>
      <>
        {!openMenu ? (
          <BiMenuAltRight
            size={40}
            color="#4e85ff"
            className=" block md:hidden"
            onClick={() => setOpenMenu(true)}
          />
        ) : (
          <IoClose
            size={40}
            color="#4e85ff"
            className="block md:hidden"
            onClick={() => setOpenMenu(false)}
          />
        )}
      </>
      <ul
        className={classNames(
          'absolute md:relative top-20 md:top-0 left-0 z-50 bg-[#43526e] md:bg-transparent w-full h-full flex-col md:flex-row  sm:gap-7 p-12 md:p-0 gap-12 md:justify-end md:flex',
          openMenu ? 'flex md:flex' : 'hidden'
        )}
      >
        {menu.map((nav: NavLink) => (
          <li onClick={() => setOpenMenu(false)} key={nav.label}>
            <NextLink
              href={nav.link}
              label={nav.label}
              active={pathname === nav.link}
              customClass="capitalize"
            />
          </li>
        ))}

        <div className="flex flex-col gap-8 md:hidden">
          <ul className="grid grid-cols-3 gap-6 justify-center items-center place-content-center">
            {SOCIAL_LINKS.map((item: SOCIAL_LINKS_TYPE, index: number) => (
              <li key={`${item.label}-${index}`}>
                <NextLink
                  href={item.link}
                  label={item.label}
                  icon={item.icon}
                  customClass="capitalize flex flex-col items-center gap-2"
                />
              </li>
            ))}
          </ul>
          <Text
            text="Build with love - Rajeev Rajchal"
            customClass="text-center"
          />
        </div>
      </ul>
    </div>
  );
};

export default LandingNav;
