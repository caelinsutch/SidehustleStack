import { PlatformMvcDbObject } from '@DAO';
import { PlatformMvc } from '@GraphQL/types';
import mutations from '@GraphQL/Platform/mutations';
import queries from '@GraphQL/Platform/queries';
import { dbPromise } from '../resolvers';

export const getPlatformMvcFromDbObject = ({
  _id,
  ...object
}: PlatformMvcDbObject): PlatformMvc =>
  ({
    id: _id.toHexString(),
    ...object,
  } as PlatformMvc);

export const getPlatformCollection = async () => {
  const db = await dbPromise;
  return db.collection<PlatformMvcDbObject>('Platform');
};

export const platformQueries = queries;
export const platformMutations = mutations;
