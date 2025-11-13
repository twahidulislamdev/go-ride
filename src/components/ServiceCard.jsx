import React from "react";

const ServiceCard = ({ img, title, id }) => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden group shadow-xl 
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                      lg:group-hover:from-black/90 transition-all duration-500"></div>

      {/* Bottom Content */}
      <div className="absolute bottom-5 left-5 flex items-center gap-4">
        {/* ID Circle */}
        <div className="relative bg-[#121212] border border-yellow-500 text-white text-lg 
                        font-semibold rounded-full w-14 h-14 flex items-center justify-center
                        shadow-lg lg:group-hover:shadow-yellow-500/30 transition-all duration-500">
          {id}

          {/* Soft glow on hover */}
          <span className="absolute inset-0 rounded-full bg-yellow-500/10 blur-xl opacity-0 
                           lg:group-hover:opacity-100 transition-opacity duration-500"></span>
        </div>

        {/* Title */}
        <h3 className="text-white text-2xl font-bold drop-shadow-lg">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ServiceCard;
