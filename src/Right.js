import { useState } from 'react';
import { useAuth } from './AuthContext';

import './Right.css';

const AboutUs = () => {
  return (
    <>
      <p>
        海碩集團成立於1981年，承攬海空物流運輸集裝專業，迄今全球已有五十一家分公司，每年貨運量近三十萬箱貨櫃、亞洲北美洲航線市占率超過百分之四以上，版圖橫跨亞洲、美洲、歐洲，提供客戶完整的全球運輸網路系統服務。
      </p>
      <p>
      海碩集團貨櫃量是全球泛太平洋航線裝載量排名第二大，以及通過中國商務部核准合法的一級貨運代理，全球千位客服人員秉持著專業及高效率的服務精神，為客戶量身訂做全方位服務。
      </p>
    </>
  )
}

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      return alert("Please enter your account info.")
    }

    console.log(`Username: ${username}, Password: ${password}`);
    login(username);
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

function Right() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="Right">
      <AboutUs />
      {isLoggedIn ? "Logout" : <Login />}
      <span>isLoggedIn: {isLoggedIn.toString()}</span>
	  </div>
  );
}

export default Right;
