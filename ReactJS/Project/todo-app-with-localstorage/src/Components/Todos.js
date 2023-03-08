import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

export const Todos = ({ todos, markComplete }) => {
  return (
    <ListGroup>
      {todos.map((todo) => {
        <ListGroupItem key={todo.id}>
          {todo.todoString}
          <span className="right" onClick={() => markComplete(todo.id)}>
            <FaCheckDouble />
          </span>
        </ListGroupItem>;
      })}
    </ListGroup>
  );
};
