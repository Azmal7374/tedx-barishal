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
    <nav className="relative flex items-center justify-between bg-black text-white px-4 py-3 md:px-8 md:py-4 w-full z-50">
      {/* Logo */}
      <div>
        <img src="/Logo.png" alt="Logo" className="h-8 md:h-10" />
      </div>

      {/* Desktop Navigation Links */}
      <div
        className={`${inter.variable} hidden md:flex items-center space-x-8 text-[16px] font-medium`}
      >
        <a
          href="#events"
          className="hover:border-b-2 border-white transition-all duration-300"
        >
          Events
        </a>
        <a
          href="#blog"
          className="hover:border-b-2 border-white transition-all duration-300"
        >
          Blog
        </a>
        <a
          href="#contact"
          className="hover:border-b-2 border-white transition-all duration-300"
        >
          Contact
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
  rounded-[8px] bg-[#E91F23]` }
      >
        Partner with us
      </Button>

      {/* Mobile Menu Icon */}
      <div className="flex md:hidden items-center space-x-4">
        <Button
          radius="lg"
          className={`${inter.variable} bg-[#E91F23] text-white px-4 py-2 text-[16px] font-medium hover:bg-white hover:text-[#E91F23] transition-all`}
        >
          Partner with us
        </Button>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-4 md:hidden z-40"
        >
          <a
            href="#events"
            className="hover:text-red-500 transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Events
          </a>
          <a
            href="#blog"
            className="hover:text-red-500 transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </a>
          <a
            href="#contact"
            className="hover:text-red-500 transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
         
        </div>
      )}
    </nav>
  );
};

export default Navbar;
