// import React from "react";
// import { IMAGES } from "../../constants/images";
// import { MENUITEMS } from "../../constants/menu";

// const Navbar = () => {
//   return (
//     <>
//       {/* Yellow Background Div */}
//       <div className="bg-yellow-300 h-6 w-full"></div>

//       {/* White Navbar */}
//       <nav className="flex items-center justify-between px-6 py-3 bg-white">
//         {/* Logo Section */}
//         <div className="flex items-center space-x-2">
//           <img src={IMAGES.logo} alt="Logo" className="h-5 w-auto" />
//           <span className="text-[26px] font-medium font-inter">
//             Delícias à Mesa
//           </span>
//         </div>

//         {/* Menu Items */}
//         <ul className="flex space-x-6">
//           {MENUITEMS.map((item, index) => (
//             <li key={index} className="text-black font-medium hover:underline">
//               <a href={item.path}>{item.name}</a>
//             </li>
//           ))}
//         </ul>

//         {/* Search Bar */}
//         <div className="relative">
//           {/* Search Icon */}
//           <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
//             <img
//               src={IMAGES.search}
//               alt="Search"
//               className="w-4 h-4 text-gray-500"
//             />
//           </div>
//           <input
//             type="text"
//             placeholder="Search Recipe"
//             className="pl-10 pr-3 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           />
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// src/components/navbar/Navbar.tsx
import React from "react";
import { IMAGES } from "../../constants/images";
import { MENUITEMS } from "../../constants/menu";
import { COLORS } from "../../constants/colors";

const Navbar = () => {
  return (
    <>
      {/* Top bar using color constant */}
      <div
        style={{
          backgroundColor: COLORS.primary,
          height: "1.5rem",
          width: "100%",
        }}
      ></div>

      {/* Navbar */}
      <nav
        style={{ backgroundColor: COLORS.navbarBg }}
        className="flex items-center justify-between px-6 py-3"
      >
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={IMAGES.logo} alt="Logo" className="h-5 w-auto" />
          <span
            style={{ color: COLORS.navbarText }}
            className="text-[26px] font-medium font-inter"
          >
            Delícias à Mesa
          </span>
        </div>

        {/* Menu Items */}
        <ul className="flex space-x-6">
          {MENUITEMS.map((item, index) => (
            <li
              key={index}
              style={{ color: COLORS.navbarText }}
              className="font-medium hover:underline"
            >
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <img
              src={IMAGES.search}
              alt="Search"
              // For SVGs you might set fill via CSS. Here you can adjust with filters or use an inline SVG.
              style={{
                filter: `brightness(0) saturate(100%) invert(41%) sepia(9%) saturate(0%) hue-rotate(191deg) brightness(93%) contrast(86%)`,
              }}
              className="w-4 h-4"
            />
          </div>
          <input
            type="text"
            placeholder="Search Recipe"
            style={{ borderColor: COLORS.borderGray }}
            className="pl-10 pr-3 py-1 rounded-full border focus:outline-none focus:ring-2"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
