import { PlatformMvcDbObject } from '@DAO';
import { Status } from '@GraphQL/types';
import { getPlatformCollection, getPlatformMvcFromDbObject } from '..';

const createPlatform = async (_: any, { platform }) => {
  const data: Omit<PlatformMvcDbObject, '_id'> = {
    ...platform,
    status: Status.InReview,
  };

  const collection = await getPlatformCollection();
  const document = await collection.insertOne(data);
  return getPlatformMvcFromDbObject({
    ...data,
    _id: document.insertedId,
  });
};

export default createPlatform;
