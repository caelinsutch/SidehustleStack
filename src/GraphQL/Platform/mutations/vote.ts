import {
  getPlatformCollection,
  getPlatformMvcFromDbObject,
} from '@GraphQL/Platform';
import { ObjectID } from 'mongodb';

const vote = async (_: any, { id, amount }) => {
  const collection = await getPlatformCollection();
  const dbObject = await collection.findOne({
    _id: ObjectID.createFromHexString(id),
  });
  const previous = getPlatformMvcFromDbObject(dbObject);
  let newScore: number = previous.score != null ? previous.score : 0;
  newScore += amount;

  const result = await collection.findOneAndUpdate(
    {
      _id: ObjectID.createFromHexString(id),
    },
    {
      $set: {
        score: newScore,
      },
    },
    {
      returnOriginal: false,
    }
  );

  return getPlatformMvcFromDbObject(result.value);
};

export default vote;
