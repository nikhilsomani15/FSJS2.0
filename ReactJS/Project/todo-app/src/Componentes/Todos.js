import React, { useContext } from "react";
import Context from "../Context/Context";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";
import { REMOVE_TODO } from "../Context/action.types";

export default function Todos() {
  const { todos, dispatch } = useContext(Context);
  return (
    <ListGroup className="mt-5 mb-3 items">
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.todoString}
          <span
            className="right"
            onClick={() => {
              dispatch({
                type: REMOVE_TODO,
                payload: todo.id,
              });
            }}
          >
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
