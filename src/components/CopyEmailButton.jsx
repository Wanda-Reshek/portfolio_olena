import React, { useState } from 'react';
import { IconCopy } from './Icons';

const CopyEmailButton = ({ position = 'header' }) => {
  const [showToast, setShowToast] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('lenkachurina@gmail.com');
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <button 
      onClick={copyEmail} 
      className={`header-footer-link header-footer-link-copy copy-email-${position}`}
    >
      lenkachurina@gmail.com
      <IconCopy />
      {showToast && (
        <span className="copy-toast">Copied!</span>
      )}
    </button>
  );
};

export default CopyEmailButton;
