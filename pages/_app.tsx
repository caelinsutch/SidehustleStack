import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';

import { Fonts } from '@Components';
import { theme, client } from '@Config';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <Fonts />
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  </ApolloProvider>
);

export default App;
