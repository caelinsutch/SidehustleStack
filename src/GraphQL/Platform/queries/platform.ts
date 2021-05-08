import { ObjectID } from 'mongodb';
import {
  getPlatformCollection,
  getPlatformMvcFromDbObject,
} from '@GraphQL/Platform';

const platform = async (_: any, { id, name }) => {
  const collection = await getPlatformCollection();
  let dbObject;
  if (id) {
    dbObject = await collection.findOne({
      _id: ObjectID.createFromHexString(id),
    });
  } else if (name) {
    dbObject = await collection.findOne({
      name: {
        $regex: `${name}.*`,
        $options: 'i',
      },
    });
  }

  return getPlatformMvcFromDbObject(dbObject);
};
export default platform;
