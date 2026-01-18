import React from "react";
import BackgroundOne from "../../assets/backgroundOne.jpg";
import { Mail, MapPin, Clock, Phone } from "lucide-react";
import Container from "../Container";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay"; // optional, but good to include

const Contact = () => {
  const cards = [
    {
      icon: Mail,
      title: "Email us",
      content: "info@renax.com",
      bgColor: "bg-neutralColor",
      iconColor: "text-amber-400",
    },
    {
      icon: MapPin,
      title: "Our address",
      content: "Dubai, Water Tower, Office 123",
      bgColor: "bg-neutralColor",
      iconColor: "text-amber-400",
    },
    {
      icon: Clock,
      title: "Opening Hours",
      content: "Mon-Sun: 8 AM - 7 PM",
      bgColor: "bg-neutralColor",
      iconColor: "text-amber-400",
    },
    {
      icon: Phone,
      title: "Call us",
      content: "+971 52-333-4444",
      bgColor: "bg-neutralColor",
      iconColor: "text-amber-400",
    },
  ];

  return (
    <>
      <div className="">
        <section
          className="relative py-32 lg:py-64 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${BackgroundOne})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center text-white container mx-auto px-4">
            <p className="text-sm lg:text-base tracking-[8px] uppercase text-mainColor">
              Get in touch
            </p>
            <h1 className="mt-4 text-4xl lg:text-6xl font-bold">
              Contact <span className="text-mainColor">Us</span>
            </h1>
          </div>
        </section>

        <div className="w-full bg-secondaryColor py-12 px-3">
          <Container>
            {/* Contact Information Cards – now inside Swiper */}
            <div className="max-w-7xl mx-auto -mt-30">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 4 },
                }}
                loop={true} // continuous loop
                autoplay={{
                  delay: 4000, // 4 seconds per slide
                  disableOnInteraction: false, // keep playing after user swipe
                  pauseOnMouseEnter: true, // pause when hovering
                }}
                grabCursor={true}
                className="!px-4 !pb-10" // padding to prevent edge clipping
              >
                {cards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <SwiperSlide key={index}>
                      <div
                        className={`${card.bgColor} hover:bg-mainColor rounded-3xl p-8 flex flex-col items-start space-y-4 transition-all duration-300 hover:scale-105 group h-full`}
                      >
                        <div
                          className={`${card.iconColor} group-hover:text-zinc-900 w-12 h-12 flex items-center justify-center transition-colors duration-300`}
                        >
                          <Icon size={48} strokeWidth={1.5} />
                        </div>
                        <h3
                          className={`text-2xl font-bold ${
                            card.textColor || "text-white"
                          } group-hover:text-zinc-900 transition-colors duration-300`}
                        >
                          {card.title}
                        </h3>
                        <p
                          className={`${
                            card.textColor || "text-gray-400"
                          } group-hover:text-zinc-900 text-base transition-colors duration-300`}
                        >
                          {card.content}
                        </p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Contact;
