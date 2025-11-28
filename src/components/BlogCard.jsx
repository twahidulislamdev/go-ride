import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { GiGearStick } from "react-icons/gi";
import { PiSuitcaseSimpleFill } from "react-icons/pi";

const BlogCard = ({ car }) => {
  return (
    <>
      <div className="w-full relative">
        {/* IMAGE */}
        <div className="w-full h-[300px] lg:h-[350px] overflow-hidden rounded-3xl">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 lg:-bottom-6 bg-neutralColor w-[90%] shadow-lg rounded-xl p-5 flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-6">
          {/* Date part start */}
          <div className="flex justify-center m-auto px-5 py-2 bg-mainColor  rounded-xl  -mt-8">
            <p className="text-sm lg:text-base font-medium text-black">
              {car.date}
            </p>
          </div>
          {/* Date part end */}
          <div className="">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
