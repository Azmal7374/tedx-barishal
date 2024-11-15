/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
"use client"





// components/EventSection.js
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';

const EventSection = () => {
  return (
    <section
      className="bg-[#F5F5F5] h-[720px]  relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/join.png')"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">JOIN TEDx BARISHAL 2025</h2>
        <p className="text-lg md:text-xl mb-8">
          Join TEDx Barishal to meet with amazing ideas and people to grow your
          thoughts and grow yourself with specials.
        </p>

        {/* Information Cards */}
        <div className="w-[748px] h-[187px] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white text-black p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaMapMarkerAlt size={30} className="text-red-600 mb-2" />
            <p className="font-semibold">IT Vaban, BU</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaCalendarAlt size={30} className="text-red-600 mb-2" />
            <p className="font-semibold">1<sup>st</sup> January 2025</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaClock size={30} className="text-red-600 mb-2" />
            <p className="font-semibold">08:30 AM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;











// const JoinUsSection = () => { 
//     return (
//         <section className="bg-[#F5F5F5] bg-cover bg-center bg-no-repeat h-[720px]" style={{ backgroundImage: `url('/join.png')` }}>
//             <div className="container mx-auto px-4 py-16 text-center mt-[100px]">
//                 <h2 className="text-3xl font-bold mb-8 ">JOIN TEDx BARISHAL 2025</h2>
//                 <p className="text-lg mb-12">Join TEDx Barishal to meet with amazing ideas and people to grow your <br /> thoughts and grow yourself with specials.</p>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] justify-center items-center w-[748px] h-[187px]  mt-[337px] mx-auto">
//                     <div className="bg-[#FFFFFF] border-[1px] border-[#DEDEDE] rounded-[8px] shadow-md w-[236px] h-[187px] pr-[27px] pl-[27px] pt-[29px] pb-[29px]">
//                         <div className="">
//                             <svg className="w-6 h-6 text-[#141B34]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243a2 2 0 000 2.828l4.243 4.243a2 2 0 002.828 0l4.243-4.243a2 2 0 000-2.828z" /></svg>
//                         <p className="text-[#222222] mt-[80px]">IT Vaban, BU</p>
//                         </div>
//                     </div>

//                     <div className="bg-white p-6 rounded-lg shadow-md  w-[236px] h-[187px]">
//                         <div className="flex items-center mb-4">
//                             <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243a2 2 0 000 2.828l4.243 4.243a2 2 0 002.828 0l4.243-4.243a2 2 0 000-2.828z" /></svg>
                           
//                         </div>
//                         <p className="text-[#222222]">IT Vaban, BU</p>
//                     </div>


//                     <div className="bg-white p-6 rounded-lg shadow-md  w-[236px] h-[187px]">
//                         <div className="flex items-center mb-4">
//                             <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243a2 2 0 000 2.828l4.243 4.243a2 2 0 002.828 0l4.243-4.243a2 2 0 000-2.828z" /></svg>
//                         </div>
//                         <p className="text-[#222222]">IT Vaban, BU</p>
//                     </div>


//                     {/* ... other cards ... */}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default JoinUsSection;