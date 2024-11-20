/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
"use cilent";

import { bebasNeue, inter } from "@/app/font";

// components/BrowseTalksSection.js
const BrowseTalksSection = () => {
  
  return (
    <section className="p-[100px]   bg-[#F5F5F5]">
      <h2
        className={`${bebasNeue.className} text-[#111111] text-[52px] uppercase font-[400]`}
      >
        Browse Talks
      </h2>

      <div className="flex h-[383px] items-start content-start gap-[24px] self-stretch flex-wrap mt-[42px]">
      
          <div className="flex h-[368px] min-w-[300px] flex-col items-start gap-[16px] flex-[1_0_0]">
            <img
              src="/image 27.png"
              alt="Can robots make us more human? | Lisa Leong"
              className="transition-transform transform hover:scale-105 rounded-2xl"
            />
            <div className="">
              <h3
                className={`${inter.variable} mt-[10px] text-base text-[16px] md:text-[18px] text-[#111111] leading-[16px] font-semibold`}
              >
                Can robots make us more human? | Lisa Leong
              </h3>
              <p
                className={`${inter.variable} mt-[10px] text-base text-[14px]   text-[#111111] font-normal leading-[19.2px]`}
              >
              2017 • Science • Behaviour
              </p>
            </div>
          </div>
          <div className="flex h-[317px] min-w-[300px] flex-col items-start gap-[16px] flex-[1_0_0]">
            <img
              src="/image 28.png"
              alt="Can robots make us more human? | Lisa Leong"
              className="transition-transform transform hover:scale-105 rounded-2xl"
            />
            <div className="">
              <h3
               className={`${inter.variable} mt-[10px] text-base text-[16px] md:text-[18px] text-[#111111] leading-[16px] font-semibold`}
              >
                Can robots make us more human? | Lisa Leong
              </h3>
              <p
                 className={`${inter.variable} mt-[10px] text-base text-[14px]   text-[#111111] font-normal leading-[19.2px]`}
              >
              2017 • Science • Behaviour
              </p>
            </div>
          </div>
          <div className=" rounded-lg ">
            <img
              src="/image 30.png"
              alt="Can robots make us more human? | Lisa Leong"
              className=" transition-transform transform hover:scale-105 rounded-2xl"
            />
            <div className="">
              <h3
               className={`${inter.variable} mt-[10px] text-base text-[16px] md:text-[18px] text-[#111111] leading-[16px] font-semibold`}
              >
                Can robots make us more human? | Lisa Leong
              </h3>
              <p
                 className={`${inter.variable} mt-[10px] text-base text-[14px]   text-[#111111] font-normal leading-[19.2px]`}
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
