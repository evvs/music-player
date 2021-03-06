/* eslint-disable no-param-reassign */
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
  dragValue: 0,
};

const currentSongSlice = createSlice({
  name: 'currentSong',
  initialState,
  reducers: {
    setSongInfo: (state, { payload }) => ({ ...state, ...payload }),
    updateTimeInfo: (state, { payload }) => {
      state.duration = payload.duration;
      state.currentTime = payload.currentTime;
    },
    playToggle: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    changeDragValue: (state, { payload }) => {
      state.dragValue = payload;
    },
  },
});

export const {
  setSongInfo,
  updateTimeInfo,
  playToggle,
  changeDragValue,
} = currentSongSlice.actions;

export default currentSongSlice.reducer;
