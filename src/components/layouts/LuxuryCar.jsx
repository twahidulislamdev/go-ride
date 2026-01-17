import { useRef } from "react";
import Container from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import AudiQ8 from "../../assets/audiQ8.png";
import BmwX7 from "../../assets/bmwX7.png";
import MercedesMaybac from "../../assets/marcedesMaybac.png";
import AudiS8 from "../../assets/audiS8.png";
import Bmw8 from "../../assets/bmw8.png";
import MercedesSClass from "../../assets/mercedesSClass.png";
import HomeCar from "../HomeCar";

import "swiper/css";

const LuxuryCar = () => {
  const swiperRef = useRef(null);

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

  return (
    <div className="py-10 bg-secondaryColor text-center">
      <h6 className="text-xs lg:text-sm text-mainColor tracking-[8px]">
        SELECT YOUR CAR
      </h6>

      <h3 className="text-3xl lg:text-4xl font-bold text-white pt-5">
        Our Luxury<span className="text-mainColor"> Cars Fleets</span>
      </h3>

      <div className="px-5 lg:px-0 pt-5 lg:pt-10">
        <Container>
          {/* Navigation Buttons */}
          <div className="flex justify-end gap-3 mb-5">
            <button
              onClick={() => swiperRef.current.slidePrev()}
              className="w-10 h-10 rounded-full border border-mainColor text-mainColor
                         flex items-center justify-center
                         hover:bg-mainColor hover:text-white transition hover:cursor-pointer"
            >
              <FaArrowLeftLong />
            </button>

            <button
              onClick={() => swiperRef.current.slideNext()}
              className="w-10 h-10 rounded-full border border-mainColor text-mainColor
                         flex items-center justify-center
                         hover:bg-mainColor hover:text-white transition hover:cursor-pointer"
            >
              <FaArrowRightLong />
            </button>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {Cars.map((item) => (
              <SwiperSlide key={item.id}>
                <HomeCar
                  id={item.id}
                  CarTitle={item.CarTitle}
                  CarPrice={item.CarPrice}
                  CarImage={item.CarImage}
                  CarType={item.CarType}
                  CarSeats={item.CarSeats}
                  GearboxType={item.GearboxType}
                  FuelType={item.FuelType}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>

        <button className="relative mt-3 lg:mt-7 text-lg text-mainColor font-medium pb-2 group">
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
