/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import playlistReducer from './redux_slices/playlist';
import currentSongReducer, { playToggle } from './redux_slices/currentSong';
import libriaryReducer from './redux_slices/libriary';
import playlistData from './data';
import App from './App.jsx';

const preloadedState = {
  playlist: { data: playlistData, playListLength: playlistData.length },
};

const reducer = {
  playlist: playlistReducer,
  currentSong: currentSongReducer,
  libriary: libriaryReducer,
};

const store = configureStore({ reducer, preloadedState });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

document.addEventListener('keyup', (event) => {
  if (event.code === 'Space') {
    store.dispatch(playToggle());
  }
});
