import React from 'react';

const GaugeBar = ({ value, maxValue, width, height, barColor }) => {
  const calculatePercentage = () => {
    return (value / maxValue) * 100;
  };

  const percentage = calculatePercentage();

  return (
    <div
      style={{
        width: `100%`,
        height: `${height}px`,
        border: '1px solid #ccc',
        borderRadius: '4px',
        overflow: 'hidden',
        border:"1px solid #36A54680"
      }}
    >
      <div
        style={{
          width: `${percentage}%`,
          height: '100%',
          backgroundColor: barColor || '#4caf50',
          transition: 'width 0.5s ease-in-out',
        }}
      />
    </div>
  );
};

export default GaugeBar;
