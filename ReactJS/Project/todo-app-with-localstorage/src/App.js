import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";

import Todoform from "./Components/Todoform";
import Todos from "./Components/Todos";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos") || [])
  );
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);
  const addTodos = (todo) => {
    setTodos([...todos, todo]);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const markComplete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <Container fluid>
      <h1>Todos app with local storage</h1>
      <Todos todos={todos} markComplete={markComplete} />
      <Todoform addTodos={addTodos} />
    </Container>
  );
}

export default App;
