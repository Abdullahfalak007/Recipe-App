import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SearchRecipe from "./pages/searchRecipe/SearchRecipe";
import RecipeDetail from "./pages/recipeDetail/RecipeDetail";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./pages/notFound/NotFound";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<SearchRecipe />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
