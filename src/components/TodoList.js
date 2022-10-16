import React, { useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <Container>
      {todoList.map(todoItem => (
        <TodoItem
          key={todoItem.id}
          id={todoItem.id}
          todo={todoItem.todo}
          isCompleted={todoItem.isCompleted}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px 0 48px;
  overflow-y: auto;
  flex: 1;
`;

export default TodoList;
