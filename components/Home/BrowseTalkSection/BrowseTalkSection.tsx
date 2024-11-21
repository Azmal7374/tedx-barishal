/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
"use client";

import { bebasNeue, inter } from "@/app/font";

const BrowseTalksSection = () => {
  return (
    <section className="py-[60px] px-[16px] sm:px-[100px] sm:py-[100px] bg-[#E91F23] sm:bg-[#F5F5F5]">
      <h2
        className={`${bebasNeue.className} text-[#FFFFFF] sm:text-[#111111] text-[38px] leading-[120%] sm:leading-[140%] sm:text-[52px] uppercase font-[400]`}
      >
        Browse Talks
      </h2>

      <div className="flex flex-col sm:flex-row mt-[42px] gap-[32px] sm:gap-[24px]">
        {/* First Item */}
        <div className="flex flex-col items-start gap-[16px] w-full  md:w-[calc(33.333%_-_16px)] lg:w-[calc(33.333%_-_24px)]">
          <img
            src="/image 27.png"
            alt="Can robots make us more human? | Lisa Leong"
            className="transition-transform transform hover:scale-105 rounded-2xl"
          />
          <div>
            <h3
              className={`${inter.variable} mt-[10px] text-base text-[16px] md:text-[18px] text-[#111111] leading-[16px] font-semibold`}
            >
              Can robots make us more human? | Lisa Leong
            </h3>
            <p
              className={`${inter.variable} mt-[10px] text-base text-[14px] text-[#111111] font-normal leading-[19.2px]`}
            >
              2017 • Science • Behaviour
            </p>
          </div>
        </div>

        {/* Second Item */}
        <div className="flex flex-col items-start gap-[16px] w-full md:w-[calc(33.333%_-_16px)] lg:w-[calc(33.333%_-_24px)]">
          <img
            src="/image 28.png"
            alt="Can robots make us more human? | Lisa Leong"
            className="transition-transform transform hover:scale-105 rounded-2xl"
          />
          <div>
            <h3
              className={`${inter.variable} mt-[10px] text-base text-[16px] md:text-[18px] text-[#111111] leading-[16px] font-semibold`}
            >
              Can robots make us more human? | Lisa Leong
            </h3>
            <p
              className={`${inter.variable} mt-[10px] text-base text-[14px] text-[#111111] font-normal leading-[19.2px]`}
            >
              2017 • Science • Behaviour
            </p>
          </div>
        </div>

        {/* Third Item */}
        <div className="flex flex-col items-start gap-[16px] w-full md:w-[calc(33.333%_-_16px)] lg:w-[calc(33.333%_-_24px)]">
          <img
            src="/image 30.png"
            alt="Can robots make us more human? | Lisa Leong"
            className="transition-transform transform hover:scale-105 rounded-2xl"
          />
          <div>
            <h3
              className={`${inter.variable} mt-[10px] text-base text-[16px] md:text-[18px] text-[#111111] leading-[16px] font-semibold`}
            >
              Can robots make us more human? | Lisa Leong
            </h3>
            <p
              className={`${inter.variable} mt-[10px] text-base text-[14px] text-[#111111] font-normal leading-[19.2px]`}
            >
              2017 • Science • Behaviour
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseTalksSection;
