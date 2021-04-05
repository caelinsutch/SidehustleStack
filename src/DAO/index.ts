/* eslint-disable import/no-mutable-exports */
import { Db, MongoClient } from 'mongodb';

export * from './types';

let client: MongoClient;
let database: Db;

// const dbName = `sidehustlestack-${process.env.NODE_ENV}`;
const dbName = 'sidehustlestack-production';

const url = `mongodb+srv://admin:adminpassword@sidehustlestackmain.qrbvi.mongodb.net/${dbName}?retryWrites=true&w=majority`;

export const connect = async (): Promise<Db> => {
  if (!database) {
    console.info(`Connecting to database ${url}`);
    client = await MongoClient.connect(url);
    database = client.db(dbName);
  }

  return database;
};

export { client, database };
