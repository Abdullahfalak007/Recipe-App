// import React from "react";
// import { useAppSelector } from "../../store/hooks";
// import Button from "../button/Button";

// const RecentRecipes: React.FC = () => {
//   // Grab the full recipes array from Redux
//   const { recipes } = useAppSelector((state) => state.recipes);

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
//             className="border border-dashed border-gray-300 bg-white shadow-md rounded-lg p-4 flex flex-col sm:flex-row"
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
//                 <p className="text-gray-600">
//                   {recipe.description || "No description available."}
//                 </p>
//               </div>
//               <div className="mt-4">
//                 <Button
//                   label="View Recipe"
//                   onClick={() => alert(`Clicked on ${recipe.name}`)}
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

import React from "react";
import { useAppSelector } from "../../store/hooks";
import Button from "../button/Button";

const RecentRecipes: React.FC = () => {
  // Grab the full recipes array from Redux
  const { recipes } = useAppSelector((state) => state.recipes);

  // Pick the last 3 recipes (reverse so the newest appears first)
  const recentRecipes = [...recipes].slice(-3).reverse();

  // If there are no recipes, render nothing (or a fallback)
  if (!recentRecipes.length) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Recent Recipes
      </h2>

      {/* Vertical list of "recent recipe" cards */}
      <div className="flex flex-col space-y-6">
        {recentRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="border border-gray-300 bg-white shadow-md rounded-lg p-4 flex flex-col sm:flex-row"
          >
            {/* Image on the left (on sm+ screens) */}
            <div className="sm:w-1/3 mb-4 sm:mb-0">
              <img
                src={recipe.thumbnail_url}
                alt={recipe.name}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            {/* Text on the right */}
            <div className="sm:w-2/3 sm:pl-4 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
                {/* Three-line ellipsis for description */}
                <p
                  className="text-gray-600 mb-4 overflow-hidden"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {recipe.description || "No description available."}
                </p>
              </div>
              <div className="mt-4">
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

export default RecentRecipes;
