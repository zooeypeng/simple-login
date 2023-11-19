import './Left.css';
import useLogin from './useLogin';

const AboutUs = () => (
  <div>About Us</div>
)

const Login = () => (
  <div>Login</div>
)

const Logout = () => {
  const { logout } = useLogin();

  return (
    <div onClick={logout}>Logout</div>
  )
}

function Left() {
  return (
    <div className="Left">
      <AboutUs />
      <Login />
      <Logout />
    </div>
  );
}

export default Left;
