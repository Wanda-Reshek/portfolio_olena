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
          <a href="#works" className="header-footer-link"
            data-umami-event="works-click"
            data-umami-event-url="#works"
          >
            Works
            <span className="icon-spacer"></span>
          </a>
          <a
            href="https://drive.google.com/drive/folders/1F2KisiBQvYgrAeMAXwbm1H6CSUMgR0da?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="header-footer-link header-footer-link-external"
            data-umami-event="CV-click"
            data-umami-event-url="https://drive.google.com/drive/folders/1F2KisiBQvYgrAeMAXwbm1H6CSUMgR0da?usp=sharing"
          >
            CV
            <IconArrowRightUp />
          </a>
          <a 
            href="https://www.linkedin.com/in/olena-kachurina/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="header-footer-link header-footer-link-external"
            data-umami-event="linkedin-click"
            data-umami-event-url="https://www.linkedin.com/in/olena-kachurina/"
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
