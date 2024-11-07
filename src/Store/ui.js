import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { modalOpen: false },
  reducers: {
    onModalOpen: (state, action) => {
      state.modalOpen = !state.modalOpen;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
