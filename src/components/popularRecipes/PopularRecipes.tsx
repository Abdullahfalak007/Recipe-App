import React from "react";
import RecipeCard from "../recipeCard/RecipeCard";
import { usePopularRecipes } from "./usePopularRecipes";

const PopularRecipes: React.FC = () => {
  const { popularRecipes } = usePopularRecipes();

  return (
    <div className="container w-[85%] mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Popular Recipes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {popularRecipes?.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} layout="vertical" />
        ))}
      </div>
    </div>
  );
};

export default PopularRecipes;
