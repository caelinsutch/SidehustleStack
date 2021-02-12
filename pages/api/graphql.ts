import { ApolloServer } from 'apollo-server-micro';
import 'graphql-import-node';
import { NextApiRequest, NextApiResponse } from 'next';
import typeDefs from '@GraphQL/schema.graphql';
import resolvers from '@GraphQL/resolvers';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

async function start(req: NextApiRequest, res: NextApiResponse) {
  return apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}

export default start;
