import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Container from '../components/Container';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';
import TodoCreate from '../components/TodoCreate';
import { API } from '../Api';

const Todo = () => {
  const token = localStorage.getItem('token');
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      API.Get(setTodoList);
    }
    if (token === null) {
      navigate('/');
    }
  }, [token, navigate]);
  return (
    <Container>
      <TodoHeader />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <TodoCreate
        setTodoList={setTodoList}
        setTodoInput={setTodoInput}
        todoInput={todoInput}
      />
    </Container>
  );
};

export default Todo;
