import React from 'react';
import cover from '../assets/covers/genkai.jpg';

const SongInfo = () => (
  <div className="_song-info">
    <img src={cover} className="logo" alt="cover" width="220" height="220" />
    <h2>Song</h2>
    <h3>Artist</h3>
  </div>
);

export default SongInfo;
