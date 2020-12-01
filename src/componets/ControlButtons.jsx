import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStepForward,
  faPlay,
  faStepBackward,
} from '@fortawesome/free-solid-svg-icons';
// import { useSelector, useDispatch } from 'react-redux';
// import { setSong } from '../redux_slices/currentSong';

const ControlButtons = () => {
  const onPlayHandler = () => {};

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
