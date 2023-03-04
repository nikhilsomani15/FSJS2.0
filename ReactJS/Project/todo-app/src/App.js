import React, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Context from "./Context/Context";
import todoReducer from "./Context/reducer";
import { TodoForm } from "./Componentes/TodoForm";
import Todos from "./Componentes/Todos";
const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <Context.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <h1>Todo app with Reducer</h1>
        <Todos />
        <TodoForm />
      </Container>
    </Context.Provider>
  );
};

export default App;
