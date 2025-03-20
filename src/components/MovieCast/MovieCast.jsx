//import css from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import { fetchMovieCast } from "../moviesService";
import { useParams } from "react-router-dom";

export default function MovieCast() {
  const [casts, setCasts] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        const data = await fetchMovieCast(movieId);
        setCasts(data);
      } catch {}
    }
    getCast();
  }, [movieId]);
  return <></>;
}
