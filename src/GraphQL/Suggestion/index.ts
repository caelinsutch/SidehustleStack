import { SuggestionMvc, SuggestionMvcDbObject } from '@DAO';
import { dbPromise } from '@GraphQL/resolvers';
import queries from '@GraphQL/Suggestion/queries';
import mutations from '@GraphQL/Suggestion/mutations';

export const getSuggestionMvcFromDbObject = ({
  _id,
  ...object
}: SuggestionMvcDbObject): SuggestionMvc =>
  ({
    id: _id.toHexString(),
    ...object,
  } as SuggestionMvc);

export const getSuggestionCollection = async () => {
  const db = await dbPromise;
  return db.collection<SuggestionMvcDbObject>('Suggestion');
};

export const suggestionQueries = queries;
export const suggestionMutations = mutations;
