/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
"use client"



import { useState } from "react";

const EventAgenda = () => {
  const agendaItems = [
    { time: "7:00 AM – 7:45 AM", duration: "45 Mins", title: "Gate Opening" },
    {
      time: "7:00 AM – 7:45 AM",
      duration: "45 Mins",
      title: "Gathering, Breakfast, Getting Ready",
    },
    {
      time: "7:00 AM – 7:45 AM",
      duration: "45 Mins",
      title: "Greetings and Get to know TEDx Barishal",
    },
    {
      time: "7:00 AM – 7:45 AM",
      duration: "45 Mins",
      title: "The Learning For Creatives (First Part)",
    },
    { time: "7:00 AM – 7:45 AM", duration: "45 Mins", title: "Coffee & Networking" },
    { time: "7:00 AM – 7:45 AM", duration: "45 Mins", title: "Jumma and Lunch Break" },
    { time: "7:00 AM – 7:45 AM", duration: "45 Mins", title: "Interactive Session" },
    {
      time: "7:00 AM – 7:45 AM",
      duration: "45 Mins",
      title: "The Learning For Creatives (Final Part) + Panel Discussion (Design)",
    },
    {
      time: "7:00 AM – 7:45 AM",
      duration: "45 Mins",
      title: "Crests, Awards, Raffle Draw, Conclusion Photo Sessions",
    },
    { time: "7:00 AM – 7:45 AM", duration: "45 Mins", title: "Al Quran Recitation" },
  ];

  const [visibleCount, setVisibleCount] = useState(5);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  return (
    <section className="bg-[#FFFFFF] p-8 md:p-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold">Event Agenda</h2>
      </div>

      <div className="space-y-6">
        {agendaItems.slice(0, visibleCount).map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center justify-between border-b pb-4"
          >
            <div>
              <p className="text-sm md:text-base text-gray-500">{item.time}</p>
              <p className="text-sm md:text-base text-gray-400">{item.duration}</p>
            </div>
            <h3 className="text-base md:text-lg font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>

      {visibleCount < agendaItems.length && (
        <div className="text-center mt-8">
          <button
            onClick={loadMore}
            className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition"
          >
            Load more agenda
          </button>
        </div>
      )}
    </section>
  );
};

export default EventAgenda;
