import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

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

  const app = (
    <ColorModeProvider>
      <Component {...pageProps} />
    </ColorModeProvider>
  );
  return getLayout(app);
};

export default MyApp;
