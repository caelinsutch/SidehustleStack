/* eslint-disable import/no-mutable-exports */
import { Db, MongoClient } from 'mongodb';

export * from './types';

let client: MongoClient;
let database: Db;

let dbName = 'sidehustlestack-development';

let url = `mongodb+srv://admin:adminpassword@main.qrbvi.mongodb.net/${dbName}?retryWrites=true&w=majority`;

if (process.env.VERCEL !== undefined || process.env.NODE_ENV === 'production') {
  dbName = 'sidehustlestack-production';
}

export const connect = async (): Promise<Db> => {
  if (!database) {
    console.info(`Connecting to database ${url}`);
    client = await MongoClient.connect(url);
    database = client.db(dbName);
  }

  return database;
};

export { client, database };
