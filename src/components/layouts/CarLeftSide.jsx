import React from "react";
import { Search } from "lucide-react";

const CarLeftSide = () => {
  return (
    <div className="w-[30%] h-[500px] bg-neutralColor rounded-t-3xl text-white font-sans">
      {/* Search Bar */}
      <div className="bg-mainColor rounded-t-3xl px-6 py-4">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search ..."
            className="w-full bg-neutralColor text-white placeholder-gray-400 rounded-full py-3 pl-6 pr-14 text-lg focus:outline-none"
            readOnly
          />
          <div className="absolute right-1 top-1/2 -translate-y-1/2 bg-mainColor text-gray-900 rounded-full p-3">
            <Search size={20} />
          </div>
        </div>
      </div>

      {/* Select Brand Section start */}
      <div className="mt-8 px-6">
        <h2 className="text-xl font-semibold text-white mb-6">Select Brand</h2>

        <div className="space-y-4">
          {/* Lamborghini - Selected */}
          <div className="flex items-center space-x-4">
            <div className="w-6 h-6 rounded-full border-2 border-mainColor bg-mainColor flex items-center justify-center">
              <div className="w-3.5 h-3.5 rounded-full bg-gray-900"></div>
            </div>
            <span className="text-lg text-mainColor font-medium">
              Lamborghini
            </span>
          </div>

          {/* Others - Unselected */}
          {[
            "Aston Martin",
            "Bugatti",
            "Bentley",
            "Rolls-Royce",
            "Audi",
            "Ferrari",
          ].map((brand) => (
            <div key={brand} className="flex items-center space-x-4">
              <div className="w-6 h-6 rounded-full border-2 border-gray-600 bg-transparent"></div>
              <span className="text-lg text-gray-300">{brand}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Select Brand Section end */}
    </div>
  );
};

export default CarLeftSide;
