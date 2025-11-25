import React from 'react';

// SVG assets from Figma
const iconCopySvg = "http://localhost:3845/assets/d8e444d167a54c5522408aaed10ce237e8ccc545.svg";
const iconArrowRightUpSvg = "http://localhost:3845/assets/b33dee9c68a6c045eef6a5f24ee7eaab0150da98.svg";
const imgVectorStroke = "http://localhost:3845/assets/b33dee9c68a6c045eef6a5f24ee7eaab0150da98.svg";

export const IconCopy = ({ className = "" }) => {
  return (
    <span 
      className={`icon-copy-svg ${className}`}
      style={{
        display: 'inline-flex',
        position: 'relative',
        width: '1em',
        height: '1em',
      }}
    >
      <img 
        src={iconCopySvg} 
        alt="Copy" 
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
        width: '1em',
        height: '1em',
      }}
    >
      <img 
        src={imgVectorStroke} 
        alt="External link" 
        style={{
          position: 'absolute',
          top: '18.75%',
          left: '18.75%',
          right: '19.88%',
          bottom: '19.88%',
          width: '61.37%',
          height: '61.37%',
          display: 'block',
        }}
      />
    </span>
  );
};
