import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Left.css';

const Login = () => (
  <div>Login</div>
)

const Logout = () => {
  const { logout } = useAuth();

  return (
    <div onClick={logout}>Logout</div>
  )
}

function Left() {
  return (
    <div className="Left">
      <Link to="/about-us">About Us</Link>
      <Login />
      <Logout />
    </div>
  );
}

export default Left;
