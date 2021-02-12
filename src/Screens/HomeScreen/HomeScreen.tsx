import React from 'react';
import { Todo } from '@Components';
import { useIndexQuery } from '@GraphQL/types';
import { gql } from '@apollo/client';

export const query = gql`
  query Index {
    allTodos {
      todoId
    }
  }
`;

const HomeScreen: React.FC = () => {
  const { data, loading } = useIndexQuery();

  const allTodos = data?.allTodos
    ?.slice()
    .sort((a, b) => a.todoId.localeCompare(b.todoId));

  const todoElements = allTodos?.map((t) => (
    <Todo todoId={t.todoId} key={t.todoId} />
  ));

  if (loading) {
    return null;
  }

  return todoElements.length > 0 ? (
    <table>
      <tbody>{todoElements}</tbody>
    </table>
  ) : (
    <div>No Todos!</div>
  );
};

export default HomeScreen;
