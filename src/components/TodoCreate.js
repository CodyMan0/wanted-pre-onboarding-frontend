import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../store/todoStore';

const TodoCreate = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const onToggle = () => {
    setOpen(prev => !prev);
  };

  const onChange = e => {
    setInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setTodoList(prev => [
      ...prev,
      {
        id: uuidv4(),
        text: input,
        done: false,
      },
    ]);
    setInput('');
    setOpen(false);
  };

  return (
    <>
      {open && (
        <InputContainer>
          <InputForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              onChange={onChange}
              value={input}
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
