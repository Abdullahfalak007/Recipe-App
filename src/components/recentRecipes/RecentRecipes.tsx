import React from "react";
import RecipeCard from "../recipeCard/RecipeCard";
import { useRecentRecipes } from "./useRecentRecipes";

const RecentRecipes: React.FC = () => {
  const { recentRecipes } = useRecentRecipes();

  return (
    <div className="container w-[80%] mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Recent Recipes
      </h2>
      <div className="flex flex-col space-y-6">
        {recentRecipes?.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} layout="horizontal" />
        ))}
      </div>
    </div>
  );
};

export default RecentRecipes;
