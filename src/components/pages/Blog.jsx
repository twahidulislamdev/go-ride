import Container from "../Container";
import BlogCard from "../BlogCard";
import BackgroundOne from "../../assets/BackgroundOne.jpg";
import LamborghiniUrus from "../../assets/LamborghiniUrus.jpg";
import astonMartinDbx from "../../assets/astonMartinDbx.jpg";
import BugattiMistralW16 from "../../assets/BugattiMistralW16.jpg";
import BentleyContinental from "../../assets/BentleyContinental.jpg";
import RollsRoyceCullinan from "../../assets/RollsRoyceCullinan.jpg";

const Blog = () => {
  const blogPosts = [
    {
      image: LamborghiniUrus,
      name: "Lamborghini Urus",
      date: "August 20, 2023",
      person: "John D.",
      commentsAmount: 5,
    },
    {
      image: astonMartinDbx,
      name: "Aston Martin DBX",
      date: "August 21, 2023",
      person: "Sarah L.",
      commentsAmount: 8,
    },
    {
      image: BugattiMistralW16,
      name: "Bugatti Mistral W16",
      date: "August 22, 2023",
      person: "Michael S.",
      commentsAmount: 12,
    },
    {
      image: BentleyContinental,
      name: "Bentley Continental",
      date: "August 23, 2023",
      person: "Emily R.",
      commentsAmount: 7,
    },
    {
      image: RollsRoyceCullinan,
      name: "Rolls Royce Cullinan",
      date: "August 24, 2023",
      person: "David K.",
      commentsAmount: 10,
    },
    {
      image: BackgroundOne,
      name: "Background One",
      date: "August 25, 2023",
      person: "Olivia M.",
      commentsAmount: 4,
    },
  ];

  return (
    <>
      {/* Banner */}
      <div
        className="relative py-[90px] lg:py-[230px] bg-cover bg-center"
        style={{ backgroundImage: `url(${BackgroundOne})` }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="relative z-10 text-center">
          <h6 className="text-xs lg:text-sm text-mainColor tracking-[5px] lg:tracking-[9px] uppercase">
            Blog & News
          </h6>
          <h3 className="text-4xl lg:text-5xl text-white font-bold pt-3">
            Latest <span className="text-mainColor"> News</span>
          </h3>
        </div>
      </div>

      {/* Car Cards Section start */}
      <div className="w-full py-[30px] lg:py-[50px] bg-secondaryColor pb-20 px-3 lg:px-0">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 space-y-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </Container>
      </div>
      {/* Car Cards Section end */}
    </>
  );
};

export default Blog;