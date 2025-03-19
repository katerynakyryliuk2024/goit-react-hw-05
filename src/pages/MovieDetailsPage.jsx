import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesById } from "../components/moviesService";

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  useEffect(() => {
    async function getUser() {
      try {
        const data = await fetchMoviesById(movieId);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, [movieId]);
  return <></>;
}
