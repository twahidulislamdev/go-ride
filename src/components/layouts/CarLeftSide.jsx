import React, { useState } from "react";
import { Search } from "lucide-react";

const CarLeftSide = () => {
  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCarType, setSelectedCarType] = useState("");

  const brands = [
    "Lamborghini",
    "Aston Martin",
    "Bugatti",
    "Bentley",
    "Rolls-Royce",
    "Audi",
    "Ferrari",
  ];

  const carTypes = [
    "Luxary Car",
    "Sports Car",
    "Sedan",
    "SUVs",
    "MPV",
    "Convertible",
  ];

  return (
    <div className="w-[30%] h-[800px] hidden lg:block bg-neutralColor rounded-t-3xl text-white font-sans">
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

          <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-mainColor text-gray-900 rounded-full p-3">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Select Brand */}
      <div className="mt-8 px-5">
        <h2 className="text-2xl font-bold mb-5">Select Brand</h2>

        <div className="space-y-3">
          {brands.map((brand) => {
            const isSelected = selectedBrand === brand;

            return (
              <div
                key={brand}
                className="flex items-center space-x-4 cursor-pointer"
                onClick={() => setSelectedBrand(brand)}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                  ${
                    isSelected
                      ? "border-mainColor bg-mainColor"
                      : "border-gray-600"
                  }`}
                >
                  {isSelected && (
                    <div className="w-3 h-3 rounded-full bg-secondaryColor"></div>
                  )}
                </div>

                <span
                  className={`text-lg ${
                    isSelected ? "text-mainColor" : "text-gray-300"
                  }`}
                >
                  {brand}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Car Type */}
      <div className="mt-8 px-5">
        <h2 className="text-2xl font-bold mb-5">Car Type</h2>

        <div className="space-y-3">
          {carTypes.map((type) => {
            const isSelected = selectedCarType === type;

            return (
              <div
                key={type}
                className="flex items-center space-x-4 cursor-pointer"
                onClick={() => setSelectedCarType(type)}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                  ${
                    isSelected
                      ? "border-mainColor bg-mainColor"
                      : "border-gray-600"
                  }`}
                >
                  {isSelected && (
                    <div className="w-3 h-3 rounded-full bg-secondaryColor"></div>
                  )}
                </div>

                <span
                  className={`text-lg ${
                    isSelected ? "text-mainColor" : "text-gray-300"
                  }`}
                >
                  {type}
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
