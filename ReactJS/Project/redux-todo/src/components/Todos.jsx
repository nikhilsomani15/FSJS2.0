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
import { removeTodo, editTodo } from "../features/todoSlice";
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
          <button className="m-2" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};
const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <h1>Todos List</h1>
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
