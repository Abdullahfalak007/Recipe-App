// src/components/popularRecipes/PopularRecipes.tsx
import React from "react";
import { useAppSelector } from "../../store/hooks";
import Button from "../button/Button";

const PopularRecipes: React.FC = () => {
  // Grab the popular recipes from Redux
  const { popularRecipes } = useAppSelector((state) => state.recipes);

  // If no popular recipes are stored, optionally return null or a fallback
  if (!popularRecipes.length) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Popular Recipes
      </h2>

      {/* Recipes Grid: center the cards and ensure each has the same dimensions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {popularRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-md rounded-b-lg flex flex-col"
          >
            {/* Top section with required width, height, and top corner radius */}
            <div className="w-[403px] h-[212.04px] rounded-t-[33px] overflow-hidden">
              <img
                src={recipe.thumbnail_url}
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content below the image */}
            <div className="p-4 flex flex-col flex-grow w-[403px]">
              <h3 className="text-lg font-semibold mb-2">{recipe.name}</h3>

              {/* Two-line ellipsis for description */}
              <p
                className="text-sm text-gray-600 mb-4 overflow-hidden"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {recipe.description || "No description available."}
              </p>

              {/* Button at bottom */}
              <div className="mt-auto">
                <Button
                  label="View Recipe"
                  onClick={() => alert(`Clicked on ${recipe.name}`)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRecipes;
