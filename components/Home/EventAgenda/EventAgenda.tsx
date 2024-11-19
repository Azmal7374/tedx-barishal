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
      <section className="relative flex flex-col p-[100px] ]">
        <div className="w-[1140px]">
          <div className="text-center mb-8">
            <h2 className={`${bebasNeue.className} text-[#111111] text-[52px] uppercase`}>Event Agenda</h2>
          </div>

          <div className="space-y-6">
  {agendaItems.slice(0, visibleCount).map((item, index) => (
  <div
  key={index}
  className="group flex flex-col md:flex-row md:items-center border-b border-[#EBEBEB] gap-[20px] pb-4 transition-transform duration-500 ease-out hover:translate-x-5 "
>
  <div className="w-[380px]">
    <p className={`${inter.className} text-[#190C12] text-[18px]`}>
      {item.time}
    </p>
    <p className={`${inter.className} text-[#190C127D] text-[16px]`}>
      {item.duration}
    </p>
  </div>
  <h3 className={`${inter.className} text-[#190C12] text-[24px]`}>
    {item.title}
  </h3>
</div>

  ))}
</div>


          
            <div className="text-center mt-8 mb-[100px]">
              <button
                onClick={loadMore}
                className={`${inter.className} mt-[60px] bg-light md:w-[220px] h-[50px] text-[#E91F23] border border-[#E91F23] rounded-[8px] text-[18px] font-medium`}
              >
                Load more agenda
              </button>
            </div>
        
        </div>
      </section>

      <div className="mt-[100px] bg-[#FDE9E9] p-[95px] h-[420px]">
  <section
    className="relative  bottom-[200px] w-[1235px] bg-cover bg-center text-white py-16 px-8 rounded-[18px]"
    style={{ backgroundImage: "url('/agenda.png')" }}
  >
    <div className="flex flex-col gap-[19px] justify-center items-center">
      <h2 className={`${bebasNeue.className} text-[31px] leading-[60px]`}>
        Counter Until The Big Event
      </h2>
      {timeLeft && (
        <div className="flex  justify-center items-center  gap-[18px]">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="flex flex-col items-center bg-white text-[#E91F23] rounded-lg text-[31px]  p-[18px]"
            >
              <p className={`${bebasNeue.className} text-[31px] leading-[60px]`}>{value}</p>
              <p className="text-sm md:text-base font-medium capitalize">
                {unit}
              </p>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center items-center gap-[14px]">
        <button className={`${inter.className} bg-light w-full md:w-[180px] h-[50px] text-white  border border-white rounded-[8px] hover:shadow-md text-[18px] font-medium`}>
          Join Event
        </button>
        <button
          className={`${inter.className} bg-light w-full md:w-[220px] h-[50px] text-white  border border-white rounded-[8px] hover:shadow-md text-[18px] font-medium`}
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
