// src/components/button/Button.tsx
import React, { useState } from "react";
import { COLORS } from "../../constants/colors";
import { ButtonProps } from "../../types/types";

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: hover ? COLORS.secondaryColor : COLORS.primary, // same color or a darker shade for hover
      }}
      className={`transition-colors duration-100 w-40 h-8 rounded-full flex items-center justify-center gap-2 font-bold  text-black`}
    >
      {label}
    </button>
  );
};

export default Button;
