import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { API } from '../Api';

const TodoItem = ({ id, todo, isCompleted, todoList, setTodoList }) => {
  const onToggle = () => {
    setTodoList(
      todoList.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteList = selectedId => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      setTodoList(prev => prev.filter(({ id }) => id !== selectedId));
      API.Delete(selectedId);
    }
  };

  return (
    <Container>
      <CheckCircle isCompleted={isCompleted} onClick={onToggle}>
        {isCompleted && <MdDone />}
      </CheckCircle>
      <Text done={isCompleted}>{todo}</Text>
      <RemoveBtn onClick={() => deleteList(id)}>
        <MdDelete />
      </RemoveBtn>
    </Container>
  );
};

const Container = styled.div`
  padding: 12px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.isCompleted &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: ${props => (props.isCompleted ? '#ced4da' : '#495057')};
`;

const RemoveBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  display: none;
  ${Container}:hover & {
    color: #ff6b6b;
    display: initial;
  }
`;

export default TodoItem;
