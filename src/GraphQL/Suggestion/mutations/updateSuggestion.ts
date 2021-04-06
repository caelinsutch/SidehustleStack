import {
  getSuggestionCollection,
  getSuggestionMvcFromDbObject,
} from '@GraphQL/Suggestion';
import { ObjectID } from 'mongodb';

const updateSuggestion = async (_: any, { id, data }) => {
  const collection = await getSuggestionCollection();
  const result = await collection.findOneAndUpdate(
    {
      _id: ObjectID.createFromHexString(id),
    },
    {
      $set: data,
    },
    {
      returnOriginal: false,
    }
  );

  return getSuggestionMvcFromDbObject(result.value);
};

export default updateSuggestion;
