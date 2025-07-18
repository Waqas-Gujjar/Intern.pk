import React, { useEffect, useState, useRef } from 'react';
import popup from '../../assets/images/popup.jpeg';
import { IoMdClose } from 'react-icons/io';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000); // Show after 1 second delay

    // Close on ESC key press
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setShowPopup(false);
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Close popup when clicking outside the popup content
  const handleOutsideClick = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setShowPopup(false);
    }
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div
          className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex justify-center items-center animate-fade-in"
          onClick={handleOutsideClick}
          aria-modal="true"
          role="dialog"
          aria-labelledby="popup-title"
          aria-describedby="popup-description"
        >
          <div
            ref={popupRef}
            className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-[90%] mx-4"
          >
            {/* Image Section */}
            <div className="relative w-full">
              <img
                src={popup}
                alt="Popup Visual"
                className="w-full object-cover max-h-[570px] rounded-t-2xl"
              />

              {/* Close Icon */}
              <button
                onClick={handleClose}
                aria-label="Close popup"
                className="absolute top-4 right-4 cursor-pointer bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <IoMdClose size={24} />
              </button>

              {/* Text + CTA */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 px-6 py-4 rounded-xl shadow-md text-center w-[90%] max-w-md">
                <p id="popup-description" className="text-lg font-medium text-black mb-4">
                  We are the winner of{' '}
                  <span className="text-green-600 font-bold">Google Cloud for Startups 2024</span>
                </p>
                <button
                  onClick={handleClose}
                  className="bg-[#42a824] hover:bg-green-700 text-white px-6 py-2 cursor-pointer rounded-full transition focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
