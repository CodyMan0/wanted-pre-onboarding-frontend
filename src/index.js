import ReactDOM from 'react-dom/client';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import { LoginProvider } from './context/LoginContext';
import { BrowserRouter } from 'react-router-dom';
import variables from './styles/variable';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={{ style: theme, variables }}>
    <LoginProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </LoginProvider>
  </ThemeProvider>
);
