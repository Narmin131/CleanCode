import { configureStore } from "@reduxjs/toolkit";
import { AppReducer } from "./Reducer";

export const store = configureStore({
  reducer: {
    AppReducer,
  },
});
