import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
