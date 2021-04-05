import {
  getPlatformCollection,
  getPlatformMvcFromDbObject,
} from '@GraphQL/Platform';
import { ObjectID } from 'mongodb';

const vote = async (_: any, { id, down }) => {
  const collection = await getPlatformCollection();
  const dbObject = await collection.findOne({
    _id: ObjectID.createFromHexString(id),
  });
  const previous = getPlatformMvcFromDbObject(dbObject);
  let newScore: number = previous.score != null ? previous.score : 0;
  if (down) {
    newScore -= 1;
  } else {
    newScore += 1;
  }
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
