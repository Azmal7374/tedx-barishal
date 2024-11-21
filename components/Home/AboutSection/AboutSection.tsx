/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
// components/AboutSection.js

"use client";
import { bebasNeue, inter } from "@/app/font";
import { Button } from "@nextui-org/react";

const AboutSection = () => {
  return (
    <section className="bg-red-600 text-white px-[16px] py-[60px] sm:py-[100px] sm:px-[100px] relative">
      <div className="mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-6">
        {/* Left Text Section */}
        <div className="md:w-2/3">
          <h2
            className={`${bebasNeue.className} text-[#FFFFFF] text-[28px] md:text-[52px] mb-4`}
          >
            ABOUT TEDx UNIVERSITY OF BARISHAL
          </h2>
          <p
            className={`${inter.variable} text-[#FFFFFF] text-[16px] md:text-[24px] mb-4`}
          >
            TEDxBarishal is an independent organization created in the spirit of
            TED’s mission, “ideas worth spreading.”
          </p>
          <div className="flex flex-col items-start gap-[24.325px]">
            <div>
              <h3
                className={`${inter.variable} text-[16px] md:text-[18px] sm:mt-6 sm:mb-2 md:ml-8`}
              >
                What is TEDx?
              </h3>
              <p
                className={`${inter.variable} text-[14px] md:text-[18px] mt-6 sm:mb-4 font-normal md:ml-8`}
              >
                In the spirit of ideas worth spreading, TED has created a
                program called TEDx. TEDx is a program of local, self-organized
                events that bring people together to share a TED-like
                experience. Our event is called TEDxMelbourne, where x =
                independently organized TED event. At our TEDxMelbourne event,
                TEDTalks video and live speakers will combine to spark deep
                discussion and connection in a small group. The TED Conference
                provides general guidance for the TEDx program, but individual
                TEDx events, including ours, are self-organized. Find out more
                about TEDx program.
              </p>
            </div>
            <Button
              className={`${inter.variable} bg-[#E91F23] hover:bg-white w-[220px] h-[50px] text-white hover:text-[#E91F23] border mt-3 rounded-[8px] text-[16px] md:text-[18px] font-medium md:ml-8`}
            >
              Partner with us →
            </Button>
          </div>
        </div>
      </div>

      {/* Right Mosque Image Section */}
      <div className="absolute bottom-[-30px] right-[10px] md:bottom-[-43px] md:right-[10px]">
        <img
          src="/Mosjid.png"
          alt="Mosque illustration"
          className="w-[250px] h-[200px] md:w-[577.40px] md:h-[457.72px] rounded-lg"
        />
      </div>
    </section>
  );
};

export default AboutSection;
