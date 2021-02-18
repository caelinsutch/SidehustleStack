import { PlatformMvcDbObject } from '@DAO';
import { PlatformMvc } from '@GraphQL/types';
import mutations from '@GraphQL/Platform/mutations';
import queries from '@GraphQL/Platform/queries';
import { dbPromise } from '../resolvers';

export const getPlatformMvcFromDbObject = ({
  _id,
  category,
  equipmentQualSkills,
  ...object
}: PlatformMvcDbObject): PlatformMvc => ({
  platformId: _id.toHexString(),
  category: category as PlatformMvc['category'],
  equipmentQualSkills: equipmentQualSkills as PlatformMvc['equipmentQualSkills'],
  ...object,
});

export const getPlatformCollection = async () => {
  const db = await dbPromise;
  return db.collection<PlatformMvcDbObject>('Platform');
};

export const platformQueries = queries;
export const platformMutations = mutations;
