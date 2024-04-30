import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    add: (state, action) => {
      state.count += +action.payload;
    },
    sub: (state, action) => {
      state.count -= +action.payload;
    },
  },
});

export const { increment, decrement, add, sub } = counterSlice.actions;
export default counterSlice.reducer;
