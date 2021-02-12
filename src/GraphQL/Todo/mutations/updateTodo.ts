import { ObjectID } from 'mongodb';
import { getTodoCollection, getTodoMvcFromDbObject } from '@GraphQL/Todo';

const updateTodo = async (_: any, { todoId, data }) => {
  const collection = await getTodoCollection();
  const result = await collection.findOneAndUpdate(
    {
      _id: ObjectID.createFromHexString(todoId),
    },
    { $set: data },
    {
      returnOriginal: false,
    }
  );

  return getTodoMvcFromDbObject(result.value);
};

export default updateTodo;
