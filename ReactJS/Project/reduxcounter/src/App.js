import React, { useState } from "react";

import {
  increment,
  decrement,
  incrementByValue,
  decrementByValue,
} from "./features/counter/counterSlice";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const [input, setInput] = useState("");
  const count = useSelector((state) => state.counter.value);
  const clearInput = () => {
    setInput("");
  };
  const dispatch = useDispatch();

  return (
    <div className="bg-zinc-900 text-zinc-100 flex justify-center items-center flex-col min-h-screen gap-6">
      <div className="space-x-3">
        <input
          type="number"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a number..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() => {
            {
              input.length > 0
                ? (dispatch(incrementByValue(+input)), clearInput())
                : alert("enter value");
            }
          }}
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Increment by {input.length > 0 ? input : "Value"}
        </button>
      </div>
      <div className="space-x-6">
        <button
          onClick={() => {
            dispatch(increment());
            clearInput();
          }}
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Increment by 1
        </button>
        <span>{count}</span>
        <button
          onClick={() => {
            dispatch(decrement());
            clearInput();
          }}
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Decrement by 1
        </button>
        <button
          onClick={() => {
            dispatch(decrementByValue(+input));
            clearInput();
          }}
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Decrement by {input.length > 0 ? input : "Value"}
        </button>
      </div>
    </div>
  );
}

export default App;
