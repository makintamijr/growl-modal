import React from "react";
import { Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import { useGrowl, Growl } from "./components/Growl/growl";

function App() {
  // const [active, setActive] = useGrowl()
  const { growlActive, close, open } = useGrowl();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link className="App-link" to="/other">
          Go to the Other component
        </Link>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a className="App-link" href="#" onClick={open}>
          Clik here to activate the growl
        </a>
      </header>
      {growlActive && (
        <Growl onDismissed={close} active={open} message="Hello World!" />
      )}
    </div>
  );
}

export default App;
