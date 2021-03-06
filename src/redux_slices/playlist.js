/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  playListLength: 0,
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    switchSong: ({ data, playListLength }, action) => {
      const direction = action.payload;
      const activeSongIndex = data.findIndex((song) => song.active);
      const lastIndex = playListLength - 1;
      data[activeSongIndex].active = false;
      if (direction === 'forward') {
        data[
          activeSongIndex === lastIndex ? 0 : activeSongIndex + 1
        ].active = true;
      } else if (direction === 'backward') {
        data[
          activeSongIndex === 0 ? lastIndex : activeSongIndex - 1
        ].active = true;
      }
    },
    libriarySwitchSong: ({ data }, { payload }) => {
      const activeSongIndex = data.findIndex((song) => song.active);
      const clickedSongIndex = data.findIndex((song) => payload === song.id);
      data[activeSongIndex].active = false;
      data[clickedSongIndex].active = true;
    },
  },
});

export const { switchSong, libriarySwitchSong } = playlistSlice.actions;
export default playlistSlice.reducer;
