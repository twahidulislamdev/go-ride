import React from "react";
import Container from "../Container";
import {
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaArrowRight,
  FaCar,
  FaUsers,
  FaInfoCircle,
  FaEnvelope,
  FaListAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Car", icon: FaCar, href: "#cars" },
    { name: "Team", icon: FaUsers, href: "#team" },
    { name: "About", icon: FaInfoCircle, href: "#about" },
    { name: "Contact", icon: FaEnvelope, href: "#contact" },
    { name: "Car Type", icon: FaListAlt, href: "#types" },
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, text: "123 Street, City, Country" },
    { icon: FaPhone, text: "+1 234 567 890" },
    { icon: FaClock, text: "Mon - Sun: 24/7" },
  ];

  return (
    <footer className="bg-gradient-to-b from-secondaryColor to-neutral-900 border-t-2 border-neutral-800 shadow-2xl mb-20 lg:mb-0 px-3 lg:px-0">
      {/* ===== MAIN FOOTER CONTENT ===== */}
      <div className="py-10 sm:py-14 md:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
            {/* ---- BRAND & CONTACT ---- */}
            <div className="lg:col-span-4 xl:col-span-5 text-center sm:text-center lg:text-left">
              {/* Logo */}
              <div className="inline-flex items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="w-10 h-10  bg-mainColor rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-lg sm:text-2xl font-bold text-white">
                    R
                  </span>
                </div>
                <h2 className="text-4xl  md:text-4xl font-bold text-white">
                  <span className="text-mainColor">REN</span>AX
                </h2>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                Your trusted partner for premium car rental services. Experience
                luxury, comfort, and reliability on every journey.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center lg:justify-start gap-3 text-white/70 hover:text-white transition-colors duration-300"
                  >
                    <item.icon className="text-mainColor text-sm flex-shrink-0" />
                    <span className="text-sm sm:text-base">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4">
                {[
                  {
                    Icon: FaFacebookF,
                    label: "Facebook",
                    color: "hover:bg-blue-600",
                  },
                  {
                    Icon: FaWhatsapp,
                    label: "WhatsApp",
                    color: "hover:bg-green-500",
                  },
                  {
                    Icon: FaYoutube,
                    label: "YouTube",
                    color: "hover:bg-red-600",
                  },
                ].map(({ Icon, label, color }, i) => (
                  <button
                    key={i}
                    className={`group flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-neutral-800 border border-neutral-700 ${color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-transparent`}
                    aria-label={label}
                  >
                    <Icon className="text-white text-sm sm:text-lg group-hover:text-white transition-colors" />
                  </button>
                ))}
              </div>
            </div>

            {/* ---- QUICK LINKS & SUBSCRIBE ---- */}
            <div className="lg:col-span-8 xl:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                {/* Quick Links */}
                <div className="text-center sm:text-left">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-mainColor/50 inline-block">
                    Quick Links
                  </h4>

                  <ul className="space-y-2 flex justify-center items-center lg:justify-start lg:items-start lg:flex-col flex-wrap">
                    {quickLinks.map((link, idx) => {
                      const Icon = link.icon;
                      return (
                        <li
                          key={idx}
                          className="group flex items-center justify-between gap-3 py-2 px-3 sm:py-3 sm:px-4 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10 cursor-pointer"
                          onClick={() => (window.location.href = link.href)}
                        >
                          <div className="flex items-center gap-2 sm:gap-3">
                            <Icon className="text-mainColor text-base sm:text-lg flex-shrink-0 transition-transform group-hover:scale-110" />
                            <span className="text-sm sm:text-base font-medium transition-all group-hover:translate-x-1">
                              {link.name}
                            </span>
                          </div>
                          <FaArrowRight className="hidden sm:inline text-mainColor text-sm opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Subscribe Section ( width extended) */}
                <div className="text-center sm:text-left flex justify-center sm:justify-start">
                  <div className="w-full sm:w-[90%] md:w-[95%] lg:w-full">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-mainColor/50 inline-block">
                      Stay Updated
                    </h4>

                    <div className="bg-neutral-800/50 rounded-2xl p-5 sm:p-6 border border-neutral-700 hover:border-neutral-600 transition-all duration-300">
                      <p className="text-white/80 text-sm sm:text-base mb-6 leading-relaxed">
                        Get the latest updates on new vehicles, special offers,
                        and exclusive deals delivered to your inbox.
                      </p>

                      <div className="space-y-4">
                        <div className="relative">
                          <input
                            type="email"
                            placeholder="Enter your email..."
                            className="w-full py-3 sm:py-4 pl-4 sm:pl-6 pr-16 sm:pr-20 rounded-2xl bg-neutral-900 border-2 border-neutral-700 text-white placeholder:text-neutral-400 text-sm sm:text-base focus:outline-none focus:border-mainColor transition-colors duration-300 shadow-inner"
                          />
                          <button
                            aria-label="Subscribe"
                            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-r from-mainColor to-mainColor/80 hover:from-mainColor/90 hover:to-mainColor/70 transition-all duration-300 shadow-lg hover:shadow-mainColor/25 hover:scale-105"
                          >
                            <FaArrowRight className="text-white text-sm sm:text-base" />
                          </button>
                        </div>

                        <p className="text-xs text-neutral-400">
                          🔒 We respect your privacy. No spam, unsubscribe
                          anytime.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Subscribe Section */}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ===== COPYRIGHT SECTION ===== */}
      <div className="border-t border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
        <Container>
          <div className="py-6 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-center md:text-left">
            <p className="text-xs sm:text-sm text-neutral-400">
              © 2024 <span className="text-mainColor font-semibold">Renax</span>
              . All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              {["Privacy Policy", "Terms of Service", "Cookies", "Support"].map(
                (txt) => (
                  <a
                    key={txt}
                    href="#"
                    className="text-neutral-400 hover:text-mainColor hover:underline transition-all duration-300 font-medium"
                  >
                    {txt}
                  </a>
                )
              )}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
