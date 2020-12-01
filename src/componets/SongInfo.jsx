import React from 'react';
import { useSelector } from 'react-redux';

const SongInfo = () => {
  const artist = useSelector((state) => state.currentSong.artist);
  const name = useSelector((state) => state.currentSong.name);
  const cover = useSelector((state) => state.currentSong.cover);

  return (
    <div className="_song-info">
      {cover ? (
        <img
          src={cover}
          className="logo"
          alt="cover"
          width="250"
          height="250"
        />
      ) : (
        'Loading'
      )}
      <h2>{name}</h2>
      <h3>{artist}</h3>
    </div>
  );
};

export default SongInfo;
