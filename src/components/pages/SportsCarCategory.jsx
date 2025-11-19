import Container from "../Container";
import NevigateByCategoryCard from "../NevigateByCategoryCard";

import BankgroundOne from "../../assets/backgroundOne.jpg";
import LamborghiniUrus from "../../assets/LamborghiniUrus.jpg";
import astonMartinDbx from "../../assets/astonMartinDbx.jpg";
import BugattiMistralW16 from "../../assets/BugattiMistralW16.jpg";
import BentleyContinental from "../../assets/BentleyContinental.jpg";
import RollsRoyceCullinan from "../../assets/RollsRoyceCullinan.jpg";

const SportsCarCategory = () => {
  const luxuryCar = [
    {
      name: "Lamborghini Urus",
      brand: "Lamborghini",
      type: "SUVs",
      image: LamborghiniUrus,
      doors: 4,
      passengers: 5,
      transmission: "Automatic",
      luggage: 3,
      price: 200,
    },
    {
      name: "Aston Martin DBX",
      brand: "Aston Martin",
      type: "SUVs",
      image: astonMartinDbx,
      doors: 2,
      passengers: 4,
      transmission: "Automatic",
      luggage: 2,
      price: 200,
    },
    {
      name: "Bugatti Mistral W16",
      brand: "Bugatti",
      type: "Sports Car",
      image: BugattiMistralW16,
      doors: 2,
      passengers: 2,
      transmission: "Automatic",
      luggage: 2,
      price: 220,
    },
    {
      name: "Bentley Continental",
      brand: "Bentley",
      type: "Sports Car",
      image: BentleyContinental,
      doors: 2,
      passengers: 2,
      transmission: "Automatic",
      luggage: 3,
      price: 220,
    },
    {
      name: "Rolls Royce Cullinan",
      brand: "Rolls-Royce",
      type: "SUVs",
      image: RollsRoyceCullinan,
      doors: 4,
      passengers: 5,
      transmission: "Automatic",
      luggage: 4,
      price: 250,
    },
    {
      name: "Bentley Bentayga",
      brand: "Bentley",
      type: "SUVs",
      image: BankgroundOne,
      doors: 4,
      passengers: 5,
      transmission: "Automatic",
      luggage: 4,
      price: 250,
    },
  ];

  return (
    <>
      {/* Banner */}
      <div
        className="relative py-[90px] lg:py-[230px] bg-cover bg-center"
        style={{ backgroundImage: `url(${BankgroundOne})` }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="relative z-10 text-center">
          <h6 className="text-xs lg:text-sm text-mainColor tracking-[5px] lg:tracking-[9px] uppercase">
            Select Your Car
          </h6>
          <h3 className="text-4xl lg:text-5xl text-white font-bold pt-3">
            Sports <span className="text-mainColor">Car Fleet</span>
          </h3>
        </div>
      </div>

      {/* Car Cards Section */}
      <div className="w-full py-[30px] lg:py-[50px] bg-secondaryColor pb-20">
        <Container>
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-10 space-y-15 lg:space-y-0">
            {luxuryCar.map((car, index) => (
              <NevigateByCategoryCard key={index} car={car} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default SportsCarCategory;
