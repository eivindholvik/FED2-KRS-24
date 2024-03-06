import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => { state.value++ },
    decrement: (state) => { state.value-- },
    setCounter: (state, { payload }) => { state.value = Number(payload) || 0 },
    customValue: (state, { payload }) => { state.value += payload },
    reset: (state) => { state.value = initialState.value },
  }
});

export const { increment, decrement, setCounter, customValue, reset } = counterSlice.actions;

export default counterSlice.reducer;
