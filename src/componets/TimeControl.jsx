import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeDragValue } from '../redux_slices/currentSong';

const formatTime = (time) => `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;
// eslint-disable-next-line max-len
const calculateAnimationPercentage = (currentTime, duration) => Math.round((currentTime / duration) * 100);

const TimeControl = () => {
  const duration = useSelector((state) => state.currentSong.duration);
  const currentTime = useSelector((state) => state.currentSong.currentTime);
  const dispatch = useDispatch();
  const formatedDuration = formatTime(duration);
  const formatedCurrentTime = formatTime(currentTime);
  const animationPercentage = calculateAnimationPercentage(
    currentTime,
    duration,
  );

  const onDragHandler = (e) => {
    const { value } = e.target;
    dispatch(changeDragValue(Number(value)));
  };

  return (
    <div className="time_control">
      <p>{formatedCurrentTime}</p>
      <div className="slideContainer">
        <input type="range" min={0} max={duration || 0} value={currentTime} onChange={onDragHandler} />
        <div style={{ transform: `translateX(${animationPercentage}%)` }} />
      </div>
      <p>{duration ? formatedDuration : '0:00'}</p>
    </div>
  );
};
export default TimeControl;
