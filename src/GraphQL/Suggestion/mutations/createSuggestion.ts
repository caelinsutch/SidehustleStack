import { Status, SuggestionMvcDbObject } from '@DAO';
import {
  getSuggestionCollection,
  getSuggestionMvcFromDbObject,
} from '@GraphQL/Suggestion';

const createSuggestions = async (_: any, { suggestion }) => {
  const data: Omit<SuggestionMvcDbObject, '_id'> = {
    ...suggestion,
    status: Status.InReview,
  };

  const collection = await getSuggestionCollection();
  const document = await collection.insertOne(data);
  return getSuggestionMvcFromDbObject({
    ...data,
    _id: document.insertedId,
  });
};

export default createSuggestions;
