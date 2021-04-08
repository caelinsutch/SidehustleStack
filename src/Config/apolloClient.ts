import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'node-fetch';
import { isProduction } from '@Utils';

const serverUri = isProduction
  ? 'https://sidehustlestack-web.vercel.app/api/graphql'
  : 'http://localhost:3000/api/graphql';

const uri = process.env.browser ? '/api/graphql' : serverUri;

const client = new ApolloClient({
  link: new HttpLink({ uri, fetch: fetch as any }),
  cache: new InMemoryCache(),
});

export default client;
