import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Left from './Left';
import Right from './Right';
import Login from './Login';
import SystemInfo from './Info';
import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Left />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/info" element={<SystemInfo />} />
            <Route path="/" element={<Right />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );  
}

export default App;
