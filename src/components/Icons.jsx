import React from 'react';

// Local SVG assets
// Copy email icon (two overlapping rectangles)
import iconCopySvg from '../assets/icons/copy.svg';
// External link icon (arrow pointing right-up)
import iconArrowRightUpSvg from '../assets/icons/arrow-right-up.svg';

export const IconCopy = ({ className = "" }) => {
  return (
    <span 
      className={`icon-copy-svg ${className}`}
      style={{
        display: 'inline-flex',
        position: 'relative',
        width: '0.8em',
        height: '0.8em',
      }}
    >
      <img 
        src={iconCopySvg} 
        alt="Copy email" 
        style={{
          position: 'absolute',
          inset: '4.17%',
          width: '91.66%',
          height: '91.66%',
          display: 'block',
        }}
      />
    </span>
  );
};

export const IconArrowRightUp = ({ className = "" }) => {
  return (
    <span 
      className={`icon-arrow-svg ${className}`}
      style={{
        display: 'inline-flex',
        position: 'relative',
        width: '0.8em',
        height: '0.8em',
      }}
    >
      <img 
        src={iconArrowRightUpSvg} 
        alt="External link" 
        style={{
          position: 'absolute',
          inset: '4.17%',
          width: '91.66%',
          height: '91.66%',
          display: 'block',
        }}
      />
    </span>
  );
};
