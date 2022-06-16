import Container from '@components/shared/Container';
import LandingNav from '@components/LandingNav';
import { useColorMode } from '@hooks/UseColorMode';
import React from 'react';

interface LandingLayoutProps {
  children: React.ReactElement;
}

const LandingLayout = (props: LandingLayoutProps) => {
  const { children } = props;
  const { colorMode } = useColorMode();

  return (
    <div
      data-theme={colorMode}
      className="h-full w-full overflow-hidden relative"
    >
      <LandingNav />
      <Container>{children}</Container>
    </div>
  );
};

export default LandingLayout;
