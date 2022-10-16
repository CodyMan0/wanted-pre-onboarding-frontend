import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { API } from '../Api';
import Container from '../components/Container';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';
import styled from 'styled-components';

const Todo = () => {
  const token = localStorage.getItem('token');
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        const data = await API.getTodoList(token);
        setTodoList([...data]);
      };
      fetchData();
    }
    if (token === null) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <Container>
      <TodoHeader />
      <TodoList todoList={todoList} />
    </Container>
  );
};

export default Todo;
