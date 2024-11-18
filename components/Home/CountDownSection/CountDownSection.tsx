/* eslint-disable prettier/prettier */
/* eslint-disable padding-line-between-statements */
/* eslint-disable react/self-closing-comp */
"use client"

import { inter } from "@/app/layout";
import { useState, useEffect } from "react";

// Define a type for the time left object
type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const CountdownSection: React.FC = () => {
  // Calculate time left with proper typing
  const calculateTimeLeft = (): TimeLeft => {
    const eventDate = new Date("2024-12-31T00:00:00");
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    // Return zeroed-out values when time is up
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  };

  // State to store the countdown values
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-[100px]  bg-pink-200 p-[95px]">

<section className="relative bottom-[200px]  w-[1253px] bg-red-500 text-white py-16 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-xl md:text-3xl font-bold mb-8">
          Counter Until The Big Event
        </h2>
        <div className="flex justify-center items-center gap-4 md:gap-8 mb-8 flex-wrap">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="flex flex-col items-center bg-white text-red-500 rounded-lg px-6 py-4 md:px-8 md:py-6 shadow-md"
            >
              <p className="text-3xl md:text-5xl font-bold">{value}</p>
              <p className="text-sm md:text-base font-medium capitalize">
                {unit}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4">
          <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition">
            Join Event
          </button>
          <button  className={`${inter.className} bg-light w-full md:w-[220px]  h-[50px]  text-white hover:text-[#E91F23] border border-white rounded-[8px]  hover:shadow-md text-[18px] font-[500px]`}>
            Become Our Sponsor
          </button>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/path/to/your/image.jpg')] bg-cover bg-center opacity-20 pointer-events-none"></div>
    </section>

    </div>
  );
};

export default CountdownSection;
