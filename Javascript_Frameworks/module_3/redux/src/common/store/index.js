import { configureStore } from "@reduxjs/toolkit";
import { placeholderApi } from "../../services/api.reducer";
import dataReducer from "../../services/data.reducer";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    [placeholderApi.reducerPath]: placeholderApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(placeholderApi.middleware)

});

export default store;