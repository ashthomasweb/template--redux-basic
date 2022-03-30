import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" onClick={setCurrentUser('joe')}>Dispatch Me</button>
      </header>
    </div>
  );
}

export default connect()(App);
