import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  artist: '',
  cover: '',
  id: 0,
  active: false,
  color: '',
  src: '',
  duration: 0,
  currentTime: 0,
  isPlaying: false,
};

const currentSongSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setSong: (state, { payload }) => ({ ...state, ...payload }),
  },
});

export const { setSong } = currentSongSlice.actions;

export default currentSongSlice.reducer;
