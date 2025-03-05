import React from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../../constants/colors";
import { IMAGES } from "../../constants/images";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <img src={IMAGES.logo} alt="Logo" className="w-20 mb-4" />
      <h1
        className="text-5xl font-bold mb-4"
        style={{ color: COLORS.navbarText }}
      >
        404
      </h1>
      <p className="text-xl mb-8" style={{ color: COLORS.navbarText }}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 text-white rounded-full hover:bg-orange-600 transition"
        style={{
          backgroundColor: COLORS.primary,
        }}
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
