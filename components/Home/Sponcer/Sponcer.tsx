/* eslint-disable prettier/prettier */
// components/SponsorBanner.js
// components/SponsorBanner.js
import { bebasNeue } from "@/app/font";

const SponsorBanner = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="relative flex items-center gap-4 whitespace-nowrap p-2 md:p-3">
        {/* Marquee Container */}
        <div
          className={`${bebasNeue.className} flex animate-marquee leading-[32px]`}
        >
          {/* Original Content */}
          <SponsorItems />
          {/* Duplicate Content for Seamless Animation */}
          <SponsorItems />
          <SponsorItems />
        </div>
      </div>
    </div>
  );
};

// Sponsor Items to repeat
const SponsorItems = () => (
  <>
    <span className="mx-2 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-normal text-[#E91F23]">
      WE ARE LOOKING FOR SPONSOR
    </span>
    <span className="mx-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#E91F23]">
      &#8226;
    </span>

    <span className="mx-2 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-normal text-[#E91F23]">
      WE ARE LOOKING FOR SPONSOR
    </span>
    <span className="mx-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#E91F23]">
      &#8226;
    </span>
    <span className="mx-2 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-normal text-[#E91F23]">
      WE ARE LOOKING FOR SPONSOR
    </span>
    <span className="mx-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#E91F23]">
      &#8226;
    </span>
    <span className="mx-2 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-normal text-[#E91F23]">
      WE ARE LOOKING FOR SPONSOR
    </span>
    <span className="mx-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#E91F23]">
      &#8226;
    </span>
  </>
);

export default SponsorBanner;
