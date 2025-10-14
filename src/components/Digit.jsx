import React from 'react';
import Clock from './Clock';
import { characterMap, digitPatterns } from './digitPatterns';
import './Digit.css';

const Digit = ({ value }) => {
  const pattern = digitPatterns[value] || digitPatterns[0];

  return (
    <div className="digit">
      {pattern.map((symbol, index) => {
        const angles = characterMap[symbol] || [90, 90];
        return <Clock key={index} angle1={angles[0]} angle2={angles[1]} />;
      })}
    </div>
  );
};

export default Digit;

