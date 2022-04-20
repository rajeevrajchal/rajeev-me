import Footer from '@components/Footer';
import Nav, { NavLink } from '@components/Nav';
import Spacer from '@components/Spacer';
import { useColorMode } from '@hooks/UseColorMode';
import { AppRoute } from 'constants/AppRoute';
import React from 'react';

interface LandingLayoutProps {
  children: React.ReactElement;
}

const LandingLayout = (props: LandingLayoutProps) => {
  const { children } = props;
  const { htmlLyout, colorMode } = useColorMode();

  const menu: NavLink[] = [
    {
      label: 'Articles',
      link: AppRoute.ARTICLES,
    },
    {
      label: 'My Journey',
      link: AppRoute.JOURNEY,
    },
    {
      label: 'Works',
      link: AppRoute.PROJECT,
    },
    {
      label: 'Contact',
      link: AppRoute.CONTACT,
    },
  ];

  return (
    <div data-theme={colorMode} className="h-full w-full relative">
      <Nav menu={menu} customContent={htmlLyout} colorMode={colorMode} />
      <div className="container mx-auto px-8 md:px-24 xl:px-44 2xl:px-64 h-screen w-full pt-28 overflow-y-scroll">
        {children}
        <Spacer />
        <Footer />
      </div>
    </div>
  );
};

export default LandingLayout;
