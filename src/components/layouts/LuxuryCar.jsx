import Container from "../Container";

// Fix: Use consistent case for file extensions and check actual file names
import AudiQ8 from "../../assets/audiQ8.png";
import BmwX7 from "../../assets/bmwX7.png";
import MercedesGLS from "../../assets/mercedesGLS.png";
import AudiS8 from "../../assets/audiS8.png";
import Bmw7 from "../../assets/bmw7.png";
import MercedesSClass from "../../assets/mercedesSClass.png";
import CarCad from "../CarCad";

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

  return (
    <div className="pt-10 pb-20 bg-secondaryColor text-center">
      <h6 className="text-sm text-mainColor tracking-[8px]">SELECT YOUR CAR</h6>
      <h3 className="text-4xl font-bold text-white pt-5">
        Our <span className="text-mainColor">Luxury Cars Fleets</span>
      </h3>

      <div className="p-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        <button className="mt-10 px-3 py-2 bg-mainColor text-lg font-medium text-black rounded-xl hover:bg-white  transition-all duration-300 hover:cursor-pointer">
          See More...
        </button>
      </div>
    </div>
  );
};

export default LuxuryCar;
