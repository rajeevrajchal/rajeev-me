import React from 'react';
import { BiMenuAltRight } from 'react-icons/bi';

import Logo from '@components/Logo';

const LandingNav = () => (
  <div className="px-6 md:px-24 xl:px-34 2xl:px-44 py-2 flex items-center justify-between  overflow-hidden">
    <Logo />
    <BiMenuAltRight size={40} color="#4e85ff" />
  </div>
);

export default LandingNav;
