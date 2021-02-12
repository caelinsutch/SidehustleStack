import { Db } from 'mongodb';
import { connect } from '@DAO';
import { todoMutations, todoQueries } from '@GraphQL/Todo';
import { platformMutations, platformQueries } from '@GraphQL/Platform';
import { Resolvers } from './types';

export const dbPromise: Promise<Db> = connect();

const resolvers: Resolvers = {
  Query: {
    ...todoQueries,
    ...platformQueries,
  },
  Mutation: {
    ...todoMutations,
    ...platformMutations,
  },
};

export default resolvers;
