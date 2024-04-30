// import {createStore}  from 'redux'
import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSlice from './counter'
import toggleSlice from "./toggle";





const store = configureStore({
  reducer: {
    counter: counterSlice,
    toggle: toggleSlice.reducer,
  },
});

export default store;

// const INITIAL_STATE = {
//     count: 0,
//   };

//   const counterReducer = (state = INITIAL_STATE, action) => {
//     let newCount = state;
//     if (action.type === "INCREMENT") {
//       newCount = { ...state, count: state.count + 1 };
//     } else if (action.type === "DECREMENT") {
//       newCount = { ...state, count: state.count - 1 };
//     } else if (action.type === "ADD") {
//       newCount = { ...state, count: state.count + +action.payload };
//     } else if (action.type === "SUB") {
//       newCount = { ...state, count: state.count - +action.payload };
//     }
//     return newCount;
//   };
