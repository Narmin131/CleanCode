import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "../redux/counterSlice"


export const store = configureStore({
    reducer:{
        AppReducer
    }
})