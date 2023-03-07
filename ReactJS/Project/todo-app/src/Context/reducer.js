import { ADD_TODO, REMOVE_TODO } from "./action.types";
export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log(state);
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todos) => todos.id !== action.payload);
    default:
      return state;
  }
};
