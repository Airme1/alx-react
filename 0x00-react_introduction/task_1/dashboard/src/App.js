import { getFullYear, getFooterCopy } from "./utils";
import holberton from "./holberton_logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holberton} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <hr></hr>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>

      <div className="App-footer">
        <hr></hr>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </div>
  );
}

export default App;
