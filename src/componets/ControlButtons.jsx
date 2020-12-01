import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStepForward,
  faPlay,
  faPause,
  faStepBackward,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { playToggle } from '../redux_slices/currentSong';
import { switchSong } from '../redux_slices/playlist';

const ControlButtons = () => {
  const dispath = useDispatch();
  const onPlayHandler = () => dispath(playToggle());
  const isPlaying = useSelector((state) => state.currentSong.isPlaying);

  const switchSongHandler = (direction) => () => dispath(switchSong(direction));

  return (
    <div className="controls">
      <button type="button">
        <FontAwesomeIcon
          className="mediumIcon"
          icon={faStepBackward}
          onClick={switchSongHandler('backward')}
        />
      </button>
      <button type="button">
        <FontAwesomeIcon
          className="largeIcon"
          icon={isPlaying ? faPause : faPlay}
          onClick={onPlayHandler}
        />
      </button>
      <button type="button">
        <FontAwesomeIcon
          className="mediumIcon"
          icon={faStepForward}
          onClick={switchSongHandler('forward')}
        />
      </button>
    </div>
  );
};

export default ControlButtons;
