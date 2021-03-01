import {
  getPlatformCollection,
  getPlatformMvcFromDbObject,
} from '@GraphQL/Platform';
import { ObjectID } from 'mongodb';

const updatePlatform = async (_: any, { id, data }) => {
  const collection = await getPlatformCollection();
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

  return getPlatformMvcFromDbObject(result.value);
};

export default updatePlatform;
