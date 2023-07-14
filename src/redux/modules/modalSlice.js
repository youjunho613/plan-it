import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      return (state = { ...state, [action.payload]: true });
    },
    closeModal: (state, action) => {
      return (state = { ...state, [action.payload]: false });
    }
  }
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
