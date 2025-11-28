import Container from "../Container";
import BlogCard from "../BlogCard";
import BackgroundOne from "../../assets/backgroundOne.jpg";

import BlogCarOne from "../../assets/blogCarOne.jpg";
import BlogCarTwo from "../../assets/blogCarTwo.jpg";
import BlogCarThree from "../../assets/blogCarThree.jpg";
import BlogCarFour from "../../assets/blogCarFour.jpg";
import BlogCarFive from "../../assets/blogCarFive.jpg";
import BlogCarSix from "../../assets/blogCarSix.jpg";

const Blog = () => {
  const blogPosts = [
    {
      title: "Documents required for car rental",
      image: BlogCarOne,
      date: "August 20, 2023",
      person: "John D.",
      commentsAmount: 5,
    },
    {
      title: "Rental cost of sport and other cars",
      image: BlogCarTwo,
      date: "August 21, 2023",
      person: "Sarah L.",
      commentsAmount: 8,
    },
    {
      title: "Rental cars how to check driving fines?",
      image: BlogCarThree,
      date: "August 22, 2023",
      person: "Michael S.",
      commentsAmount: 12,
    },
    {
      title: "How to Rent a Car at the Airport Terminal?",
      image: BlogCarFour,
      date: "August 23, 2023",
      person: "Emily R.",
      commentsAmount: 7,
    },
    {
      image: BlogCarFive,
      title: "How to check a car before renting? Important tips",
      date: "August 24, 2023",
      person: "David K.",
      commentsAmount: 10,
    },
    {
      image: BlogCarSix,
      title: "Penalties for violating the rules in rental cars",
      date: "August 25, 2023",
      person: "Olivia M.",
      commentsAmount: 4,
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative py-32 lg:py-64 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BackgroundOne})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white container mx-auto px-4">
          <p className="text-sm lg:text-base tracking-[8px] uppercase text-mainColor">
            Blog & News
          </p>
          <h1 className="mt-4 text-4xl lg:text-6xl font-bold">
            Latest <span className="text-mainColor">News</span>
          </h1>
        </div>
      </section>

      {/* Blog Grid - ALL CARDS SAME HEIGHT */}
      <section className="py-16 lg:py-20 bg-secondaryColor ">
        <Container>
          <div
            className="
            px-3
            lg:px-0
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-3 
              gap-5 
              lg:gap-5
              auto-rows-[1fr]   
              
            "
          >
            {blogPosts.map((post, index) => (
              <div key={index} className="h-full ">
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Blog;
