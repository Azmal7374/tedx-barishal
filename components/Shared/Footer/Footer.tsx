/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */


import { bebasNeue, inter } from "@/app/font";

const Footer = () => {
  return (
    <footer className="bg-white pt-[100px] pl-[100px] pr-[100px">
      {/* Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex  items-start gap-[160px]">
        {/* Logo Section */}
        <div className="md:flex flex-col items-center sm:items-start gap-4">
          <img
            src="/Group 118.png"
            alt="TEDx University of Barishal"
            className="w-[91.022px] h-[86.469px]"
          />
          <span className={`${bebasNeue} text-[20px] text-[#111111] uppercase`}>
            TEDx UNIVERSITY OF BARISHAL
          </span>
          {/* Optional Buttons/Icons */}
          <div className="flex gap-2 mt-[49px]">
            <button className="w-8 h-8 bg-[#FFF] border-[0.5px] rounded-[6px] border-[#E4E4E4] flex items-center justify-center ">
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

            <button className="w-8 h-8 bg-[#FFF] border-[0.5px] rounded-[6px] border-[#E4E4E4] flex items-center justify-center ">
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

            <button className="w-8 h-8 bg-[#FFF] border-[0.5px] rounded-[6px] border-[#E4E4E4] flex items-center justify-center ">
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
          </div>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-wrap gap-[149px]">
          <div>
            <h3 className={`${inter} mb-[19px] text-[#000000] font-[500px]`}>
              Personal
            </h3>
            <ul className={`${inter}  space-y-2 text-[#00000080] `}>
              <li>Wallet</li>
              <li>Accounts</li>
              <li>Transfers</li>
              <li>Features</li>
              <li>Security</li>
            </ul>
          </div>
          <div>
            <h3 className={`${inter} mb-[19px] text-[#000000] font-[500px]`}>
              Businesses
            </h3>
            <ul className={`${inter}  space-y-2 text-[#00000080] `}>
              <li>Features</li>
              <li>Payments</li>
              <li>Transfers</li>
            </ul>
          </div>
          <div>
            <h3 className={`${inter} mb-[19px] text-[#000000] font-[500px]`}>
              Resources
            </h3>
            <ul className={`${inter}  space-y-2 text-[#00000080] `}>
              <li>Guides</li>
              <li>Docs</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-black mb-4">About us</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="">
        <h1 className={`text-[223px] text-[#000000]`}>TedxBarishal</h1>
      </div>
    </footer>
  );
};

export default Footer;
