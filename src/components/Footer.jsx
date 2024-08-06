import React from 'react';
import { Facebook, Github, Instagram, Phone, PinOff, Twitter, Mail, Square } from 'lucide-react';
import logo from "../Images/recaglogo.png";

function Footer() {
  return (
    <footer className="z-0 bg-blacky sm:p-[5rem] p-4 relative">
      {/* Footer top section */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between">
        {/* Quick contact info */}
        <div className="mb-8">
          <div className="text-white">
            <p className="mb-4 text-[1.5rem]">Quick contact info</p>
            <p className="sm:w-[380px] w-[320px] text-[0.9rem] mb-4 opacity-80">
              Lorem ipsum dolor sit amet ut, consectetur adipisicing elit, sed do eiusmod tempor minim.
            </p>
          </div>
          <div className="flex flex-col text-[0.899rem] opacity-80 mt-4">
            <a href="/" className="flex items-center text-white hover:text-gray-800 mt-2 md:mt-0 md:ml-2 mb-4" aria-label="Main Street Victoria">
              <PinOff size={20} className="mr-2 text-white" />
              184 Main Street Victoria
            </a>
            <a href="mailto:email@qodeinteractive.com" className="flex items-center text-white hover:text-gray-800 mt-2 md:mt-0 md:ml-2 mb-4" aria-label="Email Qode Interactive">
              <Mail size={20} className="mr-2 text-white" />
              email@qodeinteractive.com
            </a>
            <a href="tel:+1234567890" className="flex items-center text-white hover:text-gray-800 mt-2 md:mt-0 md:ml-2 mb-4" aria-label="Phone number">
              <Phone size={20} className="mr-2 text-white" />
              +(123) 456 -7890
            </a>
          </div>
        </div>
        {/* Latest tweets */}
        <div className="mb-8">
          <div className="text-white">
            <p className="text-[1.5rem] mb-4">Read our latest tweets:</p>
            <p className="text-[0.9rem] opacity-80">Couldn't connect with Twitter</p>
          </div>
        </div>
        {/* Blog posts */}
        <div className="mb-8">
          <div className="text-white text-[1.5rem] mb-4">
            <p>Check out our Blog:</p>
          </div>
          <div className="flex flex-col text-[0.9rem] opacity-80 mt-4">
            <a href="/" className="flex items-center text-white hover:text-gray-800 mt-2 md:mt-0 md:ml-2 mb-4" aria-label="Mining platform">
              <Square size={10} className="mr-2 text-white" />
              Mining platform
            </a>
            <a href="/" className="flex items-center text-white hover:text-gray-800 mt-2 md:mt-0 md:ml-2 mb-4" aria-label="Fortune platform">
              <Square size={10} className="mr-2 text-white" />
              Fortune platform
            </a>
            <a href="/" className="flex items-center text-white hover:text-gray-800 mt-2 md:mt-0 md:ml-2 mb-4" aria-label="Giving way platform">
              <Square size={10} className="mr-2 text-white" />
              Giving way platform
            </a>
            <a href="/" className="flex items-center text-white hover:text-gray-800 mt-2 md:mt-0 md:ml-2 mb-4" aria-label="Local platform">
              <Square size={10} className="mr-2 text-white" />
              Local platform
            </a>
          </div>
        </div>
        {/* Location section */}
        <div className="mb-8">
          <div className="text-white text-[1.5rem]">
            <p>Location:</p>
          </div>
          <div className="flex flex-col mt-4">
            <a href="/" className="flex items-center text-white hover:text-gray-800 mt-2" aria-label="Location map">
              <img src='https://innovio.qodeinteractive.com/wp-content/uploads/2018/11/footer-map-img-300x171.png' alt='Location map' width="300" height="171" />
            </a>
          </div>
        </div>
      </div>
      {/* Footer bottom section */}
      <div className="container mx-auto mt-12 border-t border-gray-400 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="text-gray-600 flex items-center">
            <img src={logo} alt="Logo" className="mr-2" width={80} height={80}/>
          </div>
          {/* Copyright */}
          <div className="text-gray-600 flex items-center">
            <p><span style={{ color: '#666a80' }}>© 2019</span> <a href="https://qodeinteractive.com/" aria-label="Qode Interactive" rel="noopener noreferrer" target="_blank">Qode Interactive</a><span style={{ color: '#666a80' }}>,</span> <span style={{ color: '#666a80' }}>All Rights Reserved</span></p>
          </div>
          {/* Social icons */}
          <div className="text-gray-600">
            <div className="flex justify-center">
              <a href="https://facebook.com" className="flex items-center text-gray-600 hover:bg-gray-800 mr-4 rounded-full border border-white py-2 pl-2" aria-label="Facebook">
                <Facebook className="mr-2 text-white" />
              </a>
              <a href="https://instagram.com" className="flex items-center text-gray-600 hover:bg-gray-800 mr-4 rounded-full border border-white py-2 pl-2" aria-label="Instagram">
                <Instagram className="mr-2 text-white" />
              </a>
              <a href="https://github.com" className="flex items-center text-gray-600 hover:bg-gray-800 mr-4 rounded-full border border-white py-2 pl-2" aria-label="Github">
                <Github className="mr-2 text-white" />
              </a>
              <a href="https://twitter.com" className="flex items-center text-gray-600 hover:bg-gray-800 mr-4 rounded-full border border-white py-2 pl-2" aria-label="Twitter">
                <Twitter className="mr-2 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
