/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
// components/ThemeSection.js
"use client"
import { bebasNeue, inter } from "@/app/layout";
import { Button } from "@nextui-org/react";

const ThemeSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-between p-8 md:p-16 gap-8 bg-[#F5F5F5]">
      {/* Left Content */}
      <div className="text-center md:text-left max-w-lg space-y-4">
        <h4 className={`${bebasNeue.className} text-[16px] text-[#E91F23]`}>THEME OF 2024</h4>
        <h1 className={`${bebasNeue.className} text-[38px]  md:text-[52px] leading-tight text-[#111111]`}>
          VOICE OF TODAY, VISION OF TOMORROW
        </h1>
        <p className={`${inter.className} text-[16px]  md:text-[18px] leading-tight text-[#4B4B4B]`}>
          TEDx University of Barishal is thrilled to welcome you with an
          unparalleled theme, <strong>“Voice of Today, Vision of Tomorrow”</strong> where
          you can immerse yourself in inspiring TEDx talks and explore
          innovative, out-of-the-box ideas.
        </p>
        <p className="text-[#4B4B4B] text-lg ">
          “Voice of Today, Vision of Tomorrow” is crafted to reward you with
          exciting insights through a wide array of discussions. From
          groundbreaking science to the entertainment world, these diverse
          conversations ignite brilliance.
        </p>
        <p className="text-[#4B4B4B] text-lg ">
          Join us on this remarkable journey & enrich your mind with a sphere
          of wisdom.
        </p>
        <Button className="bg-transparent border-[1px] rounded-[8px]  w-[191px] h-[50px] border-red-600 text-[#E91F23] hover:outline-none hover:border-gray-400  mt-4 text-[16px] ">
          Partner with us
        </Button>
      </div>

      {/* Right Content (Image Only) */}
      <div className="flex-shrink-0 w-full md:w-[400px] lg:w-[586px] h-auto">
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
