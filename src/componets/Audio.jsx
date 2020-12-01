/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSongInfo, updateTimeInfo } from '../redux_slices/currentSong';

const Audio = () => {
  const activeInPlaylist = useSelector(({ playlist }) => {
    const activeSong = playlist.data.find((song) => song.active);
    return activeSong;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSongInfo({ ...activeInPlaylist }));
    console.log(activeInPlaylist);
  }, [activeInPlaylist, dispatch]);

  const updateTimeHandler = (e) => {
    const { duration, currentTime } = e.target;
    dispatch(updateTimeInfo({ duration, currentTime }));
  };

  return (
    <audio
      src={activeInPlaylist.src}
      onLoadedMetadata={updateTimeHandler}
      onTimeUpdate={updateTimeHandler}
    />
  );
};

export default Audio;
