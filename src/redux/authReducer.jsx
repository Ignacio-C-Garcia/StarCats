import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: "" },
  reducers: {
    saveToken(state, action) {
      state.token = action.payload.token;
      return state;
    },
    removeToken() {
      return {};
    },
  },
});
const { actions, reducer } = authSlice;
export const { saveToken, removeToken } = actions;
export default reducer;
