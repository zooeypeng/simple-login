import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Left.css';

function Left() {
  const { logout, isLoggedIn } = useAuth();
  return (
    <div className="Left">
      <Link className="menu" to="/about-us">About Us</Link>
      { isLoggedIn ? <div className="menu" onClick={logout}>Logout</div> : <Link className="menu" to="/login">Login</Link> }
    </div>
  );
}

export default Left;
