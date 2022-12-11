import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Container from './Container';

const User = ({ title, text, url }) => {
  const navigate = useNavigate();
  const [authInputs, setAuthInputs] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const onHandleChange = e => {
    const { name, value } = e.target;
    setAuthInputs({ ...authInputs, [name]: value });
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    const { email, password } = authInputs;
    const authUrl =
      title === 'Login'
        ? `${process.env.REACT_APP_URL}/auth/signin`
        : `${process.env.REACT_APP_URL}/auth/signup`;
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    };

    fetch(authUrl, options)
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          localStorage.setItem('token', data.access_token);
          navigate('/todo');
        } else {
          const authTitle =
            title === 'Login'
              ? '로그인 정보를 확인해주세요.'
              : '회원 정보를 확인해주세요';
          alert(authTitle);
          navigate('/signup');
        }
      });
  };

  return (
    <Container>
      <Wrapper>
        <Header>{title}</Header>
        <Form onSubmit={onHandleSubmit}>
          <Label htmlFor="email">email</Label>
          <Input
            type="email"
            name="email"
            value={authInputs.email}
            placeholder="이메일"
            autocomplete="current-password"
            onChange={onHandleChange}
          />
          <Label htmlFor="password">password</Label>
          <Input
            type="password"
            name="password"
            value={authInputs.password}
            placeholder="비밀번호"
            autocomplete="current-password"
            onChange={onHandleSubmit}
          />
          {title === 'SignUp' && (
            <>
              <Label htmlFor="password-confirm">password-confirm</Label>
              <Input
                type="password"
                name="passwordConfirm"
                value={authInputs.passwordConfirm}
                placeholder="비밀번호 재확인"
                autocomplete="current-password"
                onChange={onHandleChange}
              />
            </>
          )}
          <Button type="submit">{title}</Button>
        </Form>

        <LinkContainer>
          <Link to={url}>{text}</Link>
        </LinkContainer>
      </Wrapper>
    </Container>
  );
};

export default User;

const Header = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 30px;
  font-size: 30px;
`;

const Wrapper = styled.div`
  ${props => props.theme.variables.absoluteCenter}
`;

const Form = styled.form`
  width: 300px;
`;

const Label = styled.label`
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 450;
`;

const Input = styled.input`
  display: block;
  height: 40px;
  width: 100%;
  padding: 0 16px;
  border-radius: 4px;
  border: 1px solid grey;
  outline: none;
  font-size: 14px;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 40px;
  width: 80px;
  height: 30px;
  background-color: lightblue;
  border-radius: 10px;
  opacity: 0.86;

  &:hover {
    opacity: 1;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 40px;
  height: 30px;
`;
