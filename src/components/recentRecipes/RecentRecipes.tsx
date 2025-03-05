import React from "react";
import Button from "../button/Button";
import { useRecentRecipes } from "./useRecentRecipes";
import { COLORS } from "../../constants/colors";

const RecentRecipes = () => {
  const { recentRecipes, navigate } = useRecentRecipes();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Recent Recipes
      </h2>

      <div className="flex flex-col space-y-6">
        {recentRecipes?.map((recipe) => (
          <div
            key={recipe.id}
            className="w-full max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row"
            style={{
              backgroundColor: COLORS.Bg,
            }}
          >
            {/* Image */}
            <div className="w-full h-48 md:w-48 md:h-48 flex-none">
              <img
                src={recipe.thumbnail_url}
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="mt-6 md:mt-4 md:ml-6 flex-1">
              <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
              <p
                className="text-gray-600 overflow-hidden"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {recipe.description || "No description available."}
              </p>
              <div className="mt-4">
                <Button
                  label="View Recipe"
                  onClick={() => navigate(`/recipe/${recipe.id}`)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentRecipes;
