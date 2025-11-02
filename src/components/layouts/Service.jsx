import React from "react";
import Slider from "react-slick";
import ServiceCard from "../ServiceCard";
import Container from "../Container";

// ✅ Import images
import serviceOne from "../../assets/serviceOne.jpg";
import serviceTwo from "../../assets/serviceTwo.jpg";
import serviceThree from "../../assets/serviceThree.jpg";

// ✅ Import slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Service = () => {
  const services = [
    { id: "01", title: "Corporate Car Rental", img: serviceOne },
    { id: "02", title: "Car Rental with Driver", img: serviceTwo },
    { id: "03", title: "Airport Transfer", img: serviceThree },
    { id: "04", title: "Corporate Car Rental", img: serviceOne },
    { id: "05", title: "Luxury Car Rental", img: serviceTwo },
    { id: "06", title: "Airport Transfer", img: serviceThree },

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul className="!m-0 !p-0 flex justify-center mt-4">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-yellow-400 rounded-full mx-1 transition-all duration-300 hover:scale-110"></div>
    ),
  };

  return (
    <div className="pt-20 pb-10 relative flex flex-col items-center justify-center bg-secondaryColor text-center">
      <h6 className="text-sm text-mainColor tracking-[8px]">WHAT WE DO</h6>
      <h3 className="text-4xl font-bold text-white pt-5">
        Our <span className="text-mainColor">Services</span>
      </h3>

      <div className="w-full flex items-center justify-center p-5">
        <Container>
          {/* 👇 Slick slider for small/medium screens */}
          <div className="block lg:hidden w-full">
            <Slider className="pb-5" {...settings}>
              {services.map((service) => (
                <div key={service.id} className="">
                  <ServiceCard
                    id={service.id}
                    title={service.title}
                    img={service.img}
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* 👇 Normal grid for large screens */}
          <div className="hidden lg:grid grid-cols-3 gap-6 w-full">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                img={service.img}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Service;
