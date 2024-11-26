import { createSlice } from "@reduxjs/toolkit";
const uiSlice = createSlice({
  name: "ui",
  initialState: { modalOpen: true, loginModal: false,isSidebarOpen:false },
  reducers: {
    onModalOpen: (state, action) => {
      state.modalOpen = !state.modalOpen;
    },
    onOpenLoginModal: (state, action) => {
      state.loginModal = action.payload;
    },
    onOpenSideBar: (state, action) => {
      state.isSidebarOpen = action.payload;

    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
