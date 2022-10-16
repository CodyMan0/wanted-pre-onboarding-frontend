import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  return (
    <MainContainer>
      <SubContainer>{children}</SubContainer>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  background-color: #e9ecef;
`;

const SubContainer = styled.div`
  width: 375px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 32px;
`;

export default Container;
