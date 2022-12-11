export const TOKEN_NAME = 'token';

export const setLocalStorage = ({ name, value }) => {
  localStorage.setItem(name, value);
};

export const getLocalStorage = ({ name }) => {
  return localStorage.getItem(name);
};

export const deleteLocalStorage = ({ name }) => {
  return localStorage.removeItem(name);
};
