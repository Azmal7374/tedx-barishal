/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
"use client";

import { bebasNeue, inter } from "@/app/font";
import { FaPlay } from "react-icons/fa";

const AboutTEDSection = () => {
  return (
    <section className="bg-[#FFFFFF] flex flex-col md:flex-row justify-between items-center px-[16px] py-[60px] md:px-[50px] lg:px-[100px]  md:py-[100px] gap-8">
      {/* Left Side: Image with Overlay Play Button */}
      <div className="relative group w-full md:w-[50%] flex justify-center">
        <img
          src="/aboutted.png"
          alt="TED Logo"
          className="w-full max-w-[532px] h-auto rounded-2xl"
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-[58px] h-[58px] flex items-center justify-center bg-black bg-opacity-50 rounded-full border border-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
            <FaPlay className="text-white text-[16px]" />
          </div>
        </div>
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full md:w-[50%] flex flex-col gap-[42px] sm:text-center md:text-left">
        <div className="flex flex-col gap-[24px]">
          <div>
            <h3
              className={`${bebasNeue.className} text-[#111111] text-[14px] md:text-[16px] uppercase font-[400] leading-[19.2px]`}
            >
              About TED
            </h3>
            <h2
              className={`${inter.variable} mt-[12px] text-[20px] md:text-[24px] text-[#1A1A1A] font-[600] leading-[28.8px] md:leading-[33.6px]`}
            >
              TED is a non-profit organisation that follows the slogan 'Ideas Worth Spreading'. It usually is in the form of short, powerful talks.
            </h2>
          </div>
          <div>
            <p
              className={`${inter.variable} text-base text-[14px] md:text-[16px] text-[#111111] font-[400] leading-[160%] tracking-[-0.16px]`}
            >
              TED began in 1984 as a conference where Technology, Entertainment,
              and Design (TED) converged, and today covers almost all topics—from
              science to business to global issues—in more than 100 languages.
              Additionally, TEDx, where "x" stands for independently organized TED
              events, helps share ideas around the world. TED is a global
              community, that welcomes people from every discipline and culture
              eager to seek a deeper understanding of the world. It strongly
              believes in the power of ideas and that it can change attitudes,
              lives, and, ultimately, the world.
            </p>
          </div>
        </div>
        <div>
          <button
            className={`${inter.variable} bg-light w-[220px] h-[50px] text-[#E91F23] border border-[#E91F23] hover:border-gray-300 rounded-[8px] text-[16px] md:text-[18px] font-semibold`}
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
