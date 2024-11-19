import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLiked : false
}

const isLikedSlice = createSlice({
  name: "isliked",
  initialState,
  reducers: {
    changeLikedStatus: (state, action) => {
      state.isLiked = !state.isLiked
    }
  },
});

export const { changeLikedStatus } = isLikedSlice.actions;
export default isLikedSlice.reducer;
