import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';
import TodoCreate from '../components/TodoCreate';
import { API } from '../Api';

const Todo = () => {
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    API.Get(setTodoList);
  }, []);

  return (
    <Container>
      <TodoHeader />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <TodoCreate
        todoList={todoList}
        setTodoList={setTodoList}
        setTodoInput={setTodoInput}
        todoInput={todoInput}
      />
    </Container>
  );
};

export default Todo;
