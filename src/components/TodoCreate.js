import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { API } from '../Api';

const TodoCreate = ({ todoList, setTodoList, setTodoInput, todoInput }) => {
  const [open, setOpen] = useState(false);
  const [idNum, setIdNum] = useState(0);

  const onToggle = () => {
    setOpen(prev => !prev);
    setIdNum(prev => prev + 1);
  };

  const onChange = e => {
    setTodoInput(e.target.value);
  };

  const addList = e => {
    e.preventDefault();
    API.Post({ todo: todoInput }, setTodoList);
    setTodoInput('');
    setOpen(false);
  };

  // const onSubmit = e => {
  //   e.preventDefault();
  //   setTodoList(prev => [
  //     ...prev,
  //     {
  //       id: idNum,
  //       text: input,
  //       done: false,
  //     },
  //   ]);
  //   setInput('');
  //   setOpen(false);
  // };

  return (
    <>
      {open && (
        <InputContainer>
          <InputForm onSubmit={addList}>
            <Input
              autoFocus
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              onChange={onChange}
              value={todoInput}
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
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: none;
  outline: none;
  font-size: 60px;
  color: white;
  position: absolute;
  left: 50%;
  bottom: 0px;
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
