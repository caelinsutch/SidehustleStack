import {
  getSuggestionCollection,
  getSuggestionMvcFromDbObject,
} from '@GraphQL/Suggestion';

const allSuggestions = async () => {
  const collection = await getSuggestionCollection();
  return collection.find().map(getSuggestionMvcFromDbObject).toArray();
};

export default allSuggestions;
