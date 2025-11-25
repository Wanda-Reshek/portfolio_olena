import React from 'react';
import { IconCopy, IconArrowRightUp } from './Icons';
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

        <div className="header-footer-nav">
          <a href="#works" className="header-footer-link">
            Works
          </a>
          <a 
            href="/cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="header-footer-link header-footer-link-external"
          >
            CV
            <IconArrowRightUp />
          </a>
          <a 
            href="https://linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="header-footer-link header-footer-link-external"
          >
            Linkedin
            <IconArrowRightUp />
          </a>
          <button 
            onClick={copyEmail} 
            className="header-footer-link header-footer-link-copy"
          >
            lenkachurina@gmail.com
            <IconCopy />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
