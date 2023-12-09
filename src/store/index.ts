import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.AppDispatch;
