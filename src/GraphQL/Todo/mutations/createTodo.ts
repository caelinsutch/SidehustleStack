import { TodoMvcDbObject } from '@DAO';
import { getTodoCollection, getTodoMvcFromDbObject } from '@GraphQL/Todo';

const createTodo = async (_: any, { description }) => {
  const data: Omit<TodoMvcDbObject, '_id'> = {
    description,
    completed: false,
  };

  const collection = await getTodoCollection();
  const document = await collection.insertOne(data);
  return getTodoMvcFromDbObject({
    ...data,
    _id: document.insertedId,
  });
};

export default createTodo;
