import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";
import { GiGearStick } from "react-icons/gi";
import { PiSuitcaseSimpleFill } from "react-icons/pi";

const ShopCar = ({ car }) => {
  return (
    <>
      <div className="w-full lg:w-[48%] h-[500px] bg-neutralColor rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition ">
        {/* Image */}
        <img
          src={car.image}
          alt={car.name}
          className="rounded-t-xl w-full h-[230px] object-cover"
        />

        {/* Title */}
        <h3 className="text-white text-2xl font-semibold mt-3 px-3">
          {car.name}
        </h3>

        {/* Features */}
        <div className="mt-3 space-y-3 px-3">
          {/* Doors */}
          <div className="flex items-center justify-between text-white/80">
            <div className="flex items-center gap-2">
              <GiCarDoor className="text-[#e9b04f]" />
              <p>Doors</p>
            </div>
            <span>{car.doors}</span>
          </div>

          {/* Passengers */}
          <div className="flex items-center justify-between text-white/80">
            <div className="flex items-center gap-2">
              <FaUserFriends className="text-[#e9b04f]" />
              <p>Passengers</p>
            </div>
            <span>{car.passengers}</span>
          </div>

          {/* Transmission */}
          <div className="flex items-center justify-between text-white/80">
            <div className="flex items-center gap-2">
              <GiGearStick className="text-[#e9b04f]" />
              <p>Transmission</p>
            </div>
            <span>{car.transmission}</span>
          </div>

          {/* Luggage */}
          <div className="flex items-center justify-between text-white/80">
            <div className="flex items-center gap-2">
              <PiSuitcaseSimpleFill className="text-[#e9b04f]" />
              <p>Luggage</p>
            </div>
            <span>{car.luggage}</span>
          </div>
        </div>

        {/* Price + Button */}
        <div className="mt-5 flex justify-between items-center px-3">
          <h3 className="text-[#e9b04f] text-2xl font-bold">
            ${car.price}{" "}
            <span className="text-white text-lg font-medium">/ day</span>
          </h3>

          <button className="bg-[#e9b04f] px-8 py-3 rounded-full text-black font-medium hover:bg-[#d49a43] transition hover:cursor-pointer">
            Details
          </button>
        </div>
      </div>
    </>
  );
};

export default ShopCar;
