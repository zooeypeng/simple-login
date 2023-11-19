import { useState } from 'react';

const useLogin = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const login = (user) => {
    setLoggedIn(true);
    setUsername(user);
    console.log('hook ', user, isLoggedIn)
  };

  const logout = () => {
    setLoggedIn(false);
    setUsername('');
    console.log('hook, logout')
  };

  return {
    isLoggedIn,
    username,
    login,
    logout,
  };
};

export default useLogin;
