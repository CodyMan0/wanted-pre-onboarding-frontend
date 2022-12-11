import React, { createContext, useState, useMemo, useContext } from 'react';
import { getLocalStorage, TOKEN_NAME } from '../utils/localStorage';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!getLocalStorage({ name: TOKEN_NAME })
  );
  const value = useMemo(() => ({ isLoggedIn, setIsLoggedIn }), [isLoggedIn]);

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export const useAuth = () => useContext(LoginContext);
