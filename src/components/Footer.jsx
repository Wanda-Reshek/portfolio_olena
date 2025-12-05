import React from 'react';
import { IconArrowRightUp } from './Icons';
import CopyEmailButton from './CopyEmailButton';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <div className="footer-line">
            <div className="footer-tag-icon-wrapper">
              <span className="footer-tag-icon">●</span>
            </div>
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
            href="https://www.linkedin.com/in/olena-kachurina/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="header-footer-link header-footer-link-external"
          >
            Linkedin
            <IconArrowRightUp />
          </a>
          <CopyEmailButton position="footer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
