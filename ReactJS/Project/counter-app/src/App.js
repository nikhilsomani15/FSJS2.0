import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>Counter App Using state</header>
      <h2>Current value of count is {count}</h2>
      <button onClick={() => setCount(10)}>Reset</button>
      <br />
      <button onClick={() => setCount(count + 1)}>Increse</button>
      <br />
      <button onClick={() => (count <= 0 ? "" : setCount(count - 1))}>
        Decrese {count}
      </button>
    </div>
  );
}

export default App;
