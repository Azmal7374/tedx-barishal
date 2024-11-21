/* eslint-disable react/no-unknown-property */
/* eslint-disable import/order */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
"use client";

import { bebasNeue, inter } from "@/app/font";

const EventSection = () => {
  return (
    <section
      className="bg-[#F5F5F5] relative bg-cover h-[720px] bg-center flex flex-col sm:items-center sm:justify-center text-white px-[16px] py-[60px] sm:px-[100px] sm:py-[100px]"
      style={{
        backgroundImage: "url('/join.png')",
        height: "100vh", // Ensures proper height responsiveness
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl sm:mx-auto sm:p-12 md:pt[100px]  ">
        <h2
          className={`${bebasNeue.className} text-[28px] sm:text-[36px] md:text-[52px] leading-[62.4px] text-[#FFFFFF] uppercase font-normal sm:text-center`}
        >
          JOIN TEDx BARISHAL 2025
        </h2>
        <p
          className={`${inter.variable} text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed text-whiteleading-[27px] text-[#FFFFFF]  font-normal sm:text-center mt-4`}
        >
          Join TEDx Barishal to meet amazing ideas and people to grow your
          thoughts and evolve yourself with unique insights.
        </p>

        {/* Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          {/* Card 1 */}
          <div className="bg-white p-4 sm:p-6 rounded-[14px] shadow-lg flex flex-col sm:gap-[20px] md:gap-[55px]  items-center text-start md:pt-[29px] md:pb-[29px] md:pl-[27px] md:pr-[27px]">
            <svg
            className="text-[#141B34]  bg-[#F5F5F5] py-[10px] w-[52px] h-[52px] border-[1px] border-[#F5F5F5]  rounded-[12px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 33 32"
              fill="none"
            >
              <path
                d="M18.6569 28.4894C18.0788 29.0307 17.3059 29.3334 16.5015 29.3334C15.6971 29.3334 14.9243 29.0307 14.346 28.4894C9.05069 23.5014 1.95435 17.9293 5.41503 9.83963C7.28617 5.46563 11.7778 2.66675 16.5015 2.66675C21.2252 2.66675 25.7168 5.46563 27.588 9.83963C31.0443 17.9191 23.9653 23.5186 18.6569 28.4894Z"
                stroke="#141B34"
                strokeWidth="2.5"
              />
              <path
                d="M21.1673 14.6667C21.1673 17.244 19.078 19.3333 16.5007 19.3333C13.9233 19.3333 11.834 17.244 11.834 14.6667C11.834 12.0893 13.9233 10 16.5007 10C19.078 10 21.1673 12.0893 21.1673 14.6667Z"
                stroke="#141B34"
                strokeWidth="2.5"
              />
            </svg>
            <p
              className={`${inter.variable} text-[14px] sm:text-[16px] md:text-[18px] text-[#222222] font-medium mt-4`}
            >
              IT Vaban, BU
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 sm:p-6 rounded-[14px] shadow-lg flex flex-col sm:gap-[20px] md:gap-[55px]  items-center text-start md:pt-[29px] md:pb-[29px] md:pl-[27px] md:pr-[27px]">
            <svg
               className="text-[#141B34]  bg-[#F5F5F5] py-[10px] w-[52px] h-[52px] border-[1px] border-[#F5F5F5]  rounded-[12px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 33 32"
              fill="none"
            >
              <path
                d="M24.5 2.66675V5.33341M8.5 2.66675V5.33341"
                stroke="#262020"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.4933 17.3333H16.5053M16.4933 22.6666H16.5053M21.8207 17.3333H21.8327M11.166 17.3333H11.178M11.166 22.6666H11.178"
                stroke="#262020"
                strokeWidth="3.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.16602 10.6667H27.8327"
                stroke="#262020"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.83398 16.3243C3.83398 10.5146 3.83398 7.60971 5.50348 5.80485C7.17297 4 9.85997 4 15.234 4H17.7673C23.1413 4 25.8284 4 27.4978 5.80485C29.1673 7.60971 29.1673 10.5146 29.1673 16.3243V17.0091C29.1673 22.8188 29.1673 25.7236 27.4978 27.5285C25.8284 29.3333 23.1413 29.3333 17.7673 29.3333H15.234C9.85997 29.3333 7.17297 29.3333 5.50348 27.5285C3.83398 25.7236 3.83398 22.8188 3.83398 17.0091V16.3243Z"
                stroke="#262020"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p
              className={`${inter.variable} text-[14px] sm:text-[16px] md:text-[18px] text-[#222222] font-medium mt-4`}
            >
              1<sup>st</sup> January 2025
            </p>
          </div>

          {/* Card 3 */}
          <div  className="bg-white p-4 sm:p-6 rounded-[14px] shadow-lg flex flex-col sm:gap-[20px] md:gap-[55px]  items-center text-start md:pt-[29px] md:pb-[29px] md:pl-[27px] md:pr-[27px]">
            <svg
              className="text-[#141B34]  bg-[#F5F5F5] py-[10px] w-[52px] h-[52px] border-[1px] border-[#F5F5F5]  rounded-[12px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 33 32"
              fill="none"
            >
              <path
                d="M16.4993 29.3334C23.8631 29.3334 29.8327 23.3639 29.8327 16.0001C29.8327 8.63628 23.8631 2.66675 16.4993 2.66675C9.13555 2.66675 3.16602 8.63628 3.16602 16.0001C3.16602 23.3639 9.13555 29.3334 16.4993 29.3334Z"
                stroke="#141B34"
                strokeWidth="2.5"
              />
              <path
                d="M16.5 10.6667V16.0001L19.1667 18.6667"
                stroke="#141B34"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p
              className={`${inter.variable} text-[14px] sm:text-[16px] md:text-[18px] text-[#222222] font-medium mt-4`}
            >
              08:30 AM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
