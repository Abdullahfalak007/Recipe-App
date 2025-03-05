import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useStoreHook";
import { searchRecipes } from "../../store/slices/recipesSlice";
import { useNavigate } from "react-router-dom";

export const useSearchRecipe = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const { searchResults, searchLoading, searchError } = useAppSelector(
    (state) => state.recipes
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      dispatch(searchRecipes(searchTerm.trim()));
    }
  };

  return {
    searchTerm,
    setSearchTerm,
    searchResults,
    searchLoading,
    searchError,
    handleKeyDown,
    navigate,
  };
};
