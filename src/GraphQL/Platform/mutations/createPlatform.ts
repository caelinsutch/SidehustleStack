import { PlatformMvcDbObject } from '@DAO';
import { getPlatformCollection, getPlatformMvcFromDbObject } from '..';

const createPlatform = async (_: any, { description, name }) => {
  const data: Omit<PlatformMvcDbObject, '_id'> = {
    description,
    name,
  };

  const collection = await getPlatformCollection();
  const document = await collection.insertOne(data);
  return getPlatformMvcFromDbObject({
    ...data,
    _id: document.insertedId,
  });
};

export default createPlatform;
