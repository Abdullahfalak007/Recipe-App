import { useNavigate } from "react-router-dom";
import { Recipe } from "../../types/types";

interface UseRecipeCardProps {
  recipe: Recipe;
  onViewRecipe?: (id: number) => void;
}

export const useRecipeCard = ({ recipe, onViewRecipe }: UseRecipeCardProps) => {
  const navigate = useNavigate();

  const handleViewRecipe = () => {
    if (onViewRecipe) {
      onViewRecipe(recipe.id);
    } else {
      navigate(`/recipe/${recipe.id}`);
    }
  };

  return { handleViewRecipe };
};
