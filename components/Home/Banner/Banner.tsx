/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/order */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
// components/Banner.js
"use client";

import { bebasNeue, inter } from "@/app/font";
import { Button } from "@nextui-org/react";

const Banner = () => {
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/image 3.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Banner Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <p
          className={`${inter.variable} text-[#FFFFFF] text-center text-[16px] md:text-[18px] font-[400px] leading-[150%] `}
        >
          Be the first to know.
        </p>
        <h1
          className={`${bebasNeue.className}     mb-4 text-[#FFFFFF] text-center text-[60px] md:text-[110px] font-normal leading-[100%]  tracking-[-3px] uppercase`}
        >
          JOIN TEDx-BU 2025
        </h1>
        <p
          className={`${inter.variable} text-base text-[16px] md:text-[18px] mb-6 max-w-lg mx-auto text-[#FFFFFF] text-center   font-normal leading-[150%]`}
        >
          Join TEDx Barishal to meet with amazing ideas and people to grow your
          thoughts and grow yourself with specials.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-[12px] justify-center items-center">
          <Button
            className={`${inter.variable} bg-light w-full md:w-[220px]  h-[50px]  text-white px-[42px] py-[9px] hover:text-[#E91F23] border border-white rounded-[8px]  hover:shadow-md text-[18px] font-semibold leading-[22px]`}
          >
            Join event
          </Button>
          <Button
            className={`${inter.variable} bg-white w-full md:w-[220px] h-[50px]  text-[#E91F23]  rounded-[8px] px-[42px] py-[9px]  text-[18px] font-semibold leading-[22px]`}
          >
            Become our sponsor
          </Button>
        </div>

        {/* Footer Note */}
        <p
          className={`${inter.variable} text-[16px] font-normal leading-[24px] text-[#FFFFFF]`}
        >
          100% Spam-free. We promise.
        </p>
      </div>
    </div>
  );
};

export default Banner;
