import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/useStoreHook";

export const useRecentRecipes = () => {
  const { recipes } = useAppSelector((state) => state.recipes);
  const navigate = useNavigate();

  const recentRecipes = [...recipes].slice(-3).reverse();

  return { recentRecipes, navigate };
};
