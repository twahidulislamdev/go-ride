import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { GiGearStick } from "react-icons/gi";
import { PiSuitcaseSimpleFill } from "react-icons/pi";

const NevigateByCategoryCard = ({ car }) => {
  return (
    <div className="w-full relative">
      {/* IMAGE */}
      <div className="w-full h-[300px] lg:h-[350px] overflow-hidden rounded-3xl">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* BOTTOM CARD (OVERLAY) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -bottom-10 lg:bottom-3 
                      bg-neutralColor w-[90%] shadow-lg rounded-3xl 
                      p-5 flex flex-col lg:flex-row justify-between 
                      items-center gap-3 lg:gap-6"
      >
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-center lg:text-start text-white text-2xl font-semibold">{car.name}</h2>

          <div className="flex items-center gap-6 mt-3 text-white/70 text-[15px]">
            <div className="flex items-center gap-2">
              <FaUserFriends className="text-mainColor" />
              <span>{car.passengers} Seats</span>
            </div>

            <div className="flex items-center gap-2">
              <GiGearStick className="text-mainColor" />
              <span>{car.transmission}</span>
            </div>

            <div className="flex items-center gap-2">
              <PiSuitcaseSimpleFill className="text-mainColor" />
              <span>{car.luggage} Bags</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-row-reverse lg:flex lg:flex-row items-center gap-5">
          <button className="bg-mainColor text-black px-6 py-2 lg:py-3 rounded-full font-medium hover:bg-[#d29a3a] transition hover:cursor-pointer">
            Details
          </button>

          <div className="text-right flex  items-center lg:flex-col lg:items-end space-x-1.5 lg:space-x-0">
            <h3 className="text-mainColor text-3xl font-bold">${car.price}</h3>
            <p className="text-white/70 text-sm">/day</p>
          </div>
        </div>
      </div>

      {/* SPACING FIX */}
      <div className="h-15"></div>
    </div>
  );
};

export default NevigateByCategoryCard;
