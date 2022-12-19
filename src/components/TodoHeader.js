import React from 'react';
import styled from 'styled-components';

const TodoHeader = ({ onLogout }) => {
  const today = new Date();
  const convertDay = day => {
    const weekday = [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
    ];

    return weekday[day];
  };

  return (
    <Container>
      <H1>My Todolist</H1>
      <H2>
        {today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일
      </H2>
      <Day>{convertDay(today.getDay())}</Day>
      <Button onClick={onLogout}>로그 아웃</Button>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  padding: 48px 0 24px;
  border-bottom: 1px solid #e9ecef;
`;
const Button = styled.div`
  position: absolute;
  right: 0;
  padding: 8px 16px;
  color: white;
  background-color: #38d9a9;
  border: 1px solid #38d9a9;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;

const H1 = styled.h1`
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: 800;
  text-align: center;
  color: #343a40;
`;
const H2 = styled.h2`
  margin: 0;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  color: #343a40;
`;

const Day = styled.p`
  font-size: 21px;
  color: #868e96;
  text-align: center;
  margin-top: 10px;
`;
export default TodoHeader;
