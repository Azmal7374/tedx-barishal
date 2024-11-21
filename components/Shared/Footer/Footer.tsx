/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */


import { bebasNeue, inter } from "@/app/font";

const Footer = () => {
  return (
    <footer className="bg-white pt-[60px]  sm:px-[30px] lg:px-[100px] ">
      {/* Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 sm:flex gap-8 lg:gap-[160px] items-start">
        {/* Logo Section */}
        <div className="flex flex-col  sm:items-start gap-[32px] sm:gap-[49px] flex-1">
          <div><img
            src="/Group 118.png"
            alt="TEDx University of Barishal"
            className="w-[91.022px] h-[86.469px]"
          />
          <span className={`${bebasNeue.className} text-[20px] text-[#111111] uppercase`}>
            TEDx UNIVERSITY OF BARISHAL
          </span></div>
          {/* Optional Buttons/Icons */}
          <div className="flex gap-2 ">
            {Array(3)
              .fill(0)
              .map((_, idx) => (
                <button
                  key={idx}
                  className="w-8 h-8 bg-[#FFF] border-[0.5px] rounded-[6px] border-[#E4E4E4] flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_272_5796)">
                      <path
                        d="M3 3L11.7997 15H15L6.20025 3H3Z"
                        fill="#7F7F7F"
                        stroke="#7F7F7F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 15L8.076 9.924M9.921 8.079L15 3"
                        stroke="#7F7F7F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_272_5796">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              ))}
          </div>
        </div>

        {/* Navigation Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-[50px] lg:gap-[149px] mt-10 sm:mt-0">
          {[
            { title: "Personal", links: ["Wallet", "Accounts", "Transfers", "Features", "Security"] },
            { title: "Businesses", links: ["Features", "Payments", "Transfers"] },
            { title: "Resources", links: ["Guides", "Docs"] },
            { title: "About Us", links: ["Blog", "Contact"] },
          ].map((section, index) => (
            <div key={index}>
              <h3 className={`${inter} mb-[19px] text-[#000000] font-medium`}>
                {section.title}
              </h3>
              <ul className={`${inter} space-y-2 text-[#00000080]`}>
                {section.links.map((link, idx) => (
                  <li key={idx}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Large Text Section */}
      <div className="relative mt-[50px] sm:mt-[20px] sm:text-center bottom-[16px]">
        <h1 className=" text-[62.258px]  md:text-[120px] lg:text-[223px] text-[#000000] tracking-[-3.735px]  md:tracking-[-13px] px-4 sm:px-0">
          TedxBarishal
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
