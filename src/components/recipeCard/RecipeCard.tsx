import React from "react";
import { RecipeCardProps } from "../../types/types";
import Button from "../button/Button";
import { COLORS } from "../../constants/colors";
import { useRecipeCard } from "./useRecipeCard";

const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  layout = "vertical",
  onViewRecipe,
}) => {
  const { handleViewRecipe } = useRecipeCard({ recipe, onViewRecipe });

  return (
    <div
      className={
        layout === "vertical"
          ? "shadow-md rounded-3xl flex flex-col w-full max-w-xs"
          : "shadow-md rounded-3xl flex flex-col md:flex-row"
      }
      style={{ backgroundColor: COLORS.Bg }}
    >
      <div
        className={
          layout === "vertical"
            ? "w-full aspect-[403/212] overflow-hidden rounded-t-3xl"
            : "w-full aspect-[403/212] md:aspect-auto md:w-60 md:h-48 flex-none overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-t-none"
        }
      >
        <img
          src={recipe.thumbnail_url}
          alt={recipe.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-8 flex flex-col flex-grow justify-center items-start">
        <div>
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
        </div>
        <div>
          <Button label="View Recipe" onClick={handleViewRecipe} />
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
