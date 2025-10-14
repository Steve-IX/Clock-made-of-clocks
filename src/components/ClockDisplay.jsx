import React, { useState, useEffect } from 'react';
import Digit from './Digit';
import './ClockDisplay.css';

const ClockDisplay = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      // Get hours in 24-hour format
      const hours = now.getHours();
      
      // Get minutes and seconds
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      
      // Pad to 2 digits
      const paddedHours = String(hours).padStart(2, '0');
      const paddedMinutes = String(minutes).padStart(2, '0');
      const paddedSeconds = String(seconds).padStart(2, '0');
      
      // Combine into time string
      setTime(`${paddedHours}${paddedMinutes}${paddedSeconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert time string to array of digits
  const digits = time.split('').map(Number);

  return (
    <div className="clock-display">
      <div className="time-segment">
        {digits[0] !== undefined && <Digit value={digits[0]} />}
        {digits[1] !== undefined && <Digit value={digits[1]} />}
      </div>
      
      <div className="colon">
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      
      <div className="time-segment">
        {digits[2] !== undefined && <Digit value={digits[2]} />}
        {digits[3] !== undefined && <Digit value={digits[3]} />}
      </div>
      
      <div className="colon">
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      
      <div className="time-segment">
        {digits[4] !== undefined && <Digit value={digits[4]} />}
        {digits[5] !== undefined && <Digit value={digits[5]} />}
      </div>
    </div>
  );
};

export default ClockDisplay;

