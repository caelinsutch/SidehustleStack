import { PlatformMvcDbObject } from '../src/DAO';
import getDb from './getDb';
import { getData } from './getData';

const changeFundingToString = async () => {
  const db = await getDb();
  const platformCollection = db.collection<PlatformMvcDbObject>('Platform');
  const data = await getData('./tools.csv');

  await Promise.all(
    data.map(({ name, funding }) =>
      platformCollection.findOneAndUpdate(
        {
          name,
        },
        {
          $set: {
            funding,
          },
        }
      )
    )
  );
};

changeFundingToString().then(() => {
  console.log('Complete');
});
