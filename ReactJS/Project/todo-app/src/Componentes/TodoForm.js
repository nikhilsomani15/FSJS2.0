import React, { useState, useContext } from "react";
import { FormGroup, Input, Button, Form, InputGroup } from "reactstrap";
import { v4 } from "uuid";
import Context from "../Context/Context";
import { ADD_TODO } from "../Context/action.types";
import "../App.css";

export const TodoForm = () => {
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(Context);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString == "") {
      return alert("Please Enter a TODO");
    }
    const todos = {
      id: v4(),
      todoString,
    };
    dispatch({
      type: ADD_TODO,
      payload: todos,
    });
    setTodoString("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next todo"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <Button color="warning">Add Todo</Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};