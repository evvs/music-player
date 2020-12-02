/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

const libriarySlice = createSlice({
  name: 'libriary',
  initialState,
  reducers: {
    toggleOpen: (state) => {
      state.open = !state.open;
    },
  },
});

export const { toggleOpen } = libriarySlice.actions;
export default libriarySlice.reducer;
