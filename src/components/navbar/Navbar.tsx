import React from "react";
import { IMAGES } from "../../constants/images";
import { MENUITEMS } from "../../constants/menu";
import { COLORS } from "../../constants/colors";
import { useNavbar } from "./useNavbar";

const Navbar: React.FC = () => {
  const {
    searchTerm,
    isMenuOpen,
    setSearchTerm,
    setIsMenuOpen,
    handleKeyDown,
  } = useNavbar();

  return (
    <>
      {/* Top bar */}
      <div
        style={{
          backgroundColor: COLORS.primary,
          height: "1.5rem",
          width: "100%",
        }}
      ></div>

      {/* Main Navbar */}
      <nav className="px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img src={IMAGES.logo} alt="Logo" className="h-5 w-auto" />
            {/* Logo text hidden on mobile */}
            <span
              style={{ color: COLORS.navbarText }}
              className="hidden md:inline-block text-[26px] font-inter"
            >
              Delícias à Mesa
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {MENUITEMS?.map((item, index) => (
              <li
                key={index}
                style={{ color: COLORS.navbarText }}
                className="font-bold hover:underline"
              >
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>

          {/* Right side: Desktop Search Bar & Mobile Hamburger */}
          <div className="flex items-center space-x-4">
            {/* Search Bar (desktop only) */}
            <div className="hidden xl:block relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <img
                  src={IMAGES.search}
                  alt="Search"
                  style={{
                    filter: `brightness(0) saturate(100%) invert(41%) sepia(9%) saturate(0%) hue-rotate(191deg) brightness(93%) contrast(86%)`,
                  }}
                  className="w-4 h-4"
                />
              </div>
              <input
                type="text"
                placeholder="Search Recipes"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{
                  borderColor: COLORS.borderGray,
                  backgroundColor: COLORS.Bg,
                }}
                className="pl-10 pr-3 py-1 rounded-2xl focus:outline-none focus:ring-2"
              />
            </div>

            {/* Hamburger Icon (mobile only) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden"
            >
              <img src={IMAGES.hamburgerIcon} alt="Menu" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="mt-4 space-y-2 xl:hidden">
            {MENUITEMS?.map((item, index) => (
              <li
                key={index}
                style={{ color: COLORS.navbarText }}
                className="font-medium hover:underline"
              >
                <a href={item.path} onClick={() => setIsMenuOpen(false)}>
                  {item?.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
