
import React from 'react';
import image from "../assets/image.png";
import image2 from "../assets/images2.png";
import image3 from "../assets/image3.avif";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
const Footer = () => {
  return (
    <footer className=" text-black flex items-center justify-center">
      <div className="w-[1440px] h-[236px] text-center justify-center pt-10  ">
        <p className="text-lg">
          Trusted by over 100+ startups and freelance businesses
        </p>
        <div className="flex justify-center space-x-6 mt-6">
          <img
            src={image}
            alt="Oracle"
            className="h-12"
          />
          <img
            src={image2}
            alt="Morpheus"
            className="h-12"
          />
          <img
            src={image3}
            alt="Samsung"
            className="h-12"
          />
          <img
            src={image4}
            alt="Monday.com"
            className="h-12"
          />
          <img
            src={image5}
            alt="Segment"
            className="h-12"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
