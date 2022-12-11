import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import variables from './styles/variable';
import { ThemeProvider } from 'styled-components';
import { LoginProvider } from './context/LoginContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={{ style: theme, variables }}>
    <LoginProvider>
      <GlobalStyle />
      <BrowserRouter basename="/wanted-pre-onboarding-frontend">
        <Router />
      </BrowserRouter>
    </LoginProvider>
  </ThemeProvider>
);
