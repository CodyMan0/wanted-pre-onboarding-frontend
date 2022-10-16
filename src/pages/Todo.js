import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import Container from '../components/Container';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';
import styled from 'styled-components';
import TodoCreate from '../components/TodoCreate';
import { API } from '../Api';

const Todo = () => {
  const token = localStorage.getItem('token');
  const [todoInput, setTodoInput] = useState('');
  const todoInputHandler = e => setTodoInput(e.target.value);
  const [todoList, setTodoList] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (token) {
  //     const fetchData = async () => {
  //       const data = await API.Get(token);
  //       setTodoList([...data]);
  //     };
  //     fetchData();
  //   }
  //   if (token === null) {
  //     navigate('/');
  //   }
  // }, [token, navigate]);

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
