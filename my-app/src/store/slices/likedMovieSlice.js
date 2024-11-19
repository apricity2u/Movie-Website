import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const likedMovieSlice = createSlice({
  name: "likedMovies",
  initialState,
  reducers: {
    addLikedMovie: (state, action) => {
      state[action.payload.id] = action.payload;
    },
    removeLikedMovie: (state, action) => {
      delete state[action.payload.id];
    },
  },
});

export const { addLikedMovie, removeLikedMovie } = likedMovieSlice.actions;
export default likedMovieSlice.reducer;
