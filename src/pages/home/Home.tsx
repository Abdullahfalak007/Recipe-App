// // src/pages/home/Home.tsx
// import React, { useEffect } from "react";
// import { useFetchRecipes } from "../../hooks/useFetchRecipes";
// import HeroSection from "../../components/heroSection/HeroSection";
// import PopularRecipes from "../../components/popularRecipes/PopularRecipes";

// const Home = () => {
//   const { recipes, loading, error } = useFetchRecipes();

//   // useEffect(() => {
//   //   // If you haven't already, ensure fetchRecipes() is called here
//   //   // dispatch(fetchRecipes()) or let
//   //   // useFetchRecipes;
//   // }, []);

//   if (loading) {
//     return (
//       <p className="text-center text-xl font-semibold">Loading recipes...</p>
//     );
//   }

//   if (error) {
//     return <p className="text-center text-red-500">Error: {error}</p>;
//   }

//   return (
//     <div>
//       {/* Hero Section */}
//       <HeroSection />

//       {/* Popular Recipes Section */}
//       <PopularRecipes />

//       {/* Existing Recipe List */}
//       <div className="container mx-auto p-4">
//         <h1 className="text-3xl font-bold text-center mb-6">Recipe List</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {recipes.map((recipe) => (
//             <div
//               key={recipe.id}
//               className="border rounded-lg shadow-lg overflow-hidden"
//             >
//               <img
//                 src={recipe.thumbnail_url}
//                 alt={recipe.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
//                 <p className="text-gray-700 text-sm mb-2">
//                   {recipe.description || "No description available."}
//                 </p>
//                 <h3 className="font-semibold">Ingredients:</h3>
//                 <ul className="list-disc list-inside text-sm text-gray-600">
//                   {recipe.sections?.[0]?.components.map(
//                     (ingredient: any, index: number) => (
//                       <li key={index}>{ingredient.raw_text}</li>
//                     )
//                   )}
//                 </ul>
//                 <h3 className="font-semibold mt-2">Instructions:</h3>
//                 <ol className="list-decimal list-inside text-sm text-gray-600">
//                   {recipe.instructions?.map(
//                     (instruction: any, index: number) => (
//                       <li key={index}>{instruction.display_text}</li>
//                     )
//                   )}
//                 </ol>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// src/pages/home/Home.tsx
import React, { useEffect } from "react";
import { useFetchRecipes } from "../../hooks/useFetchRecipes";
import HeroSection from "../../components/heroSection/HeroSection";
import PopularRecipes from "../../components/popularRecipes/PopularRecipes";
import RecentRecipes from "../../components/recentRecipes/RecentRecipes";

const Home = () => {
  const { recipes, loading, error } = useFetchRecipes();

  useEffect(() => {
    // If not auto-fetching in useFetchRecipes, ensure we fetch here
    // dispatch(fetchRecipes())
  }, []);

  if (loading) {
    return (
      <p className="text-center text-xl font-semibold">Loading recipes...</p>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Popular Recipes Section */}
      <PopularRecipes />

      {/* Recent Recipes Section */}
      <RecentRecipes />

      {/* Existing Full Recipe List (if desired) */}
      {/* ... */}
    </div>
  );
};

export default Home;
