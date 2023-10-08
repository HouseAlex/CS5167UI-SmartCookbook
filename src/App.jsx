// src/App.js

import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/shared/header/Header";
import SearchPage from "./components/search/SearchPage";
import NewRecipePage from "./components/new-recipe/NewRecipePage";
import MyRecipesPage from "./components/my-recipes/MyRecipesPage";

function App() {
  return (
    <div className="main">
      <div className='header'>
        <Header />
      </div>
      <BrowserRouter className='body'>
        <Routes>
          <Route path="/search" exact element={<SearchPage />} />
          <Route path="/new-recipe" exact element={<NewRecipePage />} />
          <Route path="/my-recipes" exact element={<MyRecipesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;