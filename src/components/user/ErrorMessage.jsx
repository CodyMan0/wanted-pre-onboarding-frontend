import React from 'react';
import styled from 'styled-components';
import { AiFillWarning } from 'react-icons/ai';

const ErrorMessage = ({ errorText = '' }) => {
  return (
    <ErrorContainer>
      <ErrorIcons>
        <AiFillWarning size={20} />
      </ErrorIcons>
      <ErrorText>{errorText}</ErrorText>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const ErrorIcons = styled.span`
  display: inline-block;
  margin-right: 30px;
  color: rgb(251 146 60);
`;
const ErrorText = styled.span`
  font-weight: 700;
  color: rgb(225 29 72);
`;
export default ErrorMessage;
