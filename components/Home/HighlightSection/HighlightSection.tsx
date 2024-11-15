/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
"use client"
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
    ];
  
    return (
      <section className="bg-[#FFFFFF] flex flex-col md:flex-row items-start p-8 md:p-16 space-y-8 md:space-y-0 md:space-x-12">
        {/* Left side heading */}
        <div className="md:w-1/3">
          <h2 className="text-2xl md:text-3xl font-bold">
            Something You Don’t Want to Miss
          </h2>
        </div>
  
        {/* Right side content */}
        <div className="md:w-2/3 space-y-8">
          {highlights.map((highlight) => (
            <div key={highlight.id} className="flex items-start space-x-6">
              <img
                src={highlight.image}
                alt={highlight.title}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default HighlightsSection;
  