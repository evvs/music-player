/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSong } from '../redux_slices/currentSong';

const Audio = () => {
  const activeInPlaylist = useSelector(({ playlist }) => {
    const activeSong = playlist.data.find((song) => song.active);
    return activeSong;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSong({ ...activeInPlaylist }));
    console.log(activeInPlaylist);
  }, [activeInPlaylist, dispatch]);

  const onLoadMeta = (e) => {
    const { duration, currentTime } = e.target;
    dispatch(setSong({ duration, currentTime }));
  };

  return <audio src={activeInPlaylist.src} onLoadedMetadata={onLoadMeta} />;
};

export default Audio;
