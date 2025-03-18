import { useEffect, useState } from "react";
import fetchMovies from "../components/moviesService";
import MovieList from "../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}
