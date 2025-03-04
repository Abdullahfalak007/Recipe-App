// import React from "react";
// import { useAppSelector } from "../../store/hooks";
// import Button from "../button/Button";
// import { useNavigate } from "react-router-dom";

// const RecentRecipes: React.FC = () => {
//   // Grab the full recipes array from Redux
//   const { recipes } = useAppSelector((state) => state.recipes);

//   const navigate = useNavigate();

//   // Pick the last 3 recipes (reverse so the newest appears first)
//   const recentRecipes = [...recipes].slice(-3).reverse();

//   // If there are no recipes, render nothing (or a fallback)
//   if (!recentRecipes.length) {
//     return null;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Section Title */}
//       <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
//         Recent Recipes
//       </h2>

//       {/* Vertical list of "recent recipe" cards */}
//       <div className="flex flex-col space-y-6">
//         {recentRecipes.map((recipe) => (
//           <div
//             key={recipe.id}
//             className="border border-gray-300 bg-white shadow-md rounded-lg p-4 flex flex-col sm:flex-row"
//           >
//             {/* Image on the left (on sm+ screens) */}
//             <div className="sm:w-1/3 mb-4 sm:mb-0">
//               <img
//                 src={recipe.thumbnail_url}
//                 alt={recipe.name}
//                 className="w-full h-48 object-cover rounded-lg"
//               />
//             </div>

//             {/* Text on the right */}
//             <div className="sm:w-2/3 sm:pl-4 flex flex-col justify-between">
//               <div>
//                 <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
//                 {/* Three-line ellipsis for description */}
//                 <p
//                   className="text-gray-600 mb-4 overflow-hidden"
//                   style={{
//                     display: "-webkit-box",
//                     WebkitLineClamp: 3,
//                     WebkitBoxOrient: "vertical",
//                   }}
//                 >
//                   {recipe.description || "No description available."}
//                 </p>
//               </div>
//               <div className="mt-4">
//                 <Button
//                   label="View Recipe"
//                   onClick={() => navigate(`/recipe/${recipe.id}`)}
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentRecipes;

// src/components/recentrecipes/RecentRecipes.tsx
import React from "react";
import { useAppSelector } from "../../store/hooks";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../constants/colors";

const RecentRecipes: React.FC = () => {
  const { recipes } = useAppSelector((state) => state.recipes);
  const navigate = useNavigate();
  const recentRecipes = [...recipes].slice(-3).reverse();
  if (!recentRecipes.length) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Recent Recipes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recentRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="shadow-md rounded-lg flex flex-col overflow-hidden"
            style={{
              backgroundColor: COLORS.Bg,
            }}
          >
            {/* Image Section using fluid aspect ratio */}
            <div className="w-full">
              {/* Using Tailwind's aspect-video utility (or similar) to maintain ratio */}
              <div className="aspect-video">
                <img
                  src={recipe.thumbnail_url}
                  alt={recipe.name}
                  className="w-full h-full object-cover"
                />
              </div>
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

export default RecentRecipes;
