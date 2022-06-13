import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello Dojo!</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <h2>Things I need to do:</h2>
        <li>
          <p>Learn React!</p>
          <p>Move everything to new place!</p>
          <p>Reschedule appoinment!</p>
          <p>Meal Prep!</p>
        </li>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    </div>
  );
}

export default App;
