import { ObjectID } from 'mongodb';
import {
  getPlatformCollection,
  getPlatformMvcFromDbObject,
} from '@GraphQL/Platform';
import { Review, Status } from '@GraphQL/types';

const addReview = async (_: any, { platformId, review }) => {
  const collection = await getPlatformCollection();
  const data: Review = {
    ...review,
    status: Status.InReview,
  };
  const result = await collection.findOneAndUpdate(
    {
      _id: ObjectID.createFromHexString(platformId),
    },
    {
      $push: {
        reviews: data,
      },
    },
    {
      returnOriginal: false,
    }
  );
  return getPlatformMvcFromDbObject(result.value);
};

export default addReview;
