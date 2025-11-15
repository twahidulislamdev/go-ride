import React, { useState } from "react";
import { Search } from "lucide-react";

const CarLeftSide = () => {
  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("Lamborghini");

  const brands = [
    "Lamborghini",
    "Aston Martin",
    "Bugatti",
    "Bentley",
    "Rolls-Royce",
    "Audi",
    "Ferrari",
  ];

  return (
    <div className="w-[30%] h-[500px] bg-neutralColor rounded-t-3xl text-white font-sans">
      {/* Search Bar */}
      <div className="bg-mainColor rounded-t-3xl px-6 py-4">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-neutralColor text-white placeholder-gray-400 rounded-full py-3 pl-6 pr-14 text-lg focus:outline-none"
          />

          {/* Search Icon */}
          <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-mainColor text-gray-900 rounded-full p-3">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Select Brand Section */}
      <div className="mt-8 px-6">
        <h2 className="text-xl font-semibold text-white mb-6">Select Brand</h2>

        <div className="space-y-4">
          {brands.map((brand) => {
            const isSelected = selectedBrand === brand;

            return (
              <div
                key={brand}
                className="flex items-center space-x-4 cursor-pointer"
                onClick={() => setSelectedBrand(brand)}
              >
                {/* Radio dot */}
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center 
                    ${
                      isSelected
                        ? "border-mainColor bg-mainColor"
                        : "border-gray-600 bg-transparent"
                    }`}
                >
                  {isSelected && (
                    <div className="w-3.5 h-3.5 rounded-full bg-secondaryColor"></div>
                  )}
                </div>

                {/* Label */}
                <span
                  className={`text-lg ${
                    isSelected ? "text-mainColor font-medium" : "text-gray-300"
                  }`}
                >
                  {brand}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarLeftSide;
