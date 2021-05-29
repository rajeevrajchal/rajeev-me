import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  const app = (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
  return app;
}

export default MyApp;
