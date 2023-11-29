import { useState } from 'react';
import { useAuth } from './AuthContext';

import './Right.css';

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      return alert("Please enter your account info.")
    }

    console.log(`Username: ${username}, Password: ${password}`);
    login(username, password);
    setUsername('');
    setPassword('');
  }; 

  return (
    <div>
      <h3>Login</h3>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="current-username"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  )
}

const Info = () => {
  const [selectedTab, setSelectedTab] = useState('version');
  const { username, password } = useAuth();

  return (
    <div>
      <select
        value={selectedTab}
        onChange={(e) => setSelectedTab(e.target.value)}
      >
        <option value="version">Version</option>
        <option value="user">User Info</option>
      </select>
      {selectedTab === 'version' && (
        <div>
          <p>Version: 1.0.0</p>
        </div>
      )}
      {selectedTab === 'user' && (
        <div>
          <p>Username: {username}</p>
          <p>Password: {password}</p>
        </div>
      )}
    </div>
  )
}

function Right() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="Right">
      {isLoggedIn ? <Info /> : <Login />}
	  </div>
  );
}

export default Right;
