import Container from "../Container";
import Slider from "react-slick";

import AudiQ8 from "../../assets/audiQ8.png";
import BmwX7 from "../../assets/bmwX7.png";
import MercedesMaybac from "../../assets/marcedesMaybac.png";
import AudiS8 from "../../assets/audiS8.png";
import Bmw8 from "../../assets/bmw8.png";
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
      CarTitle: "Mercedes Maybach",
      CarPrice: "150.00",
      CarImage: MercedesMaybac,
      CarSeats: "7 Seats",
      GearboxType: "Auto",
      FuelType: "Petrol",
      CarType: "SUV",
    },
    {
      id: "03",
      CarTitle: "BMW X7",
      CarPrice: "150.00",
      CarImage: BmwX7,
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
      CarSeats: "5 Seats",
      GearboxType: "Auto",
      FuelType: "Petrol",
      CarType: "Sedan",
    },
    {
      id: "05",
      CarTitle: "BMW 8",
      CarPrice: "150.00",
      CarImage: Bmw8,
      CarSeats: "5 Seats",
      GearboxType: "Auto",
      FuelType: "Petrol",
      CarType: "Sedan",
    },
    {
      id: "06",
      CarTitle: "Mercedes S-Class",
      CarPrice: "150.00",
      CarImage: MercedesSClass,
      CarSeats: "5 Seats",
      GearboxType: "Auto",
      FuelType: "Petrol",
      CarType: "Sedan",
    },
  ];

  //  Slider for small screens only
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="py-10 bg-secondaryColor text-center">
      <h6 className="text-xs lg:text-sm text-mainColor tracking-[8px]">
        SELECT YOUR CAR
      </h6>
      <h3 className="text-3xl lg:text-4xl font-bold text-white pt-5">
        Our Luxury<span className="text-mainColor"> Cars Fleets</span>
      </h3>

      <div className="px-5 lg:px-0  pt-5 lg:pt-10 ">
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
          <div className="hidden lg:grid grid-cols-3 gap-5">
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

        <button className="relative mt-3 lg:mt-7 text-lg text-mainColor font-medium pb-2 group hover:cursor-pointer">
          <span className="group-hover:text-white transition-colors duration-300">
            SEE MORE
          </span>
          <span className="absolute left-0 bottom-0 h-0.5 bg-mainColor w-1/3 group-hover:bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </button>
      </div>
    </div>
  );
};

export default LuxuryCar;
