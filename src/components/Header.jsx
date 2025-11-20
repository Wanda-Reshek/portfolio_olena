import React from 'react';
import './Header.css';

const Header = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText('lenkachurina@gmail.com');
    // Optional: Add a toast notification here
  };

  return (
    <header className="header">
      <nav className="nav">
        <a href="#works" className="nav-link">
          Works
        </a>
        <a 
          href="/cv.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-link nav-link-external"
        >
          CV
          <span className="icon-arrow">↗</span>
        </a>
        <a 
          href="https://linkedin.com/in/your-profile" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-link nav-link-external"
        >
          Linkedin
          <span className="icon-arrow">↗</span>
        </a>
        <button 
          onClick={copyEmail} 
          className="nav-link nav-link-copy"
        >
          lenkachurina@gmail.com
          <span className="icon-copy">📋</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
