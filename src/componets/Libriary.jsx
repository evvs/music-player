/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { libriarySwitchSong } from '../redux_slices/playlist';

const Libriary = () => {
  const playlist = useSelector((state) => state.playlist.data);
  const isOpen = useSelector((state) => state.libriary.open);
  const dispatch = useDispatch();

  const onSongClickHandler = (id) => () => {
    dispatch(libriarySwitchSong(id));
  };

  return (
    <aside
      className="_libriary"
      style={{
        transform: `translateX(${isOpen ? 0 : -100}%)`,
      }}
    >
      <h2>Libriary</h2>
      {playlist.map((song) => (
        <div key={song.id} onClick={onSongClickHandler(song.id)}>
          <div
            className="songInfo"
            style={{
              background: `${song.active ? 'lightblue' : ''}`,
            }}
          >
            <img src={song.cover} alt="cover" />
            <div>
              <h4>{song.artist}</h4>
              <h5>{song.name}</h5>
            </div>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default Libriary;
