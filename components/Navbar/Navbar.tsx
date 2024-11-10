/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
"use client"
import { useState } from "react";
import { Button } from "@nextui-org/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white  md:w-[1440px] md:h-[68.77px] pt-[12px] pb-[12px] pr-[32px] pl-[32px]">
   
      <div className="text-lg font-bold text-[#E91F23] flex items-center pt-[6.44px] pb-[6.44px] pr-[7.81px] pl-[7.81px]">
        <span className="mr-1 text-[25.21px]">TED</span><sup className="text-[16.81px]">x</sup>
        <span className="text-white ml-1">University Of Barishal</span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6 text-white text-[16px]">
        <a href="#events" className="border-white hover:border-b-2 ">Events</a>
        <a href="#blog" className="border-white hover:border-b-2 ">Blog</a>
        <a href="#events" className="border-white hover:border-b-2 ">Events</a>
      </div>

      {/* Call-to-Action Button (Desktop only) */}
      <Button   className="bg-red-600 text-white hidden md:block">
        Partner with us
      </Button>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu" className="text-white">
          ☰
        </button>
      </div>

      {/* Mobile Menu (Conditional Rendering) */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-4 md:hidden">
          <a href="#events" className="hover:text-red-600">Events</a>
          <a href="#blog" className="hover:text-red-600">Blog</a>
          <a href="#events" className="hover:text-red-600">Events</a>
          <Button  className="bg-[#E91F23]
 text-white w-[135px] h-[41px] text-[16px]">
            Partner with us
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
