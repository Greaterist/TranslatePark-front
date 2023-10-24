import { configureStore } from "@reduxjs/toolkit/dist";
import authReducer from "./auth";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});