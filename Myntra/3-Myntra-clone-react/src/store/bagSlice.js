import { createSlice } from "@reduxjs/toolkit";


const bagSlice = createSlice({
    name:"bag",
    initialState:[],
    reducers:{
       addToBag : (state,action) => {
        state.push(action.payload)
       },

       removeFromBag: (state,action) => {
        return state.filter(id => id !== action.payload)
       },
    }
})


export const {addToBag, removeFromBag } = bagSlice.actions;

export default bagSlice.reducer;