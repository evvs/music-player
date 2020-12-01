/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import playlistReducer from './redux_slices/playlist';
import currentSongReducer from './redux_slices/currentSong';
import playlistData from './data';
import App from './App.jsx';

const preloadedState = {
  playlist: { data: playlistData, playListLength: playlistData.length },
};

const reducer = {
  playlist: playlistReducer,
  currentSong: currentSongReducer,
};

const store = configureStore({ reducer, preloadedState });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
