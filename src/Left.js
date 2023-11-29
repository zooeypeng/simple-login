import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Left.css';

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
      <Link to="/login">Login</Link>
      <Logout />
    </div>
  );
}

export default Left;
