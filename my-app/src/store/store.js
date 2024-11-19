import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import likedMovieReducer from "./slices/likedMovieSlice";
import isLikedReducer from "./slices/isLikedSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    likedMovies: likedMovieReducer,
    isLiked: isLikedReducer,
  },
});

export default store;
