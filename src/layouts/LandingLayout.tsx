import { useColorMode } from '@hooks/UseColorMode';
import React from 'react';

interface LandingLayoutProps {
  children: React.ReactElement;
}

const LandingLayout = (props: LandingLayoutProps) => {
  const { children } = props;
  const { colorMode } = useColorMode();

  return (
    <div data-theme={colorMode} className="h-full w-full relative">
      {children}
    </div>
  );
};

export default LandingLayout;
