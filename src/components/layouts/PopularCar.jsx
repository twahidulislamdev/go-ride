import Container from "../Container";
import Slider from "react-slick";

import AudiA5 from "../../assets/audiA5.png";
import MercedesCClass from "../../assets/mercedesCClass.png";
import Bmw3 from "../../assets/bmw3.png";
import BmwX3 from "../../assets/bmwX3.png";
import MarcedesGLB from "../../assets/marcedesGLB.png";
import AudiQ3 from "../../assets/audiQ3.png";
import CarCad from "../CarCad";

//  Import slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const PopularCar = () => {
  const Cars = [
    {
      id: "01",
      CarTitle: "Audi A5",
      CarPrice: "100.00",
      CarImage: AudiA5,
      CarSeats: "5 Seats",
      GearboxType: "Auto",
      FuelType: "Petrol",
      CarType: "Sedan",
    },
    {
      id: "02",
      CarTitle: "Mercedes C-Class",
      CarPrice: "100.00",
      CarImage: MercedesCClass,
      CarSeats: "5 Seats",
      GearboxType: "Auto",
      FuelType: "Petrol",
      CarType: "Sedan",
    },
    {
      id: "03",
      CarTitle: "BMW 3",
      CarPrice: "100.00",
      CarImage: Bmw3,
      CarSeats: "5 Seats",
      GearboxType: "Auto",
      FuelType: "Petrol",
      CarType: "Sedan",
    },
    {
      id: "04",
      CarTitle: "BMW X3",
      CarPrice: "100.00",
      CarImage: BmwX3,
      CarSeats: "5 Seats",
      GearboxType: "Auto",
      FuelType: "Petrol",
      CarType: "SUV",
    },
    {
      id: "05",
      CarTitle: "Mercedes GLB",
      CarPrice: "100.00",
      CarImage: MarcedesGLB,
      CarSeats: "5 Seats",
      GearboxType: "Auto",
      FuelType: "Petrol",
      CarType: "SUV",
    },
    {
      id: "06",
      CarTitle: "Audi Q3",
      CarPrice: "100.00",
      CarImage: AudiQ3,
      CarSeats: "5 Seats",
      GearboxType: "Auto",
      FuelType: "Petrol",
      CarType: "SUV",
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
    <>
      <div className="py-10 bg-secondaryColor text-center">
        <h6 className="text-xs lg:text-sm text-mainColor tracking-[8px]">
          SELECT YOUR CAR
        </h6>
        <h3 className="text-3xl lg:text-4xl font-bold text-white pt-5">
          Our <span className="text-mainColor">Popular Cars Fleets</span>
        </h3>

        <div className=" px-5 lg:px-0 pt-5 lg:pt-10">
          <Container>
            {/*  React Slick only for small & medium devices */}
            <div className="block lg:hidden">
              <Slider className="" {...settings}>
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

          <button className="mt-5 px-4 py-2 bg-mainColor text-lg font-medium text-black rounded-xl hover:bg-white transition-all duration-300">
            See More
          </button>
        </div>
      </div>
    </>
  );
};

export default PopularCar;
