/* eslint-disable import/order */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
// components/Banner.js
"use client"

import { Button } from "@nextui-org/react";
import backgroundImage from "../../public/image 3.png"; 
const Banner = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-cover bg-center text-white"     style={{ backgroundImage: "url('/image 3.png')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Banner Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-light mb-2">Be the first to know.</p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">JOIN TEDx-BU 2025</h1>
        <p className="text-base md:text-lg mb-6 max-w-lg mx-auto">
          Join TEDx Barishal to meet with amazing ideas and people to grow your thoughts and grow yourself with specials.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button  className="bg-white text-black hover:bg-gray-200">
            Join event
          </Button>
          <Button  className="bg-red-600 text-white hover:bg-red-700">
            Become our sponsor
          </Button>
        </div>

        {/* Footer Note */}
        <p className="text-xs mt-4">* 100% Spam-free. We promise.</p>
      </div>
 
    </div>
  );
};

export default Banner;
