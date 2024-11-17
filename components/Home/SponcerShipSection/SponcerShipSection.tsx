/* eslint-disable prettier/prettier */
"use client"

const SponsorshipSection = () => {
    const sponsors = [
      {
        title: "Title Sponsor",
        benefits: [
          "The event will be featured by the title sponsor.",
          "A cursor displaying the sponsor’s logo in a sticky manner on the event website.",
          "Online publicity, including our email list, Facebook group, and event.",
          "Logo of the sponsor on t-shirts & other print materials.",
          "Banners from the sponsors will hang all around the venue.",
          "Two minutes video about your company for event page and stage display.",
          "Ten minutes slot on stage.",
          "We will do on stage publicity.",
        ],
      },
      {
        title: "Platinum Sponsor",
        benefits: [
          "Online publicity, including our email list, Facebook group, and event.",
          "Banners from the sponsors will hang all around the venue.",
          "Logo of the sponsors on the print materials like notebook, stickers, etc.",
          "We will do on stage publicity.",
          "Five minutes slot on stage.",
          "Free 2 Tickets.",
        ],
      },
      {
        title: "Co-Sponsor",
        benefits: [
          "Online publicity, including our email list, Facebook group, and event.",
          "Banners from the sponsors will hang all around the venue.",
          "Logo of the sponsors on the print materials like notebook, stickers, etc.",
          "Free 1 Ticket.",
        ],
      },
    ];
  
    return (
      <section className=" bg-[#F5F5F5]  p-8 md:p-16">
        <div className="text-center mb-12">
          <p className="text-gray-500 uppercase text-sm">Meet our</p>
          <h2 className="text-2xl md:text-4xl font-bold">Be Our Sponsor</h2>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="border-2 border-red-500 rounded-lg p-6 flex flex-col justify-between"
            >
              <h3 className="text-lg md:text-xl font-bold text-center mb-4">
                {sponsor.title}
              </h3>
              <hr className="border-t-2 border-gray-300 mb-4" />
              <ul className="text-gray-700 space-y-2 text-sm md:text-base">
                {sponsor.benefits.map((benefit, idx) => (
                  <li key={idx} className="list-disc list-inside">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
  
        <div className="text-center mt-12">
          <button className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition">
            Partner with us
          </button>
        </div>
      </section>
    );
  };
  
  export default SponsorshipSection;
  