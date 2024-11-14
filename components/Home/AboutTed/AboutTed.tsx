/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
"use client"


// components/AboutTEDSection.js
import { FaPlay } from 'react-icons/fa';

const AboutTEDSection = () => {
  return (
    <section className="bg-[#FFFFFF] flex flex-col md:flex-row items-center gap-8 p-8 md:p-16 ">
      {/* Left Side: Image with Overlay Play Button */}
      <div className="relative w-full md:w-1/2">
        <img
          src="/aboutted.png" // Replace with the path to your image
          alt="TED Logo"
          className="rounded-lg shadow-lg w-full h-full object-cover"
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 rounded-full p-4">
            <FaPlay className="text-white text-3xl" />
          </div>
        </div>
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-sm font-bold uppercase text-gray-600 mb-2">About TED</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          TED is a non-profit organisation that follows the slogan 'Ideas Worth Spreading'.
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          TED began in 1984 as a conference where Technology, Entertainment, and Design (TED) converged, and today covers almost all topics—from science to business to global issues—in more than 100 languages. Additionally, TEDx, where "x" stands for independently organized TED events, helps share ideas around the world. TED is a global community, that welcomes people from every discipline and culture eager to seek a deeper understanding of the world. It strongly believes in the power of ideas and that it can change attitudes, lives, and, ultimately, the world.
        </p>
        <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-red-700 transition-colors duration-300">
          Learn more
          <span className="ml-2 text-xl">→</span>
        </button>
      </div>
    </section>
  );
};

export default AboutTEDSection;
