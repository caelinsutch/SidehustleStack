import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';

import { Fonts } from '@Components';
import { theme, client } from '@Config';
import { RecoilRoot } from 'recoil';
import { QueryParamProvider } from '../src/Providers/QueryParamProvider';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <RecoilRoot>
      <QueryParamProvider>
        <Fonts />
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryParamProvider>
    </RecoilRoot>
  </ApolloProvider>
);

export default App;
