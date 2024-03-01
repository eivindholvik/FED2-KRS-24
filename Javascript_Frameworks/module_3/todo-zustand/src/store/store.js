import { create } from "zustand";
import { devtools, persist } from "zustand/middleware"
import { createTodoSlice } from "./todoSlice";
import { createCounterSlice } from "./counterSlice";

export const useStore = create(
  devtools(
    persist((...a) => ({
      ...createTodoSlice(...a),
      ...createCounterSlice(...a),
    })
      , { name: "combinedStore" })
  ));