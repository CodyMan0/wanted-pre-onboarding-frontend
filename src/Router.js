import { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { LoginContext } from './context/LoginContext';
import SignIn from './pages/SiginIn';
import Todo from './pages/Todo';

const Router = () => {
  const { isLoggedIn } = useContext(LoginContext);

  const navigator = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigator('/');
    } else {
      navigator('/todo');
    }
  }, [isLoggedIn]);

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
};

export default Router;
