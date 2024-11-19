import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import likedMovieReducer from "./slices/likedMovieSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    likedMovies: likedMovieReducer
  },
});

export default store;
