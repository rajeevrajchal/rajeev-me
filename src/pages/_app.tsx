import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode, useEffect, useState } from 'react';

import { ColorModeProvider } from '@hooks/UseColorMode';
import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
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
  return getLayout(app);
};

export default MyApp;
