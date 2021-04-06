import {
  getSuggestionCollection,
  getSuggestionMvcFromDbObject,
} from '@GraphQL/Suggestion';
import { ObjectID } from 'mongodb';

const suggestion = async (_: any, { id }) => {
  const collection = await getSuggestionCollection();
  const dbObject = await collection.findOne({
    _id: ObjectID.createFromHexString(id),
  });
  return getSuggestionMvcFromDbObject(dbObject);
};

export default suggestion;
