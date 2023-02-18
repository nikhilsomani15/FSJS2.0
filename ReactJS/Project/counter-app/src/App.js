import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
function App() {
  const [count, setCount] = useState(10);

  return (
    <div className="App">
      <header>Counter App Using state</header>
      <h2>Current value of count is {count}</h2>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increse</button>
      <button onClick={() => (count > 0 ? setCount(count - 1) : "")}>
        Decrese
      </button>
    </div>
  );
}

export default App;
