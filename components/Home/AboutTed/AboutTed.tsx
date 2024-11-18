/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
"use client";

import { bebasNeue, inter } from "@/app/layout";
// components/AboutTEDSection.js
import { FaPlay } from "react-icons/fa";

const AboutTEDSection = () => {
  return (
    <section className="bg-[#FFFFFF] flex justify-between items-center p-[100px] ">
      {/* Left Side: Image with Overlay Play Button */}
      <div className=" ">
        <img
          src="/aboutted.png" // Replace with the path to your image
          alt="TED Logo"
          className=" w-[532px] h-[467px] rounded-2xl"
        />
        {/* Play Button Overlay */}
        <div className="rounded-[60px] bg-[rgba(255,255,255,0.3)] inline-flex p-[8px] items-center gap-[10px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[58px] h-[58px] bg-black bg-opacity-50  rounded-[64.34px] border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.2)] shadow-[0px_4.587px_24.59px_0px_rgba(0,0,0,0.03)] backdrop-blur-[5.5px]p-[22px] ">
              <FaPlay className="text-white text-[16px] h-[16px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Text Content */}
      <div className="w-[568px] flex flex-col gap-[42px] text-center md:text-left">
        <div className="flex flex-col gap-[24px]">
          <div>
            <h3
              className={`${bebasNeue.className} text-[#111111] text-[16px] uppercase font-[400]`}
            >
              About TED
            </h3>
            <h2
              className={`${inter.className} text-base text-[24px]  text-[#111111] font-[600px]`}
            >
              TED is a non-profit organisation that follows the slogan 'Ideas
              Worth Spreading'.
            </h2>
          </div>
          <div>
            <p
              className={`${inter.className} text-base text-[16px]  text-[#111111] font-[400px]`}
            >
              TED began in 1984 as a conference where Technology, Entertainment,
              and Design (TED) converged, and today covers almost all
              topics—from science to business to global issues—in more than 100
              languages. Additionally, TEDx, where "x" stands for independently
              organized TED events, helps share ideas around the world. TED is a
              global community, that welcomes people from every discipline and
              culture eager to seek a deeper understanding of the world. It
              strongly believes in the power of ideas and that it can change
              attitudes, lives, and, ultimately, the world.
            </p>
          </div>
        </div>
        <div>
          <button
            className={`${inter.className} bg-light  md:w-[220px]  h-[50px] text-[#E91F23]  border border-[#E91F23] hover:border-gray-300 rounded-[8px] text-[18px] font-[500px]`}
          >
            Learn more
            <span className="ml-2 text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutTEDSection;
