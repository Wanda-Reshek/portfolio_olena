import React from 'react';

const HeroBackground = ({ children, className = '' }) => {
  return (
    <div className={`hero-container ${className}`}>
      <div 
        className="hero-background"
        style={{
          backgroundImage: 'url("/bg.svg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          backgroundSize: 'auto 180%',
          backgroundColor: '#F8CAFF',
          filter: 'blur(40px)',
          position: 'absolute',
          inset: '0',
          zIndex: '-1'
        }}
      ></div>
      {children}
    </div>
  );
};

export default HeroBackground;
