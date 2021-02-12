import { ObjectID } from 'mongodb';
import { getTodoCollection, getTodoMvcFromDbObject } from '@GraphQL/Todo';

const Todo = async (_: any, { todoId }) => {
  const collection = await getTodoCollection();
  const dbObject = await collection.findOne({
    _id: ObjectID.createFromHexString(todoId),
  });
  return getTodoMvcFromDbObject(dbObject);
};
export default Todo;
