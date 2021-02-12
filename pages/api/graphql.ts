import { ApolloServer } from 'apollo-server-micro';
import 'graphql-import-node';
import { DIRECTIVES } from '@graphql-codegen/typescript-mongodb';
import typeDefs from '@GraphQL/schema.graphql';
import resolvers from '@GraphQL/resolvers';

const apolloServer = new ApolloServer({
  typeDefs: [DIRECTIVES, typeDefs],
  resolvers,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

async function start(req: any, res: any) {
  return apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}

export default start;
