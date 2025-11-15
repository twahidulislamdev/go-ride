import { IoFilter } from "react-icons/io5";
import Container from "../Container";
import Flex from "../Flex";
import BankgroundOne from "../../assets/backgroundOne.jpg";
import ShopCar from "../ShopCar";
import CarLeftSide from "../layouts/CarLeftSide";

import LamborghiniUrus from "../../assets/LamborghiniUrus.jpg";
import astonMartinDbx from "../../assets/astonMartinDbx.jpg";
import BugattiMistralW16 from "../../assets/BugattiMistralW16.jpg";
import BentleyContinental from "../../assets/BentleyContinental.jpg";
const Cars = () => {
  return (
    <>
      <div>
        {/* Banner */}
        <div
          className="relative py-[30px] lg:py-[230px] w-full  bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${BankgroundOne})` }}
        >
          <div className="absolute inset-0 bg-black/55"></div>

          <div className="relative z-10">
            <h3 className="text-2xl lg:text-7xl font-bold text-center text-mainColor">
              THE SHOP
            </h3>
          </div>
        </div>

        {/* Shop Section */}
        <div className="relative py-[60px] bg-secondaryColor">
          <Container>
            <Flex className="justify-between gap-x-5">
              {/*Left Sidebar start */}
              <CarLeftSide />
              {/* Left Sidebar end */}

              {/* Product Section start  */}
              <div className="w-full lg:w-[65%]">
                {/* Products */}
                <div className="">
                  <Flex className="justify-between flex-wrap gap-y-10">
                    <ShopCar
                      car={{
                        name: "Lamborghini Urus",
                        image: LamborghiniUrus,
                        doors: 4,
                        passengers: 5,
                        transmission: "Automatic",
                        luggage: 3,
                        price: 100,
                      }}
                    />
                    <ShopCar
                      car={{
                        name: "Aston Martin DBX",
                        image: astonMartinDbx,
                        doors: 2,
                        passengers: 4,
                        transmission: "Manual",
                        luggage: 2,
                        price: 150,
                      }}
                    />
                    <ShopCar
                      car={{
                        name: "Bugatti Mistral W16",
                        image: BugattiMistralW16,
                        doors: 2,
                        passengers: 2,
                        transmission: "Automatic",
                        luggage: 4,
                        price: 200,
                      }}
                    />
                    <ShopCar
                      car={{
                        name: "Bentley Continental",
                        image: BentleyContinental,
                        doors: 4,
                        passengers: 7,
                        transmission: "Manual",
                        luggage: 5,
                        price: 250,
                      }}
                    />
                  </Flex>
                </div>

                {/* Pagination start */}
                <div className="flex justify-center mt-10">
                  <ul className="flex items-center gap-3">
                    {/* Prev Button */}
                    <li className="px-4 py-2 border border-mainColor text-mainColor rounded-lg cursor-pointer hover:bg-mainColor hover:text-white transition">
                      Prev
                    </li>

                    {/* Page Numbers */}
                    {[1, 2, 3, 4, 5].map((num) => (
                      <li
                        key={num}
                        className={`px-4 py-2 rounded-lg text-lg font-medium cursor-pointer transition 
          ${
            num === 1
              ? "bg-mainColor text-white"
              : "text-mainColor border border-mainColor hover:bg-mainColor hover:text-white"
          }`}
                      >
                        {num}
                      </li>
                    ))}

                    {/* Next Button */}
                    <li className="px-4 py-2 border border-mainColor text-mainColor rounded-lg cursor-pointer hover:bg-mainColor hover:text-white transition">
                      Next
                    </li>
                  </ul>
                </div>
                {/* Pagination end */}
              </div>
              {/* Product Section end  */}
            </Flex>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Cars;
