import { AuthProvider } from './AuthContext';
import Left from './Left';
import Right from './Right';
import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Left />
		    <Right />
      </AuthProvider>
    </div>
  );
}

export default App;
