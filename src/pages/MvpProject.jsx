import React from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRightUp, IconArrowLeft } from '../components/Icons';
import CopyEmailButton from '../components/CopyEmailButton';
import './MvpProject.css';

const MvpProject = () => {
  return (
    <div className="mvp-project">
      {/* Simple Header */}
      <header className="mvp-header">
        <Link to="/" className="back-to-home-link">
          <IconArrowLeft />
          Back to home
        </Link>
      </header>

      {/* Main Content */}
      <main className="mvp-content">
        <div className="mvp-center">
          <h1 className="mvp-title">Text me to learn more</h1>
          <div className="mvp-contact-buttons">
            <a 
              href="https://www.linkedin.com/in/olena-kachurina/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mvp-contact-link"
            >
              Linkedin
              <IconArrowRightUp />
            </a>
            <CopyEmailButton position="mvp" />
          </div>
        </div>
      </main>

      {/* Footer with colorful background and navigation */}
      <footer className="mvp-footer">
        <div className="mvp-footer-background">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
          <div className="blob blob-4"></div>
          <div className="blob blob-5"></div>
          <div className="blob blob-6"></div>
          <div className="blob blob-7"></div>
          <div className="blob blob-8"></div>
          <div className="blob blob-9"></div>
          <div className="blob blob-10"></div>
          <div className="blob blob-11"></div>
          <div className="blob blob-12"></div>
          <div className="blob blob-13"></div>
          <div className="blob blob-14"></div>
          <div className="blob blob-15"></div>
          <div className="blob blob-16"></div>
          <div className="blob blob-17"></div>
          <div className="blob blob-18"></div>
          <div className="blob blob-19"></div>
          <div className="blob blob-20"></div>
          <div className="blob blob-21"></div>
          <div className="blob blob-22"></div>
          <div className="blob blob-23"></div>
          <div className="blob blob-24"></div>
          <div className="blob blob-25"></div>
          <div className="blob blob-26"></div>
          <div className="blob blob-27"></div>
          <div className="blob blob-28"></div>
          <div className="blob blob-29"></div>
          <div className="blob blob-30"></div>
          <div className="blob blob-31"></div>
          <div className="blob blob-32"></div>
        </div>
        
        <div className="mvp-footer-nav">
          <Link to="/" className="mvp-footer-button">
            Back to home
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default MvpProject;
