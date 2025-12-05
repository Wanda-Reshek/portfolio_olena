import React from 'react';
import { IconArrowRightUp } from './Icons';
import CopyEmailButton from './CopyEmailButton';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header-footer-nav">
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
        <CopyEmailButton position="header" />
      </nav>
    </header>
  );
};

export default Header;
