import React from "react";
import { COLORS } from "../../constants/colors";
import { IMAGES } from "../../constants/images";

const Footer: React.FC = () => {
  return (
    <footer className="py-12" style={{ backgroundColor: COLORS.primary }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Logo & Brand Name */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img src={IMAGES.logo} alt="Logo" className="h-5 w-auto" />
          <span
            style={{ color: COLORS.navbarText }}
            className="hidden md:inline-block text-[26px] font-medium font-inter"
          >
            Delícias à Mesa
          </span>
        </div>

        {/* Social Media */}
        <div className="md:ml-[20%] lg:ml-[25%] xl:ml-[40%] 2xl:ml-[50%] flex flex-col items-center md:justify-around">
          <span
            style={{ color: COLORS.navbarText }}
            className="font-medium mb-2"
          >
            Redes sociais:
          </span>
          <div className="flex space-x-2">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block p-2 rounded"
              style={{ backgroundColor: COLORS.secondaryColor }}
            >
              <img src={IMAGES.youtubeIcon} alt="YouTube" className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block p-2 rounded"
              style={{ backgroundColor: COLORS.secondaryColor }}
            >
              <img src={IMAGES.xIcon} alt="X (Twitter)" className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block p-2 rounded"
              style={{ backgroundColor: COLORS.secondaryColor }}
            >
              <img
                src={IMAGES.linkedInIcon}
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </a>
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block p-2 rounded"
              style={{ backgroundColor: COLORS.secondaryColor }}
            >
              <img
                src={IMAGES.pinterestIcon}
                alt="Pinterest"
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
