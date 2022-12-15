import React, { useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import styled, { css } from 'styled-components';

import useMutation from '../utils/hooks/useMutation';

const TodoCreate = ({ setTodoList }) => {
  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState('');
  const [submitTodo, { data, isLoading, error }] = useMutation({
    url: '/todos',
    method: 'POST',
  });

  const onToggle = () => {
    setOpen(prev => !prev);
  };

  const onChange = e => {
    setTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (todo === '') {
      return;
    }
    submitTodo({ todo });
    setTodo('');
    setOpen(false);
  };

  useEffect(() => {
    if (data) {
      setTodoList(prev => [
        ...prev,
        {
          id: data.id,
          isCompleted: data.isCompleted,
          todo: data.todo,
          userId: data.userId,
        },
      ]);
    }
  }, [data, setTodoList]);

  return (
    <>
      {open && (
        <InputContainer>
          <InputForm onSubmit={handleSubmit}>
            <Input
              autoFocus
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              onChange={onChange}
              value={todo}
            />
          </InputForm>
        </InputContainer>
      )}
      <CircleButton open={open} onClick={onToggle}>
        <MdAdd />
      </CircleButton>
    </>
  );
};

const CircleButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 40px;
  border: none;
  outline: none;
  font-size: 40px;
  color: white;
  position: absolute;
  right: -15px;
  top: 0;
  transform: translate(-50%, 50%);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
  transition: 0.125s all ease-in;
`;

const InputContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const InputForm = styled.form`
  padding: 32px 32px 72px;
  background: #f8f9fa;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

export default TodoCreate;
