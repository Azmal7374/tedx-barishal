/* eslint-disable react/jsx-sort-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prettier/prettier */
"use client"
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Ensures text is displayed while the font is loading
});


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 py-4 bg-black text-white md:w-[1440px] md:h-[68.77px] pt-[12px] pb-[12px] pr-[32px] pl-[32px]">
   
      {/* Logo */}
      <div className={`${inter.className} text-lg font-bold text-[#E91F23] flex items-center py-[6.44px] px-[7.81px]`}
      >
        <span className="mr-1 text-[25.21px]">TED</span><sup className="text-[16.81px]">x</sup>
        <span className="text-white ml-1">University Of Barishal</span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6 text-white text-[16px]">
        <a href="#events" className="border-white hover:border-b-2">Events</a>
        <a href="#blog" className="border-white hover:border-b-2">Blog</a>
        <a href="#events" className="border-white hover:border-b-2">Events</a>
      </div>

      {/* Call-to-Action Button (Desktop only) */}
      <Button className="bg-red-600 text-white hidden md:block">
        Partner with us
      </Button>

      {/* Mobile Menu Icon and Button */}
      <div className="md:hidden flex items-center space-x-4">
      <Button className="bg-red-600 text-white">
          Partner with us
        </Button>
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-label="Open menu" 
          className="text-white text-2xl">
          ☰
        </button>
       
      </div>

      {/* Mobile Menu (Conditional Rendering) */}
      {menuOpen && (
        <div 
          className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-4 md:hidden z-50"
          onClick={() => setMenuOpen(false)} // Close menu on clicking any link
        >
          <a href="#events" className="hover:text-red-600">Events</a>
          <a href="#blog" className="hover:text-red-600">Blog</a>
          <a href="#events" className="hover:text-red-600">Events</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
