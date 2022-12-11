import { useState } from 'react';
import { getLocalStorage, TOKEN_NAME } from '../localStorage';

const useMutation = ({ title, method }) => {
  const [value, setValue] = useState({
    data: undefined,
    isLoading: false,
    error: undefined,
  });

  const mutation = async data => {
    try {
      const token = getLocalStorage({ name: TOKEN_NAME });
      setValue(prev => ({ ...prev, isLoading: true }));
      const authUrl = title === 'Login' ? '/auth/signin' : '/auth/signup';
      const response = await (
        await fetch(`${process.env.REACT_APP_URL}${authUrl}`, {
          method: method.toUpperCase(),
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token || null}`,
          },
        })
      ).json();
      if (response.message) {
        setValue(prev => ({ ...prev, error: response.message }));
      }
      setValue(prev => ({ ...prev, data: response }));
    } catch (error) {
      setValue(prev => ({ ...prev, error }));
    } finally {
      setValue(prev => ({ ...prev, isLoading: false }));
    }
  };

  return [mutation, { ...value }];
};

export default useMutation;
