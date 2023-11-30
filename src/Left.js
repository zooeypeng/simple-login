import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Left.css';

function Left() {
  const { logout, isLoggedIn } = useAuth();
  return (
    <div className="Left">
      <Link className="menu" to="/">About Us</Link>
      { isLoggedIn && <Link className="menu" to="/info">System Info</Link> }
      { isLoggedIn
        ? <div className="menu auth" onClick={logout}>Logout</div>
        : <Link className="menu auth" to="/login">Login</Link>
      }
    </div>
  );
}

export default Left;
