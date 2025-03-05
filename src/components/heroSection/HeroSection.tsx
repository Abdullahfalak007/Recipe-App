import React from "react";
import { IMAGES } from "../../constants/images";
import { COLORS } from "../../constants/colors";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-64 md:h-80 lg:h-96 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${IMAGES.hero})` }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: COLORS.overlay }}
      />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Get Inspired, Cook with Passion and Enjoy <br />
          Unforgettable Moments at the Table
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
