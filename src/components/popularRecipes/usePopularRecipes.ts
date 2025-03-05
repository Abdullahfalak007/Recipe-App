import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/useStoreHook";

export const usePopularRecipes = () => {
  const { popularRecipes } = useAppSelector((state) => state.recipes);
  const navigate = useNavigate();

  return { popularRecipes, navigate };
};
