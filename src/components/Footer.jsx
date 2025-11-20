import React from 'react';
import Header from './Header';
import './Footer.css';

const Footer = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText('lenkachurina@gmail.com');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <div className="footer-line">
            <span className="footer-tag-icon">●</span>
            <span className="footer-line-text">Open to new projects</span>
          </div>
          <div className="footer-line">
            <span className="footer-line-text">Let's talk!</span>
          </div>
        </div>

        <div className="footer-nav">
          <a href="#works" className="footer-link">
            Works
          </a>
          <a 
            href="/cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link footer-link-external"
          >
            CV
            <span className="icon-arrow">↗</span>
          </a>
          <a 
            href="https://linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link footer-link-external"
          >
            Linkedin
            <span className="icon-arrow">↗</span>
          </a>
          <button 
            onClick={copyEmail} 
            className="footer-link footer-link-copy"
          >
            lenkachurina@gmail.com
            <span className="icon-copy">📋</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
