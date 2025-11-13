import React from "react";
import Container from "../Container";
import {
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaArrowRight,
  FaCar,
  FaUsers,
  FaInfoCircle,
  FaEnvelope,
  FaListAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
} from "react-icons/fa";

const Interested = () => {
  return (
    <>
      <div className="py-20 px-2 relative flex flex-col items-center justify-center bg-neutralColor">
        <Container>
          <h6 className="text-sm text-mainColor tracking-[8px] text-center">
            RENT YOUR CAR
          </h6>
          <h3 className="text-center text-3xl lg:text-4xl font-bold text-white pt-5">
            Interested in<span className="text-mainColor"> Renting? </span>
          </h3>
          <p className="text-center text-white tracking-wide mt-4">
            Don't hesitate and send us a message.
          </p>
          <div className="gap-x-5  mt-5 lg:mt-10 flex justify-center">
            <button
              className="relative flex items-center justify-center gap-2 
  px-4 lg:px-8 py-2.5 lg:py-3 
  bg-mainColor text-black font-medium 
  text-sm lg:text-base rounded-xl 
  hover:bg-white hover:scale-105 
  transition-all duration-300 cursor-pointer shadow-md"
            >
              <FaWhatsapp className="text-lg lg:text-xl" />
              <span>View Details</span>
            </button>

            <button
              className="px-5 lg:px-8 py-2.5 lg:py-3 
  border-2 border-neutral-500 text-md lg:text-lg 
  text-white font-medium rounded-2xl bg-transparent 
  transition-all duration-300 ease-in-out 
  hover:scale-105 hover:border-white hover:bg-white hover:text-black 
  cursor-pointer shadow-sm"
            >
              Book Now
            </button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Interested;
