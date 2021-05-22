import { PlatformInput, Status } from '../src/GraphQL/types';
import { PlatformMvcDbObject } from '../src/DAO';

import getDb from './getDb';
import { getData } from './getData';

const uploadPlatform = async (platform: PlatformInput) => {
  const db = await getDb();
  const platformCollection = db.collection<PlatformMvcDbObject>('Platform');

  const data: Omit<PlatformMvcDbObject, '_id'> = {
    ...platform,
    status: Status.Published,
    reviews: [],
    score: 0,
  };

  await platformCollection.insertOne(data);
};

getData().then((data) => {
  Promise.all(
    data.map(async (platform) => {
      await uploadPlatform(platform);
    })
  ).then(() => {
    console.log('Platforms uploaded!');
  });
});
