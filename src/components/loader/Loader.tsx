import React from "react";
import { IMAGES } from "../../constants/images";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center">
      <div className="w-[80vw] h-[80vh] bg-white rounded-lg shadow-xl flex items-center justify-center">
        <img src={IMAGES.loaderGif} alt="Loading..." />
      </div>
    </div>
  );
};

export default Loader;
