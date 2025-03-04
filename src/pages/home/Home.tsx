// src/pages/home/Home.tsx
import React, { useEffect } from "react";
import { useFetchRecipes } from "../../hooks/useFetchRecipes";
import HeroSection from "../../components/heroSection/HeroSection";
import PopularRecipes from "../../components/popularRecipes/PopularRecipes";
import RecentRecipes from "../../components/recentRecipes/RecentRecipes";

const Home = () => {
  const { recipes, loading, error } = useFetchRecipes();

  useEffect(() => {
    // Recipes are auto-fetched in useFetchRecipes
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
      <HeroSection />
      <PopularRecipes />
      <RecentRecipes />
    </div>
  );
};

export default Home;
