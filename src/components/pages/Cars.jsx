import { IoFilter } from "react-icons/io5";
import Container from "../Container";
import Flex from "../Flex";
import BankgroundOne from "../../assets/backgroundOne.jpg";
import HomeCar from "../HomeCar";
import ShopCar from "../ShopCar";
import CarLeftSide from "../layouts/CarLeftSide";

const Cars = () => {
  return (
    <>
      <div>
        {/* Banner */}
        <div
          className="relative py-[30px] lg:py-[230px] w-full px-3 bg-no-repeat bg-center bg-cover"
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
                        name: "Car 1",
                        image: "image1.jpg",
                        doors: 4,
                        passengers: 5,
                        transmission: "Automatic",
                        luggage: 3,
                        price: 100,
                      }}
                    />
                    <ShopCar
                      car={{
                        name: "Car 2",
                        image: "image2.jpg",
                        doors: 2,
                        passengers: 4,
                        transmission: "Manual",
                        luggage: 2,
                        price: 150,
                      }}
                    />
                    <ShopCar
                      car={{
                        name: "Car 3",
                        image: "image3.jpg",
                        doors: 4,
                        passengers: 5,
                        transmission: "Automatic",
                        luggage: 4,
                        price: 200,
                      }}
                    />
                    <ShopCar
                      car={{
                        name: "Car 4",
                        image: "image4.jpg",
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
