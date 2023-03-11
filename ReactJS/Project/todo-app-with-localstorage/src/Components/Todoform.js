import React, { useState } from "react";
import { Button, Form, FormGroup, InputGroup, Input } from "reactstrap";
import { v4 } from "uuid";
const Todoform = ({ addTodos }) => {
  const [todoString, setTodoString] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please enter a todo to proceed");
    }
    const todo = {
      todoString,
      id: v4(),
    };
    addTodos(todo);
    setTodoString("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            id="todo"
            name="todo"
            placeholder="Enter a todo"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <Button color="warning">Add todo</Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};
export default Todoform;
