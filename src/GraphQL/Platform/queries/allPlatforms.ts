import {
  getPlatformCollection,
  getPlatformMvcFromDbObject,
} from '@GraphQL/Platform';

const allPlatforms = async () => {
  const collection = await getPlatformCollection();
  return collection.find().map(getPlatformMvcFromDbObject).toArray();
};

export default allPlatforms;
