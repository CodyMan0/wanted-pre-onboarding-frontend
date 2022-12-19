import React from 'react';
import { useLocation } from 'react-router';
import User from '../components/user/User';

const SignIn = () => {
  const location = useLocation();
  const currentURL = location.pathname;
  const isSelectLogin = currentURL === '/' && true;

  const LOGIN_DATA = {
    title: 'Login',
    text: '계정이 없으신가요?',
    url: '/signup',
  };
  const SIGNUP_DATA = {
    title: 'SignUp',
    text: '로그인 화면으로 이동',
    url: '/',
  };

  return <User data={isSelectLogin ? LOGIN_DATA : SIGNUP_DATA} />;
};

export default SignIn;
