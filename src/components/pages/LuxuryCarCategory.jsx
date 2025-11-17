import React from "react";
import Container from "../Container";
import NevigateByCategoryCard from "../NevigateByCategoryCard";

// Images
import BankgroundOne from "../../assets/backgroundOne.jpg";
import serviceOne from "../../assets/serviceOne.jpg";
import serviceTwo from "../../assets/serviceTwo.jpg";
import serviceThree from "../../assets/serviceThree.jpg";
import serviceFour from "../../assets/serviceFour.jpg";
import serviceFive from "../../assets/serviceFive.jpg";
import serviceSix from "../../assets/serviceSix.jpg";

// Slick CSS
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LuxuryCarCategory = () => {
  const luxuryCar = [
    { id: "01", title: "Corporate Car Rental", img: serviceOne, price: 100 },
    { id: "02", title: "Car Rental with Driver", img: serviceTwo, price: 100 },
    { id: "03", title: "Airport Transfer", img: serviceThree, price: 100 },
    { id: "04", title: "VIP Transfer", img: serviceFour, price: 100 },
    { id: "05", title: "Private Transfer", img: serviceFive, price: 100 },
    { id: "06", title: "Fleet Leasing", img: serviceSix, price: 100 },
  ];

  //  CUSTOM DOTS DESIGN
  const customDots = {
    dots: true,
    appendDots: (dots) => (
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

  return (
    <>
      <div className="py-0 lg:py-20 bg-secondaryColor">
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

        <div className="py-10 lg:py-20 ">
          <Container>
            {/* Mobile Slider */}
            <div className="block lg:hidden">
              <Slider className="pb-5" {...smallDeviceSettings}>
                {luxuryCar.map((s) => (
                  <div key={s.id} className="px-5 lg:px-0">
                    <NevigateByCategoryCard
                      id={s.id}
                      title={s.title}
                      img={s.img}
                      price={s.price}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Desktop Section (No Slider) */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-3 gap-6">
                {luxuryCar.map((s) => (
                  <NevigateByCategoryCard
                    key={s.id}
                    id={s.id}
                    title={s.title}
                    img={s.img}
                    price={s.price}
                  />
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default LuxuryCarCategory;
