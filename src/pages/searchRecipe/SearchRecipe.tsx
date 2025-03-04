// // src/pages/searchRecipe/SearchRecipe.tsx
// import React, { useState } from "react";
// import { useAppDispatch, useAppSelector } from "../../store/hooks";
// import { searchRecipes } from "../../store/slices/recipesSlice";
// import { IMAGES } from "../../constants/images";
// import Button from "../../components/button/Button";
// import { useNavigate } from "react-router-dom";

// const SearchRecipe: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();
//   const { searchResults, searchLoading, searchError } = useAppSelector(
//     (state) => state.recipes
//   );

//   // Trigger search on pressing Enter
//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter" && searchTerm.trim()) {
//       dispatch(searchRecipes(searchTerm.trim()));
//     }
//   };

//   return (
//     <div>
//       {/* Search Header Section with vertical margin my-[34px] */}
//       <div className="my-34 flex flex-col items-center">
//         <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
//           Search Recipes
//         </h1>
//         <div className="relative w-[758px] h-[64.17px]">
//           {/* Search icon on the left */}
//           <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
//             <img src={IMAGES.search} alt="Search Icon" className="w-6 h-6" />
//           </div>
//           <input
//             type="text"
//             placeholder="Search Recipes"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             onKeyDown={handleKeyDown}
//             className="w-full h-full pl-12 pr-4 rounded-[22.5px] border border-gray-300 focus:outline-none focus:ring-2"
//           />
//         </div>
//       </div>

//       {/* Search Results Section */}
//       <div className="container mx-auto px-4 py-8">
//         {searchLoading && (
//           <p className="text-center text-xl font-semibold">Searching...</p>
//         )}
//         {searchError && (
//           <p className="text-center text-red-500">Error: {searchError}</p>
//         )}
//         {!searchLoading && !searchError && searchResults.length > 0 && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
//             {searchResults.map((recipe) => (
//               <div
//                 key={recipe.id}
//                 className="bg-white shadow-md rounded-b-lg flex flex-col"
//               >
//                 {/* Top section with fixed dimensions and rounded top corners */}
//                 <div className="w-[403px] h-[212.04px] rounded-t-[33px] overflow-hidden">
//                   <img
//                     src={recipe.thumbnail_url}
//                     alt={recipe.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 {/* Content below the image */}
//                 <div className="p-4 flex flex-col flex-grow w-[403px]">
//                   <h3 className="text-lg font-semibold mb-2">{recipe.name}</h3>
//                   {/* Two-line ellipsis for description */}
//                   <p
//                     className="text-sm text-gray-600 mb-4 overflow-hidden"
//                     style={{
//                       display: "-webkit-box",
//                       WebkitLineClamp: 2,
//                       WebkitBoxOrient: "vertical",
//                     }}
//                   >
//                     {recipe.description || "No description available."}
//                   </p>
//                   <div className="mt-auto">
//                     <Button
//                       label="View Recipe"
//                       onClick={() => navigate(`/recipe/${recipe.id}`)}
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchRecipe;

// src/pages/searchRecipe/SearchRecipe.tsx
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { searchRecipes } from "../../store/slices/recipesSlice";
import { IMAGES } from "../../constants/images";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../constants/colors";

const SearchRecipe: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { searchResults, searchLoading, searchError } = useAppSelector(
    (state) => state.recipes
  );

  // Trigger search on pressing Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      dispatch(searchRecipes(searchTerm.trim()));
    }
  };

  return (
    <div className="px-4">
      {/* Search Header Section */}
      <div className="my-28 flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Search Recipes
        </h1>
        {/* Use fluid width with max width */}
        <div className="relative w-full max-w-xl ">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <img src={IMAGES.search} alt="Search Icon" className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Search Recipes"
            style={{ backgroundColor: COLORS.Bg }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full pl-10 pr-3 py-2 rounded-full focus:outline-none focus:ring-2"
          />
        </div>
      </div>

      {/* Search Results Section */}
      <div className="container mx-auto py-8">
        {searchLoading && (
          <p className="text-center text-xl font-semibold">Searching...</p>
        )}
        {searchError && (
          <p className="text-center text-red-500">Error: {searchError}</p>
        )}
        {!searchLoading && !searchError && searchResults.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {searchResults.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white shadow-md flex flex-col w-full sm:max-w-sm"
              >
                {/* Image Section */}
                <div className="w-full overflow-hidden">
                  <img
                    src={recipe.thumbnail_url}
                    alt={recipe.name}
                    className="w-full h-auto object-cover rounded-t-xl"
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
        )}
      </div>
    </div>
  );
};

export default SearchRecipe;
