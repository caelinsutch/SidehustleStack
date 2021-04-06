import { Db } from 'mongodb';
import { connect } from '@DAO';
import { platformMutations, platformQueries } from '@GraphQL/Platform';
import { suggestionMutations, suggestionQueries } from '@GraphQL/Suggestion';
import { Resolvers } from './types';

export const dbPromise: Promise<Db> = connect();

const resolvers: Resolvers = {
  Query: {
    ...platformQueries,
    ...suggestionQueries,
  },
  Mutation: {
    ...platformMutations,
    ...suggestionMutations,
  },
};

export default resolvers;
