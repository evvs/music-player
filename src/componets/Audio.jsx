/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSongInfo, updateTimeInfo } from '../redux_slices/currentSong';

const Audio = () => {
  const activeInPlaylist = useSelector(({ playlist }) => {
    const activeSong = playlist.data.find((song) => song.active);
    return activeSong;
  });
  const isPlaying = useSelector((state) => state.currentSong.isPlaying);
  const dragValue = useSelector((state) => state.currentSong.dragValue);

  const dispatch = useDispatch();
  const songRef = useRef('');

  useEffect(() => {
    dispatch(setSongInfo({ ...activeInPlaylist }));

    if (isPlaying) songRef.current.play();
    else {
      songRef.current.pause();
    }
  }, [activeInPlaylist, isPlaying, dispatch]);

  useEffect(() => {
    songRef.current.currentTime = dragValue;
  }, [dragValue]);

  const updateTimeHandler = (e) => {
    const { duration, currentTime } = e.target;
    dispatch(updateTimeInfo({ duration, currentTime }));
  };

  return (
    <audio
      ref={songRef}
      src={activeInPlaylist.src}
      onLoadedMetadata={updateTimeHandler}
      onTimeUpdate={updateTimeHandler}
    />
  );
};

export default Audio;
