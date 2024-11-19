/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
"use cilent"

import { bebasNeue, inter } from "@/app/font";



// components/BrowseTalksSection.js
const BrowseTalksSection = () => {
    // Data for talks - replace these with real data if available
    const talks = [
      {
        id: 1,
        image: "/image 27.png", // Replace with actual image path
        title: "Can robots make us more human? | Lisa Leong",
        year: "2017",
        categories: "Behaviour • Science",
      },
      {
        id: 2,
        image: "/image 28.png",
        title: "Can robots make us more human? | Lisa Leong",
        year: "2017",
        categories: "Behaviour • Science",
      },
      {
        id: 3,
        image: "/image 30.png",
        title: "Can robots make us more human? | Lisa Leong",
        year: "2017",
        categories: "Behaviour • Science",
      },
    ];
  
    return (
      <section className="p-[100px]   bg-[#F5F5F5]">
        <h2 className={`${bebasNeue.className} text-[#111111] text-[52px] uppercase font-[400]`}>Browse Talks</h2>
        
        <div className="grid   sm:grid-cols-2 lg:grid-cols-3 mt-[42px] gap-[24px]">
          {talks.map((talk) => (
            <div
              key={talk.id}
              className=" rounded-lg "
            >
              <img
                src={talk.image}
                alt={talk.title}
                className="w-full h-48 md:h-64 object-cover overflow-hidden transition-transform transform hover:scale-105 rounded-2xl"
              />
              <div className="">
                <h3  className={`${inter.className} mt-[10px] text-base text-[16px] md:text-[18px] text-[#111111] font-[400px]`}>{talk.title} </h3>
                <p className={`${inter.className} mt-[10px] text-base text-[16px]   text-[#111111] font-[400px]`}>{talk.year} {talk.categories} {talk.categories}</p>
                 
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default BrowseTalksSection;
  