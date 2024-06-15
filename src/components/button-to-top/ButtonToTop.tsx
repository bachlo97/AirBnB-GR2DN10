import React, { useState } from 'react';
import './css/style.css'
import { MdKeyboardArrowUp } from 'react-icons/md';
function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <button
      className={`scroll-to-top ${showButton ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <div className='text-[3.5rem] flex items-center justify-center'>
            <MdKeyboardArrowUp />
      </div>
 

    </button>
  );
}

export default ScrollToTopButton;
