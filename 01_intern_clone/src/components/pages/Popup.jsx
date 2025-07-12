import React, { useEffect, useState } from 'react';
import popup from '../../assets/images/popup.jpeg';
import { IoMdClose } from 'react-icons/io';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex justify-center items-center animate-fade-in">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-[90%]">

            {/* Image Section */}
            <div className="relative w-full">
              <img
                src={popup}
                alt="Popup"
                className="w-full object-cover max-h-[570px]"
              />

              {/* Close Icon */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 cursor-pointer bg-green-500 hover:bg-green-600 text-white p-1 rounded-full"
              >
                <IoMdClose size={20} />
              </button>

              {/* Text + CTA */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 px-6 py-4 rounded-xl shadow-md text-center">
                <p className="text-lg font-medium text-black mb-2">
                  We are the winner of <span className="text-green-600 font-bold">Google Cloud for Startups 2024</span>
                </p>
                <button
                  onClick={handleClose}
                  className="bg-[#42a824] hover:bg-green-700 text-white px-6 py-2 cursor-pointer rounded-full transition"
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
