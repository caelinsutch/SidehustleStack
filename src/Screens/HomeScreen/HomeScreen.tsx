import React, { ChangeEvent, useEffect, useState } from 'react';
import { Todo } from '@Components';
import { useIndexQuery, useCreateTodoMutation } from '@GraphQL/types';
import { gql } from '@apollo/client';

export const query = gql`
  query Index {
    allTodos {
      todoId
    }
  }

  mutation CreateTodo($description: String!) {
    createTodo(description: $description) {
      todoId
    }
  }
`;

const HomeScreen: React.FC = () => {
  const { data, loading } = useIndexQuery();
  const [newTodoDescription, setNewTodoDescription] = useState('');
  const [todoIds, setTodoIds] = useState<string[]>();
  const [createTodo] = useCreateTodoMutation();
  const fillTodoIds = (d: string[]) => {
    setTodoIds(d?.slice().sort((a, b) => a.localeCompare(b)));
  };

  useEffect(() => {
    fillTodoIds(data?.allTodos?.map((t) => t.todoId));
  }, [data?.allTodos]);

  const updateTodoDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoDescription(e.target.value.toString());
  };

  const onClickAddTodo = () => {
    createTodo({
      variables: {
        description: newTodoDescription,
      },
    });
  };

  const todoElements = todoIds?.map((id) => <Todo todoId={id} key={id} />);

  if (loading || typeof todoElements === 'undefined') {
    return null;
  }

  const body =
    todoElements.length > 0 ? (
      <>
        <table>
          <tbody>{todoElements}</tbody>
        </table>
      </>
    ) : (
      <div>No ToDos!</div>
    );

  return (
    <>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={newTodoDescription}
        onChange={updateTodoDescription}
      />
      <button type="button" onClick={onClickAddTodo}>
        Add
      </button>
      {body}
    </>
  );
};

export default HomeScreen;
