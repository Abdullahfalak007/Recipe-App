import { useState } from "react";
import { ButtonProps } from "../../types/types";

export const useButton = ({ onClick }: ButtonProps) => {
  const [hover, setHover] = useState(false);

  return {
    hover,
    setHover,
    handleClick: onClick,
  };
};
