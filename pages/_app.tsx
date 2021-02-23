import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import fetch from 'node-fetch';
import { ChakraProvider } from '@chakra-ui/react';

import { Fonts } from '@Components';
import { theme } from '@Config';

const client = new ApolloClient({
  link: new HttpLink({ uri: '/api/graphql', fetch: fetch as any }),
  cache: new InMemoryCache(),
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <Fonts />
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  </ApolloProvider>
);

export default App;
