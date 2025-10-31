import React from "react";
import BankgroundOne from "../../assets/backgroundOne.jpg";
import Container from "../Container";

const Banner = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${BankgroundOne})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Banner Content */}
      <Container>
        <h5 className=" relative text-lg text-mainColor tracking-[5px]">
          - PREMIUM
        </h5>
        <h1 className="relative text-white text-8xl font-bold z-10">
          Rental Car
        </h1>
        <div className="relative flex justify-start items-center gap-x-5 mt-5">
          <h6 className="text-xl text-white tracking-[1px]">
            Bentley Bentayga
          </h6>
          <p className="text-2xl font-semibold text-mainColor">
            ${"100"} <span className="text-lg text-white">/day</span>
          </p>
        </div>
        <div className="gap-x-5 flex">
          <button className="relative mt-10 px-8 py-3.5 bg-mainColor  text-lg text-black rounded-xl hover:bg-white  transition-all duration-300 hover:cursor-pointer">
            View Details
          </button>
          <button className="relative mt-10 px-8 py-3.5 bg-transparent text-lg text-white rounded-2xl outline-2 outline-white hover:bg-white hover:text-black transition-all duration-300 hover:cursor-pointer">
            Book Now
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
