// TODO:
// LOGIN
// LOGOUT
// REGISTER

import { createSlice } from "@reduxjs/toolkit";

const initialState = { loggedIn: false };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => ({ ...state, loggedIn: true }),
    logout: (state, { payload }) => ({ ...state, loggedIn: false }),
  },
});
// console.log(userSlice);

const userReducer = userSlice.reducer;
const { login, logout } = userSlice.actions;

export { login, logout, userReducer };
