import React from "react";

const CategoriesCard = ({title, img }) => {
  return (
    <div className="h-[160px] lg:h-[175px] relative bg-[#1c1c1c] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-300 border-2 border-neutral-800">
      {/* Image - centered */}
      <div className="flex items-center justify-center h-full w-full">
        <img src={img} alt={title} className="object-cover max-h-full max-w-full z-30" />
      </div>

      {/* Content */}
      <div className="absolute bottom-4 left-4 flex items-center gap-4">
       
      </div>
      <h3 className="absolute top-2 left-3 text-white text-xl font-bold z-10">
        {title}
      </h3>
    </div>
  );
};

export default CategoriesCard;
