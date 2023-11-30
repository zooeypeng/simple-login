import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Left.css';

function Left() {
  const navigate = useNavigate();
  const { logout, isLoggedIn } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <div className="Left">
      <Link className="menu" to="/">About Us</Link>
      { isLoggedIn && <Link className="menu" to="/info">System Info</Link> }
      { isLoggedIn
        ? <div className="menu auth" onClick={handleLogout}>Logout</div>
        : <Link className="menu auth" to="/login">Login</Link>
      }
    </div>
  );
}

export default Left;
