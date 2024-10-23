//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="login-container">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Username"
                className="login-input"
              />
            </div>
            <div className="form-group">
              <input 
                type="password" 
                placeholder="Password"
                className="login-input"
              />
            </div>
            <button type="submit" className="login-button">
              Sign In
            </button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;