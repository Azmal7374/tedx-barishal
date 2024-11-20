/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
// components/ThemeSection.js
"use client";
import { bebasNeue, inter } from "@/app/font";
import { Button } from "@nextui-org/react";

const ThemeSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-between p-[100px]  gap-[] bg-[#F5F5F5]">
      {/* Left Content */}
      <div className="text-center md:text-left max-w-lg flex flex-col gap-[32px] h-[635px]">
       <div>
       <h4 className={`${bebasNeue.className} text-[16px] text-[#E91F23] tracking-[0.16px] leading-[19.2px] font-normal`}>
          THEME OF 2024
        </h4>
        <h1
          className={`${bebasNeue.className} text-[38px]  md:text-[52px] leading-[120%] text-[#111111] font-normal`}
        >
          VOICE OF TODAY, VISION OF TOMORROW
        </h1>
       </div>
        <div className="space-y-4">
        <p
          className={`${inter.variable} text-[16px]  md:text-[18px] leading-[28px] text-[#4B4B4B]`}
        >
          TEDx University of Barishal is thrilled to welcome you with an
          unparalleled theme,{" "}
          <strong>“Voice of Today, Vision of Tomorrow”</strong> where you can
          immerse yourself in inspiring TEDx talks and explore innovative,
          out-of-the-box ideas.
        </p>
        <p
          className={`${inter.variable} text-[16px]  md:text-[18px] leading-[28px] text-[#4B4B4B]`}
        >
          “Voice of Today, Vision of Tomorrow” is crafted to reward you with
          exciting insights through a wide array of discussions. From
          groundbreaking science to the entertainment world, these diverse
          conversations ignite brilliance.
        </p>
        <p
          className={`${inter.variable} text-[16px]  md:text-[18px] leading-[28px] text-[#4B4B4B] `}
        >
          Join us on this remarkable journey & enrich your mind with a sphere of
          wisdom.
        </p>
        </div>
        <Button
          className={`${inter.variable} bg-transparent hover:bg-white  md:w-[220px] h-[50px] border-[#E91F23] text-[#E91F23] hover:text-[#E91F23] border  mt-4 rounded-[8px]   text-[18px] font-semibold`}
        >
          Partner with us
        </Button>
      </div>

      {/* Right Content (Image Only) */}
      <div className="flex-shrink-0 w-full md:w-[400px] lg:w-[586px] h-[635px]">
        <img
          src="/themeimg.png"
          alt="TEDx Theme Visual"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default ThemeSection;
