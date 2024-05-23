import { configureStore } from "@reduxjs/toolkit";
import Todoslice from "./Todoslice";

const store = configureStore({
    reducer:{
        todo:Todoslice
    }
})

export default store;