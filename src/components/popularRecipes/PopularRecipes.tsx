import React from "react";
import { useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { COLORS } from "../../constants/colors";

const PopularRecipes: React.FC = () => {
  const { popularRecipes } = useAppSelector((state) => state.recipes);
  const navigate = useNavigate();
  if (!popularRecipes.length) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Popular Recipes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {popularRecipes?.map((recipe) => (
          <div
            key={recipe.id}
            className="shadow-md rounded-lg flex flex-col w-full sm:max-w-sm"
            style={{
              backgroundColor: COLORS.Bg,
            }}
          >
            {/* Image Section using a responsive aspect ratio */}
            <div className="w-full aspect-[403/212] rounded-t-lg overflow-hidden">
              <img
                src={recipe.thumbnail_url}
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content Section */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-2">{recipe.name}</h3>
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
              <div className="mt-auto">
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

export default PopularRecipes;
