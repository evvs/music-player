import React from 'react';
import cover from '../assets/covers/genkai.jpg';

const SongInfo = () => (
  <div className="_song-info">
    <img src={cover} className="logo" alt="cover" width="250" height="250" />
    <h2>Song</h2>
    <h3>Artist</h3>
  </div>
);

export default SongInfo;
