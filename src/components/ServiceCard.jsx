import React from "react";

const ServiceCard = ({ img, title, id }) => {
  return (
    <>
      <div className="relative bg-[#1c1c1c] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-300">
        {/* Image */}
        <img src={img} alt={title} className="w-full h-80 object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

        {/* Content */}
        <div className="absolute bottom-4 left-4 flex items-center gap-4">
          <div className="bg-[#121212] text-white text-lg font-semibold border border-yellow-500 rounded-full w-14 h-14 flex items-center justify-center">
            {id}
          </div>
          <h3 className="text-white text-xl font-bold">{title}</h3>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
