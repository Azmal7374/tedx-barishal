/* eslint-disable prettier/prettier */
// components/SponsorBanner.js
// components/SponsorBanner.js
const SponsorBanner = () => {
  return (
    <div className="w-full bg-[#FFFFFF] overflow-hidden">
      <div className="py-4 flex items-center">
        {/* Container for infinite scrolling */}
        <div className="flex animate-marquee whitespace-nowrap text-red-600 font-bold text-lg items-center">
          {/* Original Content */}
          <span className="mx-2 text-[20px] font-normal">WE ARE LOOKING FOR SPONSOR</span>
          <span className="mx-2 text-2xl">&#8226;</span>
          <span className="mx-2 text-[20px] font-normal">WE ARE LOOKING FOR SPONSOR</span>
          <span className="mx-2 text-2xl">&#8226;</span>
          <span className="mx-2 text-[20px] font-normal">WE ARE LOOKING FOR SPONSOR</span>
          <span className="mx-2 text-2xl">&#8226;</span>
          <span className="mx-2 text-[20px] font-normal">WE ARE LOOKING FOR SPONSOR</span>

          {/* Duplicated Content for Infinite Loop */}
          <span className="mx-2 text-[20px] font-normal">WE ARE LOOKING FOR SPONSOR</span>
          <span className="mx-2 text-2xl">&#8226;</span>
          <span className="mx-2 text-[20px] font-normal">WE ARE LOOKING FOR SPONSOR</span>
          <span className="mx-2 text-2xl">&#8226;</span>
          <span className="mx-2 text-[20px] font-normal">WE ARE LOOKING FOR SPONSOR</span>
          <span className="mx-2 text-2xl">&#8226;</span>
          <span className="mx-2 text-[20px] font-normal">WE ARE LOOKING FOR SPONSOR</span>
        </div>
      </div>
    </div>
  );
};

export default SponsorBanner;
