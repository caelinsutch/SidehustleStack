import {
  getPlatformCollection,
  getPlatformMvcFromDbObject,
} from '@GraphQL/Platform';

const publishedPlatforms = async (_: any) => {
  const collection = await getPlatformCollection();
  return collection.find().map(getPlatformMvcFromDbObject).toArray();
};
export default publishedPlatforms;
