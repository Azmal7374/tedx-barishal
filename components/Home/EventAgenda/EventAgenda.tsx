/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
"use client";

import { bebasNeue, inter } from "@/app/font";
import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const EventAgenda = () => {
 const agendaItems = [
  { time: "7:00 AM – 7:45 AM", duration: "45 Mins", title: "Gate Opening" },
  { time: "7:45 AM – 8:30 AM", duration: "45 Mins", title: "Gathering & Breakfast" },
  { time: "8:30 AM – 9:00 AM", duration: "30 Mins", title: "Introduction to TEDx Barishal" },
  { time: "9:00 AM – 10:30 AM", duration: "1.5 Hours", title: "The Learning for Creatives (Part 1)" },
  { time: "10:30 AM – 11:00 AM", duration: "30 Mins", title: "Coffee & Networking" },
  { time: "12:00 PM – 1:30 PM", duration: "1.5 Hours", title: "Interactive Session" },
  { time: "1:30 PM – 3:00 PM", duration: "1.5 Hours", title: "Lunch & Jumma Break" },
  { time: "3:00 PM – 4:30 PM", duration: "1.5 Hours", title: "Panel Discussion & Closing Remarks" },
];

  const [visibleCount, setVisibleCount] = useState(8);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

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

    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Initialize the countdown on the client side
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white">
      <section className="relative flex flex-col pt-[100px] pb-[100px] pr-[150px] pl-[150px]">
        <div className="w-[1140px]">
          <div className="text-center mb-8">
            <h2 className={`${bebasNeue.className} text-[#111111] text-[52px] uppercase`}>Event Agenda</h2>
          </div>

          <div className="space-y-6">
            {agendaItems.slice(0, visibleCount).map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center border-b border-[#EBEBEB] gap-[20px] pb-4"
              >
                <div className="w-[380px]">
                  <p className={`${inter.className} text-[#190C12] text-[18px]`}>{item.time}</p>
                  <p className={`${inter.className} text-[#190C127D] text-[16px]`}>{item.duration}</p>
                </div>
                <h3 className={`${inter.className} text-[#190C12] text-[24px]`}>{item.title}</h3>
              </div>
            ))}
          </div>

          
            <div className="text-center mt-8">
              <button
                onClick={loadMore}
                className={`${inter.className} mt-[60px] bg-light md:w-[220px] h-[50px] text-[#E91F23] border border-[#E91F23] rounded-[8px] text-[18px] font-medium`}
              >
                Load more agenda
              </button>
            </div>
        
        </div>
      </section>

      <div className="mt-[100px] bg-[#FDE9E9] p-[95px]">
        <section className="relative bottom-[200px] w-[1253px] bg-red-500 text-white py-16 px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-xl md:text-3xl font-bold mb-8">
              Counter Until The Big Event
            </h2>
            {timeLeft && (
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
            )}
            <div className="flex justify-center items-center gap-4">
              <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition">
                Join Event
              </button>
              <button
                className={`${inter.className} bg-light w-full md:w-[220px] h-[50px] text-white hover:text-[#E91F23] border border-white rounded-[8px] hover:shadow-md text-[18px] font-medium`}
              >
                Become Our Sponsor
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventAgenda;
