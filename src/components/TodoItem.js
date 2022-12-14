import React, { useState } from 'react';
import { MdDone, MdDelete, MdMode } from 'react-icons/md';
import { API } from '../Api';
import styled, { css } from 'styled-components';

const TodoItem = ({ id, todo, isCompleted, todoList, setTodoList }) => {
  const [updateMode, setUpdateMode] = useState(false);
  const [updateContent, setUpdateContent] = useState('');

  const onToggle = () => {
    setTodoList(
      todoList.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteList = selectedId => {
    if (window.confirm('삭제하시겠습니까?')) {
      setTodoList(prev => prev.filter(({ id }) => id !== selectedId));
      API.Delete(selectedId);
    }
  };

  const updateList = (e, selectedId) => {
    e.preventDefault();
    if (window.confirm('수정하시겠습니까?')) {
      const [updateValue] = todoList.filter(({ id }) => id === selectedId);
      API.Update(selectedId, updateValue.todo, updateValue.isCompleted);
    }
  };

  const updateListValue = (e, selectedId) => {
    setUpdateContent(e.target.value);
    setTodoList(prev =>
      prev.map(({ id, todo, isCompleted, userId }) => {
        if (id === selectedId) {
          todo = e.target.value;
        }
        return { id, todo, isCompleted, userId };
      })
    );
  };

  const onClickUpdate = e => {
    setUpdateMode(prev => !prev);
    updateList(e, id);
  };

  const editInput = () => {
    setUpdateMode(prev => !prev);
  };

  if (updateMode) {
    return (
      <Container>
        <CheckCircle isCompleted={isCompleted} onClick={onToggle}>
          {isCompleted && <MdDone />}
        </CheckCircle>
        <TextInput
          value={updateContent}
          onChange={e => updateListValue(e, id)}
        />
        <UpdateBtn name="updateMode" onClick={e => onClickUpdate(e, id)}>
          수정하기
        </UpdateBtn>
        <RemoveBtn onClick={() => deleteList(id)}>
          <MdDelete />
        </RemoveBtn>
      </Container>
    );
  }

  return (
    <Container>
      <CheckCircle isCompleted={isCompleted} onClick={onToggle}>
        {isCompleted && <MdDone />}
      </CheckCircle>
      <Text isCompleted={isCompleted}>{todo}</Text>
      <UpdateBtn onClick={editInput}>
        <MdMode />
      </UpdateBtn>
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

const TextInput = styled.input`
  flex: 1;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 50px;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  color: ${props => (props.isCompleted ? '#ced4da' : '#495057')};
`;

const RemoveBtn = styled.button`
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

const UpdateBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: ${props => (props.name === 'updateMode' ? '15px' : '24px')};
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
  display: none;
  ${Container}:hover & {
    color: green;
    display: initial;
  }
`;

export default TodoItem;
