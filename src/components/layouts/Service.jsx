import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import ServiceCard from "../ServiceCard";
import Container from "../Container";

// Images
import serviceOne from "../../assets/serviceOne.jpg";
import serviceTwo from "../../assets/serviceTwo.jpg";
import serviceThree from "../../assets/serviceThree.jpg";
import serviceFour from "../../assets/serviceFour.jpg";
import serviceFive from "../../assets/serviceFive.jpg";
import serviceSix from "../../assets/serviceSix.jpg";

// Swiper styles
import "swiper/css";

const Service = () => {
  const services = [
    { id: "01", title: "Corporate Car Rental", img: serviceOne },
    { id: "02", title: "Car Rental with Driver", img: serviceTwo },
    { id: "03", title: "Airport Transfer", img: serviceThree },
    { id: "04", title: "VIP Transfer", img: serviceFour },
    { id: "05", title: "Private Transfer", img: serviceFive },
    { id: "06", title: "Fleet Leasing", img: serviceSix },
  ];

  return (
    <div className="py-15 bg-secondaryColor relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-mainColor/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-mainColor/10 blur-[120px] rounded-full"></div>

      {/* Header */}
      <div className="text-center relative z-10">
        <h6 className="text-sm text-mainColor tracking-[8px] font-medium">
          WHAT WE DO
        </h6>

        <h3 className="text-3xl lg:text-4xl font-bold text-white mt-3">
          Our <span className="text-mainColor">Services</span>
        </h3>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm lg:text-base px-3 lg:px-0">
          Premium services designed to meet all your transportation needs with
          comfort & luxury.
        </p>
      </div>

      {/* Slider */}
      <div className="w-full mt-10 relative z-10">
        <Container>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-5"
          >
            {services.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="px-3">
                  <ServiceCard id={item.id} title={item.title} img={item.img} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>
    </div>
  );
};

export default Service;
