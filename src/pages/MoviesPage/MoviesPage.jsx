import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSearchMovie } from "../../components/moviesService";
// import css from './MoviesPage.module.css'
import MovieList from "../../components/MovieList/MovieList";
import { useDebounce } from "use-debounce";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  const [debouncedQuery] = useDebounce(query, 300);

  const changeSearchtext = (event) => {
    const nextParams = new URLSearchParams(searchParams);

    if (event.target.value !== "") {
      nextParams.set("query", event.target.value);
    } else {
      nextParams.delete("query");
    }

    setSearchParams(nextParams);
  };

  useEffect(() => {
    async function getSearchMovie() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchSearchMovie(debouncedQuery);
        console.log(data);
        setMovies(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getSearchMovie();
  }, [debouncedQuery]);

  return (
    <>
      <input type="text" value={query} onChange={changeSearchtext} />
      {isLoading && <div>Loading...</div>}
      {error && <div>There was an error, please reload this page...</div>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}
