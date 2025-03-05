import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./useStoreHook";
import { fetchRecipes } from "../store/slices/recipesSlice";

export const useFetchRecipes = () => {
  const dispatch = useAppDispatch();
  const { recipes, loading, error } = useAppSelector((state) => state.recipes);

  const loadRecipes = () => {
    dispatch(fetchRecipes());
  };

  // Optionally, auto-fetch on mount:
  useEffect(() => {
    loadRecipes();
  }, [dispatch]);

  return { recipes, loading, error, loadRecipes }; //add loadRecipes in the curly braces behind
};
