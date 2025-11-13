import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialCard = ({ name, role, image, text, rating }) => {
  return (
    <div className="relative group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl text-white transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
      {/* Decorative Quote Icon */}
      <FaQuoteLeft className="absolute top-5 left-5 text-4xl text-yellow-400/70 opacity-30 group-hover:opacity-50 transition-opacity duration-300" />

      {/* Review Text */}
      <p className="mt-12 mb-8 text-gray-300 leading-relaxed italic">
        “{text}”
      </p>

      {/* Reviewer Info */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border border-yellow-400/50 shadow-md"
        />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>

      {/* Rating Stars */}
      <div className="absolute top-5 right-5 flex gap-1 text-yellow-400">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="drop-shadow-sm" />
        ))}
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default TestimonialCard;
