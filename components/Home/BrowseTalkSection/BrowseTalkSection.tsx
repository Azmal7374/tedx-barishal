/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
"use cilent"


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
      <section className="p-8 md:p-16 bg-[#F5F5F5]">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Browse Talks</h2>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {talks.map((talk) => (
            <div
              key={talk.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={talk.image}
                alt={talk.title}
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{talk.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{talk.year}</p>
                <p className="text-sm text-gray-500">{talk.categories}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default BrowseTalksSection;
  