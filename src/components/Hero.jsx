import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-line">
            <span className="hero-line-text">Senior Product Designer,</span>
          </div>
          <div className="hero-line">
            <span className="hero-line-text">building bridges</span>
          </div>
          <div className="hero-line">
            <span className="hero-line-text">between business goals</span>
          </div>
          <div className="hero-line">
            <span className="hero-line-text">and user happiness</span>
          </div>
        </div>

        <div className="hero-tags">
          <div className="hero-tag">
            <span className="hero-tag-text">6+ years of experience</span>
          </div>
          <div className="hero-tag hero-tag-highlight">
            <span className="hero-tag-icon">●</span>
            <span className="hero-tag-text">Open to new projects</span>
          </div>
        </div>
      </div>

      <div className="recent-projects-badge">
        <span>Recent projects</span>
      </div>
    </section>
  );
};

export default Hero;
