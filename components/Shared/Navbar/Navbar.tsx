/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prettier/prettier */
"use client";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { inter } from "@/app/font";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between bg-black text-white  md:w-[1440px] h-[89px] md:h-[68.77px] px-[16px] py-[12px] md:pt-[12px] md:pb-[12px] md:pr-[32px] md:pl-[32px]">
      {/* Logo */}
      <div className=" ">
       <img src="/Logo.png" alt="" />
      </div>

      {/* Desktop Navigation Links */}
      <div
        className={`${inter.variable} hidden md:flex space-x-6 text-white text-[16px]`}
      >
        <a href="#events" className="border-white hover:border-b-2">
          Events
        </a>
        <a href="#blog" className="border-white hover:border-b-2">
          Blog
        </a>
        <a href="#events" className="border-white hover:border-b-2">
          Events
        </a>
      </div>

      {/* Call-to-Action Button (Desktop only) */}
      <Button
        className={`${inter.variable}  hidden md:block    
      text-white 
  text-center
 text-[16px]
  font-medium
  leading-[140%]
  w-[135px] 
  h-[41px] 
  p-2
  justify-center 
  items-center 
  gap-[12px] 
  rounded-[8px] bg-[#E91F23] `}
      >
        Partner with us
      </Button>

      {/* Mobile Menu Icon and Button */}
      <div className="md:hidden flex items-center space-x-4 ">
        <Button
          className={`${inter.variable} flex 
      text-white 
  text-center
 text-[16px]
  font-medium
  leading-[140%]
  w-[135px] 
  h-[41px] 
  px-[42px] 
  py-[9px] 
  justify-center 
  items-center 
  gap-[12px] 
  rounded-[8px] 
  bg-[#E91F23] hover:text-[#E91F23]`}
        >
          Partner with us
        </Button>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
          className="text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu (Conditional Rendering) */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-4 md:hidden z-50"
          onClick={() => setMenuOpen(false)} // Close menu on clicking any link
        >
          <a href="#events" className="hover:text-red-600">
            Events
          </a>
          <a href="#blog" className="hover:text-red-600">
            Blog
          </a>
          <a href="#events" className="hover:text-red-600">
            Events
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
