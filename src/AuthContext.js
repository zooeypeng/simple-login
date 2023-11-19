import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = (user, password) => {
    setLoggedIn(true);
    setUsername(user);
    setPassword(password)
  };

  const logout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, password, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
