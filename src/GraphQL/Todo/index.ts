import { TodoMvcDbObject } from '@DAO';
import { TodoMvc } from '@GraphQL/types';
import { dbPromise } from '@GraphQL/resolvers';
import queries from './queries';
import mutations from './mutations';

export const getTodoMvcFromDbObject = ({
  _id,
  ...object
}: TodoMvcDbObject): TodoMvc => ({
  // eslint-disable-next-line no-underscore-dangle
  todoId: _id.toHexString(),
  ...object,
});

export const getTodoCollection = async () => {
  const db = await dbPromise;
  return db.collection<TodoMvcDbObject>('Todo');
};

export const todoQueries = queries;

export const todoMutations = mutations;
