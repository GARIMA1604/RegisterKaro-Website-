// src/Components/Hero.js
import React from 'react';
import HeroImage from '../assets/Hero.jpg'; // Correct import path

const Hero = () => {
  return (
    <section
      className="w-[1515px] h-[585px] bg-gray-100 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${HeroImage})`, 
        marginTop: '0', // Top margin set to 0
      }}
    >
      <div className="w-[1440px] flex justify-between items-center px-4">
        <div className="space-y-4 max-w-md bg-opacity-75 bg-white p-6 rounded-lg">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 text-xl">★</span>
            <span className="text-gray-600">Google Rating</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Your trusted partner for compliance business needs
          </h1>
          <p className="text-gray-600">
            An online business compliance platform that helps entrepreneurs and
            other individuals with various registrations, tax filings, and
            other legal matters.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Talk An Expert
            </button>
            <button className="text-orange-500 underline">
              See how it works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
