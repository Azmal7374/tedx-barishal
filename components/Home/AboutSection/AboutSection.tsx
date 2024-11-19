/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
// components/AboutSection.js

"use client";
import { bebasNeue, inter } from "@/app/font";
// components/AboutSection.js
import { Button } from "@nextui-org/react";

const  AboutSection = () => {
  return (
    <section className="bg-red-600 text-white py-16 px-4 md:px-16 relative">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-6">
        {/* Left Text Section */}
        <div className="md:w-2/3">
          <h2
            className={`${bebasNeue.className} text-[#FFFFFF] text-[38px] md:text-[52px]  mb-4`}
          >
            ABOUT TEDx UNIVERSITY OF BARISHAL
          </h2>
          <p
            className={`${inter.className} text-[#FFFFFF] text-[20px] md:text-[24px] mb-4`}
          >
            TEDxBarishal is an independent organization created in the spirit of
            TED’s mission, “ideas worth spreading.”
          </p>
          <h3 className={`${inter.className} text-[16px] md:text-[18px] mt-6 mb-2 ml-8`}>
            What is TEDx?
          </h3>
          <p className={`${inter.className} text-[16px] md:text-[18px] mt-6 mb-4 ml-8`}>
            In the spirit of ideas worth spreading, TED has created a program
            called TEDx. TEDx is a program of local, self-organized events that
            bring people together to share a TED-like experience. Our event is
            called TEDxMelbourne, where x = independently organized TED event.
            At our TEDxMelbourne event, TEDTalks video and live speakers will
            combine to spark deep discussion and connection in a small group.
            The TED Conference provides general guidance for the TEDx program,
            but individual TEDx events, including ours, are self-organized. Find
            out more about TEDx program
          </p>
          <Button
            className={`${inter.className} bg-[#E91F23] hover:bg-white  md:w-[220px] h-[50px]  text-white hover:text-[#E91F23] border  mt-3 ml-8 rounded-[8px]   text-[18px] font-[500px]`}
          >
            Partner with us →
          </Button>
        </div>
      </div>

      {/* Right Mosque Image Section positioned at bottom-right corner */}
      <div className="absolute bottom-0 right-0 mb-4 mr-4">
        <img
          src="/Mosjid.png"
          alt="Mosque illustration"
          className="w-[577.40px] h-[457.72px] rounded-lg"
        />
      </div>
    </section>
  );
};

export default AboutSection;
