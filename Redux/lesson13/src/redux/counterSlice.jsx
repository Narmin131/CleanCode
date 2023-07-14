import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const sliceForCounter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      return state + 1;
    },
    decrement: (state) => {
      return state - 1;
    },
    reset: (state) => {
      return (state = 0);
    },
  },
});

export const { increment, decrement, reset } = sliceForCounter.actions;

export default sliceForCounter.reducer

console.log(sliceForCounter.reducer.name);


