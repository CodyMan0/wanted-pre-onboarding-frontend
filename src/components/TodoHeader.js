import React from 'react';
import styled from 'styled-components';

const TodoHeader = () => {
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
      <H1>
        {today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일
      </H1>
      <Day>{convertDay(today.getDay())}</Day>
    </Container>
  );
};
const Container = styled.div`
  padding: 48px 0 24px;
  border-bottom: 1px solid #e9ecef;
`;

const H1 = styled.h1`
  margin: 0;
  font-size: 30px;
  font-weight: 800;
  color: #343a40;
`;

const Day = styled.p`
  font-size: 21px;
  color: #868e96;
  margin-top: 10px;
`;
export default TodoHeader;
