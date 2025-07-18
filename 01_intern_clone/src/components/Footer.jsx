import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with email:", email);
    setEmail('');
  };

  return (
    <footer className="bg-[#121212]  text-white px-20 sm:10 py-10">
      {/* Newsletter */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 mx-10">
        <div>
          <h3 className="text-xl font-semibold">Subscribe to Newsletter</h3>
          <p className="text-gray-400 text-sm mt-3">
            Subscribe to our newsletter and get exclusive insights, industry trends.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#1e1e1e] flex items-center rounded-full px-4 py-2 mt-6 lg:mt-0">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="bg-transparent outline-none px-4 py-2 text-sm text-white w-[200px] lg:w-[250px]"
          />
          <button
            type="submit"
            className="bg-[#42a824] text-white px-5 py-2 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 my-6"></div>

      {/* Middle Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 mx-10">
        {/* Logo & Description */}
        <div className="max-w-sm">
          <img src={logo} alt="Internee Logo" className="w-[180px] mb-4" />
          <p className="text-gray-400">
            The ultimate platform designed to turbocharge the IT sector in Pakistan.
          </p>

          <div className="flex items-center text-gray-300 mt-4 gap-2">
            <FaPhoneAlt className="text-pink-500" />
            <span>+92 312 3023645</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="bg-[#42a824] p-2 rounded-full text-white hover:bg-green-700 transition"><FaFacebook size={18} /></a>
            <a href="#" className="bg-[#42a824] p-2 rounded-full text-white hover:bg-green-700 transition"><FaTwitter size={18  } /></a>
            <a href="#" className="bg-[#42a824] p-2 rounded-full text-white hover:bg-green-700 transition"><FaLinkedin size={18} /></a>
            <a href="#" className="bg-[#42a824] p-2 rounded-full text-white hover:bg-green-700 transition"><FaInstagram size={18} /></a>
          </div>
        </div>

        {/* Links */}
        <div className="flex justify-between gap-20 mt-10 lg:mt-0">
          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-200 text-lg mb-3">Company</h4>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li><a href="#">Home</a></li>
              <li><a href="#">Student Ambassador</a></li>
              <li><a href="#">Interns Profiles</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4  className="font-semibold text-gray-200 text-lg mb-3">Resources</h4>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li><a href="#">Community</a></li>
              <li><a href="#">Certification</a></li>
              <li><a href="#">Scholarships</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-600 mt-10 mb-4"></div>

      {/* Footer Bottom */}
      <div className="flex flex-col lg:flex-row justify-between items-center text text-gray-500 px-10">
        <p className='text-gray-400'>Copyright © 2025 internee.pk</p>
        <div className="flex gap-6 mt-2 lg:mt-0">
          <a href="#" className='text-gray-400'>Terms of Use</a>
          <a href="#" className='text-gray-400'>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
