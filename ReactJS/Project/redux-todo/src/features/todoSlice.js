// import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "@reduxjs/toolkit";

// const initialState = {
//   todos: [
//     // { id: 1122, text: "Learn JS with Hitesh" },
//     // { id: 122, text: "Done with redux" },
//   ],
// };

// export const todoSlice = createSlice({
//   name: "todo",
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       //   const todo = {
//       //     id: nanoid(), //Generate a unique ID
//       //     text: action.payload,
//       //   };

//       state.todos.push(action.payload);

//       //Todos.slice(1, 3)
//       //Todo.splice(1, 3)
//     },
//     removeTodo: (state, action) => {
//       state.todos = state.todos.filter((todo) => todo.id !== action.payload);
//     },
//     editTodo: (state, action) => {
//       const { id, text } = action.payload;
//       const todoToEdit = Array.from(state).find((todo) => todo.id === id);
//       if (todoToEdit) {
//         todoToEdit.text = text;
//       }
//     },
//   },
// });

import { configureStore, createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoToEdit = state.find((todo) => todo.id === id);
      if (todoToEdit) {
        todoToEdit.text = text;
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todosSlice.actions;

export default todosSlice.reducer;
