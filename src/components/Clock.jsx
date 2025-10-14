import React from 'react';
import './Clock.css';

const Clock = ({ angle1, angle2 }) => {
  return (
    <div className="clock">
      <div className="hand" style={{ transform: `rotate(${angle1}deg)` }}></div>
      <div className="hand" style={{ transform: `rotate(${angle2}deg)` }}></div>
    </div>
  );
};

export default Clock;

