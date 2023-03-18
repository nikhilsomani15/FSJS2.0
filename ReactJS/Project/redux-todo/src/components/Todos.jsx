import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todoSlice";
import { TodoForm } from "./TodoForm";

function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.text}</h1>
          <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </div>
      ))}
      <TodoForm />
    </div>
  );
}

export default Todos;
