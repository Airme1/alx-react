import { getFullYear, getFooterCopy } from "./utils";
import holberton from "./holberton_logo.jpg";
import "./App.css";
import { useRef } from "react";

function InputLabel({ label, inputRef }) {
  function handleClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <>
      <label onClick={handleClick}>{label}</label>
      <input ref={inputRef} type="text" />
    </>
  );
}

function App() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={holberton} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <hr></hr>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <InputLabel inputRef={emailRef} label="Email:" />
        <InputLabel inputRef={passwordRef} label="Password:" />
        <button>OK</button>
      </div>

      <div className="App-footer">
        <hr></hr>
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </div>
    </div>
  );
}

export default App;
