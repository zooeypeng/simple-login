import { useState } from 'react';
import { useAuth } from './AuthContext';
import "./Login.css";

const LoginForm = () => {
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

const Login = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="Right">
      {isLoggedIn ? <span>info</span> : <LoginForm />}
	  </div>
  );
}

export default Login