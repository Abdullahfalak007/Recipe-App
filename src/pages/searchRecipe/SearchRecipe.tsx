import React from "react";
import { IMAGES } from "../../constants/images";
import RecipeCard from "../../components/recipeCard/RecipeCard";
import Loader from "../../components/loader/Loader";
import { useSearchRecipe } from "./useSearchRecipe";
import { COLORS } from "../../constants/colors";

const SearchRecipe: React.FC = () => {
  const {
    searchTerm,
    setSearchTerm,
    searchResults,
    searchLoading,
    searchError,
    handleKeyDown,
  } = useSearchRecipe();

  return (
    <div className="container w-[85%] mx-auto px-4">
      {/* Search Header Section */}
      <div className="my-32 flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Search Recipes
        </h1>
        <div className="relative w-full max-w-xl">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <img src={IMAGES.search} alt="Search Icon" className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Search Recipes"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full pl-10 pr-3 py-2 rounded-2xl focus:outline-none focus:ring-2"
            style={{ backgroundColor: COLORS.Bg }}
          />
        </div>
      </div>

      {/* Search Results Section */}
      <div className="container mx-auto py-8">
        {searchLoading && <Loader />}
        {searchError && (
          <p className="text-center text-red-500">Error: {searchError}</p>
        )}
        {!searchLoading && !searchError && searchResults.length > 0 && (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-left mb-6">
              Search Result
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
              {searchResults?.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} layout="vertical" />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchRecipe;
