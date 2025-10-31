import React from "react";

const Car = ({ CarTitle, CarPrice, CarImage }) => {
  return (
    <div className="w-full h-auto bg-[#222222] rounded-lg shadow-md hover:shadow-xl transition">
      <div className="overflow-hidden rounded-lg">
        <img
          src={CarImage}
          alt={CarTitle}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
      <div className="pt-5 pb-10 px-5">
        <h3 className="text-start text-lg font-semibold text-white">{CarTitle}</h3>
        <p className="text-start text-white pt-2">{CarPrice}</p>
      </div>
    </div>
  );
};

export default Car;
