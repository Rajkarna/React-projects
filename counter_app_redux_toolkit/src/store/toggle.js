import { createSlice } from "@reduxjs/toolkit";


const toggleSlice = createSlice({
    name: "toggle",
    initialState: { toggle: false },
    reducers: {
      toggle: (state) => {
        state.toggle = !state.toggle;
      },
    },
  });
  
  export const { toggle } = toggleSlice.actions;
  export default toggleSlice;