import React from "react";
import BankgroundOne from "../../assets/backgroundOne.jpg";
import Container from "../Container";

const Banner = () => {
  return (
    <div
      className="w-full px-2 relative h-[370px] lg:h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${BankgroundOne})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Banner Content */}
      <Container className={"pt-40 lg:pt-0"}>
        <h5 className=" relative text-sm lg:text-lg text-mainColor tracking-[5px]">
          - PREMIUM
        </h5>
        <h1 className="relative text-white text-4xl lg:text-8xl font-bold z-10">
          Rental Car
        </h1>
        <div className="relative flex justify-start items-center gap-x-5 mt-2 lg:mt-5">
          <h6 className="text-lg lg:text-xl text-white tracking-[1px]">
            Bentley Bentayga
          </h6>
          <p className="text-2xl font-semibold text-mainColor">
            ${"150.00"} <span className="text-lg text-white">/day</span>
          </p>
        </div>
        <div className="gap-x-5 flex mt-5 lg:mt10">
          <button className="relative  px-4 lg:px-8 py-2.5 lg:py-3.5 bg-mainColor text-md lg:text-lg text-black rounded-xl hover:bg-white  transition-all duration-300 hover:cursor-pointer">
            View Details
          </button>
          <button className="relative  px-5 lg:px-8 py-2 lg:py-3.5 bg-transparent text-md lg:text-lg text-white rounded-2xl outline-2 outline-white hover:bg-white hover:text-black transition-all duration-300 hover:cursor-pointer">
            Book Now
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
