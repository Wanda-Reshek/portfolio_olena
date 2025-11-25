import React from 'react';
import { IconCopy, IconArrowRightUp } from './Icons';
import './Header.css';

const Header = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText('lenkachurina@gmail.com');
    // Optional: Add a toast notification here
  };

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
      </nav>
    </header>
  );
};

export default Header;
