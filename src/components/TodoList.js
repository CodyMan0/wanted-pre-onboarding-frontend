import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

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
