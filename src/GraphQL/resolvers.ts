import { Db } from 'mongodb';
import { connect } from '@DAO';
import { platformMutations, platformQueries } from '@GraphQL/Platform';
import { Resolvers } from './types';

export const dbPromise: Promise<Db> = connect();

const resolvers: Resolvers = {
  Query: {
    ...platformQueries,
  },
  Mutation: {
    ...platformMutations,
  },
};

export default resolvers;
