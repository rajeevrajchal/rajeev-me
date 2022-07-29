import Container from '@components/shared/Container';
import LandingNav from '@components/LandingNav';
import { useColorMode } from '@hooks/UseColorMode';
import React from 'react';
import LandingFooter from '@components/LandingFooter';
import classNames from 'classnames';

interface LandingLayoutProps {
  children: React.ReactElement;
}

const LandingLayout = (props: LandingLayoutProps) => {
  const { children } = props;
  const { colorMode } = useColorMode();

  return (
    <div
      data-theme={colorMode}
      className={classNames(
        'h-screen w-screen relative overflow-x-hidden',
        "bg-[url('/images/background.svg')]",
        'bg-no-repeat',
        'bg-cover'
      )}
    >
      <LandingNav />
      <Container>
        <>
          {children}
          <LandingFooter />
        </>
      </Container>
    </div>
  );
};

export default LandingLayout;
