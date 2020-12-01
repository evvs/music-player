import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  playListLength: 0,
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {},
});

export default playlistSlice.reducer;
