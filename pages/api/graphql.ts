import { ApolloServer } from 'apollo-server-micro';
import 'graphql-import-node';
import { DIRECTIVES } from '@graphql-codegen/typescript-mongodb';
import typeDefs from '@GraphQL/schema.graphql';
import resolvers from '@GraphQL/resolvers';
import { NextApiRequest, NextApiResponse } from 'next';

const apolloServer = new ApolloServer({
  typeDefs: [DIRECTIVES, typeDefs],
  resolvers,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const GraphQl = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview' ||
    process.env.VERCEL_ENV === 'preview'
  ) {
    return res
      .status(400)
      .json({ status: 'Backend only runs on production deployments' });
  }

  return apolloServer.createHandler({ path: '/api/graphql' })(req, res);
};

export default GraphQl;
