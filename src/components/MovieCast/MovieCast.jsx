//import css from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import { fetchMovieCast } from "../moviesService";
import { useParams } from "react-router-dom";

export default function MovieCast() {
  const [casts, setCasts] = useState();
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getCast() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMovieCast(movieId);
        console.log(data);
        setCasts(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getCast();
  }, [movieId]);
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>There was an error, please reload this page...</div>}(
      <ul>
        {casts.map((cast) => (
          <li key={cast.id}>{cast.name}</li>
        ))}
      </ul>
      );
    </>
  );
}
