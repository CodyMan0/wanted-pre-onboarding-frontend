import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useMutation from '../../utils/hooks/useMutation';
import { setLocalStorage, TOKEN_NAME } from '../../utils/localStorage';

import Container from '../Container';
import ErrorMessage from './ErrorMessage';

const User = ({ data: { title, text, url } }) => {
  const navigate = useNavigate();
  const [signInInfo, setSignInInfo] = useState({
    email: '',
    password: '',
  });
  const [signUpInfo, setSignUpInfo] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [userError, setUserError] = useState({
    emailError: '',
    passwordError: '',
  });

  const [networkError, setNetworkError] = useState('');

  const [signInAndUp, { data: signInAndUpData, error: signInAndUpError }] =
    useMutation({
      title: title,
      method: 'POST',
    });
  const onHandleChange = e => {
    const { name, value } = e.target;
    if (title === 'Login') {
      setSignInInfo({ ...signInInfo, [name]: value });
    }
    if (title === 'SignUp') {
      setSignUpInfo({ ...signUpInfo, [name]: value });
    }
  };

  const onHandleSubmit = async event => {
    event.preventDefault();

    if (title === 'Login') {
      await signInAndUp(signInInfo);
    } else {
      await signInAndUp(signUpInfo);
    }

    if (signInInfo.email === '' || signInInfo.password === '') {
      setUserError(prev => ({
        ...prev,
        emailError: '이메일과 패스워드가 필요합니다.',
      }));
      return;
    }
    if (!signInInfo.email.includes('@') || signInInfo.email === '') {
      setUserError(prev => ({
        ...prev,
        emailError: '이메일 형식으로 입력해주세요.',
      }));
      return;
    }
    if (signInInfo.password.length < 8 || signInInfo.password === '') {
      setUserError(prev => ({
        ...prev,
        passwordError: '비밀번호 8자 이상 입력해주세요.',
      }));
      return;
    }

    if (signUpInfo.password !== signUpInfo.passwordConfirm) {
      setUserError(prev => ({
        ...prev,
        passwordError: '비밀번호를 확인해주세요.',
      }));
      return;
    }
  };

  useEffect(() => {
    if (signInAndUpError) {
      setNetworkError(signInAndUpError);
    }
  }, [signInAndUpError]);

  useEffect(() => {
    if (signInAndUpData && signInAndUpData.access_token) {
      setLocalStorage({
        name: TOKEN_NAME,
        value: signInAndUpData.access_token,
      });
      navigate('/todo');
    }
  }, [signInAndUpData]);

  const errorMessage =
    userError.emailError || userError.passwordError || networkError;
  return (
    <Container>
      <Wrapper>
        <Header>{title}</Header>
        <Form onSubmit={event => onHandleSubmit(event)}>
          <Label htmlFor="email">email</Label>
          <Input
            type="email"
            name="email"
            value={title === 'Login' ? signInInfo.email : signUpInfo.email}
            placeholder="이메일"
            autocomplete="current-password"
            onChange={e => onHandleChange(e, title)}
          />
          <Label htmlFor="password">password</Label>
          <Input
            type="password"
            name="password"
            value={
              title === 'Login' ? signInInfo.password : signUpInfo.password
            }
            placeholder="비밀번호"
            autocomplete="current-password"
            onChange={e => onHandleChange(e, title)}
          />
          {title === 'SignUp' && (
            <>
              <Label htmlFor="password-confirm">password-confirm</Label>
              <Input
                type="password"
                name="passwordConfirm"
                value={signUpInfo.passwordConfirm}
                placeholder="비밀번호 재확인"
                autocomplete="current-password"
                onChange={e => onHandleChange(e, title)}
              />
            </>
          )}
          {errorMessage && <ErrorMessage errorText={errorMessage} />}
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
  margin-top: 20px;
  height: 30px;
`;
