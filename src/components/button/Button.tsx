// // src/components/button/Button.tsx
// import React, { useState } from "react";
// import { COLORS } from "../../constants/colors";

// interface ButtonProps {
//   label: string;
//   onClick: () => void;
// }

// const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
//   const [hover, setHover] = useState(false);

//   return (
//     <button
//       onClick={onClick}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//       className="transition-colors duration-300 bo"
//       style={{
//         backgroundColor: hover ? COLORS.primary : COLORS.primary, // same color or a darker shade for hover
//         color: "#000",
//         padding: "0.5rem 1rem",
//         borderRadius: "0.375rem",
//         border: "none",
//         cursor: "pointer",
//         fontWeight: "bold",
//       }}
//     >
//       {label}
//     </button>
//   );
// };

// export default Button;

// src/components/button/Button.tsx
import React, { useState } from "react";
import { COLORS } from "../../constants/colors";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: hover ? COLORS.primary : COLORS.primary, // same color or a darker shade for hover
      }}
      className={`transition-colors duration-300 w-40 h-8 rounded-full flex items-center justify-center gap-2 font-bold  text-black`}
    >
      {label}
    </button>
  );
};

export default Button;
