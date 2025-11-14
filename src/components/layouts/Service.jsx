import React from "react";
import Slider from "react-slick";
import ServiceCard from "../ServiceCard";
import Container from "../Container";

// Images
import serviceOne from "../../assets/serviceOne.jpg";
import serviceTwo from "../../assets/serviceTwo.jpg";
import serviceThree from "../../assets/serviceThree.jpg";
import serviceFour from "../../assets/serviceFour.jpg";
import serviceFive from "../../assets/serviceFive.jpg";
import serviceSix from "../../assets/serviceSix.jpg";

// Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Service = () => {
  const services = [
    { id: "01", title: "Corporate Car Rental", img: serviceOne },
    { id: "02", title: "Car Rental with Driver", img: serviceTwo },
    { id: "03", title: "Airport Transfer", img: serviceThree },
    { id: "04", title: "VIP Transfer", img: serviceFour },
    { id: "05", title: "Private Transfer", img: serviceFive },
    { id: "06", title: "Fleet Leasing", img: serviceSix },
  ];

  // 🔵 CUSTOM DOTS DESIGN
  const customDots = {
    dots: true,
    appendDots: dots => (
      <div>
        <ul className="custom-dots mt-6"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-white/25"></div>
    ),
  };

  const smallDeviceSettings = {
    ...customDots,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  const largeDeviceSettings = {
    ...customDots,
    infinite: true,
    speed: 650,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  return (
    <div className="py-15 bg-secondaryColor relative overflow-hidden">
      {/* Subtle background gradient shape */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-mainColor/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-mainColor/10 blur-[120px] rounded-full"></div>

      {/* Text Center */}
      <div className="text-center relative z-10">
        <h6 className="text-sm text-mainColor tracking-[8px] font-medium">
          WHAT WE DO
        </h6>

        <h3 className="text-3xl lg:text-4xl font-bold text-white mt-3">
          Our <span className="text-mainColor">Services</span>
        </h3>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm lg:text-base px-3 lg:px-0">
          Premium services designed to meet all your transportation needs with comfort & luxury.
        </p>
      </div>

      {/* Slider Section */}
      <div className="w-full mt-10 relative z-10">
        <Container>
          {/* Mobile Slider */}
          <div className="block lg:hidden">
            <Slider className="pb-5" {...smallDeviceSettings}>
              {services.map((s) => (
                <div key={s.id} className="px-3">
                  <ServiceCard id={s.id} title={s.title} img={s.img} />
                </div>
              ))}
            </Slider>
          </div>

          {/* Desktop Slider */}
          <div className="hidden lg:block">
            <Slider className="pb-5" {...largeDeviceSettings}>
              {services.map((s) => (
                <div key={s.id} className="px-3">
                  <ServiceCard id={s.id} title={s.title} img={s.img} />
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Service;
