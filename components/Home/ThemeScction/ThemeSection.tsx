/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
// components/ThemeSection.js
"use client"
import { Button } from "@nextui-org/react";

const ThemeSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-between p-8 md:p-16 gap-8 bg-[#F5F5F5]">
      {/* Left Content */}
      <div className="text-center md:text-left max-w-lg space-y-4">
        <h4 className="text-red-600 text-sm font-semibold">THEME OF 2024</h4>
        <h1 className="text-3xl md:text-4xl  leading-tight text-[#111111] font-[700px]  ">
          VOICE OF TODAY, VISION OF TOMORROW
        </h1>
        <p className="text-gray-500 text-lg font-[600]">
          TEDx University of Barishal is thrilled to welcome you with an
          unparalleled theme, <strong>“Voice of Today, Vision of Tomorrow”</strong> where
          you can immerse yourself in inspiring TEDx talks and explore
          innovative, out-of-the-box ideas.
        </p>
        <p className="text-gray-500 text-lg font-[600]">
          “Voice of Today, Vision of Tomorrow” is crafted to reward you with
          exciting insights through a wide array of discussions. From
          groundbreaking science to the entertainment world, these diverse
          conversations ignite brilliance.
        </p>
        <p className="text-gray-500 text-lg font-[600]">
          Join us on this remarkable journey & enrich your mind with a sphere
          of wisdom.
        </p>
        <Button className="bg-transparent border-[1px] rounded-[8px]  w-[191px] h-[50px] border-red-600 text-[#E91F23] hover:outline-none hover:border-gray-400  mt-4 text-[16px] font-[700px]">
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
