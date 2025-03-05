import React from "react";
import { COLORS } from "../../constants/colors";
import { useRecipeDetail } from "./useRecipeDetail";

const RecipeDetail: React.FC = () => {
  const { recipe } = useRecipeDetail();

  if (!recipe) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <p className="text-center text-xl">Recipe not found.</p>
      </div>
    );
  }

  const {
    name,
    thumbnail_url,
    description,
    sections,
    instructions,
    tips_and_ratings_enabled,
    tips_summary,
    total_time_minutes,
    total_time_tier,
    user_ratings,
    yields,
    topics,
  } = recipe;

  return (
    <div>
      {/* Hero Image Section */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <img
          src={thumbnail_url}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: COLORS.overlay }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center px-2">
            {name}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-8xl px-4 py-8 space-y-8">
        {/* Description & Quick Info */}
        <div>
          {description && (
            <p className="text-lg text-gray-700 mb-4">{description}</p>
          )}
          <div className="flex flex-wrap items-center gap-4">
            {total_time_minutes && (
              <div className="flex items-center space-x-2">
                <span className="font-semibold">Total Time:</span>
                <span className="text-gray-600">
                  {total_time_tier?.display_tier ||
                    `${total_time_minutes} minutes`}
                </span>
              </div>
            )}
            {yields && (
              <div className="flex items-center space-x-2">
                <span className="font-semibold">Servings:</span>
                <span className="text-gray-600">{yields}</span>
              </div>
            )}
            {user_ratings && (
              <div className="flex items-center space-x-2">
                <span className="font-semibold">Ratings:</span>
                <span className="text-gray-600">
                  {user_ratings.count_positive} positive /{" "}
                  {user_ratings.count_negative} negative
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Tips */}
        {tips_and_ratings_enabled && tips_summary?.content && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
              {tips_summary.header || "Tips"}
            </h2>
            <p className="text-gray-700 whitespace-pre-line">
              {tips_summary.content}
            </p>
          </div>
        )}

        {/* Ingredients */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
          <ul className="list-disc list-inside space-y-1">
            {sections?.[0]?.components?.map((ingredient, index) => (
              <li key={index}>{ingredient.raw_text}</li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
          <ol className="list-decimal list-inside space-y-1">
            {instructions?.map((instruction, index) => (
              <li key={index}>{instruction.display_text}</li>
            ))}
          </ol>
        </div>

        {/* Topics */}
        {topics && topics.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Topics</h2>
            <ul className="flex flex-wrap gap-2">
              {topics?.map((topic, idx) => (
                <li
                  key={idx}
                  className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700"
                >
                  {topic.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetail;
