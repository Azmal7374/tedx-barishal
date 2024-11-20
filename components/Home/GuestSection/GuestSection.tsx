/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
"use client";

import { bebasNeue, inter } from "@/app/font";

const GuestsSection = () => {
  const guests = [
    {
      id: 1,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/card.png",
    },
    {
      id: 2,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/card.png", // Replace with actual image path
    },
    {
      id: 3,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/card.png",
    },
    {
      id: 4,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/card.png",
    },
    {
      id: 5,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/card.png",
    },
    {
      id: 6,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/card.png",
    },
    {
      id: 7,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/card.png",
    },
    {
      id: 8,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/card.png",
    },
    {
      id: 9,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/card.png",
    },
  ];

  return (
    <section className="bg-black p-[100px] flex flex-col gap-[62px]">
      <h2
        className={`${bebasNeue.className} text-[38px]  md:text-[52px] leading-[120%] text-[#FFFFFF] text-center uppercase`}
      >
        Our Guests
      </h2>

      <div className="grid grid-cols-3 gap-[20px] ">
        {guests.map((guest) => (
          <div className="w-[400px] h-[501px]" key={guest.id}>
            <div className="">
              <img
                src={guest.image}
                alt={guest.name}
                className="w-full h-full object-cover"
              />
              <div className="flex flex-col gap-[5px] bg-red-600 p-4 text-white group relative bottom-[138px] w-[400px] h-[138px]">
                <p
                  className={`${inter.variable} font-[500] text-[12px] group-hover:transform group-hover:-translate-y-2 transition-transform duration-500 ease-in-out leading-none tracking-[-0.6px] `}
                >
                  Meet Our Team
                </p>
                <div className="flex flex-col items-start">
                  {guest.name.split(" ").map((part, index) => (
                    <h3
                      key={index}
                      className={`${bebasNeue.className} font-[400] text-[32px] group-hover:transform group-hover:-translate-y-2 transition-transform duration-500 ease-in-out leading-[80%] tracking-[-0.32px]`}
                    >
                      {part}
                    </h3>
                  ))}
                </div>

                <p
                  className={`${inter.variable} font-[500] text-[14px] group-hover:transform group-hover:-translate-y-2 transition-transform duration-500 ease-in-out leading-none text-[#FFFFFF]`}
                >
                  {guest.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center  flex-col items-center ">
        <button
          className={`${inter} md:w-[174px] h-[50px]  text-[#FFFFFF]  border border-[#FFFFFF] py-[9px] px-[15px] rounded-[8px]   text-[17px] font-[400px] leading-[121%]`}
        >
          Join Event
        </button>
      </div>
    </section>
  );
};

export default GuestsSection;
