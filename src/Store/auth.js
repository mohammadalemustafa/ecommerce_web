import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: {} },
  reducers: {
    onAddToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice.reducer;
