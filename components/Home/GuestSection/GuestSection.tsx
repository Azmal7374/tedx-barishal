/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
"use client"

const GuestsSection = () => {
    const guests = [
      {
        id: 1,
        name: "Mohammad Yousuf",
        title: "Senior Product Designer, Meta Digital",
        image: "/guest2.png", 
      },
      {
        id: 1,
        name: "Mohammad Yousuf",
        title: "Senior Product Designer, Meta Digital",
        image: "/guest3.png", // Replace with actual image path
      },
      {
        id: 1,
        name: "Mohammad Yousuf",
        title: "Senior Product Designer, Meta Digital",
        image: "/guest1.png", 
      },
    ];
  
    return (
      <section className="bg-black py-16 px-8">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-12">
          Our Guests
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {guests.map((guest) => (
            <div key={guest.id} className="bg-gray-900 rounded-lg overflow-hidden">
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
          <button className="px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-700">
            Join Event
          </button>
        </div>
      </section>
    );
  };
  
  export default GuestsSection;
  