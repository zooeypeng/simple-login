import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Left from './Left';
import Right from './Right';
import AboutUs from './AboutUs';
import Login from './Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Left />
          <Routes>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Right />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );  
}

export default App;
