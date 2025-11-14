import React from "react";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { TbAutomaticGearboxFilled } from "react-icons/tb";
import { BsFuelPumpFill } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa6";

const HomeCar = ({
  CarTitle,
  CarPrice,
  CarImage,
  CarType,
  CarSeats,
  GearboxType,
  FuelType,
}) => {
  return (
    <div className="w-full h-[430px] rounded-lg shadow-md hover:shadow-xl transition border-2 border-neutral-800">
      <div className="overflow-hidden rounded-lg">
        <img
          src={CarImage}
          alt={CarTitle}
          className="w-full h-[250px] rounded-lg object-cover"
        />
      </div>
      <div className="pt-5 pb-5 px-5 bg-[#222222]  rounded-lg">
        <h3 className="text-start text-2xl font-semibold text-white">
          {CarTitle}
        </h3>
        <div className="flex justify-between items-center pt-3">
          <div className="flex  items-center gap-x-1">
            <FaCarSide className="text-xl text-mainColor" />
            <span className="text-white text-lg">{CarType}</span>
          </div>
          <div className="flex  items-center gap-x-1">
            <MdAirlineSeatReclineNormal className="text-xl text-mainColor" />
            <span className="text-white text-lg">{CarSeats}</span>
          </div>
          <div className="flex  items-center gap-x-1">
            <TbAutomaticGearboxFilled className="text-xl text-mainColor" />
            <span className="text-white text-lg">{GearboxType}</span>
          </div>
          <div className="flex  items-center gap-x-1">
            <BsFuelPumpFill className="text-md text-mainColor" />
            <span className="text-white text-lg">{FuelType}</span>
          </div>
        </div>
        <div className="flex justify-between items-center pt-5">
          <p className="text-2xl font-medium text-start text-mainColor pt-2">
            ${CarPrice}{" "}
            <span className="text-white text-lg font-medium pl-1">/ day</span>
          </p>
          <button className="px-2.5 py-2 bg-mainColor text-lg font-medium text-black rounded-xl hover:bg-white  transition-all duration-300 hover:cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCar;
