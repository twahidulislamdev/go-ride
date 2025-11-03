import Container from "../Container";
import Slider from "react-slick";

import AudiQ8 from "../../assets/audiQ8.png";
import BmwX7 from "../../assets/bmwX7.png";
import MercedesGLS from "../../assets/mercedesGLS.png";
import AudiS8 from "../../assets/audiS8.png";
import Bmw7 from "../../assets/bmw7.png";
import MercedesSClass from "../../assets/mercedesSClass.png";
import CarCad from "../CarCad";

//  Import slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LuxuryCar = () => {
  const Cars = [
    {
      id: "01",
      CarTitle: "Audi Q8",
      CarPrice: "150.00",
      CarImage: AudiQ8,
      CarSeats: "7 Seats",
      GearboxType: "Auto",
      FuelType: "Petrol",
      CarType: "SUV",
    },
    {
      id: "02",
      CarTitle: "BMW X7",
      CarPrice: "150.00",
      CarImage: BmwX7,
      CarSeats: "7 Seats",
      GearboxType: "Auto",
      FuelType: "Petrol",
      CarType: "SUV",
    },
    {
      id: "03",
      CarTitle: "Mercedes GLS",
      CarPrice: "150.00",
      CarImage: MercedesGLS,
      CarSeats: "7 Seats",
      GearboxType: "Auto",
      FuelType: "Petrol",
      CarType: "SUV",
    },
    {
      id: "04",
      CarTitle: "Audi S8",
      CarPrice: "150.00",
      CarImage: AudiS8,
      CarSeats: "4 Seats",
      GearboxType: "Auto",
      FuelType: "Petrol",
      CarType: "Sedan",
    },
    {
      id: "05",
      CarTitle: "BMW 7",
      CarPrice: "150.00",
      CarImage: Bmw7,
      CarSeats: "4 Seats",
      GearboxType: "Auto",
      FuelType: "Petrol",
      CarType: "Sedan",
    },
    {
      id: "06",
      CarTitle: "Mercedes S-Class",
      CarPrice: "150.00",
      CarImage: MercedesSClass,
      CarSeats: "4 Seats",
      GearboxType: "Auto",
      FuelType: "Petrol",
      CarType: "Sedan",
    },
  ];

  // ✅ Slider for small screens only
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
        <ul className="!m-0 !p-0 flex justify-center mt-5">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-yellow-400 rounded-full mx-1 transition-all duration-300 hover:scale-110"></div>
    ),
  };

  return (
    <div className="py-5 bg-secondaryColor text-center">
      <h6 className="text-xs lg:text-sm text-mainColor tracking-[8px]">SELECT YOUR CAR</h6>
      <h3 className="text-3xl lg:text-4xl font-bold text-white pt-5">
        Our <span className="text-mainColor">Luxury Cars Fleets</span>
      </h3>

      <div className=" p-5 lg:pt-10 pb-5">
        <Container>
          {/*  React Slick only for small & medium devices */}
          <div className="block lg:hidden">
            <Slider className="pb-5" {...settings}>
              {Cars.map((item) => (
                <div key={item.id} className="">
                  <CarCad
                    id={item.id}
                    CarTitle={item.CarTitle}
                    CarPrice={item.CarPrice}
                    CarImage={item.CarImage}
                    CarType={item.CarType}
                    CarSeats={item.CarSeats}
                    GearboxType={item.GearboxType}
                    FuelType={item.FuelType}
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/*  Grid layout only for lg+ screens */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {Cars.map((item) => (
              <CarCad
                key={item.id}
                id={item.id}
                CarTitle={item.CarTitle}
                CarPrice={item.CarPrice}
                CarImage={item.CarImage}
                CarType={item.CarType}
                CarSeats={item.CarSeats}
                GearboxType={item.GearboxType}
                FuelType={item.FuelType}
              />
            ))}
          </div>
        </Container>

        <button className="mt-10 px-4 py-2 bg-mainColor text-lg font-medium text-black rounded-xl hover:bg-white transition-all duration-300">
          See More
        </button>
      </div>
    </div>
  );
};

export default LuxuryCar;
