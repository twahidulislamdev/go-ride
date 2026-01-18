import React from "react";
import Container from "../Container";
import TestimonialCard from "../TestimonialCard";
import ClintOne from "../../assets/clintOne.jpg";
import ClintTwo from "../../assets/clintTwo.jpg";
import ClintThree from "../../assets/clintThree.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dan Wilson",
      role: "Customer",
      image: ClintOne,
      rating: 5,
      text: "The service was absolutely top-notch! The team was friendly, fast, and exceeded all my expectations. I’ll definitely recommend them to everyone.",
    },
    {
      name: "Emily Martin",
      role: "Customer",
      image: ClintTwo,
      rating: 5,
      text: "Exceptional experience from start to finish. The quality and attention to detail are unmatched — truly a 5-star service!",
    },
    {
      name: "Olivia Brown",
      role: "Customer",
      image: ClintThree,
      rating: 5,
      text: "Super professional and easy to work with. I’m impressed by their dedication and consistent communication throughout the process.",
    },
  ];

  return (
    <section className="relative py-10 bg-gradient-to-b from-secondaryColor to-[#0b0b0b] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none" />

      <Container>
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h6 className="text-sm text-mainColor tracking-[8px] uppercase">
            Testimonials
          </h6>
          <h3 className="text-3xl lg:text-4xl font-bold text-white mt-4">
            What Our <span className="text-mainColor">Clients Say!</span>
          </h3>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm lg:text-base px-3 lg:px-0">
            Hear from our happy clients who’ve experienced our quality, care,
            and dedication firsthand.
          </p>
        </div>

        {/* Swiper with consistent card sizing */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          speed={600}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
              autoplay: false,
              loop: false,
              allowTouchMove: false,
            },
          }}
          className="!pb-6" 
        >
          {testimonials.map((client, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <TestimonialCard {...client} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b0b0b] to-transparent pointer-events-none" />
    </section>
  );
};

export default Testimonials;
