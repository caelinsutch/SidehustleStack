/* eslint-disable import/no-mutable-exports */
import { MongoClient, Db } from 'mongodb';

export * from './types';

let client: MongoClient;
let database: Db;

let url = 'mongodb://localhost:27017';

export const connect = async (): Promise<Db> => {
  if (!database) {
    console.info(`Connecting to database ${url}`);
    client = await MongoClient.connect(url);
    database = client.db('sidehustlestack');
  }

  return database;
};

export { client, database };
