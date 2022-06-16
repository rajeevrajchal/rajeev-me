import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode, useEffect, useState } from 'react';

import { ColorModeProvider } from '@hooks/UseColorMode';
import '../styles/globals.css';
import Maintenance from '@components/views/Maintenance';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const DEPLOYMENT_ENV = process.env.NEXT_PUBLIC_DEPLOYMENT_TYPE;
  console.log('isMaintenance', DEPLOYMENT_ENV);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('splash_screen');
      if (loader) loader.style.display = 'none';
    }
  }, []);

  const app = (
    <ColorModeProvider>
      <Component {...pageProps} />
    </ColorModeProvider>
  );

  if (DEPLOYMENT_ENV === 'maintenance') {
    return <Maintenance />;
  }

  return getLayout(app);
};

export default MyApp;
