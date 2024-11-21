/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
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
    <section className="bg-[#FFFFFF] flex flex-col lg:flex-row items-start  py-[60px] px-[16px] sm:px-[100px] sm:py-[100px]  gap-[53px] sm:gap-[20px]">
      {/* Left side heading */}
      <div className="lg:w-1/3 lg:sticky top-20 w-full mb-6 md:mb-0 text-center">
        <h2
          className={`${bebasNeue.className} text-[#111111]  text-[38px] sm:text-[52px] uppercase leading-[120%]`}
        >
          Something You Don’t Want to Miss
        </h2>
      </div>

      {/* Right side content */}
      <div className="flex flex-col sm:gap-[41px] w-full md:w-[710px] pb-[30px]">
        {highlights.map((highlight) => (
          <div key={highlight.id} className="flex flex-col  gap-[24px] sm:gap-[32px] mt-4 sm:mt-0">
            <div className="lg:flex items-start md:space-x-6 pb-4 border-b border-[#CDCDCD]">
              <img
                src={highlight.image}
                alt={highlight.title}
                className="w-[148px] h-[148px] sm:w-[166px] sm:h-[166px] sm:mx-auto lg:mx-0 rounded-[100px] object-cover transition-transform transform hover:scale-105"
              />
              <div>
                <h3
                  className={`${inter.variable}  text-[20px] md:text-[24px] text-[#111111] font-semibold leading-[140%]`}
                >
                  {highlight.title}
                </h3>
                <p
                  className={`${inter.variable} mt-[10px]   text-[16px] md:text-[18px] text-[#404040] font-normal leading-[150%]`}
                >
                  {highlight.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
