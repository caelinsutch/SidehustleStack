import { ObjectID } from 'mongodb';
import {
  getPlatformCollection,
  getPlatformMvcFromDbObject,
} from '@GraphQL/Platform';

const platform = async (_: any, { platformId }) => {
  const collection = await getPlatformCollection();
  const dbObject = await collection.findOne({
    _id: ObjectID.createFromHexString(platformId),
  });
  return getPlatformMvcFromDbObject(dbObject);
};
export default platform;
