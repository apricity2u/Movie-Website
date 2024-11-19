import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const likedMovieSlice = createSlice({
  name: "likedMovies",
  initialState,
  reducers: {
    addLikedMovie: (state, action) => {
      state.push(action.payload);
      console.log('데이터 추가됨')
    }
  },
});

export const { addLikedMovie, removeLikedMovie } = likedMovieSlice.actions;
export default likedMovieSlice.reducer;
