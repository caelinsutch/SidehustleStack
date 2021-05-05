/* eslint-disable import/no-mutable-exports */
import { Db, MongoClient } from 'mongodb';
import { isProduction } from '@Utils';

export * from './types';

let client: MongoClient;
let database: Db;

let dbName = 'sidehustlestack-development';

let url = `mongodb+srv://admin:adminpassword@main.qrbvi.mongodb.net/${dbName}?retryWrites=true&w=majority`;

if (isProduction) {
  dbName = 'sidehustlestack-production';
}

export const connect = async (): Promise<Db> => {
  if (!database) {
    console.info(`Connecting to database ${url}`);
    client = await MongoClient.connect(url, {
      maxIdleTimeMS: 1200000,
    });
    database = client.db(dbName);
  }

  return database;
};

export { client, database };
