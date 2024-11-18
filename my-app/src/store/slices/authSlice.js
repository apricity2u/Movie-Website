import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
  isLogged : false
}];

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state = true
    },
    logout: (state, action) => {
      state = false
    }
  },
});

export default authSlice.reducer;
