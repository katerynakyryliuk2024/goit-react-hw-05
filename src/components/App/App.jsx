//import { useState } from "react";//
import css from "./App.module.css";
import Navigation from "../Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import MoviesPage from "../../pages/MoviesPage";
import NotFoundPage from "../../pages/NotFoundPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage";

export default function App() {
  return (
    <div className={css.container}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
