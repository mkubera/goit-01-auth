import { createSlice } from "@reduxjs/toolkit";

const initialState = { userId: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId: (state, { payload }) => ({ ...state, userId: payload }),
  },
});

const userReducer = userSlice.reducer;
const { setUserId } = userSlice.actions;

export { setUserId, userReducer };
