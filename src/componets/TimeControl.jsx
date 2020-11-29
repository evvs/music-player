import React from 'react';

const TimeControl = () => (
  <div className="time_control">
    <p>0:00</p>
    <div className="slideContainer">
      <input type="range" min="0" max="100" value="29" />
      <div style={{ transform: 'translateX(29%)' }} />
    </div>
    <p>0:00</p>
  </div>
);

export default TimeControl;
