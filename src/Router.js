import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SiginIn';
import Todo from './pages/Todo';

const Router = () => {
  return (
    <BrowserRouter basename="/wanted-pre-onboarding-frontend">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignIn />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
