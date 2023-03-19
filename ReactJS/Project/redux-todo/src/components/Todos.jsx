// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { removeTodo, editTodo } from "../features/todoSlice";
// import { TodoForm } from "./TodoForm";

// function TodoItem({ id, text }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [newText, setNewText] = useState(text);
//   const dispatch = useDispatch();

//   const handleEdit = () => {
//     dispatch(editTodo({ id, text: newText }));
//     setIsEditing(false);
//   };
//   return (
//     <div>
//       {isEditing ? (
//         <div>
//           <input
//             type="text"
//             value={newText}
//             onChange={(e) => setNewText(e.target.value)}
//           />
//           <button onClick={handleEdit}>Save</button>
//         </div>
//       ) : (
//         <div>
//           <p>{text}</p>
//           <button onClick={() => setIsEditing(true)}>Edit</button>
//         </div>
//       )}
//     </div>
//   );
// }

// function Todos() {
//   const todos = useSelector((state) => state.todos.todos);

//   return (
//     <div>
//       {todos.map((todo) => (
//         <div key={todo.id}>
//           <TodoItem key={todo.id} id={todo.id} text={todo.text} />
//         </div>
//       ))}
//       <TodoForm />
//     </div>
//   );
// }

// export default Todos;
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, editTodo } from "../features/todoSlice";
import { TodoForm } from "./TodoForm";

const TodoItem = ({ id, text }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTodo({ id, text: newText }));
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newText}
            placeholder="Enter updated todo"
            className="text-green-500"
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div>
          <p>{text}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};
const TodoList = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodoText.trim() === "") {
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: newTodoText,
    };
    dispatch(addTodo(newTodo));
    setNewTodoText("");
  };

  return (
    <div>
      <h1>Todo List</h1>
      {/*<div>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>*/}
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} text={todo.text} />
        ))}
      </div>
      <TodoForm />
    </div>
  );
};

export default TodoList;
