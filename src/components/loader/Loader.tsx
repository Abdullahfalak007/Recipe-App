import React from "react";
import { IMAGES } from "../../constants/images";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <img src={IMAGES.loaderGif} alt="Loading..." />
    </div>
  );
};

export default Loader;
