import { ObjectID } from 'mongodb';
import {
  getPlatformCollection,
  getPlatformMvcFromDbObject,
} from '@GraphQL/Platform';
import { Review, Status } from '@GraphQL/types';

const addReview = async (_: any, { id, review }) => {
  const collection = await getPlatformCollection();
  const data: Review = {
    ...review,
    status: Status.InReview,
  };
  const result = await collection.findOneAndUpdate(
    {
      _id: ObjectID.createFromHexString(id),
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
