/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
"use client";

import { bebasNeue, inter } from "@/app/font";


const HighlightsSection = () => {
  const highlights = [
    {
      id: 1,
      image: "/guest2.png",
      title: "Join with Diverse Ideas",
      description:
        "Embrace the power of varied perspectives to fuel creativity and innovation. Discover fresh ideas that resonate with unique insights, unlocking new horizons for growth and learning.",
    },
    {
      id: 2,
      image: "/guest3.png",
      title: "Power Up with Networking",
      description:
        "Unlock a world of opportunities through meaningful connections. Networking moments bring inspiring people together, building a community of visionaries driving innovation for true growth and impact.",
    },
    {
      id: 3,
      image: "/guest1.png",
      title: "Spark Growth with Exchange Insights",
      description:
        "Dive into a dynamic flow of ideas, a treasure trove that fuels innovation. Exchanging insights with like-minded minds unlocks new synergies, empowering you to tackle new challenges.",
    },
    {
      id: 4,
      image: "/guest3.png",
      title: "Power Up with Networking",
      description:
        "Unlock a world of opportunities through meaningful connections. Networking moments bring inspiring people together, building a community of visionaries driving innovation for true growth and impact.",
    },
    {
      id: 5,
      image: "/guest1.png",
      title: "Spark Growth with Exchange Insights",
      description:
        "Dive into a dynamic flow of ideas, a treasure trove that fuels innovation. Exchanging insights with like-minded minds unlocks new synergies, empowering you to tackle new challenges.",
    },
    {
      id: 6,
      image: "/guest2.png",
      title: "Join with Diverse Ideas",
      description:
        "Embrace the power of varied perspectives to fuel creativity and innovation. Discover fresh ideas that resonate with unique insights, unlocking new horizons for growth and learning.",
    },
  ];

  return (
    <section className="bg-[#FFFFFF] flex flex-col md:flex-row items-start p-[100px]">
    {/* Left side heading */}
    <div className="md:w-1/3 sticky top-20">
      <h2 className={`${bebasNeue.className} text-[#111111] text-[52px] uppercase leading-[1.2]`}>
        Something You Don’t Want to Miss
      </h2>
    </div>
  
    {/* Right side content */}
    <div className="w-[710px] flex flex-col gap-[41px]">
      {highlights.map((highlight) => (
        <div
          key={highlight.id}
          className="flex items-start space-x-6 pb-4 border-b border-[#EBEBEB]"
        >
          <img
            src={highlight.image}
            alt={highlight.title}
            className="w-[166px] h-[166px] rounded-[100px] object-cover transition-transform transform hover:scale-105"
          />
          <div>
            <h3
              className={`${inter.className} text-base text-[16px] md:text-[24px] text-[#111111] font-semibold`}
            >
              {highlight.title}
            </h3>
            <p
              className={`${inter.className} mt-[10px] text-base text-[16px] md:text-[18px] text-[#404040] font-normal`}
            >
              {highlight.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
  
  );
};

export default HighlightsSection;
