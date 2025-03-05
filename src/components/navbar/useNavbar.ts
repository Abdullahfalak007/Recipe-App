import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useStoreHook";
import { searchRecipes } from "../../store/slices/recipesSlice";

export const useNavbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      dispatch(searchRecipes(searchTerm.trim()));
      navigate("/recipes");
    }
  };

  return {
    searchTerm,
    isMenuOpen,
    setSearchTerm,
    setIsMenuOpen,
    handleKeyDown,
  };
};
