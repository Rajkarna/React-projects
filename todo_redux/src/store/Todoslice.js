import { createSlice } from "@reduxjs/toolkit";

const todos = [
  {
    id: 1,
    todo: "hello",
    isDone: false,
    isEdit: false,
  },
];

const Todoslice = createSlice({
  name: "todo",
  initialState: todos,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },

    toggleTodo: (state, action) => {
      state.map((todo, index) =>
        todo.id === action.payload
          ? (state[index].isDone = !state[index].isDone)
          : null
      );
    },

    updateTodo: (state, action) => {
      state.map((todo, index) =>
        todo.id === action.payload.id
          ? (state[index].todo = action.payload.item) &&
            (state[index].isEdit = !state[index].isEdit)
          : null
      );
    },

    editTodo: (state, action) => {
      state.map((todo, index) =>
        todo.id === action.payload
          ? (state[index].isEdit = !state[index].isEdit)
          : null
      );
    },

    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, editTodo, updateTodo, deleteTodo } =
  Todoslice.actions;
export default Todoslice.reducer;
