import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/useStoreHook";

export const useRecipeDetail = () => {
  const { id } = useParams<{ id: string }>();

  const recipe = useAppSelector(
    (state) =>
      state.recipes.recipes.find((r) => r.id === Number(id)) ||
      state.recipes.searchResults.find((r) => r.id === Number(id))
  );

  return { recipe };
};
