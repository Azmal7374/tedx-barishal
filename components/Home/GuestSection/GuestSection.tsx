/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
"use client";

import { bebasNeue, inter } from "@/app/layout";

const GuestsSection = () => {
  const guests = [
    {
      id: 1,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/guest.png",
    },
    {
      id: 2,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/guest.png", // Replace with actual image path
    },
    {
      id: 3,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/guest.png",
    },
    {
      id: 4,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/guest.png",
    },
    {
      id: 5,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/guest.png",
    },
    {
      id: 6,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/guest.png",
    },
    {
      id: 7,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/guest.png",
    },
    {
      id: 8,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/guest.png",
    },
    {
      id: 9,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/guest.png",
    },
  ];

  return (
    <section className="bg-black py-16 pt-[100px] pb-[80px] pr-[100px] pl-[100px] flex flex-col gap-[62px]">
      <h2
        className={`${bebasNeue.className} text-[38px]  md:text-[52px] leading-tight text-[#FFFFFF] text-center uppercase`}
      >
        Our Guests
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {guests.map((guest) => (
          <div
            key={guest.id}
            className="bg-gray-900 rounded-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={guest.image}
                alt={guest.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-red-600 p-4 text-white">
                <h3 className="font-semibold">{guest.name}</h3>
                <p className="text-sm">{guest.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button
          className={`${inter} md:w-[220px] h-[50px]  text-white  border border-white mt-3 ml-8 rounded-[8px]   text-[18px] font-[500px]`}
        >
          Join Event
        </button>
      </div>
    </section>
  );
};

export default GuestsSection;
