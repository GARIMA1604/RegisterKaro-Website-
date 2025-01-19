import React from 'react';
import aboutUsImage from '../assets/aboutus.jpg'; // Import the image

function AboutRegisterKaro() {
  return (
    <div
      className=" w-full h-[558px] bg-cover bg-center"
      style={{ backgroundImage: `url(${aboutUsImage})` }} 
    >
      <div className="flex items-center justify-between px-16 py-12 bg-opacity-0 bg-black">
        <div className="flex flex-col gap-6 w-1/2 text-white">
          <h2 className="text-4xl font-bold text-orange-500">About Register Karo</h2>
          <p className="text-lg text-black">
            We have been using Intelegencia as our DevOps vendor for our field
            service applications over the last couple of years and I'm
            extremely pleased with their performance, ability to execute, and
            willingness to adapt in our ever changing environment. Perry is an
            outstanding leader who is fanatical about customer satisfaction. He
            has built a solid team which has consistently delivered on projects
            thereby exceeding everyone's expectations.
          </p>
          <p className="text-lg text-gray-300">
            I would strongly recommend their services to any organization that is
            looking for solid, reliable, and predictable outcomes.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>

        <div className="w-1/2 relative">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://i.imgur.com/K66v5kC.png" // Keeping the same image here, replace if needed
            alt="Register Karo Team"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutRegisterKaro;
