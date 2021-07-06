import { configureStore } from "@reduxjs/toolkit";
import movieReducre from "../features/movie/movieSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducre
  }
});
