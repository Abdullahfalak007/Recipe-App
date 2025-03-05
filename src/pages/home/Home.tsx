import React, { useEffect } from "react";
import { useFetchRecipes } from "../../hooks/useFetchRecipes";
import HeroSection from "../../components/heroSection/HeroSection";
import PopularRecipes from "../../components/popularRecipes/PopularRecipes";
import RecentRecipes from "../../components/recentRecipes/RecentRecipes";
import Loader from "../../components/loader/Loader";

const Home = () => {
  const { recipes, loading, error } = useFetchRecipes();

  if (loading) {
    return <Loader />;
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
