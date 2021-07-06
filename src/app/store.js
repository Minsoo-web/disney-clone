import { configureStore } from "@reduxjs/toolkit";
import movieReducre from "../features/movie/movieSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducre,
    user: userReducer
  }
});
