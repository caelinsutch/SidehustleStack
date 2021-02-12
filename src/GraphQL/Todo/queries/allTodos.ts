import { getTodoCollection, getTodoMvcFromDbObject } from '@GraphQL/Todo';

const allTodos = async () => {
  const collection = await getTodoCollection();
  return collection.find().map(getTodoMvcFromDbObject).toArray();
};

export default allTodos;
