import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";

const NevigateByCategoryCard = ({ img, title, price }) => {
  return (
    <>
      <div
        className="relative  rounded-2xl overflow-hidden group shadow-xl 
                 hover:shadow-2xl lg:hover:-translate-y-1 transition-all duration-500"
      >
        {/* Image */}
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transform 
                   lg:group-hover:scale-105 transition-transform duration-700"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                      lg:group-hover:from-black/90 transition-all duration-500"
        ></div>

        {/* Bottom Content */}
        <div className="absolute bottom-5 left-5 flex items-center gap-4">
          <div
            className="relative group bg-[#121212] border border-yellow-500 text-white 
                rounded-full w-18 h-18 flex flex-col items-center justify-center
                shadow-lg transition-all duration-500 overflow-hidden"
          >
            {/* Price */}
            <h3 className="text-mainColor text-lg font-semibold leading-none z-10">
              ${price}
            </h3>

            {/* Day text */}
            <p className="text-xs text-gray-300 mt-[3px] leading-none z-10">
              Day
            </p>

            {/* Yellow background + Arrow */}
            <div
              className="absolute inset-0 bg-mainColor opacity-0 
               group-hover:opacity-100 transition-opacity duration-500
               flex items-center justify-center z-20"
            >
              <HiArrowUpRight className="text-black text-2xl " />
            </div>
          </div>

          {/* Title */}
          <h6 className="text-white text-2xl font-bold drop-shadow-lg">
            {title}
          </h6>
        </div>
      </div>
    </>
  );
};

export default NevigateByCategoryCard;

//   <span
//               className="absolute inset-0 rounded-full bg-yellow-500/10 blur-xl opacity-0
//                lg:group-hover:opacity-100 transition-opacity duration-500"
//             ></span>
