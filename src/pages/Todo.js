import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Container from '../components/Container';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';
import TodoCreate from '../components/TodoCreate';
import { deleteLocalStorage, TOKEN_NAME } from '../utils/localStorage';
import { useAuth } from '../context/LoginContext';
import useFetch from '../utils/hooks/useFetch';
import { check } from 'prettier';

const Todo = () => {
  const { data, isLoading } = useFetch({ url: '/todos' });

  const [todoList, setTodoList] = useState([]);
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setTodoList(data);
  }, [data]);

  const onLogout = () => {
    deleteLocalStorage({ name: TOKEN_NAME });
    setIsLoggedIn(false);
    navigate('/', { replace: true });
  };

  return (
    <Container>
      <TodoHeader onLogout={onLogout} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <TodoCreate setTodoList={setTodoList} />
    </Container>
  );
};

export default Todo;
