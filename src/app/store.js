import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/postSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
