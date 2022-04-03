import { ColorModeProvider } from '@hooks/UseColorMode';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const app = (
    <ColorModeProvider>
      <Component {...pageProps} />
    </ColorModeProvider>
  );
  return app;
}

export default MyApp;
