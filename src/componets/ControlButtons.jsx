import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStepForward,
  faPlay,
  faStepBackward,
} from '@fortawesome/free-solid-svg-icons';

const ControlButtons = () => (
  <div className="controls">
    <button type="button">
      <FontAwesomeIcon className="mediumIcon" icon={faStepBackward} />
    </button>
    <button type="button">
      <FontAwesomeIcon className="largeIcon" icon={faPlay} />
    </button>
    <button type="button">
      <FontAwesomeIcon className="mediumIcon" icon={faStepForward} />
    </button>
  </div>
);

export default ControlButtons;
