/* eslint-disable prettier/prettier */
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
    {
      time: "7:45 AM – 8:30 AM",
      duration: "45 Mins",
      title: "Gathering & Breakfast",
    },
    {
      time: "8:30 AM – 9:00 AM",
      duration: "30 Mins",
      title: "Introduction to TEDx Barishal",
    },
    {
      time: "9:00 AM – 10:30 AM",
      duration: "1.5 Hours",
      title: "The Learning for Creatives (Part 1)",
    },
    {
      time: "10:30 AM – 11:00 AM",
      duration: "30 Mins",
      title: "Coffee & Networking",
    },
    {
      time: "12:00 PM – 1:30 PM",
      duration: "1.5 Hours",
      title: "Interactive Session",
    },
    {
      time: "1:30 PM – 3:00 PM",
      duration: "1.5 Hours",
      title: "Lunch & Jumma Break",
    },
    {
      time: "3:00 PM – 4:30 PM",
      duration: "1.5 Hours",
      title: "Panel Discussion & Closing Remarks",
    },
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

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white">
      <section className="p-6 sm:p-10 lg:p-[100px]">
        <div className="flex flex-col gap-6 lg:gap-[60px]">
          <h2
            className={`${bebasNeue.className} text-[#111111] text-2xl sm:text-3xl lg:text-[52px] uppercase text-center`}
          >
            Event Agenda
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {agendaItems.slice(0, visibleCount).map((item, index) => (
              <div
                key={index}
                className="group flex flex-col sm:flex-row sm:items-center border-b border-[#EBEBEB] gap-4 sm:gap-[20px] pb-4 transition-transform duration-500 ease-out hover:translate-x-3 sm:hover:translate-x-5"
              >
                <div className="sm:w-[380px]">
                  <p className={`${inter.variable} text-[#190C12] text-sm sm:text-[18px] font-semibold`}>
                    {item.time}
                  </p>
                  <p className={`${inter.variable} text-[#190C127D] text-xs sm:text-[16px]`}>
                    {item.duration}
                  </p>
                </div>
                <h3 className={`${inter.variable} text-[#190C12] text-lg sm:text-[24px]`}>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center  ">
            <button
              onClick={loadMore}
              className={`${inter.variable}  bg-light w-[220px] h-[50px] text-[#E91F23] border border-[#E91F23] rounded-[8px] text-[18px] font-semibold`}
            >
              Load more agenda
            </button>
          </div>
        </div>
      </section>

      <div className="mt-[150px] bg-[#FDE9E9] pt-[95px] sm:pb-[100px] sm:pr-[93.5px] sm:pl-[93.5px]  sm:h-[500px]">
        <section
          className="relative bottom-[200px] sm:bottom-[250px] max-w-full lg:w-[1253px] h-[721px] sm:h-[528px] bg-cover bg-center text-white py-10 px-6 rounded-[30px]"
          style={{ backgroundImage: "url('/agenda.png')" }}
        >
          <div className="flex flex-col gap-6 lg:gap-[32px] justify-center items-center h-[333px]">
            <h2 className={`${bebasNeue.className} mt-[100px] text-lg sm:text-xl lg:text-[31px] leading-[60px]`}>
              Counter Until The Big Event
            </h2>
            {timeLeft && (
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-[24px]">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div
                    key={unit}
                    className="flex flex-col items-center bg-white text-[#E91F23] rounded-lg p-4 sm:pt-[30px] sm:pb-[30px] w-[80px] sm:w-[118px]"
                  >
                    <p
                       className={`${bebasNeue.className} text-[52px] leading-[120%] font-normal text-[#E91F23]`}
                    >
                      {value}
                    </p>
                    <p
                     className={`${inter.className} text-[16px] leading-[150%] font-normal text-[#E91F23] `}
                    >
                      {unit}
                    </p>
                  </div>
                ))}
              </div>
            )}
            <div className="sm:flex justify-center items-center gap-[24px]  h-[181px] sm:w-[545px] px-[70px]">
              <button
               className={`${inter.variable} bg-light  h-[50px] w-[230px] sm:w-[161px] text-white  border border-white rounded-[8px] hover:shadow-md text-[18px] hover:text-[#E91F23] font-medium leading-[140%]`}
              >
                Join Event
              </button>
              <button
                className={`${inter.variable} bg-light   w-[230px] sm:w-[230px] h-[50px] text-[#E91F23]  border bg-[#FFF]  rounded-[8px] hover:shadow-md text-[16px] font-medium mt-4 sm:mt-0  leading-[140%]`}
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
