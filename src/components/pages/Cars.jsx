import { IoFilter } from "react-icons/io5";
import Container from "../Container";
import Flex from "../Flex";
import ShopCar from "../ShopCar";

import BankgroundOne from "../../assets/backgroundOne.jpg";
import LamborghiniUrus from "../../assets/LamborghiniUrus.jpg";
import astonMartinDbx from "../../assets/astonMartinDbx.jpg";
import BugattiMistralW16 from "../../assets/BugattiMistralW16.jpg";
import BentleyContinental from "../../assets/BentleyContinental.jpg";
import RollsRoyceCullinan from "../../assets/RollsRoyceCullinan.jpg";

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { GrClose } from "react-icons/gr";

const Cars = () => {
  const [search, setSearch] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCarType, setSelectedCarType] = useState("");
  const [selectTransmission, setselectTransmission] = useState("");

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
    "Luxury",
    "Sports Car",
    "Sedan",
    "SUVs",
    "MPV",
    "Convertible",
  ];

  const transmissionType = ["Automatic", "Manual"];

  const products = [
    {
      name: "Lamborghini Urus",
      brand: "Lamborghini",
      type: ["SUVs", "Luxury"],
      image: LamborghiniUrus,
      doors: 4,
      passengers: 5,
      transmission: "Automatic",
      luggage: 3,
      price: 200,
    },
    {
      name: "Aston Martin DBX",
      brand: "Aston Martin",
      type: ["SUVs", "Luxury"],
      image: astonMartinDbx,
      doors: 2,
      passengers: 4,
      transmission: "Automatic",
      luggage: 2,
      price: 200,
    },
    {
      name: "Bugatti Mistral W16",
      brand: "Bugatti",
      type: ["Sports Car", "Luxury"],
      image: BugattiMistralW16,
      doors: 2,
      passengers: 2,
      transmission: "Automatic",
      luggage: 2,
      price: 220,
    },
    {
      name: "Bentley Continental",
      brand: "Bentley",
      type: ["Sports Car", "Luxury"],
      image: BentleyContinental,
      doors: 2,
      passengers: 2,
      transmission: "Automatic",
      luggage: 3,
      price: 220,
    },
    {
      name: "Rolls Royce Cullinan",
      brand: "Rolls-Royce",
      type: ["SUVs", "Luxury"],
      image: RollsRoyceCullinan,
      doors: 4,
      passengers: 5,
      transmission: "Automatic",
      luggage: 4,
      price: 250,
    },
    {
      name: "Bentley Bentayga",
      brand: "Bentley",
      type: ["SUVs", "Luxury"],
      image: BankgroundOne,
      doors: 4,
      passengers: 5,
      transmission: "Automatic",
      luggage: 4,
      price: 250,
    },
  ];

  // Stop scrolling on mobile when sidebar is open
  useEffect(() => {
    const handleScrollLock = () => {
      const isMobile = window.matchMedia("(max-width: 1023px)").matches;
      document.body.style.overflow =
        isMobile && isSidebarOpen ? "hidden" : "unset";
    };

    handleScrollLock();
    window.addEventListener("resize", handleScrollLock);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("resize", handleScrollLock);
    };
  }, [isSidebarOpen]);

  //  FILTER LOGIC (Supports both single & multi-type)
  const filteredCars = products.filter((car) => {
    const matchesSearch = car.name.toLowerCase().includes(search.toLowerCase());
    const matchesBrand = selectedBrand ? car.brand === selectedBrand : true;

    const matchesType = selectedCarType
      ? Array.isArray(car.type)
        ? car.type.includes(selectedCarType)
        : car.type === selectedCarType
      : true;

    const matchesTransmission = selectTransmission
      ? car.transmission === selectTransmission
      : true;

    return matchesSearch && matchesBrand && matchesType && matchesTransmission;
  });

  return (
    <>
      {/* Banner */}
      <div
        className="relative py-[90px] lg:py-[230px] bg-cover bg-center"
        style={{ backgroundImage: `url(${BankgroundOne})` }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="relative z-10 text-center">
          <h6 className="text-sm text-mainColor tracking-[8px]">RENT NOW</h6>
          <h3 className="text-3xl lg:text-4xl text-white font-bold pt-3">
            Select <span className="text-mainColor">Luxury Car</span>
          </h3>
        </div>
      </div>

      {/* Shop Section */}
      <div className="py-[30px] lg:py-[50px] bg-secondaryColor">
        <Container>
          <Flex className="justify-center lg:justify-between gap-x-5 ">
            {/* Sidebar */}
            <div
              className={`fixed top-0 left-0 h-full w-[80%] lg:w-[30%] lg:h-[900px] bg-neutralColor z-50 transition-transform duration-300 rounded-none lg:static lg:translate-x-0 rounded-t-3xl overflow-y-auto lg:overflow-hidden scrollbar-hide pb-20 lg:pb-0 ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              {/* Search */}
              <div className="bg-mainColor rounded-t-3xl px-6 py-4 sticky top-0 z-11">
                <div className="relative max-w-md mx-auto">
                  <input
                    type="text"
                    placeholder="Search ..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-neutralColor text-white placeholder-gray-400 rounded-full py-3 pl-6 pr-14 text-lg focus:outline-none"
                  />
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="absolute right-1 top-1/2 -translate-y-1/2 bg-mainColor rounded-full p-3"
                  >
                    <Search size={20} />
                  </button>
                </div>
              </div>

              {/* BRAND FILTER */}
              <div className="mt-5 px-5">
                <h2 className="text-2xl text-white font-bold mb-3">
                  Select Brand
                </h2>
                <div className="space-y-3">
                  {brands.map((brand) => {
                    const active = selectedBrand === brand;
                    return (
                      <div
                        key={brand}
                        onClick={() =>
                          setSelectedBrand((prev) =>
                            prev === brand ? "" : brand
                          )
                        }
                        className="flex items-center space-x-4 cursor-pointer"
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            active
                              ? "border-mainColor bg-mainColor"
                              : "border-gray-600"
                          }`}
                        >
                          {active && (
                            <div className="w-3 h-3 bg-secondaryColor rounded-full"></div>
                          )}
                        </div>
                        <span
                          className={`text-lg ${
                            active ? "text-mainColor" : "text-gray-300"
                          }`}
                        >
                          {brand}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CAR TYPE FILTER */}
              <div className="mt-8 px-5 pb-5">
                <h2 className="text-2xl text-white font-bold mb-3">Car Type</h2>
                <div className="space-y-3">
                  {carTypes.map((type) => {
                    const active = selectedCarType === type;
                    return (
                      <div
                        key={type}
                        onClick={() =>
                          setSelectedCarType((prev) =>
                            prev === type ? "" : type
                          )
                        }
                        className="flex items-center space-x-4 cursor-pointer"
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            active
                              ? "border-mainColor bg-mainColor"
                              : "border-gray-600"
                          }`}
                        >
                          {active && (
                            <div className="w-3 h-3 bg-secondaryColor rounded-full"></div>
                          )}
                        </div>
                        <span
                          className={`text-lg ${
                            active ? "text-mainColor" : "text-gray-300"
                          }`}
                        >
                          {type}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* TRANSMISSION */}
              <div className="mt-5 px-5 pb-8">
                <h2 className="text-2xl text-white font-bold mb-3">
                  Transmission
                </h2>
                <div className="space-y-3">
                  {transmissionType.map((transmission) => {
                    const active = selectTransmission === transmission;
                    return (
                      <div
                        key={transmission}
                        onClick={() =>
                          setselectTransmission((prev) =>
                            prev === transmission ? "" : transmission
                          )
                        }
                        className="flex items-center space-x-4 cursor-pointer"
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            active
                              ? "border-mainColor bg-mainColor"
                              : "border-gray-600"
                          }`}
                        >
                          {active && (
                            <div className="w-3 h-3 bg-secondaryColor rounded-full"></div>
                          )}
                        </div>
                        <span
                          className={`text-lg ${
                            active ? "text-mainColor" : "text-gray-300"
                          }`}
                        >
                          {transmission}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* OVERLAY CLOSE BUTTON */}
            {isSidebarOpen && (
              <>
                <div
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                  onClick={() => setIsSidebarOpen(false)}
                />
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="fixed top-9.5 right-4 bg-mainColor p-3 rounded shadow-lg hover:bg-mainColor/90 transition lg:hidden"
                >
                  <GrClose size={22} className="text-white" />
                </button>
              </>
            )}

            {/* PRODUCT GRID */}
            <div className="w-full lg:w-[65%] flex flex-col items-center p-5">
              <div className="flex justify-between items-center lg:hidden mx-5 mb-5 w-full max-w-6xl">
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="px-5 py-2.5 border-2 border-mainColor text-mainColor rounded-xl hover:scale-105 transition shadow-sm"
                >
                  FILTER BY
                </button>

                <button className="px-5 py-2.5 border-2 border-mainColor text-mainColor rounded-xl hover:scale-105 transition shadow-sm">
                  SHORT BY
                </button>
              </div>

              <div className="w-full max-w-6xl">
                <Flex className="justify-center lg:justify-between flex-wrap gap-y-10">
                  {filteredCars.length > 0 ? (
                    filteredCars.map((car, idx) => (
                      <ShopCar key={idx} car={car} />
                    ))
                  ) : (
                    <p className="text-gray-400 text-lg mt-10">
                      No cars found matching your filter.
                    </p>
                  )}
                </Flex>
              </div>

              {/* PAGINATION */}
              <div className="flex justify-center mt-10 w-full">
                <ul className="flex gap-3 flex-wrap">
                  <li className="px-4 py-2 border border-mainColor text-mainColor rounded-lg cursor-pointer hover:bg-mainColor hover:text-white transition">
                    Prev
                  </li>

                  {[1, 2, 3, 4, 5].map((num) => (
                    <li
                      key={num}
                      className={`px-4 py-2 rounded-lg text-lg cursor-pointer transition ${
                        num === 1
                          ? "bg-mainColor text-white"
                          : "text-mainColor border border-mainColor hover:bg-mainColor hover:text-white"
                      }`}
                    >
                      {num}
                    </li>
                  ))}

                  <li className="px-4 py-2 border border-mainColor text-mainColor rounded-lg cursor-pointer hover:bg-mainColor hover:text-white transition">
                    Next
                  </li>
                </ul>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Cars;
