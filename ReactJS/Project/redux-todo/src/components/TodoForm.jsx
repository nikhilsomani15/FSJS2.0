import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

import { useState } from "react";
export const TodoForm = () => {
  const [todoString, setTodoString] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please Enter a TODO");
    }
    const todo = {
      id: nanoid(),
      text: todoString,
    };
    dispatch(addTodo(todo));

    setTodoString("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoString}
        onChange={(e) => setTodoString(e.target.value)}
        placeholder="Enter a Todo"
        className="bg-red-400"
      />
      <button type="submit">Submit todo</button>
    </form>
  );
};
