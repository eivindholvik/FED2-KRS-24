import { configureStore } from "@reduxjs/toolkit";
import jens from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: jens,
  },
})

