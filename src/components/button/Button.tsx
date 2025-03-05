import React, { useState } from "react";
import { COLORS } from "../../constants/colors";
import { ButtonProps } from "../../types/types";
import { useButton } from "./useButton";

const Button: React.FC<ButtonProps> = (props) => {
  const { hover, setHover, handleClick } = useButton(props);

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: hover ? COLORS.secondaryColor : COLORS.primary, // same color or a darker shade for hover
      }}
      className={`transition-colors duration-100 w-40 h-8 rounded-full flex items-center justify-center gap-2 font-bold  text-black`}
    >
      {props.label}
    </button>
  );
};

export default Button;
