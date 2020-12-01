import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStepForward,
  faPlay,
  faStepBackward,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { playToggle } from '../redux_slices/currentSong';

const ControlButtons = () => {
  const dispath = useDispatch();
  const onPlayHandler = () => dispath(playToggle());

  return (
    <div className="controls">
      <button type="button">
        <FontAwesomeIcon className="mediumIcon" icon={faStepBackward} />
      </button>
      <button type="button">
        <FontAwesomeIcon
          className="largeIcon"
          icon={faPlay}
          onClick={onPlayHandler}
        />
      </button>
      <button type="button">
        <FontAwesomeIcon className="mediumIcon" icon={faStepForward} />
      </button>
    </div>
  );
};

export default ControlButtons;
