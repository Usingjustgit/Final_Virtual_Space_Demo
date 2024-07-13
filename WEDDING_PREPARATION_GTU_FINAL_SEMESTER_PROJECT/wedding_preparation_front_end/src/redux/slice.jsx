import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  isLogin: JSON.parse(localStorage.getItem("isLogin") || "false"),
};

const Slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    verifyUser: (state, action) => {
      state.isLogin = action.payload;
      localStorage.setItem("isLogin", JSON.stringify(state.isLogin));
    },
    logoutUser: (state, action) => {
      state.isLogin = action.payload;
      console.log(state.isLogin);
      localStorage.setItem("isLogin", JSON.stringify(state.isLogin));
    },
  },
});

export const { verifyUser, logoutUser } = Slice.actions;

export default Slice.reducer;
