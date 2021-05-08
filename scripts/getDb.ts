import { MongoClient } from 'mongodb';

const getDb = async () => {
  let dbName = 'sidehustlestack-production';

  const client = await MongoClient.connect(
    `mongodb+srv://admin:adminpassword@sidehustlemain.qrbvi.mongodb.net/${dbName}?retryWrites=true&w=majority`,
    {
      maxIdleTimeMS: 120000,
    }
  );

  const db = client.db(dbName);

  return db;
};

export default getDb;
